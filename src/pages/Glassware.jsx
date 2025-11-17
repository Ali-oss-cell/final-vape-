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
    { id: 1, name: 'Premium Glass Bong', description: 'Handcrafted glass with percolator system' },
    { id: 2, name: 'Mini Glass Pipe', description: 'Compact and durable glass pipe' },
    { id: 3, name: 'Rig Set Complete', description: 'Complete dab rig with all accessories' },
    { id: 4, name: 'Sherlock Pipe', description: 'Classic design with modern quality' },
    { id: 5, name: 'Water Pipe Pro', description: 'Advanced filtration for smooth hits' },
    { id: 6, name: 'Desktop Vaporizer', description: 'Premium desktop vaporizing experience' },
    { id: 7, name: 'Artisan Glass Piece', description: 'Unique hand-blown design with intricate details' },
    { id: 8, name: 'Travel Glass Set', description: 'Portable glassware for on-the-go use' },
    { id: 9, name: 'Premium Beaker Bong', description: 'Classic beaker design with modern features' }
  ]

  return (
    <div className="product-page">
      <section className="products-section vapes-page-section">
        <div className="container">
          <h1 className="page-title" style={{ textAlign: 'center', marginBottom: '50px' }}>Glassware</h1>
          <div className="products-grid vapes-grid">
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
