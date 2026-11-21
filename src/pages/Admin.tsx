import { useEffect, useRef, useState } from 'react'

/**
 * Private admin page: embeds the Personal OS dashboard (Google Apps Script web app, access "Only myself").
 * This site holds NO personal data. Everything shown inside the frame comes live from Google, which lets
 * only the owner's signed-in Google account see it; anyone else gets Google's sign-in / no-access screen.
 * The URL below never changes: dashboard updates are deployed to the same deployment ID.
 *
 * Dictation: Google's sandboxed frame can't use the microphone, so speech-to-text runs here (top level) and the
 * words are relayed into the dashboard's capture box. The dashboard accepts them only from noopurtrivedi.com,
 * and only fills the box: nothing is saved until you press Add there.
 */
const DASHBOARD_URL =
  'https://script.google.com/macros/s/AKfycbwYNRlWB5jfAICq7dScFgxJIpisy2MxUTf-ewB-hZYRnUFsY1x1Ezuzf2L2naGBjPryUw/exec'

// Minimal typing for the Web Speech API (not in TypeScript's DOM lib).
type Recognition = {
  lang: string
  interimResults: boolean
  continuous: boolean
  onresult: ((e: { results: ArrayLike<ArrayLike<{ transcript: string }> & { isFinal: boolean }> }) => void) | null
  onerror: ((e: { error: string }) => void) | null
  onend: (() => void) | null
  start: () => void
  stop: () => void
}
type RecognitionCtor = new () => Recognition
const SR: RecognitionCtor | undefined =
  typeof window !== 'undefined'
    ? ((window as unknown as { SpeechRecognition?: RecognitionCtor; webkitSpeechRecognition?: RecognitionCtor }).SpeechRecognition ||
      (window as unknown as { webkitSpeechRecognition?: RecognitionCtor }).webkitSpeechRecognition)
    : undefined

/** Posts to every frame nested inside `w` (Apps Script nests the page a few frames deep). */
function postDeep(w: Window, msg: unknown, depth = 0) {
  if (depth > 4) return
  for (let i = 0; i < w.frames.length; i++) {
    const f = w.frames[i]
    try {
      f.postMessage(msg, '*')
      postDeep(f, msg, depth + 1)
    } catch {
      /* frame not reachable; skip */
    }
  }
}

export default function Admin() {
  const frame = useRef<HTMLIFrameElement>(null)
  const rec = useRef<Recognition | null>(null)
  const [listening, setListening] = useState(false)
  const [note, setNote] = useState('')

  useEffect(() => {
    const prevTitle = document.title
    document.title = 'Admin'
    const robots = document.createElement('meta')
    robots.name = 'robots'
    robots.content = 'noindex, nofollow'
    document.head.appendChild(robots)
    return () => {
      document.title = prevTitle
      robots.remove()
      rec.current?.stop()
    }
  }, [])

  const send = (text: string, final: boolean) => {
    const w = frame.current?.contentWindow
    if (w) postDeep(w, { type: 'pos-dictation', text, final })
  }

  const toggle = () => {
    if (!SR) return
    if (rec.current) {
      rec.current.stop()
      return
    }
    const r = new SR()
    r.lang = navigator.language || 'en-CA'
    r.interimResults = true
    r.continuous = false
    r.onresult = (e) => {
      let text = ''
      let final = false
      for (let i = 0; i < e.results.length; i++) {
        text += e.results[i][0].transcript
        final = e.results[i].isFinal
      }
      send(text, final)
    }
    r.onerror = (e) =>
      setNote(e.error === 'not-allowed' || e.error === 'service-not-allowed' ? 'Microphone blocked: allow it for this site in the browser.' : 'Dictation stopped (' + e.error + ').')
    r.onend = () => {
      rec.current = null
      setListening(false)
    }
    rec.current = r
    setNote('')
    try {
      r.start()
      setListening(true)
    } catch {
      rec.current = null
      setNote('Dictation could not start.')
    }
  }

  return (
    <div className="fixed inset-0 flex flex-col bg-[#0b100e] text-stone-200">
      <header className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 px-4 py-2 text-sm">
        <span className="font-semibold tracking-wide">Admin · Personal OS</span>
        <span className="flex flex-wrap items-center gap-4 text-stone-400">
          {note ? <span className="text-amber-300">{note}</span> : <span className="hidden sm:inline">Not loading? Your browser may block Google sign-in inside other sites.</span>}
          {SR ? (
            <button
              type="button"
              onClick={toggle}
              aria-pressed={listening}
              title="Speak into the dashboard's capture box. Nothing is saved until you press Add."
              className={
                'rounded-md border px-3 py-1 font-medium ' +
                (listening ? 'border-red-500 bg-red-600 text-white' : 'border-white/20 text-stone-100 hover:border-white/40')
              }
            >
              {listening ? '■ Stop' : '🎤 Dictate'}
            </button>
          ) : null}
          <a
            href={DASHBOARD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-100 underline underline-offset-4 hover:text-white"
          >
            Open full screen
          </a>
        </span>
      </header>
      <iframe
        ref={frame}
        title="Personal OS dashboard"
        src={DASHBOARD_URL}
        className="w-full flex-1 border-0 bg-[#0f1514]"
        referrerPolicy="strict-origin"
        allow="clipboard-write"
      />
    </div>
  )
}
