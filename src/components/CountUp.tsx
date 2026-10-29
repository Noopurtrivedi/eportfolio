import React, { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

interface CountUpProps {
  to: number
  suffix?: string
  duration?: number
  className?: string
}

/** Counts from zero to `to` the first time it scrolls into view. */
const CountUp: React.FC<CountUpProps> = ({ to, suffix = '', duration = 1.6, className }) => {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduce = useReducedMotion()
  const [value, setValue] = useState(reduce ? to : 0)

  useEffect(() => {
    if (!inView || reduce) return
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, reduce, to, duration])

  return (
    <span ref={ref} className={className}>
      {value}{suffix}
    </span>
  )
}

export default CountUp
