const jwt = require('jsonwebtoken')

function adminMiddleware(req,res,next) {
    if (req.session.authorization){
        const token = req.session.authorization['accessToken']
        jwt.verify(token, "adminSecret", (_,user) => {
            req.user = user;
            next()
        })
    }
    else{
        res.status(404).send({'message':'Invalid credentials. Kindly Login'})
    }

}
function doctorMiddleware(req,res,next) {
    if(req.path === '/'){
        next()
    }
    else if (req.session.authorization){
        const token = req.session.authorization['accessToken']
        jwt.verify(token, "doctorSecret", (_,user) => {
            req.user = user;
            next()
        })
    }
    else{
        res.status(404).send({'message':'Invalid credentials. Kindly Login'})
    }

}
function opdMiddleware(req,res,next) {
    if (req.session.authorization){
        const token = req.session.authorization['accessToken']
        jwt.verify(token, "opdSecret", (_,user) => {
            req.user = user;
            next()
        })
    }
    else{
        res.status(404).send({'message':'Invalid credentials. Kindly Login'})
    }

}
function patientMiddleware(req,res,next) {
    if (req.path === '/'){
        next()
    }
    else if (req.session.authorization){
        const token = req.session.authorization['accessToken']
        jwt.verify(token, "patientSecret", (_,user) => {
            req.user = user;
            next()
        })
    }
    else{
        res.status(404).send({'message':'Invalid credentials. Kindly Login'})
    }

}

module.exports = {
    adminMiddleware,
    doctorMiddleware,
    opdMiddleware,
    patientMiddleware
}