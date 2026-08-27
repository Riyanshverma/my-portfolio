import { type ExperienceProp } from "@/Types/types";
import { SlGlobe } from "react-icons/sl";
import { 
  SiLinkedin, SiReact, SiTypescript, SiTailwindcss, SiShadcnui, SiRadixui, 
  SiChartdotjs, SiNpm, SiVercel, SiTableau, SiKaggle, SiMysql, SiJquery, 
  SiVega, SiZod, SiVite, SiSupabase, SiPython, SiFastapi, SiLangchain, 
  SiRedis, SiCockroachlabs, SiPerplexity, SiBun, SiRazorpay, SiNgrok, SiFramer,
  SiGunicorn 
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { LuGitGraph, LuWorkflow, LuBrain, LuFeather } from "react-icons/lu";
import { RiBearSmileFill } from "react-icons/ri";

const experienceInfo: ExperienceProp[] = [
  {
    name: "Dynamicore Strategies",
    companyLogo: "https://res.cloudinary.com/cloudywork/image/upload/v1769414530/dynamicore_xlayst.png",
    companySocial: [
      { link: "https://dynamico-invest-wise.vercel.app", icon: SlGlobe, label: "Website" },
      { link: "https://www.linkedin.com/company/dynamicore-strategies-private-limited", icon: SiLinkedin, label: "LinkedIn" },
    ],
    duration: "May 2026 - Present",
    role: "Full Stack Developer Intern",
    location: "Rajasthan (Hybrid)",
    techNTools: [
      { icon: SiPython, name: "Python", color: "text-yellow-400" },
      { icon: SiFastapi, name: "FastAPI", color: "text-teal-400" },
      { icon: SiLangchain, name: "LangChain", color: "text-emerald-400" },
      { icon: LuGitGraph, name: "LangGraph", color: "text-sky-400" },
      { icon: SiGunicorn, name: "Uvicorn", color: "text-purple-500" },
      { icon: LuBrain, name: "Fine-tuning", color: "text-pink-400" },
      { icon: SiPerplexity, name: "Perplexity", color: "text-cyan-500" },
      { icon: SiRedis, name: "Redis", color: "text-red-500" },
      { icon: SiCockroachlabs, name: "CockroachDB", color: "text-green-500" },
      { icon: LuWorkflow, name: "LangSmith", color: "text-teal-300" },
      { icon: SiReact, name: "React", color: "text-cyan-400" },
      { icon: RiBearSmileFill, name: "Zustand", color: "text-amber-600" },
      { icon: SiZod, name: "Zod", color: "text-blue-500" },
      { icon: SiPython, name: "Pydantic", color: "text-yellow-500" },
      { icon: FaDatabase, name: "Alembic", color: "text-gray-500" },
      { icon: SiVite, name: "Vite", color: "text-purple-500" },
      { icon: SiShadcnui, name: "shadcn/ui", color: "text-accent-foreground" },
      { icon: SiSupabase, name: "Supabase", color: "text-green-500" },
    ],
    description: [
      "Developed multi-agent orchestrations for a financial chatbot using FastAPI, LangGraph, LangChain, and Redis.",
      "Implemented Retrieval-Augmented Generation (RAG) and agentic memory for contextual conversations.",
      "Built specialist agents and a routing Supervisor for handling intents and compliance.",
      "Utilized LLMs, fine-tuning, and deterministic Python compliance gates.",
    ],
  },
  {
    name: "The Learner's Academy",
    companyLogo: "https://res.cloudinary.com/cloudywork/image/upload/v1787853671/school_logo_mwpgll.png",
    companySocial: [
      { link: "https://tlajpr.educationstack.com", icon: SlGlobe, label: "Website" },
      { link: "https://www.linkedin.com/company/thelearnersacademy/", icon: SiLinkedin, label: "LinkedIn" },
    ],
    duration: "Jan 2026 - May 2026",
    role: "Full Stack Engineer Intern",
    location: "Rajasthan (Remote)",
    techNTools: [
      { icon: SiReact, name: "React", color: "text-cyan-400" },
      { icon: RiBearSmileFill, name: "Zustand", color: "text-amber-600" },
      { icon: SiTailwindcss, name: "Tailwind", color: "text-sky-400" },
      { icon: SiShadcnui, name: "shadcn/ui", color: "text-accent-foreground" },
      { icon: SiFramer, name: "Framer Motion", color: "text-accent-foreground" },
      { icon: SiVite, name: "Vite", color: "text-purple-500" },
      { icon: SiBun, name: "Bun", color: "text-orange-200" },
      { icon: LuFeather, name: "Elysia", color: "text-rose-400" },
      { icon: SiSupabase, name: "Supabase", color: "text-green-500" },
      { icon: SiZod, name: "Zod", color: "text-blue-500" },
      { icon: SiRazorpay, name: "Razorpay", color: "text-blue-900" },
      { icon: SiNgrok, name: "ngrok", color: "text-blue-500" },
    ],
    description: [
      "Built a comprehensive school management system designed with a multi-identity RBAC architecture.",
      "Developed features for academic year scoping and attendance monitoring.",
      "Implemented detailed result publishing with historical term data.",
      "Built a parent dashboard for tracking child's progress and meetings.",
    ],
  },
  {
    name: "Dynamicore Strategies",
    companyLogo: "https://res.cloudinary.com/cloudywork/image/upload/v1769414530/dynamicore_xlayst.png",
    companySocial: [
      { link: "https://dynamico-invest-wise.vercel.app", icon: SlGlobe, label: "Website" },
      { link: "https://www.linkedin.com/company/dynamicore-strategies-private-limited", icon: SiLinkedin, label: "LinkedIn" },
    ],
    duration: "May 2025 - Jun 2025",
    role: "Front-End Developer Intern",
    location: "Rajasthan (Remote)",
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
    location: "Kolkata (On-site)",
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