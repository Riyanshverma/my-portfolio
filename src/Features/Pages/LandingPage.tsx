import { Suspense, lazy } from "react";
import { Spinner } from "@/Components/ui/spinner";
import { LazyMount } from "@/Components/ui/lazy-mount";
import Seo from "../Components/Seo";

const ProfileBanner = lazy(() => import("../Components/ProfileBanner"));
const Introduction = lazy(() => import("../Components/Introduction"));
const Experience = lazy(() => import("../Components/Experience"));
const Projects = lazy(() => import("../Components/Projects"));
const AboutMe = lazy(() => import("../Components/AboutMe"));
const GitHubActivity = lazy(() => import("../Components/GitHubActivity"));

const LandingPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <Seo
        title="Riyansh Verma | Full Stack Developer"
        description="Portfolio of Riyansh Verma, a Full Stack Developer from Jaipur, Rajasthan building modern, AI-powered web applications with React, Next.js, TypeScript, Node.js and PostgreSQL."
        path="/"
      />
      <Suspense fallback={<Spinner />}>
        <ProfileBanner />
      </Suspense>

      <Suspense fallback={<Spinner />}>
        <Introduction />
      </Suspense>

      <LazyMount fallback={<div className="h-24" />} rootMargin="300px">
        <Suspense fallback={<Spinner />}>
          <Experience />
        </Suspense>
      </LazyMount>

      <LazyMount fallback={<div className="h-24" />} rootMargin="300px">
        <Suspense fallback={<Spinner />}>
          <Projects />
        </Suspense>
      </LazyMount>

      <LazyMount fallback={<div className="h-24" />} rootMargin="300px">
        <Suspense fallback={<Spinner />}>
          <AboutMe />
        </Suspense>
      </LazyMount>

      <LazyMount fallback={<div className="h-24" />} rootMargin="300px">
        <Suspense fallback={<Spinner />}>
          <GitHubActivity />
        </Suspense>
      </LazyMount>
    </div>
  );
};

export default LandingPage;