import React from "react";
import useThemeHook from "../hooks/useTheme";

const ThemeContext = React.createContext(null);

export default function ThemeProvider({ children }) {
    const value = useThemeHook();

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => React.useContext(ThemeContext);