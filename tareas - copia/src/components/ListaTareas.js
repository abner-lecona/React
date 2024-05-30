import { useState } from "react";
import "../styles/listatareas.css";
import CapturaTarea from "./CapturaTarea";
import Tarea from "./Tarea";

const ListaTareas = (props) => {
  // Estado guarda el arreglo de tareas
  const [arrTareas, setArrTareas] = useState([]);

  // Funcion para agregar nueva tarea
  const agregarTareaNueva = (tareaNueva) => {
    setArrTareas([tareaNueva, ...arrTareas]); // ... -> Obten una coleccion con cada elemetno del arreglo
  };

  // Funcion para completar tarea
  const completarTarea = (id) => {
    const arrTareasNuevo = arrTareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setArrTareas(arrTareasNuevo);
  };

  // Funcion para borrar una tarea
  const borrarTarea = (id) => {
    const arrTareasNuevo = arrTareas.filter((tarea) => tarea.id !== id);
    setArrTareas(arrTareasNuevo);
  };

  return (
    <div className="lista-tareas">
      <CapturaTarea onSubmit={agregarTareaNueva} />
      {arrTareas.length !== 0 ? ( // Map visita cada elemento del arreglo
        arrTareas.map((tarea) => {
          return (
            <Tarea
              tarea={tarea}
              key={tarea.id}
              completarTarea={completarTarea}
              borrarTarea={borrarTarea}
            />
          );
        })
      ) : (
        <div className="tarea-contenedor">No hay tareas</div>
      )}
    </div>
  );
};

export default ListaTareas;
