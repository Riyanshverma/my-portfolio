import { ProfileBanner, Introduction, Experience, Projects, AboutMe } from ".."

const LandingPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <ProfileBanner />
      <Introduction />
      <Experience />
      <Projects />
      <AboutMe />
    </div>
  )
}

export default LandingPage