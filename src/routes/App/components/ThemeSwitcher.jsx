import React from "react";
import useTheme from "../../../common/containers/theme-context";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const ThemeSwitcher = () => {
  const { themeMode, toggleTheme } = useTheme();
  return (
    <button
      className='app__dark-mode-btn icon level-right'
      onClick={toggleTheme}
    >
      <FontAwesomeIcon
        icon={themeMode === "dark" ? faSun : faMoon}
        color={themeMode === "dark" ? "#FFA500" : ""}
      />
    </button>
  );
};

export default ThemeSwitcher;
