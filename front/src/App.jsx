import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UsuarioList from './components/UsuarioList';
import UsuarioCreate from './components/UsuarioCreate';
import UsuarioUpdate from './components/UsuarioUpdate';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<UsuarioList />} />
        <Route exact path="/crear" element={<UsuarioCreate />} />
        <Route exact path="/editar/:id" element={<UsuarioUpdate />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App

