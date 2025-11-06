import React, { useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'

function Model({ rotation = [0, 0, 0] }) {
  const gltf = useGLTF('MZKwebsite.glb')
  const { actions } = useAnimations(gltf.animations, gltf.scene)
  useEffect(() => {
    if (actions) Object.values(actions).forEach((a) => a?.play?.())
    // Apply orientation tweak
    if (gltf?.scene) {
      gltf.scene.rotation.set(rotation[0], rotation[1], rotation[2])
    }
  }, [actions])
  return <primitive object={gltf.scene} />
}

export default function Scene({ rotation = [0, 0, 0] }) {
  const { scene } = useThree()
  useEffect(() => {
    scene.background = null
  }, [scene])
  return (
    <>
      {/* Lights roughly matching previous setup */}
      <ambientLight intensity={0.6} />
      <hemisphereLight args={[0xffffff, 0x222222, 0.3]} position={[0,25,0]} />
      <rectAreaLight color={0xa020f0} intensity={11} position={[0, 1.5, -1]} rotation-x={-Math.PI / 2} width={1.5} height={0.5} />
      <rectAreaLight color={0xffffff} intensity={6} position={[-1, 1.5, -4]} rotation-x={-Math.PI / 2} width={11} height={0.5} />
      <rectAreaLight color={0xffffff} intensity={3} position={[0, 1.8, 0]} rotation-x={-Math.PI / 2} width={1} height={1} />
      <rectAreaLight color={0xffffff} intensity={5} position={[-0.5, 0.7, 0.01]} rotation-x={-Math.PI / 2} width={0.2} height={0.2} />
      <rectAreaLight color={0xffffff} intensity={4} position={[0.6, 0.36, 0.5]} rotation-x={Math.PI / 2} width={0.2} height={0.2} />
      <rectAreaLight color={0xffffff} intensity={4} position={[-0.68, 0.36, 0.56]} rotation-x={Math.PI / 2} width={0.2} height={0.2} />
      <rectAreaLight color={0x00ffff} intensity={1} position={[-0.6, 1.8, -0.1]} rotation-x={-Math.PI / 2} width={1} height={1} />
      <Model rotation={rotation} />
    </>
  )
}

useGLTF.preload('MZKwebsite.glb')
