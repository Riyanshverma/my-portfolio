import { ProfileBanner, Introduction } from ".."

const LandingPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <ProfileBanner />
      <Introduction />
    </div>
  )
}

export default LandingPage