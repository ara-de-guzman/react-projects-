import React, { useEffect, useState } from "react";
import Blog from "../components/Blog";
import { ThemeContext, themes } from "./context/theme-context";

function LightDark() {
  const [theme, setTheme] = useState(themes.light);

  const changeTheme = () => {
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
  };

  useEffect(() => {
    let docBody = document.body;
    switch (theme) {
      case themes.light:
        docBody.style.backgroundColor = "#fff";
        docBody.style.color = "#333";
        break;

      case themes.dark:
        docBody.style.backgroundColor = "#333";
        docBody.style.color = "#fff";
        break;
    }
  });

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <Blog />
    </ThemeContext.Provider>
  );
}

export default LightDark;
