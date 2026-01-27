import { TechBadge } from "..";
import { profilePictureUrl2, techStack } from "@/Data";

const AboutMe = () => {
  return (
    <section className="mt-10 flex flex-col gap-8">
      <h2 className="text-4xl text-accent-foreground">About Me</h2>

      <div className="flex flex-col md:flex-row gap-4 items-start">
        {/* Image */}
        <div className="flex-shrink-0 flex justify-center md:justify-start">
          <img
            src={profilePictureUrl2}
            alt="Profile"
            className="h-40 w-40 rounded-xl object-cover border border-accent-foreground bg-background"
            loading="lazy"
          />
        </div>
        {/* Info */}
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl text-accent-foreground">Riyansh Verma</h3>
          <p className="text-lg text-accent-foreground/60">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro exercitationem culpa ullam maxime aut aliquid. Iste esse debitis voluptatibus atque sequi vel ducimus voluptates ipsam!
          </p>
        </div>
      </div>

      {/* Stack section moved outside and pulled up */}
      <div className="-translate-y-4">
        <p className="text-lg text-accent-foreground mb-2">Stack</p>
        <div className="flex flex-wrap gap-2">
          {techStack.map((t) => (
            <TechBadge key={t.name} icon={t.icon} name={t.name} color={t.color} className="mx-0 translate-y-0"/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
