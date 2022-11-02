import React from "react";
import { useState } from "react";

function Display() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [inter, setInter] = useState();

  let start = () => {
    run();
    setInter(setInterval(run, 10));
  };

  var updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedMs = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };

  const stop = () => {
    clearInterval(inter);
  };

  const reset = () => {
    clearInterval(inter);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };

  return (
    <>
      <div className="display">
        <span className="count">{time.h}</span>
        <span className="count">{time.m}</span>
        <span className="count">{time.s} </span>
        <span className="count">{time.ms} </span>
      </div>
      <div className="btn">
        <button id="btn" onClick={start}>
          start
        </button>
        <button id="btn" onClick={stop}>
          stop
        </button>
        <button id="btn" onClick={reset}>
          reset
        </button>
      </div>
    </>
  );
}

export default Display;
