const express = require('express')
const app = express()

const db = require('./db')

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.static('public'))

const contactos = require('./routes/contactos')
app.use(contactos)

app.get('/', (req, res)=>{
    res.send('Soy Sebastian y esto es una prueba')
})

app.listen(3000, ()=>{
    console.log('¡Server UP! en http://localhost:3000')
})