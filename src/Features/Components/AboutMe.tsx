import { TechBadge } from "..";
import { profilePictureUrl2, techStack, currentlyLearning } from "@/Data";
import { VscVscode } from "react-icons/vsc";
import { SiApplemusic } from "react-icons/si";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";

const AboutMe = () => {
  return (
    <section className="mt-10 flex flex-col gap-8">
      <h2 className="text-4xl text-accent-foreground">About Me</h2>

      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src={profilePictureUrl2}
            alt="Profile"
            className="h-44 w-44 rounded-xl object-cover border border-accent-foreground"
            loading="lazy"
          />
        </div>
        {/* Info */}
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl text-accent-foreground">Riyansh Verma</h3>
          <p className="text-lg text-accent-foreground/60 max-w-2xl">
            I'm a full-stack web developer building real-world projects with a growing interest in software engineering. I work primarily with
            <TechBadge icon={VscVscode} name="VS Code" color="text-blue-500" className="inline-flex mx-1" />
            on macOS, enjoy
            <TechBadge icon={SiApplemusic} name="Apple Music" color="text-red-500" className="inline-flex mx-1" />
            while working and focus on creating practical solutions with clean, minimal design.
          </p>
        </div>
      </div>

      {/* Stack section moved outside and pulled up */}
      <div className="-translate-y-2">
        <p className="text-lg text-accent-foreground mb-2">Stack</p>
        <div className="flex flex-wrap gap-2">
          {techStack.map((t) => (
            <TechBadge key={t.name} icon={t.icon} name={t.name} color={t.color} className="mx-0 translate-y-0" />
          ))}
        </div>
      </div> 

      <div className="-translate-y-2">
        <p className="text-lg text-accent-foreground mb-2">Currently Learning</p>
        <Carousel className="w-full rounded-xl">
          <CarouselContent>
            {currentlyLearning.map((item, idx) => (
              <CarouselItem key={idx}>
                <iframe
                  width="100%"
                  height="400"
                  src={item.link}
                  title={`YouTube video player ${idx + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full"
                />
                <p className="text-left text-lg text-accent-foreground mt-2">
                  {item.title}
                </p>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border border-accent-foreground"/>
          <CarouselNext className="border border-accent-foreground"/>
        </Carousel>
      </div>       
    </section>
  );
};

export default AboutMe;

