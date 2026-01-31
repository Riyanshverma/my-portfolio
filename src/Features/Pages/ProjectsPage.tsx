import { SlGlobe } from "react-icons/sl"
import { SiGithub } from "react-icons/si"
import { Button } from "@/Components/ui/button"
import { projectsInfo } from "@/Data"
import { Badge } from "@/Components/ui/badge"
import TechBadge from "../Components/Badges/TechBadge";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import { useState } from "react"
import { cn } from "@/Lib/utils"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/Components/ui/hover-card";

const ProjectsPage = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-6 mt-4">
      <div className="flex flex-wrap items-baseline gap-3 text-6xl text-left text-accent-foreground">
        <span className="tracking-tight">Projects</span>
        <span className="text-accent-foreground/60 text-lg">
          Explore my projects and real-world builds.
        </span>
      </div>
      <div className="h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-accent-foreground/60 to-transparent" />
      <div className="flex flex-col gap-8 w-full mt-4">
        {projectsInfo.map((project) => (
          <div key={project.name} className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-4xl text-accent-foreground">{project.name}</h3>
                <div className="flex gap-2">
                  <Button asChild variant="outline" className="flex items-center gap-2 px-2 py-0 border-accent-foreground/60 hover:bg-accent-foreground/10">
                    <a href={project.projectLinks[0].link} target="_blank" rel="noopener noreferrer">
                      <SlGlobe size={20} />
                      Live Demo
                    </a>
                  </Button>
                  <Button asChild className="flex items-center gap-2 px-2 hover:bg-accent-foreground/70">
                    <a href={project.projectLinks[1].link} target="_blank" rel="noopener noreferrer">
                      <SiGithub size={20} />
                      Source Code
                    </a>
                  </Button>
                </div>
              </div>
              {/* <Badge className={`${project.statusClassName} py-1 px-4`}>{project.status}</Badge> */}
            </div>
            <div className="p-3 rounded-2xl bg-gradient-to-br from-gray-200 via-gray-400 to-gray-600 dark:from-neutral-800 dark:via-neutral-700 dark:to-neutral-900 flex items-center justify-center w-full">
              <img
                src={project.projectLogo}
                alt={`${project.name} logo`}
                className="w-full h-72 rounded-xl object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative">
              <p className={cn("text-md text-accent-foreground/60", !isExpanded && "line-clamp-2")}>
                {project.description}
                {isExpanded && (
                  <button onClick={() => setIsExpanded(false)} className="inline-flex ml-1 items-center text-accent-foreground align-middle">
                    <LuChevronUp size={18} />
                  </button>
                )}
              </p>
              {!isExpanded && (
                <button
                  onClick={() => setIsExpanded(true)}
                  className="absolute bottom-0 right-0 text-accent-foreground flex items-center bg-background"
                >
                  ...<LuChevronDown size={18} className="ml-1" />
                </button>
              )}
            </div>
            <div className="w-full rounded-2xl border border-accent-foreground/30 flex flex-wrap justify-between items-center px-6 py-2.5 text-sm">
              <div className="flex flex-col">
                <span className="text-accent-foreground/60">Timeline</span>
                <span className="text-accent-foreground">{project.timeLine}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-accent-foreground/60">Role</span>
                <span className="text-accent-foreground">{project.role}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-accent-foreground/60">Team</span>
                <span className="text-accent-foreground">{project.team}</span>
              </div>
              <div className="flex flex-col mr-8">
                <span className="text-accent-foreground/60">Status</span>
                <Badge className={`${project.statusClassName}`}>{project.status}</Badge>
              </div>
            </div>
            <div>
              <p className="text-lg text-accent-foreground mb-2">Technologies</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.slice(0, 13).map((t) => (
                  <TechBadge
                    key={t.name}
                    icon={t.icon}
                    name={t.name}
                    color={t.color}
                  />
                ))}
                {project.techStack.length - 13 > 0 && (
                  <HoverCard openDelay={0} closeDelay={0}>
                    <HoverCardTrigger asChild>
                      <span className="ml-1 px-2 py-1 rounded-md bg-accent-foreground/10 font-medium text-accent-foreground text-sm translate-y-[3px] cursor-pointer">
                        +{project.techStack.length - 13}
                      </span>
                    </HoverCardTrigger>
                    <HoverCardContent
                      side="bottom"
                      className="flex w-full gap-2 bg-background border border-accent-foreground/30 rounded-lg px-1 py-2"
                    >
                      {project.techStack.slice(13).map((t) => (
                        <TechBadge
                          key={t.name}
                          icon={t.icon}
                          name={t.name}
                          color={t.color}
                          className="-mt-1.5"
                        />
                      ))}
                    </HoverCardContent>
                  </HoverCard>
                )}
              </div>
            </div>
            <ul className="ml-5 list-disc space-y-2 text-md text-accent-foreground">
              {project.features.map((point, idx) => (
                <li key={`${project.name}-feature-${idx}`}>{point}</li>
              ))}
            </ul>
            <div className="w-full h-px bg-accent-foreground" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectsPage