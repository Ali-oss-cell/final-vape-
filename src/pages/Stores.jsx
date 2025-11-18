import { useEffect, useRef, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import smoke4lessImage from '../assets/images/smoke4less.png'
import smoke4less2Image from '../assets/images/smoke4less 2.png'
import patImage from '../assets/images/pat.png'

// Fix for default marker icon in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

const defaultCenter = [45.5, -122.6]
const defaultZoom = 9

// Component to handle map updates
function MapController({ center, zoom, store }) {
  const map = useMap()
  
  useEffect(() => {
    if (center && zoom) {
      map.flyTo(center, zoom, {
        duration: 1.5,
        easeLinearity: 0.25
      })
    }
  }, [center, zoom, map])
  
  return null
}

function Stores() {
  const storesRef = useRef([])
  const [selectedStore, setSelectedStore] = useState(null)
  const [map, setMap] = useState(null)
  const [mapCenter, setMapCenter] = useState(defaultCenter)
  const [mapZoom, setMapZoom] = useState(defaultZoom)
  const markerRefs = useRef({})

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

    storesRef.current.forEach(store => {
      if (store) {
        store.style.opacity = '0'
        store.style.transform = 'translateY(20px)'
        store.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
        observer.observe(store)
      }
    })

    return () => {
      storesRef.current.forEach(store => {
        if (store) observer.unobserve(store)
      })
    }
  }, [])

  const stores = [
    { 
      id: 1, 
      name: 'Smokes 4 Less', 
      address: '1015 N Springbrook Rd', 
      city: 'Newberg, OR 97132', 
      phone: 'Call for hours', 
      hours: 'Mon-Sat: 10AM-9PM, Sun: 11AM-7PM', 
      lat: 45.3103, 
      lng: -122.9731,
      image: smoke4less2Image
    },
    { 
      id: 2, 
      name: "Pat's Cig and Vape", 
      address: '4486 River Rd N', 
      city: 'Keizer, OR 97303', 
      phone: 'Call for hours', 
      hours: 'Mon-Sat: 10AM-9PM, Sun: 11AM-7PM', 
      lat: 45.002, 
      lng: -123.024,
      image: patImage
    },
    { 
      id: 3, 
      name: 'Smoke 4 Less', 
      address: '21110 Salamo Rd', 
      city: 'West Linn, OR 97068', 
      phone: 'Call for hours', 
      hours: 'Mon-Sat: 10AM-9PM, Sun: 11AM-7PM', 
      lat: 45.358, 
      lng: -122.625,
      image: smoke4lessImage
    },
    // { 
    //   id: 4, 
    //   name: 'Smoking Joe', 
    //   address: '11215 NE 28th St', 
    //   city: 'Vancouver, WA 98684', 
    //   phone: 'Call for hours', 
    //   hours: 'Mon-Sat: 10AM-9PM, Sun: 11AM-7PM', 
    //   lat: 45.6397, 
    //   lng: -122.5553,
    //   image: null // Add image path here when available
    // }
  ]

  const handleStoreClick = (store, openPopup = true) => {
    setSelectedStore(store)
    if (store.lat && store.lng) {
      // Smooth fly to the store location
      setMapCenter([store.lat, store.lng])
      setMapZoom(15)
      
      // Open the popup after a short delay to allow map to start moving
      if (openPopup && markerRefs.current[store.id]) {
        setTimeout(() => {
          const marker = markerRefs.current[store.id]
          if (marker && marker.leafletElement) {
            marker.leafletElement.openPopup()
          }
        }, 300)
      }
      
      // Scroll to map smoothly
      setTimeout(() => {
        document.querySelector('.stores-map-section')?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'center'
        })
      }, 100)
    }
  }

  const handleGetDirections = (store) => {
    const address = `${store.address}, ${store.city}`
    const url = `https://www.openstreetmap.org/directions?from=&to=${store.lat},${store.lng}`
    window.open(url, '_blank')
  }

  return (
    <div className="product-page">
      <section className="product-hero">
        <div className="container">
          <h1 className="page-title">Stores</h1>
          <p className="page-subtitle">Visit us at one of our convenient locations across the Pacific Northwest</p>
        </div>
      </section>

      <section className="stores-map-section">
        <div className="container">
          <div>
            <MapContainer
              center={defaultCenter}
              zoom={defaultZoom}
              style={{ height: '100%', width: '100%', zIndex: 0 }}
              whenCreated={setMap}
            >
              <MapController center={mapCenter} zoom={mapZoom} store={selectedStore} />
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {stores.map((store) => (
                <Marker
                  key={store.id}
                  position={[store.lat, store.lng]}
                  ref={(el) => {
                    if (el) {
                      markerRefs.current[store.id] = el
                    }
                  }}
                  eventHandlers={{
                    click: () => {
                      handleStoreClick(store, false)
                    },
                  }}
                >
                  <Popup>
                    <div style={{ padding: '10px', color: '#000', minWidth: '200px' }}>
                      <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', fontWeight: 'bold' }}>{store.name}</h3>
                      <p style={{ margin: '5px 0', fontSize: '14px' }}>
                        {store.address}<br />
                        {store.city}
                      </p>
                      {store.phone && (
                        <p style={{ margin: '5px 0', fontSize: '14px' }}>📞 {store.phone}</p>
                      )}
                      <p style={{ margin: '5px 0', fontSize: '14px' }}>🕒 {store.hours}</p>
                      <button
                        onClick={() => handleGetDirections(store)}
                        style={{
                          marginTop: '10px',
                          padding: '8px 16px',
                          backgroundColor: '#a855f7',
                          color: '#000',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontWeight: 'bold',
                          width: '100%'
                        }}
                      >
                        Get Directions
                      </button>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </section>
      
      <section className="stores-list-section">
        <div className="container">
          <h2 className="stores-section-title">Our Locations</h2>
          <div className="stores-grid">
            {stores.map((store, index) => (
              <div
                key={store.id}
                className={`store-card ${selectedStore?.id === store.id ? 'selected' : ''}`}
                ref={el => storesRef.current[index] = el}
                onClick={() => handleStoreClick(store)}
              >
                {store.image && (
                  <div className="store-card-image">
                    <img src={store.image} alt={store.name} />
                  </div>
                )}
                <div className="store-card-header">
                  <div className="store-icon">
                    <span>📍</span>
                  </div>
                  <h3 className="store-name">{store.name}</h3>
                </div>
                <div className="store-card-body">
                  <div className="store-info-item">
                    <span className="store-info-icon">📍</span>
                    <div className="store-info-content">
                      <p className="store-address">{store.address}</p>
                      <p className="store-city">{store.city}</p>
                    </div>
                  </div>
                  {store.phone && (
                    <div className="store-info-item">
                      <span className="store-info-icon">📞</span>
                      <p className="store-info-content">{store.phone}</p>
                    </div>
                  )}
                  <div className="store-info-item">
                    <span className="store-info-icon">🕒</span>
                    <p className="store-info-content">{store.hours}</p>
                  </div>
                </div>
                <div className="store-card-footer">
                  <button 
                    className="store-btn store-btn-primary"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleStoreClick(store)
                    }}
                  >
                    View on Map
                  </button>
                  <button 
                    className="store-btn store-btn-secondary"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleGetDirections(store)
                    }}
                  >
                    Get Directions
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Stores
