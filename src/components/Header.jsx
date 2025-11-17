import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()

  return (
    <header className="header">
      <div className="container">
        <div className="nav-wrapper">
          <Link to="/" className="logo">
            <div className="logo-icon">
              <div className="diamond outer"></div>
              <div className="diamond inner"></div>
            </div>
            <span>PNW Smoke Shop</span>
          </Link>
          <nav className="nav">
            <Link to="/vapes" className={location.pathname.includes('vapes') || location.pathname.includes('e-liquids') || location.pathname.includes('glassware') || location.pathname.includes('accessories') ? 'active' : ''}>Products</Link>
            {location.pathname === '/' ? (
              <>
                <a href="#story">Our Story</a>
                <a href="#testimonials">Testimonials</a>
                <a href="#contact">Contact</a>
              </>
            ) : (
              <>
                <Link to="/#story">Our Story</Link>
                <Link to="/#testimonials">Testimonials</Link>
                <Link to="/#contact">Contact</Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
