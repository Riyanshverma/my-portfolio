import { TechBadge } from "..";
import { profilePictureUrl2, techStack, currentlyLearning } from "@/Data";
import { VscVscode } from "react-icons/vsc";
import { SiApplemusic } from "react-icons/si";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/Components/ui/carousel";
import { Switch } from "@/Components/ui/switch"
import { useState } from "react";

const AboutMe = () => {
  const [showSpotify, setShowSpotify] = useState<boolean>(false);
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
        <p className="text-lg text-accent-foreground mb-2">Tech Stack</p>
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
                <p className="text-center text-lg text-accent-foreground">
                  {item.title}
                </p>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border border-accent-foreground" />
          <CarouselNext className="border border-accent-foreground" />
        </Carousel>
      </div>

      <div className="-translate-y-2">
        <div className="flex items-center justify-between mb-2">
          <p className="text-lg text-accent-foreground">
            Since I mentioned
            <TechBadge
              icon={SiApplemusic}
              name="Apple Music"
              color="text-red-500"
              className="inline-flex mx-1"
            />
          </p>
          <div className="translate-y-1">
            <Switch checked={showSpotify} onCheckedChange={setShowSpotify}/>
          </div>
        </div>
        <div className="">
          {showSpotify ? (
            <iframe
              data-testid="embed-iframe"
              src="https://open.spotify.com/embed/playlist/2iztk6WCkZTZeYUoefabfV?utm_source=generator&theme=0"
              width="100%"
              height="450"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          ) : (
            <iframe
              allow="autoplay *; encrypted-media *;"
              height="450"
              width="100%"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              src="https://embed.music.apple.com/in/playlist/swaad/pl.u-PDb4zlAte4ole4v?theme=dark"
              loading="lazy"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

