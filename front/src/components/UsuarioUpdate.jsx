// UsuarioUpdate.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UsuarioUpdate = (props) => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');

    useEffect(() => {
        // Aquí deberías hacer una solicitud al servidor para obtener los datos del usuario a editar.
        // Puedes usar props.match.params.id para obtener el ID del usuario de la URL.
        const usuarioId = props.match.params.id;

        axios.get(`http://localhost:5000/usuarios/${usuarioId}`)
            .then((response) => {
                const usuario = response.data;
                setNombre(usuario.nombre);
                setCorreo(usuario.correo);
            })
            .catch((error) => console.error(error));
    }, [props.match.params.id]);

    const handleNombreChange = (event) => setNombre(event.target.value);
    const handleCorreoChange = (event) => setCorreo(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        const usuarioActualizado = { nombre, correo };

        // Aquí deberías hacer una solicitud al servidor para actualizar el usuario.
        // Puedes usar props.match.params.id para obtener el ID del usuario de la URL.

        axios.put(`http://localhost:5000/usuarios/${props.match.params.id}`, usuarioActualizado)
            .then((response) => {
                console.log('Usuario actualizado:', response.data);
                // Redirigir a la lista de usuarios o mostrar un mensaje de éxito.
            })
            .catch((error) => console.error(error));
    };

    return (
        <div>
            <h2>Editar Usuario</h2>
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
                    <button type="submit">Guardar Cambios</button>
                </div>
            </form>
        </div>
    );
}

export default UsuarioUpdate;
