// Subtitulo para la pagina
// AUTOR: Abner Maximiliano Lecona
import "../styles/subtitulo.css";

const Subtitulo = (props) => {
    return(
        <div className="subtitulo-tenis">
            {props.texto}
        </div>
    )
}

export default Subtitulo;