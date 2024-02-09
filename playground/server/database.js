const {Pool} = require("pg");

const pool = new Pool({
    user: "postgres",
    password: "test123",
    host: "localhost",
    port: 5432,
    database: "verbsphere"
})

const getWords = (request, response) => {
    
}

// const addWord = (request, response) => {
//     const username = request.body["username"]
//     const word = request.body["word"]
//     const description = request.body["description"]

//     console.log(word)
//     console.log(description)

//     const insertSTMT = `INSERT INTO words ( username, word, description ) VALUES ( '${username}', '${word}', '${description}' );`

//     pool.query(insertSTMT)
//         .then((response) => {
//             console.log("Data Saved")
//             console.log(response)
//         })
//         .catch((err) => {
//             console.log(err)
//         })

//     console.log(response.body)
//     response.send("Response Received: " + response.body) 
// }

module.exports = {
    getWords,
}