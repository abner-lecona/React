// Un renglon con fecha descripcion y cantidad de contagios
// Autor: Abner Maximiliano Lecona Nieves

import Fecha from "./Fecha";
import "./registro.css"

const Registro = ({registro}) => {
    return (
        <div className="registro">
            <Fecha fecha={registro.fecha}/>
            <div className="registro-descripcion">{registro.descripcion}</div>
            <div className="registro-cantidad">{registro.cantidad}</div>
        </div>
    );
};

export default Registro;