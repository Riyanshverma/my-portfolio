import { createContext, useState, useContext, useEffect } from "react";
import type { Theme, ThemeContextType, ReactNodeProp } from "@/Types/types";

const ThemeContext = createContext<ThemeContextType>({ theme: "light", toggleTheme: () => {} })

const ThemeProvider = ({ children }: ReactNodeProp) => {
  const [theme, setTheme] = useState<Theme>("light")
  const toggleTheme = () => setTheme((prev) => prev==="dark" ? "light" : "dark")

  useEffect(() => {
    const root: HTMLElement = document.documentElement;
    root.classList.remove("light", "dark")
    root.classList.add(theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ ThemeContext.Provider>
  )
}

export default ThemeProvider

export const useTheme = () => {
  return useContext(ThemeContext)
}
