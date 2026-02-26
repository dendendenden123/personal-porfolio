import { createContext, useContext,  type ReactNode } from "react";
import { useDarkMode } from "../hooks/useDarkMode";

interface ThemeContextType {
  theme: "light" | "dark";
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const themeData = useDarkMode(); 

  return (
    <ThemeContext.Provider value={themeData}>{children}</ThemeContext.Provider>
  );
};


export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
