import { useEffect, useRef } from 'react'
import vape1 from '../assets/images/vapes/Gemini_Generated_Image_19jf7u19jf7u19jf.png'
import vape2 from '../assets/images/vapes/Gemini_Generated_Image_1bv4qc1bv4qc1bv4.png'
import vape3 from '../assets/images/vapes/Gemini_Generated_Image_1cqtco1cqtco1cqt.png'
import vape4 from '../assets/images/vapes/Gemini_Generated_Image_1d92xi1d92xi1d92.png'
import vape5 from '../assets/images/vapes/Gemini_Generated_Image_1fih5q1fih5q1fih.png'
import vape6 from '../assets/images/vapes/Gemini_Generated_Image_1sfgj41sfgj41sfg.png'
import vape7 from '../assets/images/vapes/Gemini_Generated_Image_6mcoxq6mcoxq6mco.png'
import vape8 from '../assets/images/vapes/Gemini_Generated_Image_7nj5pv7nj5pv7nj5.png'
import vape9 from '../assets/images/vapes/Gemini_Generated_Image_8n870f8n870f8n87.png'
import vape10 from '../assets/images/vapes/Gemini_Generated_Image_9wdkyc9wdkyc9wdk.png'
import vape11 from '../assets/images/vapes/Gemini_Generated_Image_dchfradchfradchf.png'
import vape12 from '../assets/images/vapes/Gemini_Generated_Image_duj53sduj53sduj5.png'
import vape13 from '../assets/images/vapes/Gemini_Generated_Image_e2pwote2pwote2pw.png'
import vape14 from '../assets/images/vapes/Gemini_Generated_Image_ekhui7ekhui7ekhu.png'
import vape15 from '../assets/images/vapes/Gemini_Generated_Image_eoycv8eoycv8eoyc.png'

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
    { id: 1, name: 'Premium Vape Pro X', description: 'Advanced temperature control and long-lasting battery', image: vape1 },
    { id: 2, name: 'Compact Vape Mini', description: 'Perfect for on-the-go with sleek design', image: vape2 },
    { id: 3, name: 'Elite Vape Max', description: 'Premium build quality with customizable settings', image: vape3 },
    { id: 4, name: 'Starter Vape Kit', description: 'Everything you need to get started', image: vape4 },
    { id: 5, name: 'Disposable Vape Pack', description: 'Convenient single-use option', image: vape5 },
    { id: 6, name: 'Pro Mod Vape', description: 'For the serious vaper with advanced features', image: vape6 },
    { id: 7, name: 'Ultra Vape Deluxe', description: 'Top-tier performance with premium materials', image: vape7 },
    { id: 8, name: 'Travel Vape Compact', description: 'Lightweight and portable design', image: vape8 },
    { id: 9, name: 'Classic Vape Edition', description: 'Timeless design meets modern technology', image: vape9 },
    { id: 10, name: 'Premium Disposable Vape', description: 'High-quality disposable option', image: vape10 },
    { id: 11, name: 'Advanced Vape System', description: 'Cutting-edge technology and design', image: vape11 },
    { id: 12, name: 'Sleek Vape Design', description: 'Modern aesthetics meet functionality', image: vape12 },
    { id: 13, name: 'Professional Vape Mod', description: 'For enthusiasts seeking perfection', image: vape13 },
    { id: 14, name: 'Compact Disposable', description: 'Portable and convenient', image: vape14 },
    { id: 15, name: 'Elite Vape Collection', description: 'Premium selection for discerning vapers', image: vape15 }
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
                  <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }} />
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
