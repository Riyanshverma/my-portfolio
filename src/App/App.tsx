import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { LandingPage, ProjectsPage, ResumePage, ContactPage } from "../Features"
import { Layout } from "../Features"
import { Toaster } from "@/Components/ui/sonner"

function App() {
  return (
     <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/projects" element={<ProjectsPage/>} />
            <Route path="/resume" element={<ResumePage/>} />
            <Route path="/contact" element={<ContactPage/>} />
          </Routes>
        </Layout>
        <Toaster
          position="bottom-right"
          theme="dark"
          richColors={true}
        />
     </Router>
  )
}

export default App
