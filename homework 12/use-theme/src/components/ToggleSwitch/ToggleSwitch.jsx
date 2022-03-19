import { useTheme } from "../../providers/ThemeProvider";
import "./ToggleSwitch.css"

function ToggleSwitch() {
  const { toggleTheme } = useTheme();

  return (
      <label className="switch">
        <input type="checkbox" onChange={toggleTheme}/>
        <span className="slider round"></span>
      </label>
  );
}

export default ToggleSwitch;
