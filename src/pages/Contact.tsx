import React, { useState } from 'react'
import { Linkedin, Mail, MapPin, Send, ArrowUpRight, AlertTriangle, Coffee } from 'lucide-react'
import { motion } from 'framer-motion'

/* PLACEHOLDER: set to a Calendly / Cal.com booking URL to enable one-click
   scheduling. Until then the coffee-chat card falls back to a pre-filled email. */
const SCHEDULING_URL = ''

const WEB3FORMS_KEY = '2e721e4d-8afd-4911-ae66-5f2766eb52cb'

const inputCls = `
  w-full px-5 py-3.5 text-sm text-ink placeholder-ink/35 font-medium
  bg-surface border border-ink/15
  focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/15
  transition-colors duration-200
`

type Status = 'idle' | 'sending' | 'sent' | 'error'

const Contact: React.FC = () => {
  const [form, setForm]       = useState({ name: '', email: '', context: '', message: '', botcheck: '' })
  const [status, setStatus]   = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === 'sending') return

    // Honeypot: if filled, silently succeed (it's a bot)
    if (form.botcheck) {
      setStatus('sent')
      return
    }

    setStatus('sending')
    setErrorMsg('')

    const payload = {
      access_key: WEB3FORMS_KEY,
      subject:    `[noopurtrivedi.com] ${form.context || 'New inquiry'} — from ${form.name}`,
      from_name:  `${form.name} · via noopurtrivedi.com`,
      replyto:    form.email,
      name:       form.name,
      email:      form.email,
      topic:      form.context,
      message:    form.message,
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body:    JSON.stringify(payload),
      })
      const result = await res.json()
      if (result.success) {
        setStatus('sent')
        setForm({ name: '', email: '', context: '', message: '', botcheck: '' })
      } else {
        setStatus('error')
        setErrorMsg(result.message || 'Something went wrong. Please email me directly.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Network issue — please try again, or email me directly.')
    }
  }

  return (
    <div className="bg-canvas">

      {/* Header */}
      <section className="relative border-b border-ink/10 pt-36 pb-16 overflow-hidden">
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="pointer-events-none absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(closest-side, rgba(15,93,74,0.08), transparent 70%)' }}
        />
        <div className="container-wide relative">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow mb-4 inline-flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-soft" />
            Contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="display-xl mb-6 max-w-3xl"
          >
            Let’s find a time
            <span className="italic font-light" style={{ color: '#0f5d4a' }}> — for a coffee chat, a collaboration, or a role.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="lead max-w-xl"
          >
            Hiring and interview conversations, collaborations, investor and
            partner introductions, advisory — or simply comparing notes on
            enterprise transformation and AI. I read every message and respond
            within one business day.
          </motion.p>
        </div>
      </section>

      {/* Form + info */}
      <section className="container-wide py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Form */}
          <div className="lg:col-span-7">
            {status === 'sent' ? (
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="border border-accent/25 p-12 text-center bg-accent-soft/30"
              >
                <motion.div
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="text-4xl mb-4 text-accent"
                >✦</motion.div>
                <h3 className="font-serif text-2xl font-medium text-ink mb-2">Message sent.</h3>
                <p className="text-ink/65 text-sm max-w-md mx-auto">
                  Thank you — it’s landed in my inbox. I’ll be in touch within
                  one business day. If something’s urgent, you can also reach
                  me directly at{' '}
                  <a className="underline text-accent" href="mailto:noopur.trivedi@hotmail.com">
                    noopur.trivedi@hotmail.com
                  </a>.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="btn-outline mt-8 px-6 py-2.5 text-[12px]"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Honeypot — hidden from real users, bots fill it */}
                <input
                  type="text"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.botcheck}
                  onChange={(e) => setForm({ ...form, botcheck: e.target.value })}
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="section-label block mb-2">Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className={inputCls}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      disabled={status === 'sending'}
                    />
                  </div>
                  <div>
                    <label className="section-label block mb-2">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      className={inputCls}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      disabled={status === 'sending'}
                    />
                  </div>
                </div>

                <div>
                  <label className="section-label block mb-2">What’s this about?</label>
                  <select
                    required
                    className={inputCls + ' cursor-pointer'}
                    value={form.context}
                    onChange={(e) => setForm({ ...form, context: e.target.value })}
                    disabled={status === 'sending'}
                  >
                    <option value="">Select a topic…</option>
                    <option value="Coffee chat">Coffee chat</option>
                    <option value="Collaboration / partnership">Collaboration / partnership</option>
                    <option value="Hiring / interview conversation">Hiring / interview conversation</option>
                    <option value="Investor conversation">Investor conversation</option>
                    <option value="Advisory / speaking">Advisory / speaking</option>
                    <option value="Enterprise program (SAP / M365 / data)">Enterprise program (SAP / M365 / data)</option>
                    <option value="AI product conversation">AI product conversation</option>
                    <option value="Something else">Something else</option>
                  </select>
                </div>

                <div>
                  <label className="section-label block mb-2">Message</label>
                  <textarea
                    required
                    rows={6}
                    placeholder="Briefly: the team, the scope, and any deadlines or constraints I should know about."
                    className={inputCls}
                    style={{ resize: 'vertical' }}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    disabled={status === 'sending'}
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-start gap-3 p-4 border border-red-300/50 bg-red-50 text-[13px] text-red-900">
                    <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>
                      {errorMsg}{' '}
                      <a href="mailto:noopur.trivedi@hotmail.com" className="underline font-semibold">
                        noopur.trivedi@hotmail.com
                      </a>
                    </span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="group relative overflow-hidden btn-primary px-8 py-4 text-[13px] self-start disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 inline-flex items-center">
                    {status === 'sending'
                      ? <>Sending<span className="ml-1 inline-block animate-pulse-soft">…</span></>
                      : <>Send Message <Send className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" /></>}
                  </span>
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-canvas/25 to-transparent transition-transform duration-700 ease-out-soft group-hover:translate-x-full" />
                </button>

                <p className="text-[11px] text-ink/40 mt-1">
                  Delivered directly to my inbox. Prefer to email me yourself?{' '}
                  <a href="mailto:noopur.trivedi@hotmail.com" className="text-accent underline">
                    noopur.trivedi@hotmail.com
                  </a>
                </p>
              </form>
            )}
          </div>

          {/* Side */}
          <div className="lg:col-span-5 flex flex-col gap-10">

            {/* Coffee chat */}
            <div className="border border-accent/25 p-7" style={{ background: 'rgba(15,93,74,0.04)' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 border border-accent/30 flex items-center justify-center">
                  <Coffee className="w-4 h-4 text-accent" strokeWidth={1.5} />
                </div>
                <p className="font-serif text-xl font-medium text-ink">Coffee chat?</p>
              </div>
              <p className="text-sm text-ink/65 leading-relaxed">
                Thirty minutes, no agenda required. If you’re a director,
                founder, recruiter, or fellow builder and want to compare
                notes, this is the easiest door to knock on.
              </p>
              <a
                href={
                  SCHEDULING_URL ||
                  'mailto:noopur.trivedi@hotmail.com?subject=Coffee%20chat%20request&body=Hi%20Noopur%2C%20I%27d%20love%20to%20schedule%20a%20coffee%20chat.%20Here%20are%20a%20few%20times%20that%20work%20for%20me%3A'
                }
                target={SCHEDULING_URL ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group btn-primary px-6 py-3 text-[12px] mt-5 inline-flex"
              >
                <Coffee className="mr-2 w-3.5 h-3.5" />
                {SCHEDULING_URL ? 'Book a time' : 'Suggest a time by email'}
              </a>
            </div>

            {/* Direct channels */}
            <div>
              <p className="eyebrow mb-5">Direct channels</p>
              <div className="card divide-y divide-ink/8">
                {[
                  { icon: Mail,     label: 'Email',    value: 'noopur.trivedi@hotmail.com', href: 'mailto:noopur.trivedi@hotmail.com' },
                  { icon: Linkedin, label: 'LinkedIn', value: '/in/noopur-trivedi',          href: 'https://linkedin.com/in/noopur-trivedi' },
                ].map((ch) => (
                  <a
                    key={ch.label}
                    href={ch.href}
                    target={ch.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 hover:bg-sand transition-colors duration-300 group"
                  >
                    <div className="w-9 h-9 border border-ink/15 flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-300">
                      <ch.icon className="w-4 h-4 text-accent group-hover:text-canvas transition-all duration-300 group-hover:scale-110" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ink/45 mb-0.5">{ch.label}</p>
                      <p className="text-sm text-ink/80 group-hover:text-ink transition-colors">{ch.value}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-ink/30 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 group-hover:translate-x-0" />
                  </a>
                ))}
              </div>
            </div>

            {/* Open to */}
            <div>
              <p className="eyebrow mb-5">Open to</p>
              <div className="flex flex-col gap-2.5">
                {[
                  'Coffee chats & collaborations',
                  'Hiring & interview conversations',
                  'Investor & partner introductions',
                  'Advisory — AI adoption & governance',
                  'Senior BA / transformation-lead roles',
                  'Enterprise programs (SAP, M365, data)',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-ink/65">
                    <span className="w-1.5 h-1.5 bg-accent flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="card p-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-1" strokeWidth={1.5} />
                <div>
                  <p className="section-label mb-1">Location</p>
                  <p className="text-ink font-semibold text-sm">Chestermere, Alberta · Canada</p>
                  <p className="text-xs text-ink/50 mt-1">Remote-first · hybrid welcome in AB / BC</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-ink/45 mt-5 pt-5 border-t border-ink/10">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Typically responds within one business day
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
