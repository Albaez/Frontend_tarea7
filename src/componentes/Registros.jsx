import axios from "axios";
import { useState } from "react";

export const Registro = () => {
    // Logica de la vista
    const url = 'http://localhost:4000/api/pelicula'
  
    const [pelicula_nombre, setPelicula_nombre] = useState();
    const [tipo_pelicula, setTipo_pelicula] = useState();
  
    const pelicula_nombreHandler = (event) => {
      const { name, value } = event.target;
      setPelicula_nombre(value);
    };
  
    const tipo_peliculaHandler = (event) => {
      const { name, value } = event.target;
      setTipo_pelicula(value);
    };
  
    const submitHandler = async () => {
      event.preventDefault();
      const data = {
        pelicula_nombre: pelicula_nombre,
        tipo_pelicula: tipo_pelicula,
      };
  
      try {
        // POST
        const postResult = await axios.post(url, data);
        console.log("Resultado POST:", postResult.data);
  
        // PUT
        const putResult = await axios.put(url, data);
        console.log("Resultado PUT:", putResult.data);
  
        // DELETE
        const deleteResult = await axios.delete(url, { data });
        console.log("Resultado DELETE:", deleteResult.data);
      } catch (error) {
        console.error("Error al enviar datos:", error.message);
      }

      console.log(result);
      console.log(resultData);
    };
   

    


    // Esto es lo que renderiza el Navegador
    return (
        <>
            <div className='container mt-5' >
                <form onSubmit={submitHandler}>
                    <fieldset>
                        <legend>Registro</legend>

                        <div className="form-group row">
                            <label  className="col-sm-2 col-form-label">Nombre de pelicula</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control-plaintext"
                                    name="pelicula_nombre"
                                    onChange={pelicula_nombreHandler}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Tipo de Pelicula</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control-plaintext" onChange={tipo_peliculaHandler} name="tipo_pelicula" placeholder="Ingrese tipo(Pelicula Principales,Pelicula Internacional, Pelicula Animacion,Pelicula Documental,Drama,Biografia)" />
                            </div>
                        </div>


                        <button type="submit" className="btn btn-primary w-100">Crear Registro</button>
                        <button type="submit" className="btn btn-primary w-100">Actualizar Registro</button>
                        <button type="submit" className="btn btn-primary w-100">Eliminar Registro</button>


                    </fieldset>
                </form>
            </div>
        </>
    )
}