import React from 'react'
import { clsx } from 'clsx'
import { motion, useReducedMotion } from 'framer-motion'

/**
 * Stacked-lobe monogram: an upper teardrop and a lower ring with an N running
 * through both, regularized from the original artwork onto a 64-unit grid so
 * every arc is a true circle. Drawn as paths, so it carries no font dependency.
 */
const STROKES = [
  'M29.6 33.4 L23.92 24.57 A11.4 11.4 0 1 1 38.86 28.46 Z', // upper lobe
  'M45.75 31.37 A16.1 16.1 0 1 1 18.45 31.37',               // lower ring
  'M22.2 28.6 L35.2 48.8 L35.2 30.6',                         // the N
]

/* Pen timing for the signed version: each stroke starts just before the
   previous one lifts, so the mark reads as one continuous signature. */
const SIGN = [
  { delay: 0,    duration: 0.9  },
  { delay: 0.75, duration: 0.85 },
  { delay: 1.45, duration: 0.6  },
]

const Paths: React.FC<{ weight: number; sign?: number | false }> = ({ weight, sign: signAt = false }) => {
  const sign = useReducedMotion() ? false : signAt
  return (
  <g
    stroke="currentColor"
    strokeWidth={weight}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
  >
    {STROKES.map((d, i) =>
      sign === false ? (
        <path key={i} d={d} />
      ) : (
        <motion.path
          key={i}
          d={d}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { delay: sign + SIGN[i].delay, duration: SIGN[i].duration, ease: [0.65, 0, 0.35, 1] },
            opacity:    { delay: sign + SIGN[i].delay, duration: 0.01 },
          }}
        />
      ),
    )}
  </g>
  )
}

/** Total time, in seconds, the signed mark takes to finish drawing. */
export const SIGN_DURATION = SIGN[2].delay + SIGN[2].duration

/** Inked bounds of the mark, trimmed of the empty grid margins. */
const BOX = { x: 15, y: 6, w: 34.2, h: 51 }

type LogoProps = {
  /** 'mark' inherits currentColor; 'tile' renders the gold-on-ink app tile. */
  variant?: 'mark' | 'tile'
  /** Rendered height in pixels. Width follows the mark's 0.67 aspect ratio. */
  size?: number
  className?: string
  /** Draw the mark stroke by stroke like a signature, starting after this many seconds. */
  sign?: number | false
}

const Logo: React.FC<LogoProps> = ({ variant = 'mark', size = 22, className, sign = false }) => {
  if (variant === 'tile') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        role="img"
        aria-label="Noopur Trivedi"
        className={className}
      >
        <rect width="64" height="64" rx="14" fill="#0f1311" />
        <g
          transform="translate(32 32) scale(0.9) translate(-32 -32)"
          style={{ color: '#c8a558' }}
        >
          <Paths weight={3.2} />
        </g>
      </svg>
    )
  }

  return (
    <svg
      width={size * (BOX.w / BOX.h)}
      height={size}
      viewBox={`${BOX.x} ${BOX.y} ${BOX.w} ${BOX.h}`}
      fill="none"
      role="img"
      aria-label="Noopur Trivedi"
      className={clsx('overflow-visible', className)}
    >
      <Paths weight={2.2} sign={sign} />
    </svg>
  )
}

export default Logo
