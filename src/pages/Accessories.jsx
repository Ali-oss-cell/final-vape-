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
    { id: 1, name: 'Premium Grinder', price: '$29.99', description: 'Multi-chamber grinder with kief catcher' },
    { id: 2, name: 'Rolling Paper Variety Pack', price: '$12.99', description: 'Assorted papers for every preference' },
    { id: 3, name: 'Torch Lighter Pro', price: '$24.99', description: 'Professional-grade torch lighter' },
    { id: 4, name: 'Storage Container Set', price: '$34.99', description: 'Airtight containers for freshness' },
    { id: 5, name: 'Cleaning Kit Complete', price: '$19.99', description: 'Everything needed for glass maintenance' },
    { id: 6, name: 'Carrying Case Deluxe', price: '$39.99', description: 'Protective case for your gear' }
  ]

  return (
    <div className="product-page">
      <section className="product-hero">
        <div className="container">
          <h1 className="page-title">Accessories</h1>
          <p className="page-subtitle">Essential accessories to complete your setup</p>
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
                <div className="product-image-placeholder accessories-product">
                  <span style={{ fontSize: '60px' }}>🎯</span>
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

export default Accessories
