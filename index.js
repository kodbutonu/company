const express = require('express')
const app = express()
const Database = require('./server/database')

app.use(express.static('public'))
app.use(express.json())

app.post('/insert' ,(req,res) =>{
    Database.insertData(req.body)
    .then(() =>{
        res.sendStatus(200)
    })
    .catch(()=>{
        res.sendStatus(400)
    })
})

app.listen(5050,() =>{
    console.log('server working')
})