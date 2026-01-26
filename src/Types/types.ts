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
  size?: number;
  className?: string;
}

interface ExperienceProp {
  name: string;
  companyLogo: string;
  companySocial?: SocialBadgeProp[];
  duration: string;
  role: string;
  location: string;
  techNTools: TechBadgeProp[];
  description: string[];
}

export type { ReactNodeProp, Theme, ThemeContextType, TechBadgeProp, SocialBadgeProp, ExperienceProp }