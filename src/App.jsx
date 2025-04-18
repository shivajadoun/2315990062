import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Projects from "./pages/Projects"
import SocialApiDemo from "./pages/SocialApiDemo"
import AverageDemo from "./pages/AverageDemo"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/social-api" element={<SocialApiDemo />} />
        <Route path="/average" element={<AverageDemo />} />
      </Routes>
    </Router>
  )
}