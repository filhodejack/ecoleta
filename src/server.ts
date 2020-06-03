import express, { response, request } from 'express'
import routes from './routes'

const app = express()
app.use(express.json())
app.use(routes)
app.listen(3333)
console.log('Server listening on: http://localhost:3333')