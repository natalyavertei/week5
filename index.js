const express = require('express')
const bodyParser= require('body-parser')

const app = express()
const port = process.env.PORT || 8080

app.use(bodyParser.urlencoded())

app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.post('/',(req,res)=>{
    const username =req.body.username
    res.render('hello.ejs', {username: username})
})

app.listen(port, ()=>console.log(`listen port:${port}`))