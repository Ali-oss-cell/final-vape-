import { useEffect, useRef } from 'react'
// To use local images, import them like this:
// import instagramImage1 from '../assets/images/your-image-1.jpg'
// import instagramImage2 from '../assets/images/your-image-2.jpg'
// Then use: image: instagramImage1

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
      image: 'https://www.instagram.com/p/DQ_MuocjanG/media/?size=l',
      postUrl: 'https://www.instagram.com/p/DQ_MuocjanG/',
      likes: 0, // Update with actual likes
      comments: 0, // Update with actual comments
      caption: 'Store vibes ✨'
    },
    {
      id: 2,
      image: 'https://www.instagram.com/p/DQ5TF6miQeV/media/?size=l',
      postUrl: 'https://www.instagram.com/p/DQ5TF6miQeV/',
      likes: 0, // Update with actual likes
      comments: 0, // Update with actual comments
      caption: 'Premium selection available now'
    },
    {
      id: 3,
      image: 'https://www.instagram.com/p/DQ5TDbAjfht/media/?size=l',
      postUrl: 'https://www.instagram.com/p/DQ5TDbAjfht/',
      likes: 0, // Update with actual likes
      comments: 0, // Update with actual comments
      caption: 'Visit us in-store today!'
    },
    {
      id: 4,
      image: 'https://www.instagram.com/p/DQ1ZNwQAUFk/media/?size=l',
      postUrl: 'https://www.instagram.com/p/DQ1ZNwQAUFk/',
      likes: 0, // Update with actual likes
      comments: 0, // Update with actual comments
      caption: 'New arrivals! 🔥'
    },
    {
      id: 5,
      image: 'https://www.instagram.com/p/DQZ1N1UghrT/media/?size=l',
      postUrl: 'https://www.instagram.com/p/DQZ1N1UghrT/',
      likes: 0, // Update with actual likes
      comments: 0, // Update with actual comments
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
            href="https://www.instagram.com/smo.ke4less/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary instagram-follow-btn"
          >
            <i className="fab fa-instagram"></i>
            Follow Us @smo.ke4less
          </a>
        </div>

        <div className="instagram-feed">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={post.postUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-post"
            >
              <div className="instagram-post-image">
                <img 
                  src={post.image} 
                  alt={post.caption} 
                  loading="lazy"
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #888; font-size: 14px;">Image not available</div>'
                  }}
                />
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
            </a>
          ))}
        </div>

        <div className="instagram-cta">
          <div className="instagram-cta-content">
            <h3>Stay Connected</h3>
            <p>Follow us for daily updates, new arrivals, and exclusive deals</p>
            <div className="social-links">
              <a
                href="https://www.instagram.com/smo.ke4less/"
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
