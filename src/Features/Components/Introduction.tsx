import { SiTypescript, SiJavascript, SiBun, SiNodedotjs, SiExpress, SiPostgresql } from "react-icons/si";
import { TechBadge } from "..";

const Introduction = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="w-full h-px bg-accent-foreground" />

      {/* Heading */}
      <div className="flex flex-wrap items-baseline gap-3 text-5xl text-left text-accent-foreground">
        <span>A</span>
        <span className="text-accent-foreground/40 tracking-tight">Full Stack Developer</span>
        <span className="text-lg">from Jaipur, Rajasthan.</span>
      </div>

      <div className="text-lg text-accent-foreground/60 max-w-4xl leading-loose">
        I build interactive web apps using
        <TechBadge icon={SiTypescript} name="TypeScript" color="text-blue-500" />
        ,
        <TechBadge icon={SiJavascript} name="JavaScript" color="text-yellow-400" />
        and
        <TechBadge icon={SiBun} name="Bun" color="text-orange-200" />
        , powered by
        <TechBadge icon={SiNodedotjs} name="Node.js" color="text-green-500" />
        ,
        <TechBadge icon={SiExpress} name="Express" color="text-foreground" />
        and
        <TechBadge icon={SiPostgresql} name="PostgreSQL" color="text-blue-400" />
        . I focus on <span className="underline underline-offset-4">minimalist UI</span> design and am driven by a vision to create impactful solutions for the <span className="text-accent-foreground">Indian education system</span>.
      </div>
    </div>
  )
}

export default Introduction


