import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const Form = () => {
  const navigate = useNavigate();

  const [dataForm, setDataForm] = useState({
    pelicula_nombre: '',
    tipo_pelicula: '',
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const url = 'http://localhost:4000/api/pelicula';

    try {
      // POST
      await axios.post(url, dataForm);
      console.log('Película agregada con éxito');

      // PUT
      await axios.put(url, dataForm);
      console.log('Película actualizada con éxito');

      // DELETE
      await axios.delete(url, { data: dataForm });
      console.log('Película eliminada con éxito');

      navigate('/src/componentes/Registros.jsx'); // Redirige a la página deseada
    } catch (error) {
      console.error('Error al realizar la operación:', error.message);
    }
  };

  return (
    <>
        <div className='container mt-5' >
            <form onSubmit={submitHandler} >
                <fieldset>
                    <legend>Formulario</legend>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Nombre de pelicula</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control-plaintext"
                                name="pelicula_nombre"
                                onChange={onChangeHandler}
                            />
                        </div>
                    </div>


                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Tipo de pelicula</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control-plaintext"
                                name="tipo_pelicula"
                                onChange={onChangeHandler} />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Crear Registro</button>
                    <button type="submit" className="btn btn-primary w-100">Actualizar Registro</button>
                    <button type="submit" className="btn btn-primary w-100">Eliminar Registro</button>

                </fieldset>
            </form>
            <div> {Form} </div>
        </div>
    </>
)
}