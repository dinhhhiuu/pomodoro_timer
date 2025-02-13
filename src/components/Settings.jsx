import { useState, useEffect } from "react";
import "../App.css";
import "../layout_css/Setting_Layout.css";

const Settings = ({ onSave }) => {
  const defaultColors = {
    pomodoro: "#BA4949",
    short: "#388585",
    long: "#397097",
  };

  const defaultDurations = {
    pomodoro: 1500,
    short: 300,
    long: 900,
  };

  const [colors, setColors] = useState(defaultColors);
  const [durations, setDurations] = useState(defaultDurations);

  useEffect(() => {
    const savedColors = JSON.parse(localStorage.getItem("colors"));
    const savedDurations = JSON.parse(localStorage.getItem("durations"));
    if (savedColors) setColors(savedColors);
    if (savedDurations) setDurations(savedDurations);
  }, []);

  const handleColorChange = (mode, color) => {
    setColors(prev => ({ ...prev, [mode]: color }));
  };

  const handleDurationChange = (mode, value) => {
    setDurations(prev => ({ ...prev, [mode]: parseInt(value) * 60 }));
  };

  const saveSettings = () => {
    localStorage.setItem("colors", JSON.stringify(colors));
    localStorage.setItem("durations", JSON.stringify(durations));
    alert("Settings saved!");
    onSave(colors, durations);
  };

  const resetToDefault = () => {
    setColors(defaultColors);
    setDurations(defaultDurations);
    localStorage.setItem("colors", JSON.stringify(defaultColors));
    localStorage.setItem("durations", JSON.stringify(defaultDurations));
    onSave(defaultColors, defaultDurations);
    alert("Reset to default settings!");
  };

  return (
    <div className="settings-container">
      <h2>Setting Table</h2>

      <div className="settings-section">
        <h3>Change Colors</h3>
        {["pomodoro", "short", "long"].map(mode => (
          <div key={mode}>
            <label>{mode.charAt(0).toUpperCase() + mode.slice(1)} Mode:</label>
            <input
              type="color"
              value={colors[mode]}
              onChange={e => handleColorChange(mode, e.target.value)}
            />
          </div>

        ))}
      </div>

      <div className="settings-section">
        <h3>Set Timer Duration</h3>
        {["pomodoro", "short", "long"].map(mode => (
          <div key={mode}>
            <label>{mode.charAt(0).toUpperCase() + mode.slice(1)} (minutes):</label>
            <input
              type="number"
              min="1"
              value={durations[mode] / 60}
              onChange={e => handleDurationChange(mode, e.target.value)}
            />
          </div>
        ))}
      </div>

      <button onClick={saveSettings} className="save-button">Save</button>
      <button onClick={resetToDefault} className="reset-default-button">Reset</button>
    </div>
  );
};

export default Settings;
