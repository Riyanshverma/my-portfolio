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

interface ContactFormProp {
  name: string;
  email: string;
  message: string;
}

interface ContactFormResponse {
  success: boolean;
  message: string;
  data?: object
}

interface CurrentlyLearningProp {
  title: string;
  link: string
}

interface SeoProp {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

type Status = "Completed" | "In Development" | "Active" | "Inactive" 
// In Development --> bg-blue-200 text-blue-600 dark:bg-blue-700 dark:text-blue-100
// Inactive --> bg-red-200 text-red-600 dark:bg-red-700 dark:text-red-100

interface ProjectProp {
  name: string;
  projectLogo: string;
  description: string;
  projectLinks: SocialBadgeProp[];
  techStack: TechBadgeProp[];
  status: Status;
  statusClassName?: string;
  timeLine: string;
  role: string;
  team: string;
  features: string[];
}

export type { ReactNodeProp, Theme, ThemeContextType, TechBadgeProp, SocialBadgeProp, ExperienceProp, ContactFormProp, ContactFormResponse, CurrentlyLearningProp, ProjectProp, SeoProp }