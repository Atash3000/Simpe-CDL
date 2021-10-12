const express = require('express')
const dotenv = require('dotenv').config({ path: './config.env' })
const app = require('./app')
const mongoose = require('mongoose')

const DB = process.env.DATABASE

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to Mongo DB'))

process.on('unhandledRejection', (err) => console.log(err.name, err.message))

const PORT = process.env.PORT || 7070
app.listen(PORT, () => console.log('Server has started on port ' + PORT))
