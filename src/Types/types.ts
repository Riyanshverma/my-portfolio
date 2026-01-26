import { type ReactNode, type ElementType } from "react";

interface ReactNodeProp {
  children: ReactNode;
}

type Theme = "light" | "dark"

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void
}

interface TechBadgeProp {
  icon: ElementType;
  name: string;
  color: string;
  className?: string;
}

interface SocialBadgeProp {
  icon: ElementType;
  link: string;
  label: string;
}

interface ExperienceProp {
  name: string
}



export type { ReactNodeProp, Theme, ThemeContextType, TechBadgeProp, SocialBadgeProp, ExperienceProp }