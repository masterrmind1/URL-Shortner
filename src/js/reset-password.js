const express = require('express')
const app = express()


app.post('/reset-password', (req, res) => {
    res.send("reset password")
})