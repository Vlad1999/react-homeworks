import ThemeProvider from "./providers/ThemeProvider";
import ToggleSwitch from "./components/ToggleSwitch/ToggleSwitch";
import InputWithButton from "./components/InputWithButton/InputWithButton";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <ToggleSwitch />
        <InputWithButton />
      </ThemeProvider>
    </div>
  );
}

export default App;
