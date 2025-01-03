import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useColorScheme } from "react-native";
import { colors } from "../constants/colors";

type ThemeKey = "light" | "dark";

interface Theme {
  primary: string;
  primaryOutline: string;
  softBlack: string;
  softGray: string;
  softWhite: string;
  background: string;
}

interface ThemeContextType {
  theme: string;
  currentTheme: Theme;
  setTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>("default");
  const deviceTheme = useColorScheme();

  useEffect(() => {
    if (theme === "default") {
      setTheme(deviceTheme || "light");
    }
  }, [deviceTheme, theme]);

  const currentTheme = colors[theme as ThemeKey] || colors.dark;

  return (
    <ThemeContext.Provider value={{ theme, currentTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
