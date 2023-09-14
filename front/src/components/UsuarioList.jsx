// UsuarioList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UsuarioList = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/usuarios')
            .then((response) => setUsuarios(response.data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <h2>Lista de Usuarios</h2>
            <ul>
                {usuarios.map((usuario) => (
                    <li key={usuario._id}>
                        {usuario.nombre} - {usuario.correo}
                        <button>Editar</button>
                        <button>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UsuarioList;
