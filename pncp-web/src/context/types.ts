export type Theme = "dark" | "light" | "system";

export interface IThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

export type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};
