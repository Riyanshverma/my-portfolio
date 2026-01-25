import { SiTypescript, SiJavascript, SiBun, SiNodedotjs, SiExpress, SiPostgresql } from "react-icons/si";
import { TechBadge, SocialBadge } from "..";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/Components/ui/tooltip";
import { socialInfo } from "@/Data";

const Introduction = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="w-full h-px bg-accent-foreground" />
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
      <TooltipProvider delayDuration={0}>
        <div className="flex flex-wrap items-center justify-between mt-2">
          {socialInfo.map(({ link, icon: Icon, label }) => (
            <Tooltip key={label}>
              <TooltipTrigger asChild>
                <div>
                  <SocialBadge icon={Icon} link={link} label={label}/>
                </div>
              </TooltipTrigger>
              <TooltipContent side="top" sideOffset={8} className="rounded-full px-4 py-2 noto-sans-mono-regular">
                <p>{label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>

      
    </div>
  )
}

export default Introduction


