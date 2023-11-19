const pg = require('pg')


const conString = "postgres://wdprnqya:N0YGHEAWhqEmAHxI6HYueA0VZ8Ni-Pms@tiny.db.elephantsql.com/wdprnqya" //Can be found in the Details page

const client = new pg.Client({
    connectionString : conString,
})

async function dbQuery(query, params) {
    if(!client._connected){
        await client.connect()
    }
    const results = await client.query(query , params)
    // await client.end()
    if (results){
        return results.rows
    }
    else{
        return null
    }
}

module.exports = {dbQuery}