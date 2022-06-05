const express = require('express')
const app = express()
const jsondata = require('./sample.json')

app.use("/data",(req,res,next)=>{
    res.send(jsondata)
})

app.listen(3000,()=>{
    console.log("Connected to Node Application........");
})