const path = require('path')
const express = require('express')
const app = express()

const static_path = path.join(__dirname, '../public')
console.log(static_path)

 app.use(express.static(static_path))

app.get('/' , (req, res) => {
    res.send('Welcome');
})

app.get('/home', (req, res) => {
    res.send('Welcome to home page');
})

app.get('/contact', (req, res) => {
    res.send('<h1>welcome to the contact page</h1>');
})

app.get('/brand', (req, res) => {
    res.send({ name: "livi" , price : '200rs'});
})

app.listen(8000 , () => {
    console.log('Server is running on port 8000');
})