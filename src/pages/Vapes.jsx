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
    { id: 1, name: 'Premium Vape Pro X', price: '$89.99', description: 'Advanced temperature control and long-lasting battery' },
    { id: 2, name: 'Compact Vape Mini', price: '$49.99', description: 'Perfect for on-the-go with sleek design' },
    { id: 3, name: 'Elite Vape Max', price: '$129.99', description: 'Premium build quality with customizable settings' },
    { id: 4, name: 'Starter Vape Kit', price: '$34.99', description: 'Everything you need to get started' },
    { id: 5, name: 'Disposable Vape Pack', price: '$24.99', description: 'Convenient single-use option' },
    { id: 6, name: 'Pro Mod Vape', price: '$159.99', description: 'For the serious vaper with advanced features' }
  ]

  return (
    <div className="product-page">
      <section className="product-hero">
        <div className="container">
          <h1 className="page-title">Vapes</h1>
          <p className="page-subtitle">Discover our premium collection of vapes and vaporizers</p>
        </div>
      </section>
      
      <section className="products-section">
        <div className="container">
          <div className="products-grid">
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
                  <div className="product-footer">
                    <span className="product-price">{product.price}</span>
                    <button className="btn btn-primary">Add to Cart</button>
                  </div>
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
