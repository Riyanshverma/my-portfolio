import { Button } from "@/Components/ui/button"
import { ProfileBanner, Introduction } from ".."

const LandingPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <ProfileBanner />
      <Introduction />
    </div>
  )
}

export default LandingPage