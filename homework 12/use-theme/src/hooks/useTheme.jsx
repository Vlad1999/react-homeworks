import { useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme !== "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return { theme, toggleTheme };
};

export default useTheme;
