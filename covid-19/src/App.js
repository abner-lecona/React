import './App.css';
import Registro from './components/Registro';
import Titulo from './components/Titulo';
import logo from "./images/descargar.jpg"

function App() {
  return (
    <div className="App">
      <Titulo texto="COVID 19" />
      <Registro const registro={ { fecha: new Date(), descripcion: "Zona centro", cantidad: 250 } }/>
      <img src={logo} alt="Covid-19" />
    </div>
  );
}

// <Registro fecha={new Date()} descripcion="Contagios" cantidad="100"/>

export default App;
