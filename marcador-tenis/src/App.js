import { useState } from 'react';
import './App.css';
import Boton from './components/Boton';
import Puntos from './components/Puntos';
import Titulo from './components/Titulo';

function App() {
  // ESTADO
  const [puntosA, setPuntosA] = useState(0);  //PuntosA es una variable y setPuntosA es una funcion
  const [puntosB, setPuntosB] = useState(0);

  const onClickHandlerA = () => {
    setPuntosA(puntosA + 15);
  }

  const onClickHandlerB = () => {
    setPuntosB(puntosB + 15);
  }

  const onClickHandlerReiniciar = () => { 
    setPuntosA(0);
    setPuntosB(0);
  }

  return (
    <div className="App">
      <Titulo texto="Jugador A" />
      <Puntos puntos={puntosA} />
      <Titulo texto="Jugador B" />
      <Puntos puntos={puntosB} />

      <Boton texto="Gana punto A" onClick={onClickHandlerA}/>
      <Boton texto="Gana punto B" onClick={onClickHandlerB}/>
      <Boton texto="Reiniciar" onClick={onClickHandlerReiniciar}/>
    </div>
  );
}

export default App;
