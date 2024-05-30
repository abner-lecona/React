import { useEffect, useState } from "react";

const Timer = () => {
    const [cuenta, setCuenta] = useState(0)

    useEffect( () => {
        console.log("programa timer")
        setTimeout( () => {
            setCuenta(cuenta + 1);
        }, 1000);

        return () => {
            console.log("Hasta la vista, baby")
        }
    },
    [] // Aqui van las depdencias que hacen que s evuelva a ejecutar el useEffect, si lo quitamoms s volvera a mostrar
    );

    return <h1>Contador de eventos: {cuenta}</h1>
};

export default Timer;