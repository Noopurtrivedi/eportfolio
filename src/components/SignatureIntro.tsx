import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Logo, { SIGN_DURATION } from './Logo'

const SEEN_KEY = 'nt-signed'

/* Decided once per page load: play the signature intro on a visitor's first
   open of the session, never for reduced-motion users. */
export const introWillPlay: boolean = (() => {
  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
    return sessionStorage.getItem(SEEN_KEY) !== '1'
  } catch {
    return false
  }
})()

/** Seconds from load until the intro has fully lifted. */
export const INTRO_TOTAL = SIGN_DURATION + 1.1

/**
 * Full-screen opener: the monogram signs itself in gold, the name is written
 * in beside it, then the curtain lifts. Any click or key skips it.
 */
const SignatureIntro: React.FC = () => {
  const [show, setShow] = useState(introWillPlay)

  useEffect(() => {
    if (!show) return
    try { sessionStorage.setItem(SEEN_KEY, '1') } catch { /* private mode */ }

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const done  = () => setShow(false)
    const timer = setTimeout(done, INTRO_TOTAL * 1000)
    window.addEventListener('keydown', done)
    window.addEventListener('pointerdown', done)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('keydown', done)
      window.removeEventListener('pointerdown', done)
      document.body.style.overflow = prevOverflow
    }
  }, [show])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="signature-intro"
          aria-hidden
          className="ink-ground fixed inset-0 z-[100] flex items-center justify-center"
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
        >
          <div className="flex flex-col items-center">
            <Logo size={112} sign={0.15} className="text-gold-muted" />

            {/* The name is "written" left to right as the pen finishes the N. */}
            <motion.p
              initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
              animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
              transition={{ delay: SIGN_DURATION - 0.35, duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
              className="mt-8 font-serif italic font-light text-[#f5f1e8] tracking-tight"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
            >
              Noopur Trivedi
            </motion.p>

            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: SIGN_DURATION + 0.2, duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
              className="mt-3 h-px w-40 origin-left"
              style={{ background: 'linear-gradient(90deg, transparent, #c8a558, transparent)' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SignatureIntro
