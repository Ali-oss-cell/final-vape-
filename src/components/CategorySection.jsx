import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

function CategorySection({ name, path, icon, gradient, align = 'left', image, description }) {
  const sectionRef = useRef(null)

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

  const getClassName = () => {
    const baseName = name.toLowerCase().replace('e-liquids', 'eliquids').replace('-', '')
    return `category-section category-section-${baseName} category-section-${align}`
  }

  return (
    <Link to={path} className={getClassName()} ref={sectionRef}>
      <div className="category-section-background" style={{ background: gradient }}>
        {image ? (
          <img 
            src={image} 
            alt={name} 
            className="category-section-image"
          />
        ) : (
          <div className="category-section-icon">{icon}</div>
        )}
      </div>
      <div className="category-section-content">
        <h2 className="category-section-title">{name}</h2>
        <p className="category-section-description">{description}</p>
        <button className="btn btn-primary">Shop Now</button>
      </div>
    </Link>
  )
}

export default CategorySection

