import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './layouts/Layout'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Journey from './pages/Journey'
import Life from './pages/Life'
import Certifications from './pages/Certifications'
import Photography from './pages/life/Photography'
import Art from './pages/life/Art'
import Animals from './pages/life/Animals'
import Adventures from './pages/life/Adventures'

function App() {
  return (
    <Layout>
      <Routes>
        {/* About is the landing page (/about redirects to /) */}
        <Route path="/"                  element={<About />} />
        <Route path="/about"             element={<Navigate to="/" replace />} />
        <Route path="/portfolio"         element={<Portfolio />} />
        <Route path="/portfolio/:slug"   element={<Navigate to="/portfolio" replace />} />
        <Route path="/journey"           element={<Journey />} />
        <Route path="/life"              element={<Life />} />
        <Route path="/life/photography"  element={<Photography />} />
        <Route path="/life/art"          element={<Art />} />
        <Route path="/life/animals"      element={<Animals />} />
        <Route path="/life/adventures"   element={<Adventures />} />
        <Route path="/certifications"    element={<Certifications />} />
        <Route path="/contact"           element={<Contact />} />
      </Routes>
    </Layout>
  )
}

export default App
