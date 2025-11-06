import React, { Suspense, useMemo, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, Stars, PerformanceMonitor, AdaptiveDpr, Environment, Html, useProgress } from '@react-three/drei'
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib'
import Scene from './Scene'
import CameraRig from './CameraRig'

function Loader() {
  const { progress } = useProgress()
  return (
    <Html center>
      <div aria-live="polite" style={{ color: 'white', fontSize: 14 }}>Loading {progress.toFixed(0)}%</div>
    </Html>
  )
}

export default function Canvas3D({ active }) {
  const dpr = useMemo(() => [0.75, 1.5], [])
  const controls = useRef()
  return (
    <Canvas
      dpr={dpr}
      gl={{ powerPreference: 'high-performance', antialias: false }}
      camera={{ fov: 75, near: 0.1, far: 1000 }}
      onCreated={() => RectAreaLightUniformsLib.init()}
    >
      <PerformanceMonitor>
        <AdaptiveDpr pixelated />
      </PerformanceMonitor>
      <Suspense fallback={<Loader />}>
        <Environment preset="city" />
        {/* Default model orientation (no forced rotation) */}
        <Scene />
        <Stars radius={80} depth={40} count={900} factor={3.5} fade speed={0.5} />
        <Preload all />
      </Suspense>
      <CameraRig active={active} controls={controls} />
      <OrbitControls ref={controls} enableDamping dampingFactor={0.1} />
    </Canvas>
  )
}
