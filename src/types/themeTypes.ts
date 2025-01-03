export type ThemeKey = "light" | "dark";

interface Theme {
  primary: string;
  primaryOutline: string;
  softBlack: string;
  softGray: string;
  softWhite: string;
  background: string;
}

export interface ThemeContextType {
  theme: string;
  currentTheme: Theme;
  setTheme: (theme: string) => void;
}

export interface ThemeProviderProps {
  children: React.ReactNode;
}
