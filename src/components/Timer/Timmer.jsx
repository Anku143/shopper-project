import React, { useEffect, useState } from "react";

const Timmer = ({ duration }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    // Check if there's a saved end time
    let savedEndTime = localStorage.getItem("timmer-end-time");

    // If not, set a new end time
    if (!savedEndTime) {
      const newEndTime = Date.now() + duration;
      localStorage.setItem("timmer-end-time", newEndTime);
      savedEndTime = newEndTime;
    }

    const endTime = parseInt(savedEndTime, 10);

    const interval = setInterval(() => {
      const remaining = endTime - Date.now();

      if (remaining <= 0) {
        clearInterval(interval);
        setTimeLeft(0);
        localStorage.removeItem("timmer-end-time");
      } else {
        setTimeLeft(remaining);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [duration]);

  const getFormateTime = (millisecond) => {
    const total_seconds = Math.floor(millisecond / 1000);
    const total_minutes = Math.floor(total_seconds / 60);
    const total_hours = Math.floor(total_minutes / 60);
    const seconds = total_seconds % 60;
    const minutes = total_minutes % 60;
    const hours = total_hours % 24;

    return (
      <div className="text-[35px] font-[500]">
        <span className="text-orange-500">{hours}</span> Hours{" "}
        <span className="text-orange-500">{minutes}</span> Mins{" "}
        <span className="text-orange-500">{seconds}</span> secs
      </div>
    );
  };

  return (
    <div>
      <p>{getFormateTime(timeLeft)}</p>
    </div>
  );
};

export default Timmer;
