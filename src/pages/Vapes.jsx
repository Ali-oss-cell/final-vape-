import { useEffect, useRef } from 'react'

function Vapes() {
  const productsRef = useRef([])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      })
    }, observerOptions)

    productsRef.current.forEach(product => {
      if (product) {
        product.style.opacity = '0'
        product.style.transform = 'translateY(20px)'
        product.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
        observer.observe(product)
      }
    })

    return () => {
      productsRef.current.forEach(product => {
        if (product) observer.unobserve(product)
      })
    }
  }, [])

  const products = [
    { id: 1, name: 'Premium Vape Pro X', description: 'Advanced temperature control and long-lasting battery' },
    { id: 2, name: 'Compact Vape Mini', description: 'Perfect for on-the-go with sleek design' },
    { id: 3, name: 'Elite Vape Max', description: 'Premium build quality with customizable settings' },
    { id: 4, name: 'Starter Vape Kit', description: 'Everything you need to get started' },
    { id: 5, name: 'Disposable Vape Pack', description: 'Convenient single-use option' },
    { id: 6, name: 'Pro Mod Vape', description: 'For the serious vaper with advanced features' },
    { id: 7, name: 'Ultra Vape Deluxe', description: 'Top-tier performance with premium materials' },
    { id: 8, name: 'Travel Vape Compact', description: 'Lightweight and portable design' },
    { id: 9, name: 'Classic Vape Edition', description: 'Timeless design meets modern technology' }
  ]

  return (
    <div className="product-page">
      <section className="products-section vapes-page-section">
        <div className="container">
          <h1 className="page-title" style={{ textAlign: 'center', marginBottom: '50px' }}>Vapes</h1>
          <div className="products-grid vapes-grid">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="product-card"
                ref={el => productsRef.current[index] = el}
              >
                <div className="product-image-placeholder vapes-product">
                  <span style={{ fontSize: '60px' }}>💨</span>
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Vapes
