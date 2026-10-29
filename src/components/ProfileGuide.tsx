import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowLeft, ArrowUpRight, Briefcase, Check, Copy, CornerDownLeft, FileText,
  Linkedin, MessageCircle, Rocket, Search, Sparkles, User, X, Award, Mail,
} from 'lucide-react'
import { aiProducts, workExperience } from '../data/projects'
import Logo from './Logo'

/* ────────────────────────────────────────────────────────────────────────────
   Profile guide: a scripted, keyboard-first companion (⌘K / Ctrl+K).
   Every answer is written from the facts already published on this site, so
   it never improvises. It is labelled as guided answers, not a live AI.
   ──────────────────────────────────────────────────────────────────────────── */

const EMAIL = 'noopur.trivedi@hotmail.com'
const current = workExperience[0]

type Answer = { q: string; keywords: string; body: React.ReactNode; to?: { label: string; href: string } }

const answers: Answer[] = [
  {
    q: 'What are you focused on now?',
    keywords: 'role current job now position title focus recent latest',
    body: (
      <>
        My focus is the AI product portfolio: Trinity Talent is live in public
        beta, with AdaptIQ and Kestra DML in development. Most recently I was{' '}
        {current.title} ({current.period}), leading enterprise modernization in
        global aerospace: Microsoft 365 and data migration, an LMS replacement
        with 160+ documented requirements, RPA, legacy app modernization, and
        SAP finance coordination.
      </>
    ),
    to: { label: 'Read the founder journey', href: '/' },
  },
  {
    q: 'Which industries have you worked in?',
    keywords: 'industries sectors domain experience years utilities aerospace telecom oil gas logistics',
    body: (
      <>
        14+ years across five: utilities, aerospace, telecommunications,
        logistics, and oil &amp; gas. The experience timeline has the roles
        and dates.
      </>
    ),
    to: { label: 'Read the full timeline', href: '/profile#experience' },
  },
  {
    q: 'What AI are you building?',
    keywords: 'ai products adaptiq kestra trinity talent artha askmadhav llm verification governance orchestration startup',
    body: (
      <>
        {aiProducts.length} proprietary AI and venture products. Trinity Talent, an
        AI career-intelligence platform, is live in beta at trinitytalent.ca.
        AdaptIQ (a verification layer for LLMs and agents) and Kestra DML
        (decision governance before generation) lead the research work. On AdaptIQ's finance track, contamination fell from
        ~52% to 17% while faithfulness rose from ~0.75 to 0.91. The rest stay at
        capability level until they launch.
      </>
    ),
    to: { label: 'Open the AI portfolio', href: '/ai' },
  },
  {
    q: 'What tools and platforms do you know?',
    keywords: 'skills tools sap microsoft 365 azure sharepoint power bi sql uipath jira servicenow stack',
    body: (
      <>
        SAP (EAM, CCS, Finance), Microsoft 365 / SharePoint / Azure, data migration,
        Power BI / Tableau / Pentaho, SQL, UiPath RPA, ServiceNow, Jira, and on the
        AI side: local LLMs, LoRA fine-tuning, and evaluation frameworks.
      </>
    ),
    to: { label: 'See all skills', href: '/profile#skills' },
  },
  {
    q: 'Are you open to new roles?',
    keywords: 'hiring open roles opportunities available job recruit interview',
    body: (
      <>
        Yes. Senior BA, transformation lead, and product-strategy roles, plus
        advisory, speaking, and selective investor and partner conversations as
        the AI products approach launch. I'm a Canadian Citizen based in Canada.
      </>
    ),
    to: { label: 'Start a conversation', href: '/contact' },
  },
  {
    q: 'What credentials do you hold?',
    keywords: 'education degree certification istqb ctfl bba csm scrum azure credentials verified',
    body: (
      <>
        A BBA in Marketing from Thompson Rivers University, plus Certified Scrum
        Master (CSM), Microsoft Azure AI Fundamentals, ISTQB CTFL, and Software
        Product Management (University of Alberta). The degree and the CTFL are
        viewable as verified PDFs.
      </>
    ),
    to: { label: 'View certifications', href: '/certifications' },
  },
]

type Action = { label: string; hint: string; icon: React.ElementType; run: (nav: ReturnType<typeof useNavigate>) => void }

const pages: Action[] = [
  { label: 'Founder Journey',  hint: 'Page', icon: Rocket,    run: (n) => n('/') },
  { label: 'Profile',          hint: 'Page', icon: User,      run: (n) => n('/profile') },
  { label: 'Enterprise Work',  hint: 'Page', icon: Briefcase, run: (n) => n('/work') },
  { label: 'AI Projects',      hint: 'Page', icon: Sparkles,  run: (n) => n('/ai') },
  { label: 'Trinity Talent (beta)', hint: 'Link', icon: ArrowUpRight, run: () => window.open('https://trinitytalent.ca', '_blank', 'noopener') },
  { label: 'Who I Am',         hint: 'Page', icon: User,      run: (n) => n('/who-i-am') },
  { label: 'Certifications',   hint: 'Page', icon: Award,     run: (n) => n('/certifications') },
  { label: 'Contact',          hint: 'Page', icon: Mail,      run: (n) => n('/contact') },
  { label: 'Open résumé (PDF)',hint: 'File', icon: FileText,  run: () => window.open('/Noopur-Trivedi-Resume.pdf', '_blank', 'noopener') },
  { label: 'LinkedIn profile', hint: 'Link', icon: Linkedin,  run: () => window.open('https://linkedin.com/in/noopur-trivedi', '_blank', 'noopener') },
]

/** Every query term must begin some word in the text ("ai" ≠ "domain"). */
const matches = (text: string, query: string) => {
  const words = text.toLowerCase().split(/[^a-z0-9+]+/)
  return query.split(/\s+/).every((term) => words.some((w) => w.startsWith(term)))
}

const ProfileGuide: React.FC = () => {
  const [open, setOpen]       = useState(false)
  const [query, setQuery]     = useState('')
  const [active, setActive]   = useState<Answer | null>(null)
  const [copied, setCopied]   = useState(false)
  const [cursor, setCursor]   = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((o) => !o)
      } else if (e.key === 'Escape') {
        setOpen(false)
      }
    }
    const onOpen = () => setOpen(true)
    window.addEventListener('keydown', onKey)
    window.addEventListener('open-guide', onOpen)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('open-guide', onOpen)
    }
  }, [])

  useEffect(() => {
    if (open) {
      setQuery(''); setActive(null); setCursor(0)
      setTimeout(() => inputRef.current?.focus(), 60)
    }
  }, [open])

  const q = query.trim().toLowerCase()
  const matchedAnswers = useMemo(
    () => (q ? answers.filter((a) => matches(a.q + ' ' + a.keywords, q)) : answers),
    [q],
  )
  const matchedPages = useMemo(
    () => (q ? pages.filter((p) => matches(p.label, q)) : pages),
    [q],
  )
  const total = matchedAnswers.length + matchedPages.length

  const close = () => setOpen(false)
  const choose = (i: number) => {
    if (i < matchedAnswers.length) { setActive(matchedAnswers[i]); return }
    const p = matchedPages[i - matchedAnswers.length]
    if (p) { p.run(navigate); close() }
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch { /* clipboard blocked: the address is still visible */ }
  }

  const onInputKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setCursor((c) => Math.min(c + 1, total - 1)) }
    if (e.key === 'ArrowUp')   { e.preventDefault(); setCursor((c) => Math.max(c - 1, 0)) }
    if (e.key === 'Enter' && total > 0) { e.preventDefault(); choose(cursor) }
  }

  return (
    <>
      {/* Floating launcher */}
      <AnimatePresence>
        {!open && (
          <motion.button
            key="launcher"
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.9 }}
            transition={{ duration: 0.4, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setOpen(true)}
            className="fixed z-40 right-4 sm:right-6 group inline-flex items-center gap-2.5 pl-2 pr-4 h-12 rounded-full border border-white/10 text-[13px] font-medium text-[#f5f1e8] shadow-[0_18px_40px_-16px_rgba(0,0,0,0.6)]"
            style={{ background: 'rgba(11,16,14,0.92)', bottom: 'calc(env(safe-area-inset-bottom, 0px) + 1.25rem)' }}
            aria-label="Open the profile guide"
          >
            <span className="relative w-8 h-8 rounded-full bg-gold-muted/15 flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-gold-muted" />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#3fbf8f] ring-2 ring-[#0b100e]" />
            </span>
            Ask about my work
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            key="guide"
            className="fixed inset-0 z-[70] flex items-start sm:items-center justify-center px-4 pt-20 sm:pt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-[#060908]/70 backdrop-blur-sm" onClick={close} />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Profile guide"
              initial={{ opacity: 0, y: 18, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-xl rounded-3xl border border-white/10 overflow-hidden text-[#ece7da] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]"
              style={{ background: '#0e1412' }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 px-5 pt-5 pb-4 border-b border-white/[0.07]">
                <span className="w-10 h-10 rounded-full bg-[#0b100e] border border-white/10 flex items-center justify-center">
                  <Logo size={20} className="text-gold-muted" />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-serif text-[17px] text-[#f5f1e8] leading-tight">Profile guide</p>
                  <p className="text-[11px] text-[#ece7da]/45">Guided answers drawn from this site, not a live AI</p>
                </div>
                <button onClick={close} className="w-9 h-9 rounded-full inline-flex items-center justify-center text-[#ece7da]/50 hover:text-[#f5f1e8] hover:bg-white/5" aria-label="Close">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <AnimatePresence mode="wait" initial={false}>
                {active ? (
                  <motion.div
                    key="answer"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.22 }}
                    className="p-5"
                  >
                    <button onClick={() => setActive(null)} className="inline-flex items-center gap-1.5 text-[12px] text-[#ece7da]/50 hover:text-[#f5f1e8] mb-4">
                      <ArrowLeft className="w-3.5 h-3.5" /> All questions
                    </button>
                    <div className="flex justify-end mb-3">
                      <p className="max-w-[85%] rounded-2xl rounded-br-md px-4 py-2.5 text-[14px] bg-[#ece7da] text-[#0b100e]">{active.q}</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="w-7 h-7 shrink-0 rounded-full bg-[#0b100e] border border-white/10 flex items-center justify-center">
                        <Logo size={13} className="text-gold-muted" />
                      </span>
                      <div className="rounded-2xl rounded-tl-md px-4 py-3 text-[14px] leading-relaxed bg-white/[0.05] border border-white/[0.07] text-[#ece7da]/85">
                        {active.body}
                      </div>
                    </div>
                    {active.to && (
                      <button
                        onClick={() => { navigate(active.to!.href); close() }}
                        className="mt-5 ml-10 inline-flex items-center gap-2 h-10 px-4 rounded-full bg-gold-muted text-[#0b100e] text-[13px] font-semibold hover:bg-[#d9b96a] transition-colors"
                      >
                        {active.to.label} <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </motion.div>
                ) : (
                  <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }}>
                    <div className="flex items-center gap-3 px-5 py-3 border-b border-white/[0.07]">
                      <Search className="w-4 h-4 text-[#ece7da]/40" />
                      <input
                        ref={inputRef}
                        value={query}
                        onChange={(e) => { setQuery(e.target.value); setCursor(0) }}
                        onKeyDown={onInputKey}
                        placeholder="Ask a question or jump to a page…"
                        className="flex-1 bg-transparent outline-none text-[15px] text-[#f5f1e8] placeholder-[#ece7da]/35"
                      />
                      <kbd className="hidden sm:inline text-[10px] text-[#ece7da]/40 border border-white/10 rounded px-1.5 py-0.5">ESC</kbd>
                    </div>

                    <div className="max-h-[55vh] overflow-y-auto p-2">
                      {total === 0 && (
                        <p className="px-4 py-8 text-center text-[13px] text-[#ece7da]/50">
                          Nothing matches that yet. Email me directly and I'll answer it myself.
                        </p>
                      )}
                      {matchedAnswers.length > 0 && (
                        <p className="px-3 pt-2 pb-1.5 text-[10px] uppercase tracking-[0.22em] font-semibold text-[#d9b96a]/80">Questions</p>
                      )}
                      {matchedAnswers.map((a, i) => (
                        <button
                          key={a.q}
                          onMouseEnter={() => setCursor(i)}
                          onClick={() => choose(i)}
                          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-[14px] transition-colors ${cursor === i ? 'bg-white/[0.07] text-[#f5f1e8]' : 'text-[#ece7da]/75'}`}
                        >
                          <MessageCircle className="w-4 h-4 text-gold-muted/80 shrink-0" />
                          <span className="flex-1">{a.q}</span>
                          {cursor === i && <CornerDownLeft className="w-3.5 h-3.5 text-[#ece7da]/40" />}
                        </button>
                      ))}
                      {matchedPages.length > 0 && (
                        <p className="px-3 pt-3 pb-1.5 text-[10px] uppercase tracking-[0.22em] font-semibold text-[#d9b96a]/80">Go to</p>
                      )}
                      {matchedPages.map((p, j) => {
                        const i = matchedAnswers.length + j
                        return (
                          <button
                            key={p.label}
                            onMouseEnter={() => setCursor(i)}
                            onClick={() => choose(i)}
                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-[14px] transition-colors ${cursor === i ? 'bg-white/[0.07] text-[#f5f1e8]' : 'text-[#ece7da]/75'}`}
                          >
                            <p.icon className="w-4 h-4 text-[#ece7da]/45 shrink-0" />
                            <span className="flex-1">{p.label}</span>
                            <span className="text-[11px] text-[#ece7da]/35">{p.hint}</span>
                          </button>
                        )
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Footer: the direct line */}
              <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 border-t border-white/[0.07] bg-black/20">
                <span className="text-[12px] text-[#ece7da]/55">{EMAIL}</span>
                <button onClick={copyEmail} className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#d9b96a] hover:text-[#f1dfae]">
                  {copied ? <><Check className="w-3.5 h-3.5" /> Copied</> : <><Copy className="w-3.5 h-3.5" /> Copy email</>}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ProfileGuide
