import { useEffect, useState } from "react";

export const useGetCount = (launchDate?: any) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const launchDateFormat = new Date(launchDate);
  let differenceDays = launchDateFormat.getTime() - currentDate.getTime();
  let totalDays = Math.ceil(differenceDays / (1000 * 3600 * 24));
  let seconds = Math.floor(differenceDays / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  seconds = seconds % 60;
  minutes = minutes % 60;

  hours = hours % 24;

  useEffect(() => {
    const time = setTimeout(() => setCurrentDate(new Date()), 1000);

    return () => {
      clearInterval(time);
    };
  }, [currentDate]);

  return {
    days: totalDays,
    sec: seconds,
    hours: hours,
    min: minutes,
  };
};
