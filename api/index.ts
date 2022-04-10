import express from 'express'
import { Pool } from 'pg'
import hello from './hello'

const app = express()

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT),
})

pool
  .query('SELECT * from messages')
  .then((res) => console.log(res))
  .catch((error) => console.error(error.stack))

app.use(hello)

if (require.main === module) {
  const port = 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}

module.exports = app
