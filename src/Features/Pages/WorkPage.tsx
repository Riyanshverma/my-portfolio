import { Button } from "@/Components/ui/button";
import { Badge } from "@/Components/ui/badge";
import { SlGlobe } from "react-icons/sl";
import { SiGithub } from "react-icons/si";

// Template data structure for Work / Experience / Case Studies
interface WorkItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string[];
  skills?: string[];
  link?: string;
}

const sampleWorkData: WorkItem[] = [
  {
    id: "1",
    role: "Full Stack Developer",
    company: "Company / Client Name",
    period: "2024 - Present",
    location: "Remote / Hybrid",
    description: [
      "Architected and deployed responsive web applications with modern tech stack.",
      "Collaborated with cross-functional teams to deliver scalable features.",
      "Optimized application performance and improved user engagement.",
    ],
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    link: "https://example.com",
  },
  {
    id: "2",
    role: "Frontend Developer",
    company: "Previous Organization",
    period: "2023 - 2024",
    location: "On-site",
    description: [
      "Developed high-performance user interfaces and reusable UI component libraries.",
      "Integrated RESTful APIs and real-time state management.",
    ],
    skills: ["React", "JavaScript", "Tailwind CSS", "REST APIs"],
  },
];

const WorkPage = () => {
  return (
    <div className="flex flex-col gap-6 mt-4">
      {/* Page Header */}
      <div className="flex flex-wrap items-baseline gap-3 text-6xl text-left text-accent-foreground">
        <span className="tracking-tight">Work</span>
        <span className="text-accent-foreground/60 text-lg">
          My professional journey, roles, and client engagements.
        </span>
      </div>

      <div className="h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-accent-foreground/60 to-transparent" />

      {/* Work List / Template Section */}
      <div className="flex flex-col gap-6 w-full mt-4">
        {sampleWorkData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-4 p-6 rounded-2xl border border-accent-foreground/20 bg-accent-foreground/5 hover:border-accent-foreground/40 transition-colors"
          >
            {/* Header: Role, Company, Period */}
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="text-2xl font-semibold text-accent-foreground">
                  {item.role}
                </h3>
                <p className="text-lg text-accent-foreground/70">
                  {item.company} {item.location ? `• ${item.location}` : ""}
                </p>
              </div>
              <Badge variant="outline" className="text-sm px-3 py-1 border-accent-foreground/40">
                {item.period}
              </Badge>
            </div>

            {/* Bullet points */}
            <ul className="list-disc list-inside space-y-1.5 text-accent-foreground/80 leading-relaxed text-base">
              {item.description.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>

            {/* Skills & Action Links */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              {item.skills && item.skills.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-accent-foreground/10 text-accent-foreground border border-accent-foreground/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              {item.link && (
                <Button asChild size="sm" variant="outline" className="border-accent-foreground/40 hover:bg-accent-foreground/10">
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                    <SlGlobe size={14} />
                    <span>View Link</span>
                  </a>
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkPage;
