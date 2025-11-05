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
    { id: 1, name: 'Berry Blast', price: '$19.99', description: 'Sweet mixed berries with a refreshing finish', flavor: 'Fruity' },
    { id: 2, name: 'Mint Fresh', price: '$18.99', description: 'Cool minty sensation for a crisp vape experience', flavor: 'Menthol' },
    { id: 3, name: 'Tobacco Classic', price: '$17.99', description: 'Rich and smooth traditional tobacco flavor', flavor: 'Tobacco' },
    { id: 4, name: 'Vanilla Cream', price: '$19.99', description: 'Sweet vanilla with creamy undertones', flavor: 'Dessert' },
    { id: 5, name: 'Citrus Burst', price: '$18.99', description: 'Zesty lemon and lime combination', flavor: 'Citrus' },
    { id: 6, name: 'Coffee Delight', price: '$19.99', description: 'Bold coffee flavor with caramel notes', flavor: 'Beverage' }
  ]

  return (
    <div className="product-page">
      <section className="product-hero">
        <div className="container">
          <h1 className="page-title">E-Liquids</h1>
          <p className="page-subtitle">Premium e-liquids in a variety of flavors and strengths</p>
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
                <div className="product-image-placeholder e-liquids-product">
                  <span style={{ fontSize: '60px' }}>🧪</span>
                </div>
                <div className="product-info">
                  <div className="flavor-badge">{product.flavor}</div>
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

export default ELiquids
