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
        card.style.transform = 'translateY(20px)'
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
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
      author: "Alex J."
    },
    {
      quote: "Incredible customer service. They helped me find the perfect vape and I couldn't be happier with my purchase.",
      author: "Samantha R."
    },
    {
      quote: "A truly premium experience from the moment you walk in. The quality of their glassware is second to none.",
      author: "Mike P."
    }
  ]

  return (
    <section id="testimonials" className="testimonials" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">What Our Community Says</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card"
              ref={el => testimonialCardsRef.current[index] = el}
            >
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              <p className="quote">"{testimonial.quote}"</p>
              <p className="author">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
