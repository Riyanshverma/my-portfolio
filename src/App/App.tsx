import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../Features/Layout/Layout";
import { Toaster } from "@/Components/ui/sonner";
import { Spinner } from "@/Components/ui/spinner";

const LandingPage = lazy(() => import("../Features/Pages/LandingPage"));
const ResumePage = lazy(() => import("../Features/Pages/ResumePage"));
const ContactPage = lazy(() => import("../Features/Pages/ContactPage"));
const ProjectsPage = lazy(() => import("../Features/Pages/ProjectsPage"));

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </Suspense>
      </Layout>
      <Toaster
        position="bottom-right"
        theme="dark"
        richColors={true}
      />
    </Router>
  );
}

export default App;
