import { MotionConfig } from 'framer-motion'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import PageFrame from './components/PageFrame'
import About from './pages/About'
import Company from './pages/Company'
import Contact from './pages/Contact'
import Design from './pages/Design'
import Development from './pages/Development'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ProjectDetail from './pages/ProjectDetail'
import './App.css'

function RoutedPortfolio() {
  const location = useLocation()

  return (
    <PageFrame>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/development" element={<Development />} />
        <Route path="/development/:slug" element={<ProjectDetail />} />
        <Route path="/design" element={<Design />} />
        <Route path="/company" element={<Company />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageFrame>
  )
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter><RoutedPortfolio /></BrowserRouter>
    </MotionConfig>
  )
}
