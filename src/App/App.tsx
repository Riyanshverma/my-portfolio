import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { LandingPage, ProjectsPage, ResumePage, ContactPage } from "../Features"
import { Layout } from "../Features"

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
     </Router>
  )
}

export default App
