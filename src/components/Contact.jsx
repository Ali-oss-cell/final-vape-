import { useState, useEffect, useRef } from 'react'

function Contact() {
  const sectionRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    // Section scroll animation
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          section.classList.add('scroll-in')
        }
      })
    }, { threshold: 0.2 })

    // Set initial state - section starts hidden
    section.style.opacity = '0'
    section.style.transform = 'translateY(80px)'
    section.style.transition = 'opacity 1s ease, transform 1s ease'
    sectionObserver.observe(section)

    return () => {
      sectionObserver.unobserve(section)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      alert('Thank you for your message! We\'ll get back to you soon.')
      setFormData({ name: '', email: '', message: '' })
    } else {
      alert('Please fill in all fields.')
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2 className="section-title">Get in Touch</h2>
            <p>Have a question or need some advice? Drop us a line or visit us in-store. We're always here to help.</p>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>123 Pine Street, Seattle, WA 98101</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-clock"></i>
                <span>Mon - Sun: 10:00 AM - 9:00 PM</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>hello@pnwsmokeshop.com</span>
              </div>
            </div>
            <div className="map-container">
              <div className="map-placeholder">
                <i className="fas fa-map-marked-alt"></i>
                <p>Map Location</p>
              </div>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="How can we help?"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="btn btn-primary btn-large">Submit Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
