import Hero from '../components/Hero'
import CategorySection from '../components/CategorySection'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import { useEffect } from 'react'
import vapesImage from '../assets/images/IPLAY-WALKER-DISPOSABLE-VAPE-1.jpg'
import eliquidsImage from '../assets/images/WhatsApp Image 2025-11-05 at 11.47.11_30d736ed (1).jpg'
import glasswareImage from '../assets/images/WhatsApp Image 2025-11-05 at 12.27.40_450cb620 (2).jpg'
import accessoriesImage from '../assets/images/WhatsApp Image 2025-11-05 at 12.52.49_53209318 (1).jpg'

function Home() {
  useEffect(() => {
    // Parallax effect for hero section
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const heroVisual = document.querySelector('.hero-visual')
      if (heroVisual) {
        heroVisual.style.transform = `translateY(${scrolled * 0.3}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Hero />
      <CategorySection 
        name="Vapes" 
        path="/vapes" 
        icon="💨"
        gradient="linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)"
        align="left"
        image={vapesImage}
        description="Discover cutting-edge disposable vapes and premium devices. Sleek designs meet powerful performance for the ultimate vaping experience."
      />
      <CategorySection 
        name="E-Liquids" 
        path="/e-liquids" 
        icon="🧪"
        gradient="linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)"
        align="right"
        image={eliquidsImage}
        description="Premium e-liquids crafted with precision. From bold fruit blends to smooth tobacco flavors, find your perfect match in every bottle."
      />
      <CategorySection 
        name="Glassware" 
        path="/glassware" 
        icon="🍶"
        gradient="linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)"
        align="left"
        image={glasswareImage}
        description="Handcrafted glass pieces that blend artistry with functionality. Premium quality glassware designed for the discerning connoisseur."
      />
      <CategorySection 
        name="Accessories" 
        path="/accessories" 
        icon="🎯"
        gradient="linear-gradient(135deg, #feca57 0%, #ff9ff3 100%)"
        align="right"
        image={accessoriesImage}
        description="Essential accessories to elevate your experience. From coils to chargers, we've got everything you need to keep your setup running smoothly."
      />
      <About />
      <Testimonials />
      <Contact />
    </>
  )
}

export default Home
