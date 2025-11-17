import { useEffect, useRef } from 'react'

function ELiquids() {
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
    { id: 1, name: 'Berry Blast', description: 'Sweet mixed berries with a refreshing finish' },
    { id: 2, name: 'Mint Fresh', description: 'Cool minty sensation for a crisp vape experience' },
    { id: 3, name: 'Tobacco Classic', description: 'Rich and smooth traditional tobacco flavor' },
    { id: 4, name: 'Vanilla Cream', description: 'Sweet vanilla with creamy undertones' },
    { id: 5, name: 'Citrus Burst', description: 'Zesty lemon and lime combination' },
    { id: 6, name: 'Coffee Delight', description: 'Bold coffee flavor with caramel notes' },
    { id: 7, name: 'Strawberry Fields', description: 'Fresh strawberry with a hint of cream' },
    { id: 8, name: 'Mango Tango', description: 'Tropical mango with exotic fruit blend' },
    { id: 9, name: 'Caramel Macchiato', description: 'Rich caramel with smooth coffee undertones' }
  ]

  return (
    <div className="product-page">
      <section className="products-section vapes-page-section">
        <div className="container">
          <h1 className="page-title" style={{ textAlign: 'center', marginBottom: '50px' }}>E-Liquids</h1>
          <div className="products-grid vapes-grid">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="product-card"
                ref={el => productsRef.current[index] = el}
              >
                <div className="product-image-placeholder e-liquids-product">
                  <span style={{ fontSize: '60px' }}>🧪</span>
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

export default ELiquids
