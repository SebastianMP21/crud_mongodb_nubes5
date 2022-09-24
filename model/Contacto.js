const mongoose = require('mongoose')
const Schema = mongoose.Schema
const contactoSchema = new Schema ({
    nombre: String,
    apellido: String,
    email: String,
    numero: Number
}, {versionKey:false})
module.exports = mongoose.model('contactos', contactoSchema)
