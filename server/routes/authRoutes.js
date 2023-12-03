const express = require('express')
const jwt = require('jsonwebtoken')

const authRouter = express.Router()
const db = require('../database/database')


/**
 * @swagger
 * tags:
 *  name : auth
 *  description : API for logging in
 */


/**
 * @swagger
 * components:
 *  schemas:
 *      auth:
 *          type : object
 *          required:
 *              - email
 *              - password
 *          properties:
 *              email:
 *                  type : string
 *              password :
 *                  type : string
 */


/**
 * @swagger
 * /auth/admin:
 *  post:
 *      summary : Login for admin
 *      tags : [auth]
 *      requestBody : 
 *          required : true
 *          content :
 *              application/json:
 *                  schema:
 *                      $ref : '#/components/schemas/auth'
 *          responses:
 *              200:
 *                  description : Logged in successfully
 *              401:
 *                  description : Invalid credentials
 */

authRouter.post('/admin' , async (req,res) => {
    const email = req.body.email
    const password = req.body.password

    const query = "SELECT * FROM ADMIN_TABLE WHERE EMAIL = $1::TEXT AND PASS = $2::TEXT"
    const params = [email , password]
    try {
        const results = await db.dbQuery(query , params)
        if (results){
            if(results.length > 0){
                let accessToken = jwt.sign(
                    {data : password},
                    'adminSecret',
                    )
                req.session.authorization = {
                    accessToken,
                    email
                }
                res.status(200).send("Successfully Logged in");
            }
            else{
                res.status(401).send("Invalid credentials. Kindly retry");
            }
        }
    }
    catch(error){
        console.log(error)
        res.status(500).send('Server side error')
    }
})
/**
 * @swagger
 * /auth/opd:
 *  post:
 *      summary : Login for admin
 *      tags : [auth]
 *      requestBody : 
 *          required : true
 *          content :
 *              application/json:
 *                  schema:
 *                      $ref : '#/components/schemas/auth'
 *          responses:
 *              200:
 *                  description : Logged in successfully
 *              401:
 *                  description : Invalid credentials
 */

authRouter.post('/opd' , async (req,res) => {
    const email = req.body.email
    const password = req.body.password

    const query = "SELECT * FROM OPD WHERE EMAIL = $1::TEXT AND PASS = $2::TEXT";
    const params = [email,password]
    try {
        const results = await db.dbQuery(query , params)
        if (results){
            if(results.length > 0){
                let accessToken = jwt.sign(
                    {data : password},
                    'opdSecret',
                    )
                req.session.authorization = {
                    accessToken,
                    email
                }
                res.status(200).send("Successfully Logged in");
            }
            else{
                res.status(401).send("Invalid credentials. Kindly retry");
            }
        }
    }
    catch(error){
        console.log(error)
        res.status(500).send('Server side error')
    }
})
/**
 * @swagger
 * /auth/doctor:
 *  post:
 *      summary : Login for admin
 *      tags : [auth]
 *      requestBody : 
 *          required : true
 *          content :
 *              application/json:
 *                  schema:
 *                      $ref : '#/components/schemas/auth'
 *          responses:
 *              200:
 *                  description : Logged in successfully
 *              401:
 *                  description : Invalid credentials
 */

authRouter.post('/doctor' , async (req,res) => {
    const email = req.body.email
    const password = req.body.password

    const query = "SELECT * FROM DOCTOR WHERE EMAIL = $1::TEXT AND PASS = $2::TEXT";
    const params = [email,password]
    try {
        const results = await db.dbQuery(query , params)
        if (results){
            if(results.length > 0){
                let accessToken = jwt.sign(
                    {data : password},
                    'doctorSecret',
                    )
                req.session.authorization = {
                    accessToken,
                    email
                }
                res.status(200).send("Successfully Logged in");
            }
            else{
                res.status(401).send("Invalid credentials. Kindly retry");
            }
        }
    }
    catch(error){
        console.log(error)
        res.status(500).send('Server side error')
    }
    
})

//login patient
/**
 * @swagger
 * /auth/patient:
 *  post:
 *      summary : Login for admin
 *      tags : [auth]
 *      requestBody : 
 *          required : true
 *          content :
 *              application/json:
 *                  schema:
 *                      $ref : '#/components/schemas/auth'
 *          responses:
 *              200:
 *                  description : Logged in successfully
 *              401:
 *                  description : Invalid credentials
 */

authRouter.post('/patient' , async (req,res) => {
    const email = req.body.email
    const password = req.body.password

    const query = "SELECT * FROM PATIENT WHERE EMAIL = $1::TEXT AND PASS = $2::TEXT";
    const params = [email,password]
    try {
        const results = await db.dbQuery(query , params)
        if (results){
            if(results.length > 0){
                let accessToken = jwt.sign(
                    {data : password},
                    'patientSecret',{expiresIn:60*60}
                    )
                req.session.authorization = {
                    accessToken,
                    email
                }
                res.status(200).send("Successfully Logged in");
            }
            else{
                res.status(404).send("Invalid credentials. Kindly retry");
            }
        }
    }
    catch(error){
        console.log(error)
        res.status(500).send('Server side error')
    }
})





module.exports = {authRouter}