import { Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, ContactShadows, Sparkles, RoundedBox } from '@react-three/drei'
import * as THREE from 'three'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'

const REDUCED =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* Procedural studio lighting — no network fetches. */
function StudioEnv() {
  const { gl, scene } = useThree()
  useMemo(() => {
    const pmrem = new THREE.PMREMGenerator(gl)
    const env = pmrem.fromScene(new RoomEnvironment(), 0.06).texture
    scene.environment = env
  }, [gl, scene])
  return null
}

const wood = { color: '#c99a67', roughness: 0.75, metalness: 0.02 }
const woodDark = { color: '#a97e52', roughness: 0.8, metalness: 0.02 }
const steel = { color: '#c8ccd4', roughness: 0.22, metalness: 0.92 }
const darkSteel = { color: '#5a5e66', roughness: 0.35, metalness: 0.85 }
const brickMat = { color: '#9c5240', roughness: 0.9, metalness: 0 }
const plumMat = { color: '#8a5596', roughness: 0.25, metalness: 0.35 }

/* A stack of rough-sawn timber planks. */
function TimberStack(props) {
  return (
    <group {...props}>
      {[0, 1, 2, 3].map((i) => (
        <RoundedBox
          key={i}
          args={[3.2, 0.28, 0.9]}
          radius={0.04}
          position={[
            (i % 2 === 0 ? 0.12 : -0.14) + i * 0.02,
            i * 0.3,
            i % 2 === 0 ? 0.05 : -0.06,
          ]}
          rotation={[0, (i % 2 === 0 ? 1 : -1) * 0.04, 0]}
        >
          <meshStandardMaterial {...(i % 2 ? woodDark : wood)} />
        </RoundedBox>
      ))}
    </group>
  )
}

/* Bundle of steel round tubes. */
function SteelTubes(props) {
  const offsets = [
    [0, 0],
    [0.24, 0.14],
    [0.24, -0.14],
    [0.48, 0],
  ]
  return (
    <group {...props}>
      {offsets.map(([y, z], i) => (
        <mesh key={i} position={[0, y, z]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.13, 0.13, 2.6, 24, 1, true]} />
          <meshStandardMaterial {...steel} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  )
}

/* Structural I-beam. */
function IBeam(props) {
  return (
    <group {...props}>
      <RoundedBox args={[2.1, 0.12, 0.62]} radius={0.02} position={[0, 0.42, 0]}>
        <meshStandardMaterial {...darkSteel} />
      </RoundedBox>
      <RoundedBox args={[2.1, 0.72, 0.12]} radius={0.02}>
        <meshStandardMaterial {...darkSteel} />
      </RoundedBox>
      <RoundedBox args={[2.1, 0.12, 0.62]} radius={0.02} position={[0, -0.42, 0]}>
        <meshStandardMaterial {...darkSteel} />
      </RoundedBox>
    </group>
  )
}

function Brick(props) {
  return (
    <RoundedBox args={[1.15, 0.55, 0.62]} radius={0.05} {...props}>
      <meshStandardMaterial {...brickMat} />
    </RoundedBox>
  )
}

/* The DBW diamond — brand motif as a satin plum gem. */
function PlumDiamond(props) {
  const ref = useRef()
  useFrame((_, dt) => {
    if (ref.current && !REDUCED) ref.current.rotation.y += dt * 0.55
  })
  return (
    <mesh ref={ref} {...props}>
      <octahedronGeometry args={[0.55, 0]} />
      <meshStandardMaterial {...plumMat} flatShading />
    </mesh>
  )
}

/* Whole composition drifts with pointer for parallax. */
function Composition() {
  const group = useRef()
  useFrame(({ pointer }, dt) => {
    if (!group.current || REDUCED) return
    const targetY = pointer.x * 0.22
    const targetX = -pointer.y * 0.12
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetY, 2.4, dt)
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, targetX, 2.4, dt)
  })

  const float = REDUCED
    ? { floatIntensity: 0, rotationIntensity: 0, speed: 0 }
    : {}

  return (
    <group ref={group} position={[3.1, -0.35, -0.4]} rotation={[0.05, -0.3, 0]} scale={0.92}>
      <Float speed={1.1} rotationIntensity={0.18} floatIntensity={0.5} {...float}>
        <TimberStack position={[0.15, -1.05, 0]} scale={0.9} />
      </Float>
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.7} {...float}>
        <SteelTubes position={[0.55, 1.05, -0.9]} rotation={[0.1, 0.55, 0.12]} scale={0.85} />
      </Float>
      <Float speed={1.3} rotationIntensity={0.35} floatIntensity={0.6} {...float}>
        <IBeam position={[1.75, 2.1, -1.5]} rotation={[0.4, -0.5, -0.18]} scale={0.85} />
      </Float>
      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.8} {...float}>
        <Brick position={[-1.05, -0.15, 0.75]} rotation={[0.2, 0.7, 0.1]} scale={0.9} />
      </Float>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={1} {...float}>
        <PlumDiamond position={[-0.55, 2.5, 0.1]} scale={0.85} />
      </Float>

      <ContactShadows
        position={[0, -1.55, 0]}
        opacity={0.55}
        scale={12}
        blur={2.6}
        far={4}
        color="#14090f"
      />
    </group>
  )
}

export default function Hero3D() {
  return (
    <div className="hero__canvas" aria-hidden="true">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0.9, 8.6], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        style={{ pointerEvents: 'none' }}
        eventSource={typeof document !== 'undefined' ? document.body : undefined}
        eventPrefix="client"
      >
        <Suspense fallback={null}>
          <StudioEnv />
          <ambientLight intensity={0.25} />
          <directionalLight position={[6, 8, 4]} intensity={1.1} color="#fff2e2" />
          <pointLight position={[-6, 2, -4]} intensity={22} color="#8a5596" />
          <pointLight position={[4, -2, 5]} intensity={14} color="#94566f" />
          <Composition />
          {!REDUCED && (
            <Sparkles count={70} scale={[14, 8, 6]} size={1.6} speed={0.25} opacity={0.35} color="#d9c2e0" />
          )}
          <fog attach="fog" args={['#221a28', 14, 26]} />
        </Suspense>
      </Canvas>
    </div>
  )
}
