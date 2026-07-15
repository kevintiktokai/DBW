import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'

const REDUCED =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

function Gem() {
  const ref = useRef()
  useFrame((_, dt) => {
    if (ref.current && !REDUCED) ref.current.rotation.y += dt * 0.6
  })
  return (
    <Float speed={REDUCED ? 0 : 1.6} rotationIntensity={REDUCED ? 0 : 0.4} floatIntensity={REDUCED ? 0 : 1}>
      <mesh ref={ref} rotation={[0.15, 0, 0.1]}>
        <octahedronGeometry args={[1.15, 0]} />
        <meshStandardMaterial color="#a06cad" roughness={0.3} metalness={0.25} flatShading />
      </mesh>
    </Float>
  )
}

/**
 * Small decorative 3D diamond — the brand motif, used in the CTA band.
 * Mounts its canvas only when scrolled into view.
 */
export default function DiamondSpin({ className, style }) {
  const holder = useRef()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { rootMargin: '120px' }
    )
    if (holder.current) io.observe(holder.current)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={holder} className={className} style={style} aria-hidden="true">
      {visible && (
        <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 4.2], fov: 40 }} gl={{ alpha: true }}>
          <ambientLight intensity={1.1} />
          <directionalLight position={[4, 6, 3]} intensity={3} color="#ffe9d2" />
          <pointLight position={[-4, -2, 3]} intensity={16} color="#94566f" />
          <Gem />
        </Canvas>
      )}
    </div>
  )
}
