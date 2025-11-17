import { useEffect, useRef } from 'react'

function About() {
  const sectionRef = useRef(null)
  const valueCardsRef = useRef([])

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

    // Value card animations
    const cardObserverOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0) scale(1)'
        }
      })
    }, cardObserverOptions)

    valueCardsRef.current.forEach(card => {
      if (card) {
        card.style.opacity = '0'
        card.style.transform = 'translateY(40px) scale(0.95)'
        card.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
        cardObserver.observe(card)
      }
    })

    return () => {
      sectionObserver.unobserve(section)
      valueCardsRef.current.forEach(card => {
        if (card) cardObserver.unobserve(card)
      })
    }
  }, [])

  const values = [
    {
      icon: 'fas fa-gem',
      title: 'Quality First',
      description: 'We handpick every product, ensuring only the finest quality reaches our shelves. Your satisfaction is our commitment.',
      gradient: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(168, 85, 247, 0.05) 100%)'
    },
    {
      icon: 'fas fa-users',
      title: 'Community Driven',
      description: 'Built by the community, for the community. We\'re more than a shop—we\'re your local hub for culture and connection.',
      gradient: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(147, 51, 234, 0.05) 100%)'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Expert Guidance',
      description: 'Our knowledgeable team is here to help you find exactly what you need. Get personalized recommendations from true enthusiasts.',
      gradient: 'linear-gradient(135deg, rgba(168, 85, 247, 0.18) 0%, rgba(168, 85, 247, 0.08) 100%)'
    },
    {
      icon: 'fas fa-rocket',
      title: 'Always Evolving',
      description: 'We stay ahead of trends, constantly updating our selection with the latest innovations and premium products.',
      gradient: 'linear-gradient(135deg, rgba(168, 85, 247, 0.12) 0%, rgba(147, 51, 234, 0.06) 100%)'
    }
  ]

  return (
    <section id="story" className="about" ref={sectionRef}>
      <div className="container">
        <div className="values-header">
          <h2 className="section-title">What We Stand For</h2>
          <p className="values-subtitle">Our core values shape everything we do, from product selection to customer service</p>
        </div>
        <div className="values-grid">
          {values.map((value, index) => (
            <div
              key={index}
              className="value-card"
              ref={el => valueCardsRef.current[index] = el}
              style={{ background: value.gradient }}
            >
              <div className="value-icon-wrapper">
                <i className={`value-icon ${value.icon}`}></i>
              </div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
