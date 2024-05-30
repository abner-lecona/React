// Aqui se encapsulan los datos que manejan las tareas
// Componente que provee el contexto para las tareas
// Author: Abner Maximiliano Lecona

import { useState } from "react";
import { createContext } from "react";

export const ContextoTareas = createContext(); // Contexto global

const ProvedorTareas = ({children}) => {
    // Estado de las tareas (DATOS)
    const [arrTareas, setArrTareas] = useState([]); // Arreglo de tareas

    // OPERACIONES (METODOS)
    const agregarTarea = (tareaNueva) => {
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
    <ContextoTareas.Provider value={[arrTareas, agregarTarea, completarTarea, borrarTarea]}> {/* Proporciona el valor del contexto a los componentes hijos */}
        {children}
    </ContextoTareas.Provider>
  )
}

export default ProvedorTareas