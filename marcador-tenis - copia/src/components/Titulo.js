// Titulo de una pagina
// Autor: Abner Maximiliano Lecona
import "../styles/titulo.css";

const Titulo = (props) => {
    return(
        <div className="titulo-tenis">
            {props.texto}
        </div>
    )
}

export default Titulo;