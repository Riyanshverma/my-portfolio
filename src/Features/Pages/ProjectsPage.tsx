import { projectsInfo } from "@/Data"

const ProjectsPage = () => {
  return (
    <div className="flex flex-col gap-6 mt-4">
      <div className="flex flex-wrap items-baseline gap-3 text-6xl text-left text-accent-foreground">
        <span className="tracking-tight">Projects</span>
        <span className="text-accent-foreground/60 text-lg">
          Some great texts to be inserted here...
        </span>
      </div>
      <div className="w-full h-px bg-accent-foreground" />
      <div className="w-full">
        Hello
      </div>
    </div>

  )
}

export default ProjectsPage