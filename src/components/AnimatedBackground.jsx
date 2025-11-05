import { useEffect, useRef } from 'react'

function AnimatedBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Create particles
    const particles = []
    const particleCount = 25 // Fewer particles, but each is a large blurry light

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.speedX = Math.random() * 1.5 - 0.75 // Increased speed
        this.speedY = Math.random() * 1.5 - 0.75
        this.opacity = Math.random() * 0.5 + 0.3
        this.glowSize = Math.random() * 200 + 150 // Much larger glow
        // Add pulsing effect
        this.baseGlowSize = this.glowSize
        this.pulseSpeed = Math.random() * 0.02 + 0.01
        this.pulsePhase = Math.random() * Math.PI * 2
      }

      update() {
        // Move the light
        this.x += this.speedX
        this.y += this.speedY

        // Add pulsing effect to glow size
        this.pulsePhase += this.pulseSpeed
        this.glowSize = this.baseGlowSize + Math.sin(this.pulsePhase) * 30

        // Wrap around edges, accounting for glow size
        if (this.x > canvas.width + this.glowSize) this.x = -this.glowSize
        if (this.x < -this.glowSize) this.x = canvas.width + this.glowSize
        if (this.y > canvas.height + this.glowSize) this.y = -this.glowSize
        if (this.y < -this.glowSize) this.y = canvas.height + this.glowSize
      }

      draw() {
        // Create soft light glow effect - no sharp center point
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.glowSize
        )
        
        // Very soft, gradual fade - no visible center dot
        gradient.addColorStop(0, `rgba(168, 85, 247, ${this.opacity * 0.4})`)
        gradient.addColorStop(0.1, `rgba(168, 85, 247, ${this.opacity * 0.35})`)
        gradient.addColorStop(0.2, `rgba(168, 85, 247, ${this.opacity * 0.25})`)
        gradient.addColorStop(0.35, `rgba(168, 85, 247, ${this.opacity * 0.15})`)
        gradient.addColorStop(0.5, `rgba(168, 85, 247, ${this.opacity * 0.08})`)
        gradient.addColorStop(0.7, `rgba(168, 85, 247, ${this.opacity * 0.04})`)
        gradient.addColorStop(0.85, `rgba(168, 85, 247, ${this.opacity * 0.02})`)
        gradient.addColorStop(1, 'rgba(168, 85, 247, 0)')
        
        // Apply blur to the entire light
        ctx.shadowBlur = 80 // Stronger blur
        ctx.shadowColor = `rgba(168, 85, 247, ${this.opacity * 0.5})`
        
        ctx.beginPath()
        ctx.fillStyle = gradient
        ctx.arc(this.x, this.y, this.glowSize, 0, Math.PI * 2)
        ctx.fill()
        
        // Reset shadow
        ctx.shadowBlur = 0
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Draw connections between nearby particles
    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Very subtle connections - only between very close lights
          if (distance < 200) {
            ctx.beginPath()
            ctx.shadowBlur = 8 // Subtle blur for connections
            ctx.shadowColor = 'rgba(168, 85, 247, 0.15)'
            ctx.strokeStyle = `rgba(168, 85, 247, ${0.05 * (1 - distance / 200)})` // Softer opacity
            ctx.lineWidth = 1 // Thinner lines
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
            ctx.shadowBlur = 0
          }
        }
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      // Draw connections
      drawConnections()

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
        filter: 'blur(3px)' // Additional blur to the entire canvas
      }}
    />
  )
}

export default AnimatedBackground

