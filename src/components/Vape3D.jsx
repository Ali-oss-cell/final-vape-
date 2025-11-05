import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, useGLTF } from '@react-three/drei'
import { useRef } from 'react'

function VapeModel({ url }) {
  const { scene } = useGLTF(url)
  const meshRef = useRef()

  // Optional: Add subtle rotation animation (commented out for user control)
  // useFrame((state, delta) => {
  //   if (meshRef.current) {
  //     meshRef.current.rotation.y += delta * 0.1
  //   }
  // })

  return (
    <primitive 
      object={scene} 
      ref={meshRef}
      scale={1} 
      position={[0, 0, 0]}
    />
  )
}

function Vape3D({ modelPath = '/models/vape.glb' }) {
  return (
    <div style={{ width: '100%', height: '100%', background: 'transparent' }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />
        <Suspense fallback={
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#00d4ff" wireframe />
          </mesh>
        }>
          <VapeModel url={modelPath} />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          enableRotate={true}
          autoRotate={false}
          minDistance={3}
          maxDistance={10}
        />
      </Canvas>
    </div>
  )
}

export default Vape3D

