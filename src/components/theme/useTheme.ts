import type { ThemeProviderState } from "@/types/theme-types";
import { useContext } from "react";
import { ThemeProviderContext } from "./ThemeContext";

export const useTheme = (): ThemeProviderState => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
