import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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

function App() {
  return (
    <Router>
      <div className="App">
        <AnimatedBackground />
        <AgeGate />
        <div className="app-content" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/vapes" element={<Vapes />} />
              <Route path="/e-liquids" element={<ELiquids />} />
              <Route path="/glassware" element={<Glassware />} />
              <Route path="/accessories" element={<Accessories />} />
              <Route path="/stores" element={<Stores />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
