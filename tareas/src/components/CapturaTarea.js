import { useState } from "react";
import "../styles/capturatarea.css";
import { v4 as uuidv4 } from "uuid";

const CapturaTarea = (props) => {

  // Descripcion de la tarea, usando estado
  const [descripcion, setDescripcion] = useState("");

  // Handler de la entrada
  const cambioEntradaHander = (event) => {
    event.preventDefault();
    setDescripcion(event.target.value);
    console.log(descripcion)
  }

  // Handler del boton
  const agregarTarea = (evento) => {
    evento.preventDefault();
    console.log("Tarea: ", descripcion);
    const tareaNueva = {
      id: uuidv4(),
      descripcion: descripcion,
      completada: false,
    };
    // Agregar tareaNueva
    props.onSubmit(tareaNueva); // Se ejecuta la funcion
  };

  return (
    <form className="tarea-forma" onSubmit={agregarTarea}>
      <label htmlFor="descripcion">Nueva tarea:</label>
      <input
        className="tarea-input"
        type="taxt"
        placeholder="Escribe la descripcion de la tarea"
        name="descripcion"
        id="descripcion"
        onChange={cambioEntradaHander}
      />
      {/*Boton para registrar la tarea*/}
      <button className="tarea-boton" type="submit">
        Agregar tarea
      </button>
    </form>
  );
};

export default CapturaTarea;
