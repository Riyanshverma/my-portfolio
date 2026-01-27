import { ProfileBanner, Introduction, Experience, Projects, AboutMe, GitHubActivity } from ".."

const LandingPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <ProfileBanner />
      <Introduction />
      <Experience />
      <Projects />
      <AboutMe />
      <GitHubActivity />
    </div>
  )
}

export default LandingPage