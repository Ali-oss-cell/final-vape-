import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

function ProductRange() {
  const sectionRef = useRef(null)
  const categoryCardsRef = useRef([])

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

    categoryCardsRef.current.forEach(card => {
      if (card) {
        card.style.opacity = '0'
        card.style.transform = 'translateY(20px)'
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
        cardObserver.observe(card)
      }
    })

    return () => {
      sectionObserver.unobserve(section)
      categoryCardsRef.current.forEach(card => {
        if (card) cardObserver.unobserve(card)
      })
    }
  }, [])

  const categories = [
    { name: 'Vapes', path: '/vapes', icon: '💨' },
    { name: 'E-Liquids', path: '/e-liquids', icon: '🧪' },
    { name: 'Glassware', path: '/glassware', icon: '🍶' },
    { name: 'Accessories', path: '/accessories', icon: '🎯' }
  ]

  return (
    <section id="products" className="product-range" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Discover Our Range</h2>
        <div className="product-categories">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              to={category.path}
              className="category-card"
              ref={el => categoryCardsRef.current[index] = el}
            >
              <div className={`category-image ${category.name.toLowerCase().replace('-', '')}`}>
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontSize: '80px',
                  opacity: 0.7
                }}>
                  {category.icon}
                </div>
              </div>
              <div className="category-label">{category.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductRange
