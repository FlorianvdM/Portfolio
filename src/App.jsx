import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import './App.scss'

function App() {
  return (
    // flex-column + min-vh-100 zorgt dat de footer altijd onderaan staat
    <div className="d-flex flex-column min-vh-100">
      <Navigation />

      {/* Alleen dit middenstuk verandert per pagina */}
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projecten" element={<Projects />} />
          {/* :slug is een variabele, bijv. /projecten/kitesurfschool */}
          <Route path="/projecten/:slug" element={<ProjectDetail />} />
          <Route path="/opleiding-werk" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App