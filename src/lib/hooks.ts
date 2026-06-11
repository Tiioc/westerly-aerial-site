import { useEffect, useRef, useState } from 'react'

/** True when the user has asked the OS to reduce motion. */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return reduced
}

/**
 * One-shot scroll reveal. Adds the `is-visible` class once when the element
 * enters the viewport, then stops observing. Works for HTML or SVG elements.
 * The actual animation is defined in index.css (.tile-rise, .line-clip, etc.).
 */
export function useReveal<T extends Element>(options?: {
  threshold?: number
  rootMargin?: string
}) {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      {
        threshold: options?.threshold ?? 0.18,
        rootMargin: options?.rootMargin ?? '0px 0px -8% 0px',
      }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [options?.threshold, options?.rootMargin])
  return ref
}

/** Scroll-Y in pixels (rAF-throttled) for parallax. */
export function useScrollY() {
  const [y, setY] = useState(0)
  const raf = useRef<number | null>(null)
  useEffect(() => {
    const onScroll = () => {
      if (raf.current != null) return
      raf.current = requestAnimationFrame(() => {
        setY(window.scrollY)
        raf.current = null
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf.current != null) cancelAnimationFrame(raf.current)
    }
  }, [])
  return y
}

/** Scroll progress 0→1 across a target element's traversal of the viewport. */
export function useElementScrollProgress<T extends Element>() {
  const ref = useRef<T>(null)
  const [p, setP] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      // 0 when the top hits the bottom of the viewport, 1 when the bottom leaves the top.
      const total = vh + rect.height
      const travelled = vh - rect.top
      setP(Math.max(0, Math.min(1, travelled / total)))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return [ref, p] as const
}
