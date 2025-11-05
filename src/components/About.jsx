import { useEffect, useRef } from 'react'

function About() {
  const sectionRef = useRef(null)
  const timelineItemsRef = useRef([])

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

    // Timeline item animations
    const itemObserverOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const itemObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      })
    }, itemObserverOptions)

    timelineItemsRef.current.forEach(item => {
      if (item) {
        item.style.opacity = '0'
        item.style.transform = 'translateY(20px)'
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
        itemObserver.observe(item)
      }
    })

    return () => {
      sectionObserver.unobserve(section)
      timelineItemsRef.current.forEach(item => {
        if (item) itemObserver.unobserve(item)
      })
    }
  }, [])

  const timeline = [
    {
      number: '1',
      year: '2018 - The Idea',
      description: 'Our journey began with a vision to elevate the local smoke shop experience.'
    },
    {
      number: '2',
      year: '2020 - First Store Opens',
      description: 'We opened our doors, committed to quality, community, and culture.'
    },
    {
      number: '3',
      year: 'Today - Leading the Way',
      description: 'Innovating and expanding, we continue to serve the best community out there.'
    }
  ]

  return (
    <section id="story" className="about" ref={sectionRef}>
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <div className="pnw-landscape"></div>
          </div>
          <div className="about-text">
            <h2 className="section-title">Born in the Pacific Northwest</h2>
            <p>We started with a simple mission: to bring the best quality products and unmatched customer service to our community. Rooted in the beauty and culture of the Pacific Northwest, we've grown from a small local shop to a trusted name in the industry.</p>
            <div className="timeline">
              {timeline.map((item, index) => (
                <div
                  key={item.number}
                  className="timeline-item"
                  ref={el => timelineItemsRef.current[index] = el}
                >
                  <div className="timeline-number">{item.number}</div>
                  <div className="timeline-content">
                    <h3>{item.year}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
