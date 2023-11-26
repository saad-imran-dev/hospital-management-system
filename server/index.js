const db = require('./database/database.js')

const express = require('express')
const session = require('express-session')

//importing routes

const patientRoute = require('./routes/patientRouter.js')

const jwt = require('jsonwebtoken')
const { doctorRouter } = require('./routes/doctorRouter.js')

const PORT = 5000;

const app = express()
app.use(session({secret : "fingerprint" , resave : true , saveUninitialized : true}));
app.use(express.json())


app.get('/' , (req,res) => {
    res.send('<h1>Hello world<h1/>')
})

//login admin
app.post('/auth/admin' , async (req,res) => {
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

//login opd
app.post('/auth/opd' , async (req,res) => {
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

//login doctor
app.post('/auth/doctor' , async (req,res) => {
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
app.post('/auth/patient' , async (req,res) => {
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

app.use('/patient',patientRoute.patientRouter)
app.use('/doctor' , doctorRouter)

app.listen(PORT , () => {
    console.log('Server is listening on port 5000')
})