import React from "react";
import Timmer from "./Timmer";

const Timer = () => {
  return (
    <div>
      <Timmer duration={1 * 24 * 60 * 60 * 1000} />
    </div>
  );
};

export default Timer;
