// db connection 
import 'dotenv/config'
import { createPool } from 'mysql2'

const connection = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    connectionLimit: 100,
    multipleStatements: true,
})


connection.on('error', (err) => {
    console.error(`Error connecting to MySQL: ${err.stack}`)
    process.exit(1)
})

connection.on('connection', (pool) =>{
    console.log(`Connected to MySQL as id ${pool.threadId}`)
});

export {
    connection
}