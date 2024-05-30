import "./titulo.css"

const Titulo = (props) => {
    return (
        <h1 className="titulo">{props.texto}</h1> //con prop accedemos a los atributos
    );
};

export default Titulo;