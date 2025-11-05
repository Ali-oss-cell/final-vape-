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
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
