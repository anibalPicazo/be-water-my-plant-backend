const { Schema, mongoose, model } = require('mongoose');

const UsuarioSchema = Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String,
        unique: true
    },
    password: {
        required: true,
        type: String
    },
    roles: {
        required: false,
        type: [String]
    }
})
module.exports = model('Usuario', UsuarioSchema)