import { useTheme } from "../../providers/ThemeProvider";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./InputWithButton.css";

function InputWithButton() {
  const { theme } = useTheme();

  return (
    <div className="container">
      <input className={theme} type="text" />
      <button className={theme}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
    </div>
  );
}

export default InputWithButton;
