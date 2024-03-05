import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieForm from './componentes/MovieForm.jsx';
import MovieList from './componentes/MovieList.jsx';
import './style.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [formData, setFormData] = useState({
    pelicula_nombre: '',
    tipo_pelicula: '',
  });

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/pelicula/NombreDeLaPelicula');
      setMovies(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/pelicula', formData);
      setMovies([...movies, response.data]);
      setFormData({ pelicula_nombre: '', tipo_pelicula: '' });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/pelicula/NombreDeLaPelicula/${id}`);
      setMovies(movies.filter((movie) => movie.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MovieForm />} />
        <Route path='/movies' element={<MovieList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;