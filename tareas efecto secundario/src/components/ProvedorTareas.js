import { createContext, useState } from "react";

export const ContextoTareas = createContext(); // Contexto 'global'

const ProveedorTareas = ({ children }) => {
  // Estado de las tareas (DATOS)
  const [arrTareas, setArrTareas] = useState([]);

  // Operaciones (MÉTODOS)
  const agregarTarea = (tareaNueva) => {
    setArrTareas([tareaNueva, ...arrTareas]);
  };

  //Funcion para completar la tarea
  const completarTarea = (id) => {
    const tareasActualizadas = arrTareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setArrTareas(tareasActualizadas);
  };

  //Funcion para borrar la tarea
  const borrarTarea = (id) => {
    const arrTareasNuevo = arrTareas.filter((tarea) => tarea.id !== id); //Si es true se queda, si es false se va
    setArrTareas(arrTareasNuevo);
  };

  return (
    <ContextoTareas.Provider value={[arrTareas, agregarTarea, completarTarea, borrarTarea, setArrTareas]}>
      {children}
    </ContextoTareas.Provider>
  );
};

export default ProveedorTareas;