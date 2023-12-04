const express = require('express')
const middleware = require('../middleware/middleware')
const doctorRouter = express.Router()
const db = require('../database/database')


// doctorRouter.use(middleware.doctorMiddleware)


/**
 * @swagger
 * tags:
 *  name : doctor
 *  description : API for doctors
 */

/**
 * @swagger
 * components:
 *  schemas:
 *      Doctor:
 *          type: object
 *          properties:
 *              first_name:
 *                  type : string
 *              last_name:
 *                  type : string
 *              dept_name:
 *                  type : string
 *              email:
 *                  type : string
 *              password:
 *                  type : string
 */



//get data of all doctors without logging in
/**
 * @swagger
 * /doctor:
 *      get:
 *          summary : Get the list of all doctors
 *          tags : [doctor]
 *          responses:
 *              200:
 *                  description: List of all doctors
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type : object
 *                              properties:
 *                                  first_name:
 *                                      type : string
 *                                  last_name:
 *                                      type : string
 *                                  department_name:
 *                                      type : string
 *                              example:
 *                                  first_name : Ammar
 *                                  last_name : Siddiqui
 *                                  department_name : Neurology
 * 
 * 
 */
doctorRouter.get('/' , async (_,res) => {
    const query = "SELECT D.first_name,D.last_name,DEPT.DEPT_NAME FROM DOCTOR D, DEPARTMENT DEPT WHERE D.DEPT_ID=DEPT.DEPT_ID";
    const results = await db.dbQuery(query , [])

    if(results){
        res.status(200).send(results)
    }
    else{
        res.status(404).send('Server not responding. Kindly try later');
    }
})


/**
 * @swagger
 * /doctor/prescription:
 *  post:
 *      summary : Give patient the prescription
 *      tags : [doctor]
 *      requestBody:
 *          required : true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          patient:
 *                              type: object
 *                              properties: 
 *                                  first_name:
 *                                      type : string
 *                                  last_name:
 *                                      type : string
 *                              required:
 *                                  - first_name
 *                                  - last_name
 *                          date:
 *                              type : string
 *                          prescription:
 *                              type : string
 *          responses:
 *              '200' : 
 *                  description : 'Added successfully'
 *              '404' :
 *                  description : 'Invalid data entered'
 *              '402':
 *                  description : 'Not logged in'
 */
//doctor post prescription of patient
doctorRouter.post('/prescription' , async(req,res) => {
    /*
    req = {
        patient :{
            first_name,last_name
        },
        date,
        prescription
    }
    */
   const patient = req.body.patient
   if(!patient){
    res.status(404).send('Kindly enter patient details')
    return
   }
   if(!req.body.date || !req.body.prescription){
    res.status(404).send('Kindly enter date and prescription correctly')
    return
   }
   const query = "UPDATE APPOINTMENT SET PRESCRIPTION = $1::TEXT WHERE APPOINTMENT_DATE = $2::DATE AND PATIENT_ID = (SELECT PATIENT_ID FROM PATIENT WHERE FIRST_NAME = $3::TEXT AND LAST_NAME = $4)";
   const params = [req.body.prescription , req.body.date , patient.first_name, patient.last_name]

   const results = await db.dbQuery(query , params)
//    console.log(results)
   if(results !== null){
    res.status(200).send(`Prescription for ${patient.first_name} ${patient.last_name} added successfully`)
    return
   }
   else{
    res.status(404).send('Could not find an appointment for the given patient. Kindly check the details again');
    return
   }

})

//doctor can see his/her patients
/**
 * @swagger
 * /doctor/patients:
 *  get:
*       summary : Get all the patients of given doctor
*       tags : [doctor]
*       parameters:
*           - name : first_name
*             in : query
*             description : First name of doctor
*             required : true
*             type : string
*           - name : last_name
*             in : query
*             description : Last name of the doctor
*             required : true
*             type : true
*       responses : 
*           '200':
*               description : Record retrieved successfully
*           '404':
*               description : Invalid details of doctor
*           '403':
*               description : Doctor not logged in
 *
 */
doctorRouter.get('/patients' , async(req , res) => {
    const first_name = req.query.first_name
    const last_name = req.query.last_name

    const query = "SELECT P.FIRST_NAME,P.LAST_NAME FROM PATIENT P, DOCTOR D ,APPOINTMENT A WHERE D.FIRST_NAME = $1::TEXT AND D.LAST_NAME = $2::TEXT AND D.ID = A.DOCTOR_ID AND P.PATIENT_ID = A.PATIENT_ID;"
    const params = [first_name , last_name]

    const results = await db.dbQuery(query , params)

    if(results){
        res.status(200).send(results)
    }
    else{
        res.status(404).send('Invalid details of doctor')
    }
}) 

//doctor can see the previous prescription he has given to the patient using their cnic

/**
 * @swagger
 * /doctor/patients/{cnic}:
 *  get:
 *      summary : Get prescriptions of a patient provided his/her cnic
 *      tags : [doctor]
 *      parameters :
 *          - name : cnic
 *            in : path
 *            description : Cnic of the patient whose prescriptions are required
 *            required : true
 *            type : string
 *      responses :
 *          '200':
 *              description : Success
 *          '403':
 *              description : Not logged in
 *          '404':
 *              description : No previos prescription found;
 *        
 */

doctorRouter.get('/patients/:cnic' , async (req , res) => {
    const cnic = req.params.cnic

    const query = "SELECT A.PRESCRIPTION,A.APPOINTMENT_DATE,P.FIRST_NAME,P.LAST_NAME FROM APPOINTMENT A,PATIENT P WHERE P.CNIC = $1::TEXT AND P.PATIENT_ID = A.PATIENT_ID";
    const params = [cnic]

    const results = await db.dbQuery(query,params)
    if(results.length > 0){
        res.status(200).send(results)
        return
    }
    else{
        res.status(404).send({"message" : "Cannot find any previous appointment of given patient"})
        return
    }
})


/**
 * @swagger
 *  /doctor:
 *  post:
 *      summary : Register a doctor
 *      tags : [doctor]
 *      requestBody:
 *          required : true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Doctor'
 *      responses:
 *          200:
 *              description : Registered Successfully
 *          402:
 *              description : Invalid details entered.
 *          500:
 *              description : internal server error.
*/

doctorRouter.post('/' , async(req , res) => {
    const body = req.body
    if (!body.first_name || !body.last_name || !body.department_name || !body.email || !body.password){
        res.status(402).send('Invalid details entered. Kindly fill all fields')
        return
    }
    let query = "SELECT DEPT_ID FROM DEPARTMENT WHERE DEPT_NAME = $1::TEXT";
    let params = [body.department_name]
    const dept_id = await db.dbQuery(query , params)
    

    query = "INSERT INTO DOCTOR (FIRST_NAME,LAST_NAME,DEPT_ID,EMAIL,PASS) VALUES ($1::TEXT,$2::TEXT,$3::NUMBER,$4::TEXT,$5::TEXT)"
    params = [body.first_name,body.last_name,dept_id[0].dept_id,body.email,body.password]

    const results = await db.dbQuery(query , params)

    if(results !== null){
        res.status(200).send('Doctor added successfully')
    }
    else{
        res.status(500).send('Server Error')
    }

})
/**
 * @swagger
 * /doctor/appointments:
 *  get:
*       summary : Get all appointments of doctor on given date
*       tags : [doctor]
*       parameters:
*           - name : first_name
*             in : query
*             description : First name of doctor
*             required : true
*             type : string
*           - name : last_name
*             in : query
*             description : Last name of the doctor
*             required : true
*             type : string
*           - name : date
*             in : query
*             description : Date of appointment in format YYYY-MM-DD
*             required : true
*             type : string
*       responses : 
*           '200':
*               description : Record retrieved successfully
*           '404':
*               description : Invalid details of doctor
*           '403':
*               description : Doctor not logged in
 *
 */
doctorRouter.get('/appointments' , async (req , res) => {
    const first_name = req.query.first_name
    const last_name = req.query.last_name
    const date = req.query.date

    if(!first_name || !last_name || !date){
        res.status(404).send('Invalid query string')
        return
    }


    const query = "SELECT P.FIRST_NAME,P.LAST_NAME,A.TIME FROM APPOINTMENT A, DOCTOR D, PATIENT P WHERE A.APPOINTMENT_DATE = $1 AND A.DOCTOR_ID = D.ID AND D.FIRST_NAME = $2::TEXT AND D.LAST_NAME = $3::TEXT AND A.PATIENT_ID = P.PATIENT_ID";
    const params = [date , first_name , last_name]

    const results = await db.dbQuery(query , params)

    if(results){
        res.status(200).send(results)
    }
    else{
        res.status(400).send('Records not found');
    }
})

module.exports = {doctorRouter}