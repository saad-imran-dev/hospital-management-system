const express = require('express')
const db = require('../database/database')
const middleware = require('../middleware/middleware')
const patientRouter = express.Router()
patientRouter.use(middleware.patientMiddleware)

//get all patients
patientRouter.get('/' , async (_,res) => {

    const query = "SELECT * FROM PATIENT";
    const results = await db.dbQuery(query , [])
    res.status(200).send(results)

})
//api for patient taking appointment
patientRouter.post('/appointment/' , async (req,res) => {
    console.log(req.body)
    // req has following
    /*
    req = 
    {
        patient : 
            {
                first_name , last_name , contact
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
    if (!patient.first_name|| !patient.last_name || !patient.contact){
    res.status(404).send('Invalid patient details')
    return
    }else{
    // console.log(first_name , last_name , contact)
    let query = "SELECT patient_id FROM PATIENT WHERE FIRST_NAME = $1::TEXT AND LAST_NAME = $2::TEXT AND CONTACT = $3";
    let params = [patient.first_name,patient.last_name,patient.contact]
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
                console.log('Inside quert input')
                console.log(patientId[0].patient_id , doctorID[0].id, req.body.date)
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


module.exports = {patientRouter}