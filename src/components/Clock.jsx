import { useState, useEffect } from "react";
import { useWorldTimeAPI } from "../hooks/useTime";
import "./Clock.css";
export function Clock({ timezone }) {
  const { time, day, dayYear } = useWorldTimeAPI("America/Mexico_City");
  const [dark, setDark] = useState(false);
  const days = {
    0: "Domingo",
    1: "Lunes",
    2: "Martes",
    3: "Miércoles",
    4: "Jueves",
    5: "Viernes",
    6: "Sábado",
  };
  const actualDay = days[day];

  const fecha = new Date(dayYear);
  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1;
  const anio = fecha.getFullYear();

  const diaDelAnio = `${dia < 10 ? "0" + dia : dia}-${
    mes < 10 ? "0" + mes : mes
  }-${anio}`;
  const sliceTime = time.slice(11, 19);
  const hourTime = sliceTime.slice(0, 2);
  const darkmode = hourTime >= 21 || hourTime <= 9 ? true : false;

  useEffect(() => {
    setDark(darkmode);
  }, [darkmode]);

  return (
    <div className={dark ? "bColor dark" : "bColor"}>
      <div className={dark ? "clock clockDark" : "clock"}>
        <time>{diaDelAnio}</time>
        <span>{actualDay}</span>
        <span>
          <b>Time zone:</b> {timezone}
        </span>
        <h1>{sliceTime}</h1>
      </div>
    </div>
  );
}
