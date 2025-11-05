import { useEffect, useRef } from 'react'

function Glassware() {
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
    { id: 1, name: 'Premium Glass Bong', price: '$149.99', description: 'Handcrafted glass with percolator system' },
    { id: 2, name: 'Mini Glass Pipe', price: '$39.99', description: 'Compact and durable glass pipe' },
    { id: 3, name: 'Rig Set Complete', price: '$199.99', description: 'Complete dab rig with all accessories' },
    { id: 4, name: 'Sherlock Pipe', price: '$59.99', description: 'Classic design with modern quality' },
    { id: 5, name: 'Water Pipe Pro', price: '$179.99', description: 'Advanced filtration for smooth hits' },
    { id: 6, name: 'Desktop Vaporizer', price: '$249.99', description: 'Premium desktop vaporizing experience' }
  ]

  return (
    <div className="product-page">
      <section className="product-hero">
        <div className="container">
          <h1 className="page-title">Glassware</h1>
          <p className="page-subtitle">Handcrafted glass pieces for the connoisseur</p>
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
                <div className="product-image-placeholder glassware-product">
                  <span style={{ fontSize: '60px' }}>🍶</span>
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

export default Glassware
