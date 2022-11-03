const express = require('express')
const path = require('path')
const app = express()
const publicDirectory = path.join(__dirname, '../public')
app.set('view engine', 'hbs')

app.use(express.static(publicDirectory))

app.get('', (req, res) => {
    res.render('index')
})
app.get('/login', (req, res) => {
    res.render('login')
})
app.get('/forget-password', (req, res) => {
    res.render('forget-password')
})

app.get('/reset-password', (req, res) => {
    res.render('reset-password')
})
app.get('/signup', (req, res) => {
    res.render('signup')
})
app.post('/home/generate_URL', (req, res) => {
    res.send("generate url")
})
app.get('/dashboard', (req, res) => {
    res.send("dashboard")
})

app.listen(3000)