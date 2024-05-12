import React, { useState, useEffect } from "react";

export function useTime(timezone) {
  const [time, setTime] = useState("");
  const [day, setDay] = useState("");
  const [dayYear, setDayYear] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://worldtimeapi.org/api/timezone/${timezone}`);
        const data = await response.json();
        setTime(data.datetime);
        setDay(data.day_of_week);
        setDayYear(data.utc_datetime);
      } catch (error) {
        console.error("Error fetching time:", error);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 1000);

    return () => clearInterval(intervalId);
  }, [timezone]);

  return { time, day, dayYear };
}
