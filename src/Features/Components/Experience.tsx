import { useState } from "react";
import { experienceInfo } from "@/Data";
import SocialBadge from "./Badges/SocialBadge";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/Components/ui/tooltip";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/Components/ui/collapsible";
import { Button } from "@/Components/ui/button";
import { Link } from "react-router-dom";
import { LuChevronDown } from "react-icons/lu";
import { cn } from "@/Lib/utils";

const Experience = () => {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <section className="mt-10 flex flex-col gap-8">
      <h2 className="text-4xl text-accent-foreground">Experience</h2>
      <div className="flex flex-col gap-8">
        {experienceInfo.slice(0, 2).map((exp) => {
          const key = `${exp.name}-${exp.duration}`;
          const isOpen = openKey === key;
          return (
          <Collapsible key={key} open={isOpen} onOpenChange={(open) => setOpenKey(open ? key : null)} asChild>
            <article className="flex flex-col gap-6">
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
                      <CollapsibleTrigger asChild>
                        <button
                          className="md:hidden flex h-7 w-7 items-center justify-center rounded-lg transition-colors hover:bg-muted-foreground/20 hover:border hover:border-accent-foreground"
                          aria-label={isOpen ? "Hide details" : "Show duration and location"}
                        >
                          <LuChevronDown size={16} className={cn("transition-transform", isOpen && "rotate-180")} />
                        </button>
                      </CollapsibleTrigger>
                    </div>
                    <p className="text-sm text-accent-foreground/60">{exp.role}</p>
                  </div>
                </div>
                <div className="hidden md:block text-right text-md text-accent-foreground/60">
                  <p>{exp.duration}</p>
                  <p>{exp.location}</p>
                </div>
                <CollapsibleContent className="md:hidden">
                  <div className="text-left text-md text-accent-foreground/60 bg-accent-foreground/10 rounded-lg px-3 py-2">
                    <p>{exp.duration}</p>
                    <p>{exp.location}</p>
                  </div>
                </CollapsibleContent>
              </div>
              <ul className="ml-5 list-disc space-y-2 text-lg text-accent-foreground/60">
                {exp.description.slice(0, 2).map((point, idx) => (
                  <li key={`${exp.name}-point-${idx}`}>{point}</li>
                ))}
              </ul>
              <div className="w-full h-px bg-accent-foreground" />
            </article>
          </Collapsible>
          );
        })}
      </div>
      <Button
        variant="outline"
        asChild
        className="px-4 py-2 text-base border-accent-foreground/60 hover:bg-accent-foreground/10 flex items-center mx-auto -mt-4"
      >
        <Link to="/experience">
          View More
        </Link>
      </Button>
    </section>
  );
};

export default Experience;
