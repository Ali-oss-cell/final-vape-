import { useEffect, useState } from 'react'

function AgeGate() {
  const [showGate, setShowGate] = useState(false)

  useEffect(() => {
    const hasVerified = typeof window !== 'undefined' && localStorage.getItem('pnw-age-verified') === 'true'
    if (!hasVerified) {
      setShowGate(true)
    }
  }, [])

  const handleConfirm = () => {
    localStorage.setItem('pnw-age-verified', 'true')
    setShowGate(false)
  }

  const handleExit = () => {
    window.location.href = 'https://www.google.com'
  }

  if (!showGate) return null

  return (
    <div className="age-gate-overlay">
      <div className="age-gate-modal">
        <h2>Age Verification</h2>
        <p>This site is intended for adults 21+ in the United States. Please confirm you are of legal age before entering.</p>
        <div className="age-gate-actions">
          <button className="btn btn-primary" onClick={handleConfirm}>I am 21 or older</button>
          <button className="btn btn-secondary" onClick={handleExit}>Exit Site</button>
        </div>
        <small>By selecting "I am 21 or older" you confirm you are of legal age to view this content.</small>
      </div>
    </div>
  )
}

export default AgeGate
