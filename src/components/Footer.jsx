import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Link to="/" className="logo">
              <div className="logo-icon">
                <div className="diamond outer"></div>
                <div className="diamond inner"></div>
              </div>
              <span>PNW Smoke Shop</span>
            </Link>
          </div>
          <div className="footer-copyright">
            <p>© 2024 PNW Smoke Shop. All Rights Reserved.</p>
          </div>
          <div className="footer-social">
            <a href="https://www.facebook.com/profile.php?id=61580906322259" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/smo.ke4less/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
