"use client";

import { createContext, ReactNode, useState } from "react";

interface ThemeContextType {
  toggle: () => void;
  mode: string;
}

export const ThemeContext = createContext<ThemeContextType>({
  toggle: () => {},
  mode: "dark",
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState("dark");

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
