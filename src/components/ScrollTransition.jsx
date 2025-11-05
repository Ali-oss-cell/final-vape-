import { useEffect, useRef } from 'react'

function ScrollTransition({ children, className = '' }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          section.classList.add('scroll-in')
          // Add a subtle animation class
          section.style.opacity = '1'
          section.style.transform = 'translateY(0)'
        } else {
          // Optional: fade out when leaving
          // section.classList.remove('scroll-in')
        }
      })
    }, observerOptions)

    // Set initial state
    section.style.opacity = '0'
    section.style.transform = 'translateY(50px)'
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease'

    observer.observe(section)

    return () => {
      observer.unobserve(section)
    }
  }, [])

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  )
}

export default ScrollTransition

