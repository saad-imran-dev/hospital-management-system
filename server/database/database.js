const pg = require('pg')


const conString = "postgres://wdprnqya:N0YGHEAWhqEmAHxI6HYueA0VZ8Ni-Pms@tiny.db.elephantsql.com/wdprnqya" //Can be found in the Details page

const client = new pg.Client({
    connectionString : conString,
})

async function dbQuery(query, params) {
    if(!client._connected){
        await client.connect()
    }
    try{
        const results = await client.query(query , params)
        console.log(results)
        // await client.end()
        if (results){
            return results.rows
        }

    }
        catch(error){
            console.log(error.stack)
            return null
        }

    
}
// async function testing(){
//     const query = "UPDATE APPOINTMENT SET PRESCRIPTION = 'Panadol, Postfix' WHERE APPOINTMENT_DATE = $1::DATE AND PATIENT_ID = (SELECT PATIENT_ID FROM PATIENT WHERE FIRST_NAME = $2::TEXT AND LAST_NAME = $3::TEXT)";
//     const params = ["2023-11-23","Muhammad" , "Saad"]
//     const results = await dbQuery(query , params)

//     console.log(results)
//     return
// }

// testing()
module.exports = {dbQuery}