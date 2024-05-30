import "../styles/listatareas.css";
import CapturaTarea from "./CapturaTarea";
import { ContextoTareas } from "./ProvedorTareas";
import Tarea from "./Tarea";
import { useContext } from "react";
const ListaTareas = (props) => {

  const [arrTareas, agregarTarea, completarTarea, borrarTarea] = useContext(ContextoTareas);

  return (
      <div className="lista-tareas">
        <CapturaTarea onSubmit={agregarTarea} />
        {/* Genera los renglones de las tareas */}
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
