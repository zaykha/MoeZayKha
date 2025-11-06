import { useEffect } from 'react'
import AOS from 'aos'

export default function useAOS() {
  useEffect(() => {
    AOS.init({ duration: 600, once: true, offset: 40 })
  }, [])
}

