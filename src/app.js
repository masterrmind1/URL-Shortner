const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()
const publicDirectory = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialPath)
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
app.get('/home', (req, res) => {
    res.render('index')
})
app.post('/home/generate_URL', (req, res) => {
    res.send("generate url")
})
app.get('/dashboard', (req, res) => {
    res.send("dashboard")
})

app.listen(3000)