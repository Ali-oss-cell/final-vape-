import { useEffect, useRef } from 'react'

function Testimonials() {
  const sectionRef = useRef(null)
  const testimonialCardsRef = useRef([])

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

    // Card animations
    const cardObserverOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      })
    }, cardObserverOptions)

    testimonialCardsRef.current.forEach(card => {
      if (card) {
        card.style.opacity = '0'
        card.style.transform = 'translateY(30px)'
        card.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
        cardObserver.observe(card)
      }
    })

    return () => {
      sectionObserver.unobserve(section)
      testimonialCardsRef.current.forEach(card => {
        if (card) cardObserver.unobserve(card)
      })
    }
  }, [])

  const testimonials = [
    {
      quote: "The best selection and most knowledgeable staff in town. PNW Smoke Shop is my go-to for a reason!",
      author: "Alex J.",
      role: "Regular Customer",
      gradient: "linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(168, 85, 247, 0.05) 100%)"
    },
    {
      quote: "Incredible customer service. They helped me find the perfect vape and I couldn't be happier with my purchase.",
      author: "Samantha R.",
      role: "Vape Enthusiast",
      gradient: "linear-gradient(135deg, rgba(168, 85, 247, 0.12) 0%, rgba(147, 51, 234, 0.08) 100%)"
    },
    {
      quote: "A truly premium experience from the moment you walk in. The quality of their glassware is second to none.",
      author: "Mike P.",
      role: "Glass Collector",
      gradient: "linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(168, 85, 247, 0.03) 100%)"
    }
  ]

  return (
    <section id="testimonials" className="testimonials" ref={sectionRef}>
      <div className="container">
        <div className="testimonials-header">
          <h2 className="section-title">What Our Community Says</h2>
          <p className="testimonials-subtitle">Real experiences from real customers who trust us</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card"
              ref={el => testimonialCardsRef.current[index] = el}
              style={{ background: testimonial.gradient }}
            >
              <div className="testimonial-card-inner">
                <div className="testimonial-header">
                  <div className="testimonial-avatar">
                    <span>{testimonial.author.charAt(0)}</span>
                  </div>
                  <div className="testimonial-author-info">
                    <p className="author">{testimonial.author}</p>
                    <p className="author-role">{testimonial.role}</p>
                  </div>
                </div>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <div className="quote-wrapper">
                  <i className="fas fa-quote-left quote-icon"></i>
                  <p className="quote">"{testimonial.quote}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
