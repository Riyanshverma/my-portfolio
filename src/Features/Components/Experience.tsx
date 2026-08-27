import { experienceInfo } from "@/Data";
import SocialBadge from "./Badges/SocialBadge";
import TechBadge from "./Badges/TechBadge";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/Components/ui/tooltip";
import { Button } from "@/Components/ui/button";
import { Link } from "react-router-dom";

const Experience = () => {
  return (
    <section className="mt-10 flex flex-col gap-8">
      <h2 className="text-4xl text-accent-foreground">Experience</h2>
      <div className="flex flex-col gap-8">
        {experienceInfo.map((exp) => (
          <article key={`${exp.name}-${exp.duration}`} className="flex flex-col gap-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div className="flex items-start gap-4">
                <img
                  src={exp.companyLogo}
                  alt={`${exp.name} logo`}
                  className="h-12 w-12 rounded-lg border border-accent-foreground bg-background object-contain"
                  loading="lazy"
                />
                <div className="flex flex-col">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-medium text-accent-foreground">{exp.name}</h3>
                    {exp.companySocial?.length ? (
                      <TooltipProvider delayDuration={0}>
                        <div className="flex items-center gap-2">
                          {exp.companySocial.map((s) => (
                            <Tooltip key={`${exp.name}-${s.label}`}>
                              <TooltipTrigger asChild>
                                <div>
                                  <SocialBadge
                                    icon={s.icon}
                                    link={s.link}
                                    label={s.label}
                                    size={18}
                                  />
                                </div>
                              </TooltipTrigger>
                              <TooltipContent side="top" sideOffset={8} className="rounded-full px-4 py-2 noto-sans-mono-regular">
                                <p>{s.label}</p>
                              </TooltipContent>
                            </Tooltip>
                          ))}
                        </div>
                      </TooltipProvider>
                    ) : null}
                  </div>
                  <p className="text-sm text-accent-foreground/60">{exp.role}</p>
                </div>
              </div>
              <div className="text-left md:text-right text-md text-accent-foreground/60">
                <p>{exp.duration}</p>
                <p>{exp.location}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-lg text-accent-foreground">Technologies & Tools</p>
              <div className="flex flex-wrap gap-2">
                {exp.techNTools.map((t) => (
                  <TechBadge
                    key={`${exp.name}-${t.name}`}
                    icon={t.icon}
                    name={t.name}
                    color={t.color}
                    className="mx-0 translate-y-0"
                  />
                ))}
              </div>
            </div>
            <ul className="ml-5 list-disc space-y-2 text-lg text-accent-foreground/60">
              {exp.description.map((point, idx) => (
                <li key={`${exp.name}-point-${idx}`}>{point}</li>
              ))}
            </ul>
            <div className="w-full h-px bg-accent-foreground" />
          </article>
        ))}
      </div>
      <Button
        variant="outline"
        asChild
        className="px-4 py-2 text-base border-accent-foreground/60 hover:bg-accent-foreground/10 flex items-center mx-auto -mt-4"
      >
        <Link to="/work">
          View More
        </Link>
      </Button>
    </section>
  );
};

export default Experience;
