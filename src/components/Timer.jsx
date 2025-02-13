import { useState, useEffect } from "react";
import "../App.css";

const Timer = ({ colors, durations, setNavColor, mode, setMode, time, setTime, running, setRunning }) => {

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime(prev => {
          if (prev > 0) {
            localStorage.setItem("time", prev - 1);
            return prev - 1;
          } else {
            setRunning(false);
            localStorage.setItem("running", "false");
            return 0;
          }
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [running]);

  useEffect(() => {
    localStorage.setItem("mode", mode);
    localStorage.setItem("time", time);
    localStorage.setItem("running", running.toString());
  }, [mode, time, running]);

  const resetTimer = () => {
    setTime(durations[mode]);
    setRunning(false);
    localStorage.setItem("time", durations[mode]);
    localStorage.setItem("running", "false");
  };

  const changeMode = (newMode) => {
    setMode(newMode);
    setTime(durations[newMode]);
    setRunning(false);
    setNavColor(colors[newMode]);

    localStorage.setItem("mode", newMode);
    localStorage.setItem("time", durations[newMode]);
    localStorage.setItem("running", "false");
  };

  return (
    <div className="container" style={{ backgroundColor: colors[mode] }}>
      <div className="timer-modes">
        <div className="group-button-title"> 
          {["pomodoro", "short", "long"].map(m => (
            <button
              key={m}
              onClick={() => changeMode(m)}
              className={`mode-button ${mode === m ? "active" : ""}`}
              style={{ color: colors[m] }}
            >
              {m.charAt(0).toUpperCase() + m.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <h1 className="timer-title">{mode.charAt(0).toUpperCase() + mode.slice(1)} Timer</h1>
      <div className="timer">{Math.floor(time / 60)}:{("0" + (time % 60)).slice(-2)}</div>
      <div className="timer-buttons">
        <button onClick={() => {
          setRunning(!running);
          localStorage.setItem("running", (!running).toString());
        }} className="start-button">
          {running ? "Pause" : "Start"}
        </button>
        <button onClick={resetTimer} className="reset-button">Reset</button>
      </div>
    </div>
  );
};

export default Timer;
