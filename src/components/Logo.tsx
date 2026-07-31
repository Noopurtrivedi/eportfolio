import React from 'react'
import { clsx } from 'clsx'

/**
 * Stacked-lobe monogram: an upper teardrop and a lower ring with an N running
 * through both, regularized from the original artwork onto a 64-unit grid so
 * every arc is a true circle. Drawn as paths, so it carries no font dependency.
 */
const Paths: React.FC<{ weight: number }> = ({ weight }) => (
  <g
    stroke="currentColor"
    strokeWidth={weight}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
  >
    <path d="M29.6 33.4 L23.92 24.57 A11.4 11.4 0 1 1 38.86 28.46 Z" />
    <path d="M45.75 31.37 A16.1 16.1 0 1 1 18.45 31.37" />
    <path d="M22.2 28.6 L35.2 48.8 L35.2 30.6" />
  </g>
)

/** Inked bounds of the mark, trimmed of the empty grid margins. */
const BOX = { x: 15, y: 6, w: 34.2, h: 51 }

type LogoProps = {
  /** 'mark' inherits currentColor; 'tile' renders the gold-on-ink app tile. */
  variant?: 'mark' | 'tile'
  /** Rendered height in pixels. Width follows the mark's 0.67 aspect ratio. */
  size?: number
  className?: string
}

const Logo: React.FC<LogoProps> = ({ variant = 'mark', size = 22, className }) => {
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
      <Paths weight={2.2} />
    </svg>
  )
}

export default Logo
