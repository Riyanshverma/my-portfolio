import { ProfileBanner, Introduction, Experience } from ".."

const LandingPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <ProfileBanner />
      <Introduction />
      <Experience />
    </div>
  )
}

export default LandingPage