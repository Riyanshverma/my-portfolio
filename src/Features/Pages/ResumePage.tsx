import { resumeUrl } from '@/Data';
import Seo from '../Components/Seo';

const ResumePage = () => {
  return (
    <div className="flex flex-col gap-6 mt-4">
      <Seo
        title="Resume | Riyansh Verma"
        description="View the professional resume of Riyansh Verma, Full Stack Developer skilled in React, Node.js, TypeScript and AI-powered application development."
        path="/resume"
      />
      <div className="flex flex-wrap items-baseline gap-3 text-6xl text-left text-accent-foreground">
        <span className="tracking-tight">Resume</span>
        <span className="text-accent-foreground/60 text-lg">
          View my professional resume.
        </span>
      </div>
      <div className="h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-accent-foreground/60 to-transparent" />
      <div className="w-full max-w-4xl mx-auto mt-4 flex flex-col items-center gap-4">
        <object
          data={resumeUrl}
          type="application/pdf"
          className="w-full h-[85vh] min-h-[420px] rounded-lg border border-accent-foreground/20"
          aria-label="Resume PDF"
        >
          {/* Shown when the browser cannot render PDFs inline, e.g. mobile Safari */}
          <p className="p-6 text-center text-accent-foreground/60">
            Your browser can't display the PDF here.
          </p>
        </object>
        <a
          href={resumeUrl}
          download
          className="text-accent-foreground/80 underline underline-offset-4 hover:text-accent-foreground"
        >
          Download PDF
        </a>
      </div>
    </div>
  );
};

export default ResumePage;
