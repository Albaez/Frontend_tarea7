import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/pelicula/NombreDeLaPelicula');
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error.message);
      }
    };

    fetchMovies();
  }, []);

  const deleteMovie = async (pelicula_nombre) => {
    try {
      await axios.delete(`http://localhost:4000/api/pelicula/NombreDeLaPelicula/${pelicula_nombre}`);
      setMovies(movies.filter((movie) => movie.pelicula_nombre !== pelicula_nombre));
      console.log('Movie deleted successfully');
    } catch (error) {
      console.error('Error deleting movie:', error.message);
    }
  };

  return (
    <div>
      <h2>Movie List</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.pelicula_nombre}>
            {movie.pelicula_nombre} ({movie.tipo_pelicula})
            <button onClick={() => deleteMovie(movie.pelicula_nombre)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;