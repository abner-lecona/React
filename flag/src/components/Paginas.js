import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import "../styles/paginas.css";
import { useCallback, useEffect, useState } from "react";

export function NotFound() {
  const location = useLocation();
  return (
    <div>
      <h1>Esta pagina no se encontro</h1>
      <p>No se encontro {location.pathname}</p>
    </div>
  );
}

export function Home() {
  const [bandera, setBandera] = useState(""); 
  const navigate = useNavigate();

  const cambioEntradaHandler = (event) => {
    event.preventDefault();
    setBandera(event.target.value);
  };

  const handlerClick = () => {
    navigate('bandera', {state : {bandera}});
  };

  return (
    <div>
      <h1>Ejercicio de React</h1>

      <input
        type="text"
        placeholder="Ingresa el pais"
        value={bandera}
        onChange={cambioEntradaHandler}
      />

      <button className="button-pais" onClick={handlerClick}>
        <Link to="bandera">Click me</Link>
      </button>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export function Bandera() {
  const location = useLocation();
  const { bandera } = location.state;

  const [url, setUrl] = useState("");  
  const [data, setData] = useState(null);

  const descargar = useCallback(
    async () => {
      setUrl(`https://restcountries.com/v3.1/name/${bandera}`);
      const response = await fetch(url);
      const data = await response.json();
      console.log(data); 
      setData(data);
    }, [url, bandera])

  useEffect(() => {
    descargar();
  }, [descargar]);

  const dataBandera = data?.[0]?.flags?.png;

  return (
    <div>
      <br/>
      <img src={dataBandera} alt={bandera} />
    </div>
  );
}
