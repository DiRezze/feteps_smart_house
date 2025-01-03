import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  ThemeContextType,
  ThemeProviderProps,
  ThemeKey,
} from "../types/themeTypes";
import { useColorScheme } from "react-native";
import { colors } from "../constants/colors";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

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
