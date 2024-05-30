import { useRef, useState } from "react";
import "../styles/capturatarea.css";
import { v4 as uuidv4 } from "uuid";
import { CgAdd } from "react-icons/cg";

const CapturaTarea = (props) => {
  // Referencia al input "descripcion"
  const refDescripcion = useRef();

  // Estado para controlar la visibilidad del formulario
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  // Handler del boton del fomrulario
  const mostrarFormularioHandler = () => {
    setMostrarFormulario(true);
  };

  const quitarFormularioHandler = () => {
    setMostrarFormulario(false);
  };

  // Handler del boton
  const agregarTarea = (evento) => {
    evento.preventDefault();
    // refDescripcion.current.value es el valor de lo que mando el input
    if (refDescripcion.current.value.length === 0 || /^\s+$/.test(refDescripcion.current.value)) { 
      // el .current hace referencia al input
      // /^\s+$/ verifica si la cadena tiene espacios en blanco
      // test() verifica si la cadena cumple con la expresion regular
      return;
    } else {
      console.log("Tarea: ", refDescripcion.current.value); 
      const tareaNueva = {
        id: uuidv4(),
        descripcion: refDescripcion.current.value,
        completada: false,
      };
      // Agregar tareaNueva
      props.onSubmit(tareaNueva); // Se ejecuta la funcion
      // Ocultar formulario después de agregar la tarea
      setMostrarFormulario(false);
    }
  };

  return (
    <div className="formulario">
      {mostrarFormulario ? (
        <form className="tarea-forma" onSubmit={agregarTarea}>
          <label htmlFor="descripcion">Nueva tarea:</label>
          <input
            className="tarea-input"
            type="text"
            placeholder="Escribe la descripción de la tarea"
            name="descripcion"
            id="descripcion"
            ref={refDescripcion}
          />
          <button className="tarea-boton" type="submit">
            Agregar tarea
          </button>
          <button className="tarea-boton" onClick={quitarFormularioHandler}>
            Cancelar
          </button>
        </form>
      ) : (
        <button className="ocultar-tarea" onClick={mostrarFormularioHandler}>
          <CgAdd />
        </button>
      )}
    </div>
  );
};

export default CapturaTarea;
