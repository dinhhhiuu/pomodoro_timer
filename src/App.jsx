import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Timer from "./components/Timer";
import Settings from "./components/Settings";
import Introduction from "./components/Introduction";
import "./App.css";

function App() {
  const [colors, setColors] = useState({
    pomodoro: "#BA4949",
    short: "#388585",
    long: "#397097",
  });

  const [durations, setDurations] = useState({
    pomodoro: 1500,
    short: 300,
    long: 900,
  });

  const [navColor, setNavColor] = useState(colors.pomodoro);
  const [mode, setMode] = useState("pomodoro");
  const [time, setTime] = useState(1500);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    const savedColors = JSON.parse(localStorage.getItem("colors"));
    const savedDurations = JSON.parse(localStorage.getItem("durations"));
    const savedMode = localStorage.getItem("mode");
    const savedTime = localStorage.getItem("time");
    const savedRunning = localStorage.getItem("running");

    if (savedColors) {
      setColors(savedColors);
      setNavColor(savedColors[savedMode] || savedColors.pomodoro);
    }
    if (savedDurations) {
      setDurations(savedDurations);
    }
    if (savedMode) setMode(savedMode);
    if (savedTime) setTime(parseInt(savedTime, 10));
    if (savedRunning) setRunning(savedRunning === "true");
  }, []);

  const updateSettings = (newColors, newDurations) => {
    setColors(newColors);
    setDurations(newDurations);
    setNavColor(newColors[mode] || newColors.pomodoro);
  };

  return (
    <Router>
      <Navbar navColor={navColor} />
      <Routes>
        <Route path="/" element={<Timer 
          colors={colors} 
          durations={durations} 
          setNavColor={setNavColor} 
          mode={mode} setMode={setMode} 
          time={time} setTime={setTime} 
          running={running} setRunning={setRunning} 
        />} />
        <Route path="/settings" element={<Settings onSave={updateSettings} />} />
        <Route path="/introduction" element={<Introduction />} />
      </Routes>
    </Router>
  );
}

export default App;
