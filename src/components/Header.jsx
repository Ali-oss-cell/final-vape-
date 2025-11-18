import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import logoImage from '../assets/images/logo use.png'

function Header() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  const handleNavClick = () => setIsMenuOpen(false)

  const isProductsRoute =
    location.pathname.includes('vapes') ||
    location.pathname.includes('e-liquids') ||
    location.pathname.includes('glassware') ||
    location.pathname.includes('accessories')

  return (
    <header className="header">
      <div className="container">
        <div className="nav-wrapper">
          <Link to="/" className="logo" onClick={handleNavClick}>
            <img src={logoImage} alt="PNW Smoke Shop Logo" className="logo-image" />
            <span>PNW Smoke Shop</span>
          </Link>
          <button
            className={`mobile-menu-toggle ${isMenuOpen ? 'open' : ''}`}
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setIsMenuOpen(prev => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className={`nav ${isMenuOpen ? 'nav-mobile-open' : ''}`}>
            <Link to="/vapes" className={isProductsRoute ? 'active' : ''} onClick={handleNavClick}>
              Products
            </Link>
            <Link to="/stores" className={location.pathname === '/stores' ? 'active' : ''} onClick={handleNavClick}>
              Stores
            </Link>
            {location.pathname === '/' ? (
              <>
                <a href="#story" onClick={handleNavClick}>Our Story</a>
                <a href="#testimonials" onClick={handleNavClick}>Testimonials</a>
                <a href="#contact" onClick={handleNavClick}>Contact</a>
              </>
            ) : (
              <>
                <Link to="/#story" onClick={handleNavClick}>Our Story</Link>
                <Link to="/#testimonials" onClick={handleNavClick}>Testimonials</Link>
                <Link to="/#contact" onClick={handleNavClick}>Contact</Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
