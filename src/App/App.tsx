import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { LandingPage, ProjectsPage } from "../Features"
import { Layout } from "../Features"

function App() {
  return (
     <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/projects" element={<ProjectsPage/>} />
          </Routes>
        </Layout>
     </Router>
  )
}

export default App
