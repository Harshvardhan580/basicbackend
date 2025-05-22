require('dotenv').config()
const express = require('express')  //similar to import express from "express"

const app = express() //app defined now is an instance variable of express 

const port = 3000 //server is listening the requests on this port 

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter' , (req,res) => {
    res.send('Harshvardhan.com')
})

app.get('/login' , (req,res) => {
    res.send('<h1>please login at twitter</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
