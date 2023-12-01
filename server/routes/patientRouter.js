const express = require('express')
const db = require('../database/database')
const middleware = require('../middleware/middleware')
const patientRouter = express.Router()
// patientRouter.use(middleware.patientMiddleware)
/**
 * @swagger
 * tags:
 *  name : Patient
 *  description : API for Patients
 */
//get all patients

/**
 * @swagger
 * components:
 *  schemas:
 *      Patient:
 *          type : object
 *          properties:
 *              first_name:
 *                  type : string
 *              last_name :
 *                  type : string
 *              contact :
 *                  type : string
 *              cnic :
 *                  type : string
 */


/**
 * @swagger
 * /patient:
 *      get:
 *          summary : Get list of all patients
 *          tags : [Patient]
 *          responses : 
 *              '200':
 *                  description : Success
 *                  content : 
 *                      application/json:
 *                          schema:
 *                              type : array
 *                              items:
 *                                  $ref : '#/components/schemas/Patient'
 *              '500':
 *                  description : Server Error
 *              
 */
patientRouter.get('/' , async (_,res) => {

    const query = "SELECT * FROM PATIENT";
    try{
        const results = await db.dbQuery(query , [])
        res.status(200).send(results)

    }catch{
        res.status(500).send('Server Error')
    }

})

//api for patient taking appointment
/**
 * @swagger
 *  /patient/appointment/:
 *  post:
 *      summary : Patients get appointment
 *      tags : [Patient]
 *      requestBody:
 *              required : true
 *              content :
 *                  application/json:
 *                      schema:
 *                          type : object
 *                          properties:
 *                              patient :
 *                                  type : object
 *                                  properties:
 *                                      first_name:
 *                                          type : string
 *                                      last_name:
 *                                          type : string
 *                                      contact:
 *                                          type : string
 *                                      cnic:
 *                                          type : string
 *                              date :
 *                                  type : string
 *                              doctor:
 *                                  type : object
 *                                  properties: 
 *                                      first_name:
 *                                          type : string
 *                                      last_name:
 *                                          type : string
 *                              department:
 *                                  type : string
 *                              
 * 
 */

patientRouter.post('/appointment/' , async (req,res) => {
    console.log(req.body)
    // req has following
    /*
    req = 
    {
        patient : 
            {
                first_name , last_name , contact, cnic
            } , 
        date, 
        doctor : 
            {
                first_name , last_name
            } , 
        department
    }
    */
   if (!req.body.patient || !req.body.date || !req.body.doctor || !req.body.department){
       res.status(404).send('Invalid details. Kindly send complete details of the appointment')
       return
    }
    //getting patient id
    const patient = req.body.patient
    if (!patient.first_name|| !patient.last_name || !patient.contact || !patient.cnic){
    res.status(404).send('Invalid patient details')
    return
    }else{
    // console.log(first_name , last_name , contact)
    let query = "SELECT patient_id FROM PATIENT WHERE FIRST_NAME = $1::TEXT AND LAST_NAME = $2::TEXT AND CONTACT = $3 AND CNIC = $4::TEXT";
    let params = [patient.first_name,patient.last_name,patient.contact,patient.cnic]
    const patientId = await db.dbQuery(query , params)
    if(!patientId){
        res.status(404).send('Kindly login first to process with the appointment booking')
        return
    }
    // const {first_name , last_name} = req.body.doctor
    const doctor = req.body.doctor
    const department = req.body.department
    if(!doctor.first_name || !doctor.last_name){
        res.status(404).send('Invalid details could not process with the appointment')
        return
    }else{
        query = "SELECT id FROM DOCTOR D, DEPARTMENT DEP WHERE D.FIRST_NAME = $1::TEXT AND D.LAST_NAME = $2::TEXT AND DEP.DEPT_NAME = $3::TEXT AND D.DEPT_ID = DEP.DEPT_ID"
        params = [doctor.first_name , doctor.last_name , department]
        const doctorID = await db.dbQuery(query , params)
        if(!doctorID){
            res.status(404).send('Invalid details entered')
            return
        }
        else{
            if(req.body.date){
                
                query = "INSERT INTO APPOINTMENT (patient_id , appointment_date , prescription , doctor_id) VALUES ($1::int,$2::DATE,'',$3::int)"
                params = [patientId[0].patient_id , req.body.date , doctorID[0].id]
                const status = await db.dbQuery(query , params)

                if(status){
                    res.status(200).send('Successfully registered appointment')
                    return
                }
                else{
                    res.status(404).send('Could not complete request. Kindly try later')
                    return
                }
            }
            else{
                res.status(404).send('Date is not entered correctly');
                return
            }
        }
    }
   }
})

/**
 * @swagger
 * /patient/prescription/{cnic}:
 *  get:
 *      summary : Get prescriptions of a patient provided his/her cnic
 *      tags : [Patient]
 *      parameters :
 *          - name : cnic
 *            in : path
 *            description : Cnic of the patient whose prescriptions are required
 *            required : true
 *            type : string
 *      responses :
 *          '200':
 *              description : Success
 *              content:
 *                  application/json:
 *                      schema:
 *                          type : object
 *                          properties:
 *                              prescription:
 *                                  type : string
 *                              appointment_date:
 *                                  type : string
 *                              first_name:
 *                                  type : string
 *                                  description : First name of Doctor
 *                              last_name:
 *                                  type : string
 *                                  description : Last name of Doctor
 *          '403':
 *              description : Not logged in
 *          '404':
 *              description : No previos prescription found;
 *        
 */

patientRouter.get('/prescription/:cnic' , async(req , res)=> {
    const cnic = req.params.cnic

    const query = "SELECT A.PRESCRIPTION,A.APPOINTMENT_DATE,D.FIRST_NAME,D.LAST_NAME FROM APPOINTMENT A,PATIENT P, DOCTOR D WHERE P.CNIC = $1::TEXT AND P.PATIENT_ID = A.PATIENT_ID AND D.ID=A.DOCTOR_ID";
    const params = [cnic]

    const results = await db.dbQuery(query,params)
    if(results.length > 0){
        res.send(results)
    }
    else{
        res.send({"message" : "Cannot find any previous appointment of given patient"})
    }

}) 

/**
 * @swagger
 *  /patient:
 *  post:
 *      summary : Register a patient
 *      tags : [Patient]
 *      requestBody:
 *          required : true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Patient'
 *      responses:
 *          200:
 *              description : Registered Successfully
 *          401:
 *              description : Record already exists.
 */


patientRouter.post('/' , async(req , res) => {
    const body = req.body

    if (!body.first_name || !body.last_name || !body.contact || !body.cnic){
        res.status(404).send("Invalid details of the patient is entered")
        return
    }

    // check if the nic already exists
    let query = "SELECT * FROM PATIENT WHERE CNIC = $1::TEXT";
    let params = [body.cnic]

    let results = await db.dbQuery(query , params)

    if (results.length > 0){
        res.status(401).send('CNIC already exists')
        return
    }

    query = "INSERT INTO PATIENT (FIRST_NAME, LAST_NAME , CONTACT, CNIC) VALUES ($1::TEXT,$2::TEXT,$3::TEXT,$4::TEXT)";
    params = [body.first_name , body.last_name, body.contact, body.cnic]

    results = await db.dbQuery(query , params)

    res.status(200).send(results)

})

module.exports = {patientRouter}