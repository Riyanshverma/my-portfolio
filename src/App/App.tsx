import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { LandingPage, ProjectsPage } from "../Features"

function App() {
  return (
    <>
     <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/projects" element={<ProjectsPage/>} />
        </Routes>
     </Router>
    </>
  )
}

export default App
