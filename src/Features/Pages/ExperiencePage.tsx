import { Button } from "@/Components/ui/button";
import { experienceInfo } from "@/Data";
import TechBadge from "../Components/Badges/TechBadge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/Components/ui/hover-card";
import Seo from "../Components/Seo";

const ExperiencePage = () => {
  return (
    <div className="flex flex-col gap-6 mt-4">
      <Seo
        title="Experience | Riyansh Verma"
        description="Professional work experience and career journey of Riyansh Verma, Full Stack Developer specializing in React, Node.js and AI-powered applications."
        path="/experience"
      />
      {/* Page Header */}
      <div className="flex flex-wrap items-baseline gap-3 text-6xl text-left text-accent-foreground">
        <span className="tracking-tight">Experience</span>
        <span className="text-accent-foreground/60 text-lg">
          My professional journey.
        </span>
      </div>

      <div className="h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-accent-foreground/60 to-transparent" />
      <div className="flex flex-col gap-8 w-full mt-4">
        {experienceInfo.map((exp) => (
          <div key={`${exp.name}-${exp.duration}`} className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-3">
                {exp.companyLogo && (
                  <img
                  src={exp.companyLogo}
                  alt={`${exp.name} logo`}
                  className="h-12 w-12 rounded-lg border border-accent-foreground bg-background object-contain"
                  loading="lazy"
                />
                )}
                <h3 className="text-4xl text-accent-foreground">{exp.name}</h3>
                {exp.companySocial && exp.companySocial.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {exp.companySocial.map((social) => {
                      const Icon = social.icon;
                      return (
                        <Button
                          key={`${exp.name}-${social.label}`}
                          asChild
                          variant="outline"
                          className="flex items-center gap-2 px-2.5 py-0 border-accent-foreground/60 hover:bg-accent-foreground/10"
                        >
                          <a href={social.link} target="_blank" rel="noopener noreferrer">
                            <Icon size={18} />
                            {social.label}
                          </a>
                        </Button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            <div className="w-full rounded-2xl border border-accent-foreground/30 flex flex-wrap justify-between items-center px-6 py-2.5 text-sm bg-accent-foreground/10">
              <div className="flex flex-col">
                <span className="text-accent-foreground/60">Duration</span>
                <span className="text-accent-foreground font-medium">{exp.duration}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-accent-foreground/60">Role</span>
                <span className="text-accent-foreground font-medium">{exp.role}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-accent-foreground/60">Location</span>
                <span className="text-accent-foreground font-medium">{exp.location}</span>
              </div>
            </div>

            <div>
              <p className="text-lg text-accent-foreground mb-2">Technologies & Tools</p>
              <div className="flex flex-wrap gap-2">
                {exp.techNTools.slice(0, 13).map((t) => (
                  <TechBadge
                    key={`${exp.name}-${t.name}`}
                    icon={t.icon}
                    name={t.name}
                    color={t.color}
                  />
                ))}
                {exp.techNTools.length - 13 > 0 && (
                  <HoverCard openDelay={0} closeDelay={0}>
                    <HoverCardTrigger asChild>
                      <span className="ml-1 px-2 py-1 rounded-md bg-accent-foreground/10 font-medium text-accent-foreground text-sm translate-y-[3px] cursor-pointer">
                        +{exp.techNTools.length - 13}
                      </span>
                    </HoverCardTrigger>
                    <HoverCardContent
                      side="bottom"
                      className="flex flex-wrap max-w-xs gap-2 bg-background border border-accent-foreground/30 rounded-lg p-2"
                    >
                      {exp.techNTools.slice(13).map((t) => (
                        <TechBadge
                          key={`${exp.name}-${t.name}`}
                          icon={t.icon}
                          name={t.name}
                          color={t.color}
                        />
                      ))}
                    </HoverCardContent>
                  </HoverCard>
                )}
              </div>
            </div>

            <ul className="ml-5 list-disc space-y-2 text-md text-accent-foreground">
              {exp.description.map((point, idx) => (
                <li key={`${exp.name}-point-${idx}`}>{point}</li>
              ))}
            </ul>

            <div className="w-full h-px bg-accent-foreground" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;
