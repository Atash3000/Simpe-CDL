const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config({ path: './config.env' })
const userRouter = require('./routes/userRouter')




const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))  
app.use(cors())
app.use('/api/v1/users', userRouter)


module.exports = app;