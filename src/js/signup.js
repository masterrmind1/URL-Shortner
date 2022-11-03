const express = require('express')
const app = express()


app.post('/sign-up', (req, res) => {
    res.send("sign-up")
})