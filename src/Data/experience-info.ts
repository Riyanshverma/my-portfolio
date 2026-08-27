import { type ExperienceProp } from "@/Types/types";
import { SlGlobe } from "react-icons/sl";
import { SiLinkedin, SiReact, SiTypescript, SiTailwindcss, SiShadcnui, SiRadixui, SiChartdotjs, SiNpm, SiVercel, SiTableau, SiKaggle, SiMysql, SiJquery, SiVega } from "react-icons/si";
import { FaJava } from "react-icons/fa";

const experienceInfo: ExperienceProp[] = [
  {
    name: "Dynamicore Strategies",
    companyLogo: "https://res.cloudinary.com/cloudywork/image/upload/v1769414530/dynamicore_xlayst.png",
    companySocial: [
      { link: "https://dynamico-invest-wise.vercel.app", icon: SlGlobe, label: "Website" },
      { link: "https://www.linkedin.com/company/dynamicore-strategies-private-limited", icon: SiLinkedin, label: "LinkedIn" },
    ],
    duration: "May 2025 - Jun 2025",
    role: "Front-End Developer Intern",
    location: "India (Remote)",
    techNTools: [
      { icon: SiReact, name: "React", color: "text-cyan-400" },
      { icon: SiTypescript, name: "TypeScript", color: "text-blue-500" },
      { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-sky-400" },
      { icon: SiShadcnui, name: "shadcn/ui", color: "text-accent-foreground" },
      { icon: SiRadixui, name: "Radix UI", color: "text-accent-foreground" },
      { icon: SiChartdotjs, name: "Chart.js", color: "text-pink-500" },
      { icon: SiNpm, name: "npm", color: "text-red-500" },
      { icon: SiVercel, name: "Vercel", color: "text-accent-foreground" },
    ],
    description: [
      "Built a fintech platform with real-time portfolio tracking, investment explorer, and live market data.",
      "Developed loan comparison, KYC integration, and interactive financial tools with a mobile-first, PWA-ready UI.",
      "Implemented gamified learning modules, AI-powered insights, and goal-based planning features.",
      "Ensured a seamless, responsive experience using shadcn/ui, Radix UI, and Tailwind CSS.",
    ],
  },
  {
    name: "Aunwesha Knowledge Tech",
    companyLogo: "https://res.cloudinary.com/cloudywork/image/upload/v1769414529/aunwesha_otm27c.png",
    companySocial: [
      { link: "https://www.aunwesha.com", icon: SlGlobe, label: "Website" },
      { link: "https://www.linkedin.com/company/aunwesha-academy", icon: SiLinkedin, label: "LinkedIn" },
    ],
    duration: "May 2024 - Jun 2024",
    role: "Data Visualization Intern",
    location: "Kolkata, India (On-site)",
    techNTools: [
      { icon: SiTableau, name: "Tableau", color: "text-blue-500" },
      { icon: SiKaggle, name: "Kaggle", color: "text-sky-400" },
      { icon: SiMysql, name: "MySQL", color: "text-blue-700" },
      { icon: FaJava, name: "Java", color: "text-orange-700" },
      { icon: SiJquery, name: "jQuery", color: "text-blue-400" },
      { icon: SiVega, name: "Vega-Lite", color: "text-pink-500" },
    ],
    description: [
      "Analyzed datasets and created interactive dashboards using Tableau and Kaggle data.",
      "Developed and generalized Java-based CRUD operations with MySQL and JDBC.",
      "Built web apps for data visualization using SMILE libraries, Vega-Lite, and jQuery/AJAX.",
      "Designed and implemented dashboards, bar/line/pie charts, and time-series visualizations.",
    ],
  },
];

export { experienceInfo };