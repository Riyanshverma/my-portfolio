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
      <div className="w-full flex justify-center mt-4">
        <iframe src={resumeUrl} width="600" height="750" allow="autoplay" className="rounded-lg" title="Resume PDF" loading="lazy"/>
      </div>
    </div>
  );
};

export default ResumePage;
