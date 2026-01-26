import { ProfileBanner, Introduction, Experience, Projects } from ".."

const LandingPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <ProfileBanner />
      <Introduction />
      <Experience />
      <Projects />
    </div>
  )
}

export default LandingPage