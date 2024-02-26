import { createContext, useState } from "react";

export interface ContextType {
  theme: string;
  changeTheme: () => void;
}

export const ThemeContext = createContext<ContextType>(null!);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme((theme) => {
      if (theme === "light") {
        return "dark";
      } else {
        return "light";
      }
    });
  };

  return <ThemeContext.Provider value={{ theme, changeTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
