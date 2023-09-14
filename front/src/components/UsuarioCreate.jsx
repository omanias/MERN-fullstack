// UsuarioCreate.js
import React, { useState } from 'react';
import axios from 'axios';

const UsuarioCreate = () => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');

    const handleNombreChange = (event) => setNombre(event.target.value);
    const handleCorreoChange = (event) => setCorreo(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        const nuevoUsuario = { nombre, correo };

        axios.post('http://localhost:5000/usuarios', nuevoUsuario)
            .then((response) => {
                console.log('Usuario creado:', response.data);
                // Limpiar los campos o redirigir a la lista de usuarios
            })
            .catch((error) => console.error(error));
    };

    return (
        <div>
            <h2>Crear Usuario</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input type="text" value={nombre} onChange={handleNombreChange} />
                </div>
                <div>
                    <label>Correo:</label>
                    <input type="email" value={correo} onChange={handleCorreoChange} />
                </div>
                <div>
                    <button type="submit">Guardar</button>
                </div>
            </form>
        </div>
    );
}

export default UsuarioCreate;
