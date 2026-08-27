import { type TechBadgeProp, type CurrentlyLearningProp } from "@/Types/types";
import { SiGit, SiGithub, SiHtml5, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiRedux, SiNodedotjs, SiBun, SiExpress, SiFastify, SiHono, SiPython, SiFastapi, SiLangchain, SiDocker, SiRedis, SiPostgresql, SiMysql, SiMongodb, SiPostman, SiCplusplus, SiZod, SiGunicorn } from "react-icons/si";
import { RiBearSmileFill } from "react-icons/ri";
import { LuGitGraph, LuWorkflow, LuFeather } from "react-icons/lu";

const profilePictureUrl1: string = "https://res.cloudinary.com/cloudywork/image/upload/v1769279475/IMG_0383_pyswgn.png"
const profilePictureUrl2: string = "https://res.cloudinary.com/cloudywork/image/upload/v1769173439/Me_rvuttw.jpg"
const profilePictureUrl3: string = "https://res.cloudinary.com/cloudywork/image/upload/v1787831247/me_jfedru.png"
const profileBannerUrl: string = "https://res.cloudinary.com/cloudywork/image/upload/v1769270261/yodo_ezlexy.png"
const resumeUrl: string = "https://drive.google.com/file/d/1EvSux0i7vwUS5QvlBRzq3BPBbTGCZDw3/preview"

const techStack: TechBadgeProp[] = [
  { icon: SiNextdotjs, name: "Next.js", color: "text-foreground" },
  { icon: SiReact, name: "React", color: "text-cyan-400" },
  { icon: SiTypescript, name: "TypeScript", color: "text-blue-500" },
  { icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
  { icon: SiHtml5, name: "HTML5", color: "text-orange-500" },
  { icon: SiRedux, name: "Redux", color: "text-purple-500" },
  { icon: RiBearSmileFill, name: "Zustand", color: "text-amber-600" },
  { icon: SiNodedotjs, name: "Node.js", color: "text-green-500" },
  { icon: SiExpress, name: "Express", color: "text-foreground" },
  { icon: SiFastify, name: "Fastify", color: "text-foreground" },
  { icon: SiHono, name: "Hono", color: "text-orange-500" },
  { icon: LuFeather, name: "Elysia", color: "text-rose-400" },
  { icon: SiPython, name: "Python", color: "text-yellow-400" },
  { icon: SiFastapi, name: "FastAPI", color: "text-teal-400" },
  { icon: SiLangchain, name: "LangChain", color: "text-emerald-400" },
  { icon: LuGitGraph, name: "LangGraph", color: "text-sky-400" },
  { icon: LuWorkflow, name: "LangSmith", color: "text-teal-300" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-400" },
  { icon: SiMysql, name: "MySQL", color: "text-blue-400" },
  { icon: SiGit, name: "Git", color: "text-orange-600" },
  { icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
  { icon: SiRedis, name: "Redis", color: "text-red-500" },
  { icon: SiDocker, name: "Docker", color: "text-blue-400" },
  { icon: SiPostman, name: "Postman", color: "text-orange-500" },
  { icon: SiGithub, name: "GitHub", color: "text-foreground" },
  { icon: SiCplusplus, name: "C/C++", color: "text-blue-600" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-sky-400" },
  { icon: SiBun, name: "Bun", color: "text-orange-200" },
  { icon: SiZod, name: "Zod", color: "text-blue-500" },
  { icon: SiGunicorn, name: "Uvicorn", color: "text-purple-500" },
];

const currentlyLearning: CurrentlyLearningProp[] = [
  { title: "Backend Engineering", link: "https://www.youtube-nocookie.com/embed/videoseries?si=rROZPo8qBfQZfeC0&controls=0&list=PLui3EUkuMTPgZcV0QhQrOcwMPcBCcd_Q1" },
  { title: "Data Structures", link: "https://www.youtube-nocookie.com/embed/videoseries?si=8u9m__Una_MHGqoW&controls=0&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA" },
  { title: "System Design", link: "https://www.youtube-nocookie.com/embed/videoseries?si=M9YQ00Zb8-yETZxB&controls=0&list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX" },
  { title: "Database Engineering", link: "https://www.youtube-nocookie.com/embed/videoseries?si=cIup4mnYnT5LSDXj&controls=0&list=PLsdq-3Z1EPT2C-Da7Jscr7NptGcIZgQ2l" }
];

export { profilePictureUrl1, profileBannerUrl, resumeUrl, profilePictureUrl2, techStack, currentlyLearning, profilePictureUrl3 }