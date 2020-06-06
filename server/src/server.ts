import cors from 'cors'
import express, { response, request } from 'express'
import path from 'path'
import routes from './routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.listen(3333)

console.log('###############################################')
console.log('#                                             #')
console.log('# Server listening on: http://localhost:3333/ #')
console.log('#                                             #')
console.log('###############################################')