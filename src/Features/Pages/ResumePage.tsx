import { resumeUrl } from '@/Data';

const ResumePage = () => {
  return (
    <div className="flex flex-col gap-6 mt-4">
      <div className="flex flex-wrap items-baseline gap-3 text-6xl text-left text-accent-foreground">
        <span className="tracking-tight">Resume</span>
        <span className="text-accent-foreground/60 text-lg">
          View my professional resume.
        </span>
      </div>
      <div className="w-full h-px bg-accent-foreground" />
      <div className="w-full flex justify-center mt-3">
        <iframe src={resumeUrl} width="600" height="750" allow="autoplay" className="rounded-lg" title="Resume PDF" loading="lazy"/>
      </div>
    </div>
  );
};

export default ResumePage;
