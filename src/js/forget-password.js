const express = require('express')
const app = express()



app.post('/forget-password', (req, res) => {
    res.send("forget password")
})