const db = require('./database/database.js')

const express = require('express')
const session = require('express-session')
const cors = require('cors')
const swaggerUI = require("swagger-ui-express")
const swaggerJSDoc = require("swagger-jsdoc")
const jwt = require('jsonwebtoken')
//importing routes
const { patientRouter } = require('./routes/patientRouter.js')
const { doctorRouter } = require('./routes/doctorRouter.js')
const { authRouter } = require('./routes/authRoutes.js')
const PORT = 5000;

const options = {
    definition : {
        openapi : "3.0.0",
        info : {
            title : "Hospital System API",
            version : "1.0.0",
            description : "WP project API"
        },
        servers : [
            {
                url : "http://locahost::5000"
            }
        ]
    },
    apis : ["./routes/*.js"]
}
const specs = swaggerJSDoc(options)
const app = express()
app.use(session({secret : "fingerprint" , resave : true , saveUninitialized : true}));
app.use(express.json())
app.use(cors())
app.use('/api-docs' , swaggerUI.serve , swaggerUI.setup(specs))
app.get('/' , (req,res) => {
    res.send('<h1>Hello world<h1/>')
})



app.use('/patient',patientRouter)
app.use('/doctor' , doctorRouter)
app.use('/auth' , authRouter)

app.listen(PORT , () => {
    console.log('Server is listening on port 5000')
})