import { resumeUrl } from '@/Data';

const ResumePage = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-4xl font-bold my-6">Resume</h1>
      <p className="text-accent-foreground/60 mb-4">My resume.</p>
      <div className="shadow-2xl rounded-lg overflow-hidden bg-background flex justify-center">
        <iframe
          src={resumeUrl}
          width="600"
          height="800"
          allow="autoplay"
          className="rounded-lg border-none"
          title="Resume PDF"
          loading='lazy'
        />
      </div>
      <a
        href={resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 underline text-accent-foreground"
      >
        Open in new tab
      </a>
    </div>
  );
};

export default ResumePage;
