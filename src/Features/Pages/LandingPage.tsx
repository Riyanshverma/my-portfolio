import { Button } from "@/Components/ui/button"
import { ProfileBanner } from ".."

const LandingPage = () => {
  return (
    <div className="flex flex-col gap-4 items-start">
      <ProfileBanner />
      <div className="text-5xl text-center">
        Hi I&apos;am Riyansh Verma
      </div>
      <p className="text-muted-foreground text-left max-w-xl">
        This is where your main content goes. The header and footer are now handled by the Layout component.
      </p>
      <div>
         <Button>Hello</Button>
      </div>
    </div>
  )
}

export default LandingPage