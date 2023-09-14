const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre: String,
    correo: String,
    // Agrega más campos según tus necesidades
});

module.exports = mongoose.model('UsuarioMERN', usuarioSchema);
