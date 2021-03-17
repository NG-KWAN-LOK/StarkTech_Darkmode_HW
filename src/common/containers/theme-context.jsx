import React, { useState, createContext, useCallback } from "react";

const root = document.getElementsByTagName("html")[0];

export const ThemeContext = createContext({
  themeMode: "",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("light");
  const toggleTheme = useCallback(() => {
    setThemeMode((prevState) => {
      if (prevState === "light") {
        root.setAttribute("class", "dark-mode");
        return "dark";
      } else {
        root.setAttribute("class", "");
        return "light";
      }
    });
  });

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  return React.useContext(ThemeContext);
};

export default useTheme;
