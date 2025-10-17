export type Theme = "light" | "dark" | "system";

export type ThemeProviderProps = Readonly <{
    children: React.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
}>

export type ThemeProviderState = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}