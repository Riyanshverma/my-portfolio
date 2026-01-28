import { type TechBadgeProp, type CurrentlyLearningProp } from "@/Types/types"
import { SiReact, SiTypescript, SiJavascript, SiBun, SiNodedotjs, SiExpress, SiTailwindcss, SiNpm, SiPostgresql, SiCplusplus, SiShadcnui, SiRadixui, SiRedux, SiMysql, SiGit, SiPostman, SiBootstrap, SiPerplexity, SiClaude, SiOpenai, SiFastapi, SiRazorpay, SiSupabase, SiAppwrite, SiPython, SiGooglegemini } from "react-icons/si";


const profilePictureUrl1: string = "https://res.cloudinary.com/cloudywork/image/upload/v1769279475/IMG_0383_pyswgn.png"
const profilePictureUrl2: string = "https://res.cloudinary.com/cloudywork/image/upload/v1769173439/Me_rvuttw.jpg"
const profileBannerUrl: string = "https://res.cloudinary.com/cloudywork/image/upload/v1769270261/yodo_ezlexy.png"
const resumeUrl: string = "https://drive.google.com/file/d/1EvSux0i7vwUS5QvlBRzq3BPBbTGCZDw3/preview"

const techStack: TechBadgeProp[] = [
  // { icon: SiNpm, name: "npm", color: "text-red-500" },
  { icon: SiGit, name: "Git", color: "text-orange-600" },
  { icon: SiBun, name: "Bun", color: "text-orange-200" },
  // { icon: SiCplusplus, name: "C++", color: "text-blue-700" },
  { icon: SiMysql, name: "MySQL", color: "text-blue-400" },
  { icon: SiRedux, name: "Redux", color: "text-purple-500" },
  { icon: SiReact, name: "React", color: "text-cyan-400" },
  // { icon: SiPython, name: "Python", color: "text-yellow-400" },
  // { icon: SiClaude, name: "Claude", color: "text-orange-400" },
  // { icon: SiGooglegemini, name: "Gemini", color: "text-blue-500" },
  // { icon: SiOpenai, name: "OpenAI", color: "text-accent-foreground" },
  { icon: SiNodedotjs, name: "Node.js", color: "text-green-500" },
  { icon: SiExpress, name: "Express", color: "text-foreground" },
  { icon: SiPostman, name: "Postman", color: "text-orange-500" },
  // { icon: SiAppwrite, name: "Appwrite", color: "text-pink-500" },
  // { icon: SiRazorpay, name: "Razorpay", color: "text-blue-900" },
  // { icon: SiSupabase, name: "Supabase", color: "text-green-500" },
  { icon: SiPerplexity, name: "Perplexity", color: "text-[#21808D]" },
  // { icon: SiFastapi, name: "FastAPI", color: "text-[#419285]" },
  // { icon: SiRadixui, name: "Radix UI", color: "text-accent-foreground" },
  { icon: SiShadcnui, name: "shadcn/ui", color: "text-accent-foreground" },
  { icon: SiTailwindcss, name: "Tailwind", color: "text-sky-400" },
  { icon: SiTypescript, name: "TypeScript", color: "text-blue-500" },
  { icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-400" },
  // { icon: SiBootstrap, name: "Bootstrap", color: "text-purple-700" },
];

const currentlyLearning: CurrentlyLearningProp[] = [
  { title: "Backend Engineering", link: "https://www.youtube-nocookie.com/embed/videoseries?si=rROZPo8qBfQZfeC0&controls=0&list=PLui3EUkuMTPgZcV0QhQrOcwMPcBCcd_Q1" },
  { title: "Data Structures", link: "https://www.youtube-nocookie.com/embed/videoseries?si=8u9m__Una_MHGqoW&controls=0&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA" },
  { title: "System Design", link: "https://www.youtube-nocookie.com/embed/videoseries?si=M9YQ00Zb8-yETZxB&controls=0&list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX" },
  { title: "Database Engineering", link: "https://www.youtube-nocookie.com/embed/videoseries?si=cIup4mnYnT5LSDXj&controls=0&list=PLsdq-3Z1EPT2C-Da7Jscr7NptGcIZgQ2l" }
];

export { profilePictureUrl1, profileBannerUrl, resumeUrl, profilePictureUrl2, techStack, currentlyLearning }