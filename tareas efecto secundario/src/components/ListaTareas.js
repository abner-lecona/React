import { useCallback, useContext, useEffect, useState } from "react";
import CapturaTarea from "./CapturaTarea";
import Tarea from "./Tarea";
import { ContextoTareas } from "./ProvedorTareas";
import { v4 as uuidv4 } from "uuid";

// NUEVO contexto 'global' para las tareas
// export const ContextoTareas = useContext(ContextoTareas);

const ListaTarea = (props) => {
  //Estado guarda el arreglo de tareas
  // const [arrTareas, setArrTareas] = useState([]);
  const [arrTareas, agregarTarea, completarTarea, borrarTarea, setArrTareas] =
    useContext(ContextoTareas);

  const [url, setUrl] = useState("");

  const descargar = useCallback( 
    async () => {
    const response = await fetch(url);
    const data = await response.json();
    const arrNuevo = data.map((usuario) => {
          const tareaNueva = {
            id: uuidv4(),
            descripcion: usuario.name,
            completada: false,
          };
          return tareaNueva;
        });
        setArrTareas(arrNuevo);
      }, [url, setArrTareas]);

  //UseEffect() para descargar las tareas
  useEffect(() => {
    descargar();
  }, [descargar]);

  return (
    <div className="lista-tarea">
      <button
        onClick={() => setUrl("https://jsonplaceholder.typicode.com/users")}
      >
        TODOS
      </button>
      <button
        onClick={() =>
          setUrl("https://jsonplaceholder.typicode.com/users?id=7")
        }
      >
        Solo id=7
      </button>
      <CapturaTarea onSubmit={agregarTarea} />
      {arrTareas.length !== 0 ? (
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
        <div className="tarea-contenedor">No hay tareas hasta el momento</div>
      )}
    </div>
  ); //Es para que no quite el error por ID unico. Si le damos ID el sistema sabe si rendereea o no
};

export default ListaTarea;
