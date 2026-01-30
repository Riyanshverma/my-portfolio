import { SiTypescript, SiJavascript, SiBun, SiNodedotjs, SiExpress, SiPostgresql, SiReaddotcv, SiMaildotru, SiReact } from "react-icons/si";
import { TechBadge, SocialBadge } from "..";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/Components/ui/tooltip";
import { socialInfo } from "@/Data";
import { Button } from "@/Components/ui/button";
import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <section className="flex flex-col gap-6">
      <div className="w-full h-px bg-accent-foreground" />
      
      <div className="flex flex-wrap items-baseline gap-3 text-5xl text-left text-accent-foreground">
        <span>A</span>
        <span className="text-accent-foreground/40 tracking-tight">Full Stack Developer</span>
        <span className="text-lg">from Jaipur, Rajasthan.</span>
      </div>

      <div className="text-lg text-accent-foreground/60 max-w-4xl leading-loose">
        I build interactive web apps using
        <TechBadge icon={SiReact} name="React" color="text-cyan-400" />
        ,
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
      <div className="flex gap-6 mt-2">
        <Button
          variant="outline"
          asChild
          className="px-4 py-2 text-base border-accent-foreground/60 hover:bg-accent-foreground/10 flex items-center gap-2"
        >
          <Link to="/resume">
            <SiReaddotcv size={18} className="mr-1" />
            Resume / CV
          </Link>
        </Button>
        <Button
          asChild
          className="px-4 py-2 text-base hover:bg-accent-foreground/70 flex items-center gap-2"
        >
          <Link to="/contact">
            <SiMaildotru size={18} className="mr-1" />
            Get in touch
          </Link>
        </Button>
      </div>
    </section>
  )
}

export default Introduction


