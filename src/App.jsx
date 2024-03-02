import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Form } from './componentes/Form';
import { Registro } from './componentes/Registros';
import './style.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/src/componentes/Registros.jsx' element={<Registro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
