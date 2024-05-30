import { MdOutlineDeleteForever } from "react-icons/md";
import "../styles/tareas.css";

const Tarea = ({ tarea, completarTarea, borrarTarea }) => {
  // Estilo dinamico
  const estiloTarea =
    "tarea-contenedor " + (tarea.completada ? "completada" : "");

  return (
    <div className={estiloTarea}>
      <div
        className="tarea-descripcion"
        onClick={() => 
          completarTarea(tarea.id)
        }
      >
        {tarea.descripcion}
      </div>
      <div className="tarea-icono-borrar" onClick={ () => {
        borrarTarea(tarea.id);
      } }>
        <MdOutlineDeleteForever />
      </div>
    </div>
  );
};

export default Tarea;
