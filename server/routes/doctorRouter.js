const express = require('express')
const middleware = require('../middleware/middleware')
const doctorRouter = express.Router()
const db = require('../database/database')


doctorRouter.use(middleware.doctorMiddleware)
//get data of all doctors without logging in
doctorRouter.get('/' , async (_,res) => {
    const query = "SELECT * FROM DOCTOR";
    const results = await db.dbQuery(query , [])

    if(results){
        res.status(200).send(results)
    }
    else{
        res.status(404).send('Server not responding. Kindly try later');
    }
})

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

module.exports = {doctorRouter}