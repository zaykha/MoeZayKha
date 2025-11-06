import { useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import useMediaQuery from '../../hooks/useMediaQuery'

const V = (x, y, z) => ({ x, y, z })

const POSES_DESKTOP = {
  home: {
    pos: V(1.8657201411138535, 1.4935185925537058, 2.66097357050962),
    tgt: V(-3.7169063104491844, -0.14855073501722424, -0.6087966729655833),
  },
  cv: {
    pos: V(-0.2902927614590909, 0.9619112082046571, -0.37407924668938547),
    tgt: V(-3.7488991606326936, -0.019425884611936596, -0.6641730068910666),
  },
  skills: {
    pos: V(-0.3770444383937166, 1.2798507946275264, 0.11017145589707791),
    tgt: V(-3.6317596060389983, 1.2749812822443247, 0.056998958031140634),
  },
  industries: {
    pos: V(-0.40273215727976264, 0.8630821307561408, -0.5543521621716916),
    tgt: V(-0.44797742114527406, 0.7697220507622689, -1.4991421131936602),
  },
  portfolio: {
    pos: V(-0.23336961201897644, 0.6547204944557304, 0.0713300436858463),
    tgt: V(-0.7429086064943, 0.6117055886667023, 0.023370974162065156),
  },
  softskills: {
    pos: V(-0.36928712640238687, 0.4982440235922387, 0.5946230613675185),
    tgt: V(-0.39382685371321574, 0.49879123456509883, 0.6038348267135418),
  },
  contact: {
    pos: V(0.6656646841600906, 0.6549583621736152, 0.8508129496965244),
    tgt: V(-1.3192882450818835, -1.0116399272442167, -1.1155847519569326),
  },
}

const POSES_MOBILE = {
  home: {
    pos: V(2.245283037186975, 2.651320100700064, 2.54536487813899),
    tgt: V(-5.153252283464849, 0.5745845805548225, -5.689631167038444),
  },
  cv: {
    pos: V(-0.29653563936200733, 0.9291892973224034, -0.28632078167634223),
    tgt: V(-2.8228853456474674, 1.4256323448827652, -2.8122337979797063),
  },
  skills: {
    pos: V(-0.08003414175494417, 1.6734134659507176, -0.17488807271056256),
    tgt: V(-3.010387295269596, 1.470477769999485, -0.2236068605613211),
  },
  industries: {
    pos: V(-0.24792986761535457, 1.1128008938846679, -0.1351727777042857),
    tgt: V(-0.15983667397475823, 1.145348997595008, -3.071446986880469),
  },
  portfolio: {
    pos: V(-0.23686830473012455, 0.7047768679681863, 0.2761021527418035),
    tgt: V(-3.0946029890454256, 0.9625790878791635, -2.505748961451268),
  },
  softskills: {
    pos: V(-0.40879038009790625, 0.5530325128008731, 0.5278328019952607),
    tgt: V(-4.1844260577815975, 0.18960640487674507, 0.6923041526045425),
  },
  contact: {
    pos: V(0.5469893310933359, 0.5361876472782612, 0.7878330278126424),
    tgt: V(0.5318387932809859, 0.8218399497695639, -3.631144221788547),
  },
}

export default function CameraRig({ active, controls }) {
  const isMobile = useMediaQuery('(max-width: 1024px)')
  const { camera } = useThree()

  // Set initial pose
  useEffect(() => {
    const initial = (isMobile ? POSES_MOBILE : POSES_DESKTOP).home
    camera.position.set(initial.pos.x, initial.pos.y, initial.pos.z)
    if (controls?.current) {
      controls.current.target.set(initial.tgt.x, initial.tgt.y, initial.tgt.z)
      controls.current.update()
    }
  }, [camera, controls, isMobile])

  useFrame((_, delta) => {
    const poses = isMobile ? POSES_MOBILE : POSES_DESKTOP
    const p = poses[active] || poses.home
    // Framerate-independent damping
    const damp = (a, b, lambda, dt) => a + (b - a) * (1 - Math.exp(-lambda * dt))
    const lambda = 4
    camera.position.set(
      damp(camera.position.x, p.pos.x, lambda, delta),
      damp(camera.position.y, p.pos.y, lambda, delta),
      damp(camera.position.z, p.pos.z, lambda, delta)
    )
    if (controls?.current) {
      const tgt = controls.current.target
      tgt.set(
        damp(tgt.x, p.tgt.x, lambda, delta),
        damp(tgt.y, p.tgt.y, lambda, delta),
        damp(tgt.z, p.tgt.z, lambda, delta)
      )
      controls.current.update()
    }
  })

  return null
}
