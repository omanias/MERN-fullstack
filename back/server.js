const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const mongoURI = 'mongodb+srv://*******:******@cluster0.3lmci0d.mongodb.net/?retryWrites=true&w=majority';
mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conexión exitosa a MongoDB'))
    .catch((err) => console.error(err));

const Usuario = require('./models/Usuario'); // Crea este modelo en el siguiente paso.

// Rutas para CRUD de usuarios
app.post('/usuarios', (req, res) => {

    const nuevoUsuario = new Usuario({
        nombre: req.body.nombre,
        correo: req.body.correo,
    });

    nuevoUsuario
        .save()
        .then((usuario) => {
            res.json(usuario);
            console.log('Usuario creado exitosamente');
        })
        .catch((err) => {
            res.status(500).json({ error: err.message });
        });
});

app.get('/usuarios', (req, res) => {

    //leer los usuarios de la base de datos
    Usuario.find()
        .then((usuarios) => {
            res.json(usuarios);
        })
        .catch((err) => {
            res.status(500).json({ error: err.message });
        });
});

app.get('/usuarios/:id', (req, res) => {
    // Obtiene un usuario por ID
});

app.put('/usuarios/:id', (req, res) => {
    // Actualiza un usuario por ID
});

app.delete('/usuarios/:id', (req, res) => {
    // Elimina un usuario por ID
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor Express corriendo en el puerto ${PORT}`));
