import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './MovieList';


const MovieForm = () => {
  const [peliculaNombre, setPeliculaNombre] = useState('');
  const [tipoPelicula, setTipoPelicula] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/pelicula/NombreDeLaPelicula');
        const data = response.data;
        setPeliculaNombre(data.pelicula_nombre);
        setTipoPelicula(data.tipo_pelicula);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleCreate = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/pelicula/NombreDeLaPelicula', {
        pelicula_nombre: peliculaNombre,
        tipo_pelicula: tipoPelicula,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put('http://localhost:4000/api/pelicula/NombreDeLaPelicula', {
        pelicula_nombre: peliculaNombre,
        tipo_pelicula: tipoPelicula,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete('http://localhost:4000/api/pelicula/NombreDeLaPelicula');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1 className="text-white">Formulario Peliculas</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="peliculaNombre" className="form-label text-white">
            Nombre de la Pelicula:
          </label>
          <input
            type="text"
            className="form-control"
            id="peliculaNombre"
            value={peliculaNombre}
            onChange={(e) => setPeliculaNombre(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tipoPelicula" className="form-label text-white">
            Tipo Película:
          </label>
          <input
            type="text"
            className="form-control"
            id="tipoPelicula"
            value={tipoPelicula}
            onChange={(e) => setTipoPelicula(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleCreate}>
          Crear
        </button>
        <button type="button" className="btn btn-primary" onClick={handleUpdate}>
          Actualizar
        </button>
        <button type="button" className="btn btn-danger" onClick={handleDelete}>
          Eliminar
        </button>
      </form>
    </div>
  );
};

export default MovieForm;
