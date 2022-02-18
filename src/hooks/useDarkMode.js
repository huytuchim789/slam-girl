import { useState, useEffect, useCallback, createContext } from "react";
import { setLocalStorage, getItemLocalStorage } from "../utils/index";

export const ThemeContext = createContext();

const useDarkMode = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.setAttribute("theme", getItemLocalStorage("theme") || "dark");
    setTheme(getItemLocalStorage("theme") || "dark");
  }, [theme]);

  const setThemePage = useCallback(
    (key, data) => {
      setLocalStorage({ key, data });
      document.body.setAttribute(key, data);
      setTheme(data);
    },
    [setTheme]
  );

  return [theme, setThemePage];
};

export default useDarkMode;
