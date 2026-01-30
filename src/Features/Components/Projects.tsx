import { projectsInfo } from "@/Data"
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/Components/ui/tooltip";
import { SocialBadge } from "..";
import { Badge } from "@/Components/ui/badge"

const Projects = () => {
  return (
    <section className="mt-10 flex flex-col gap-8">
      <h2 className="text-4xl text-accent-foreground">Projects</h2>
      <div className="flex flex-col gap-8">
        {projectsInfo.map((project) => (
          <article key={project.name} className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="flex justify-center md:justify-start">
                <div className="p-1.5 rounded-2xl bg-gradient-to-br from-gray-200 via-gray-400 to-gray-600 dark:from-neutral-800 dark:via-neutral-700 dark:to-neutral-900 flex items-center justify-center">
                  <img
                    src={project.projectLogo}
                    alt={`${project.name} logo`}
                    className="w-80 rounded-xl object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-medium text-accent-foreground">{project.name}</h3>
                    <TooltipProvider delayDuration={0}>
                      <div className="flex items-center gap-2">
                        {project.projectLinks.map((link) => (
                          <Tooltip key={`${project.name}-${link.label}`}>
                            <TooltipTrigger asChild>
                              <div>
                                <SocialBadge
                                  icon={link.icon}
                                  link={link.link}
                                  label={link.label}
                                  size={18}
                                />
                              </div>
                            </TooltipTrigger>
                            <TooltipContent side="top" sideOffset={8} className="rounded-full px-4 py-2 noto-sans-mono-regular">
                              <p>{link.label}</p>
                            </TooltipContent>
                          </Tooltip>
                        ))}
                      </div>
                    </TooltipProvider>
                  </div>
                  <Badge className={`${project.statusClassName}`}>{project.status}</Badge>
                </div>
                <p className="text-md text-accent-foreground/60 max-w-2xl line-clamp-3">
                  {project.description}
                </p>
              </div>
            </div>
            <div className="w-full h-px bg-accent-foreground" />
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects