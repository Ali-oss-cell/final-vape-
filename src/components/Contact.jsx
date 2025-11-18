import { useEffect, useRef } from 'react'

function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          section.classList.add('scroll-in')
        }
      })
    }, { threshold: 0.2 })

    section.style.opacity = '0'
    section.style.transform = 'translateY(80px)'
    section.style.transition = 'opacity 1s ease, transform 1s ease'
    sectionObserver.observe(section)

    return () => {
      sectionObserver.unobserve(section)
    }
  }, [])

  const instagramPosts = [
    {
      id: 1,
      image: 'https://via.placeholder.com/600x600/0f0f0f/ffffff?text=PNW+Drop',
      likes: 234,
      comments: 12,
      caption: 'New arrivals just dropped! 🔥'
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/600x600/120212/ffffff?text=Store+Vibes',
      likes: 189,
      comments: 8,
      caption: 'Store vibes ✨'
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/600x600/1a1a1a/ffffff?text=Premium+Glass',
      likes: 312,
      comments: 15,
      caption: 'Premium selection available now'
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/600x600/2a0f2e/ffffff?text=Visit+Us',
      likes: 156,
      comments: 6,
      caption: 'Visit us in-store today!'
    },
    {
      id: 5,
      image: 'https://via.placeholder.com/600x600/111010/ffffff?text=Limited+Drop',
      likes: 278,
      comments: 20,
      caption: 'Limited drop—don\'t miss it 🔥'
    },
    {
      id: 6,
      image: 'https://via.placeholder.com/600x600/1b0f26/ffffff?text=Glass+Art',
      likes: 201,
      comments: 9,
      caption: 'Quality you can trust'
    }
  ]

  return (
    <section id="contact" className="contact instagram-section" ref={sectionRef}>
      <div className="container">
        <div className="instagram-header">
          <h2 className="section-title">Follow Our Journey</h2>
          <p>See our latest products, store updates, and community highlights on Instagram</p>
          <a
            href="https://www.instagram.com/pnwsmokeshop"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary instagram-follow-btn"
          >
            <i className="fab fa-instagram"></i>
            Follow Us @PNWSmokeShop
          </a>
        </div>

        <div className="instagram-feed">
          {instagramPosts.map((post) => (
            <div key={post.id} className="instagram-post">
              <div className="instagram-post-image">
                <img src={post.image} alt={post.caption} loading="lazy" />
                <div className="instagram-post-overlay">
                  <div className="instagram-stats">
                    <span><i className="fas fa-heart"></i> {post.likes}</span>
                    <span><i className="fas fa-comment"></i> {post.comments}</span>
                  </div>
                </div>
              </div>
              <div className="instagram-post-caption">
                <p>{post.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="instagram-cta">
          <div className="instagram-cta-content">
            <h3>Stay Connected</h3>
            <p>Follow us for daily updates, new arrivals, and exclusive deals</p>
            <div className="social-links">
              <a
                href="https://www.instagram.com/pnwsmokeshop"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link instagram"
              >
                <i className="fab fa-instagram"></i>
                <span>Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/pnwsmokeshop"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link facebook"
              >
                <i className="fab fa-facebook"></i>
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
