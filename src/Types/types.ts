import { type ReactNode } from "react";

interface ReactNodeProp {
  children: ReactNode;
}

type Theme = "light" | "dark"

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void
}



export type { ReactNodeProp, Theme, ThemeContextType }