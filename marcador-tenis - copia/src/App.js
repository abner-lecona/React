import { useState } from "react";
import "./App.css";
import Boton from "./components/Boton";
import Puntos from "./components/Puntos";
import Titulo from "./components/Titulo";
import Subtitulo from "./components/Subtitulo";

function App() {
  // ESTADO
  const [puntosA, setPuntosA] = useState(0); //PuntosA es una variable y setPuntosA es una funcion
  const [partidosA, setPartidosA] = useState(0);
  const [setsA, setSetsA] = useState(0);

  const [puntosB, setPuntosB] = useState(0);
  const [partidosB, setPartidosB] = useState(0);
  const [setsB, setSetsB] = useState(0);

  const onClickHandlerA = () => {
    setPuntosA(puntosA + 15);
    if (puntosA === 30) {
      setPuntosA(40);
    } else if (puntosA === 40) {
      if (puntosB === 40) {
        setPuntosA("AD");
        setPuntosB(" ");
      } else {
        setPuntosA(0);
        setPuntosB(0);
        setPartidosA(partidosA + 1);
        if (partidosA === 5) {
          setPuntosA(0);
          setPuntosB(0);
          setPartidosA(0);
          setPartidosB(0);
          setSetsA(setsA + 1);
        }
      }
    } else if (puntosA === "DEUCE" && puntosB === "DEUCE") {
      setPuntosA("AD");
      setPuntosB(" ")
    } else if (puntosB === "AD" && puntosA === " ") {
      setPuntosA("DEUCE");
      setPuntosB("DEUCE");
    } else if (puntosA === "AD" && puntosB === " ") {
      setPuntosA(0);
      setPuntosB(0);
      setPartidosA(partidosA + 1);
      if (partidosA === 5) {
        setPuntosA(0);
        setPuntosB(0);
        setPartidosA(0);
        setPartidosB(0);
        setSetsA(setsA + 1);
      }
    }
  };

  const onClickHandlerB = () => {
    setPuntosB(puntosB + 15);
    if (puntosB === 30) {
      setPuntosB(40);
    } else if (puntosB === 40) {
      if (puntosA === 40) {
        setPuntosB("AD");
        setPuntosA(" ");
      } else {
        setPuntosB(0);
        setPuntosA(0);
        setPartidosB(partidosB + 1);
        if (partidosB === 5) {
          setPuntosB(0);
          setPuntosA(0);
          setPartidosB(0);
          setPartidosA(0);
          setSetsB(setsB + 1);
        }
      }
    } else if (puntosB === "DEUCE" && puntosA === "DEUCE") {
      setPuntosB("AD");
      setPuntosA(" ");

    } else if (puntosA === "AD" && puntosB === " ") {
      setPuntosB("DEUCE");
      setPuntosA("DEUCE");
    } else if (puntosB === "AD" && puntosA === " ") {
      setPuntosB(0);
      setPuntosA(0);
      setPartidosB(partidosB + 1);
      if (partidosB === 5) {
        setPuntosB(0);
        setPuntosA(0);
        setPartidosB(0);
        setPartidosA(0);
        setSetsA(setsB + 1);
      }
    }
  };

  const onClickHandlerReiniciar = () => {
    setPuntosA(0);
    setPartidosA(0);
    setSetsA(0);

    setPuntosB(0);
    setPartidosB(0);
    setSetsB(0);
  };

  return (
    <div className="App">
      <div className="seccion-tablero">
        <div className="jugador">
          <Titulo texto="Jugador A" />
          <Subtitulo texto="Marcador del partido" />
          <Puntos puntos={puntosA} />
          <Subtitulo texto="Partidos ganados" />
          <Puntos puntos={partidosA} />
          <Subtitulo texto="Sets ganados" />
          <Puntos puntos={setsA} />
        </div>
        <div className="jugador">
          <Titulo texto="Jugador B" />
          <Subtitulo texto="Marcador del partido" />
          <Puntos puntos={puntosB} />
          <Subtitulo texto="Partidos ganados" />
          <Puntos puntos={partidosB} />
          <Subtitulo texto="Sets ganados" />
          <Puntos puntos={setsB} />
        </div>
      </div>
      <div className="seccion-botones">
        <Boton texto="Gana punto A" onClick={onClickHandlerA} />
        <Boton texto="Gana punto B" onClick={onClickHandlerB} />
        <Boton texto="Reiniciar" onClick={onClickHandlerReiniciar} />
      </div>
    </div>
  );
}

export default App;
