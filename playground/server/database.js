const {Pool} = require("pg");

const pool = new Pool({
    user: "postgres",
    password: "test123",
    host: "localhost",
    port: 5432,
    database: "verbsphere"
})

const createTblQry = `CREATE TABLE words (
    id serial PRIMARY KEY,
    username VARCHAR ( 50 ) UNIQUE NOT NULL,
    word VARCHAR ( 50 ) UNIQUE NOT NULL,
    description VARCHAR ( 250 ) UNIQUE NOT NULL);`

pool.query(createTblQry)
    .then((Response) => {
        console.log("Table Created")
        console.log(Response)
    })
    .catch((err) => {

        console.log(err)
    })

module.exports = pool;