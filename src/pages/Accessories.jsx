import { useEffect, useRef } from 'react'

function Accessories() {
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
    { id: 1, name: 'Premium Grinder', description: 'Multi-chamber grinder with kief catcher' },
    { id: 2, name: 'Rolling Paper Variety Pack', description: 'Assorted papers for every preference' },
    { id: 3, name: 'Torch Lighter Pro', description: 'Professional-grade torch lighter' },
    { id: 4, name: 'Storage Container Set', description: 'Airtight containers for freshness' },
    { id: 5, name: 'Cleaning Kit Complete', description: 'Everything needed for glass maintenance' },
    { id: 6, name: 'Carrying Case Deluxe', description: 'Protective case for your gear' },
    { id: 7, name: 'Battery Charger Set', description: 'Fast charging solution for all devices' },
    { id: 8, name: 'Replacement Coils Pack', description: 'High-quality coils for optimal performance' },
    { id: 9, name: 'Protective Sleeves', description: 'Durable protection for your devices' }
  ]

  return (
    <div className="product-page">
      <section className="products-section vapes-page-section">
        <div className="container">
          <h1 className="page-title" style={{ textAlign: 'center', marginBottom: '50px' }}>Accessories</h1>
          <div className="products-grid vapes-grid">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="product-card"
                ref={el => productsRef.current[index] = el}
              >
                <div className="product-image-placeholder accessories-product">
                  <span style={{ fontSize: '60px' }}>🎯</span>
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

export default Accessories
