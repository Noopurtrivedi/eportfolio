import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import EnterpriseWork from './pages/EnterpriseWork'
import AiProjects from './pages/AiProjects'
import FounderJourney from './pages/FounderJourney'
import WhoIAm from './pages/WhoIAm'
import Contact from './pages/Contact'
import Certifications from './pages/Certifications'
import Photography from './pages/life/Photography'
import Art from './pages/life/Art'
import Animals from './pages/life/Animals'
import Adventures from './pages/life/Adventures'

function App() {
  return (
    <Layout>
      <Routes>
        {/* Executive profile is the landing page */}
        <Route path="/"                  element={<Home />} />
        <Route path="/work"              element={<EnterpriseWork />} />
        <Route path="/ai"                element={<AiProjects />} />
        <Route path="/founder"           element={<FounderJourney />} />
        <Route path="/who-i-am"          element={<WhoIAm />} />
        <Route path="/life/photography"  element={<Photography />} />
        <Route path="/life/art"          element={<Art />} />
        <Route path="/life/animals"      element={<Animals />} />
        <Route path="/life/adventures"   element={<Adventures />} />
        <Route path="/certifications"    element={<Certifications />} />
        <Route path="/contact"           element={<Contact />} />

        {/* Legacy routes redirect to the new structure */}
        <Route path="/about"             element={<Navigate to="/" replace />} />
        <Route path="/portfolio"         element={<Navigate to="/work" replace />} />
        <Route path="/portfolio/:slug"   element={<Navigate to="/work" replace />} />
        <Route path="/journey"           element={<Navigate to="/founder" replace />} />
        <Route path="/life"              element={<Navigate to="/who-i-am" replace />} />
      </Routes>
    </Layout>
  )
}

export default App
