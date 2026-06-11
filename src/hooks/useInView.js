import { useRef, useState, useEffect } from 'react'

/**
 * Returns [ref, inView].
 * inView becomes true once the element crosses the viewport threshold — fires once.
 */
export function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.12, ...options }
    )

    observer.observe(el)
    return () => observer.unobserve(el)
  }, [])

  return [ref, inView]
}
