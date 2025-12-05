import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'
import AgeGate from './components/AgeGate'
import Home from './pages/Home'
import Vapes from './pages/Vapes'
import ELiquids from './pages/ELiquids'
import Glassware from './pages/Glassware'
import Accessories from './pages/Accessories'
import Stores from './pages/Stores'

function AppContent() {
  const location = useLocation()
  const showFooter = location.pathname !== '/vapes'

  return (
    <div className="app-content">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vapes" element={<Vapes />} />
          <Route path="/e-liquids" element={<ELiquids />} />
          <Route path="/glassware" element={<Glassware />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/stores" element={<Stores />} />
        </Routes>
      </main>
      {showFooter && <Footer />}
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <AnimatedBackground />
        <AgeGate />
        <AppContent />
      </div>
    </Router>
  )
}

export default App
