import React, { useState } from 'react'
import { Linkedin, Mail, MapPin, Send, ArrowUpRight, AlertTriangle } from 'lucide-react'
import { motion } from 'framer-motion'

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
      <section className="border-b border-ink/10 pt-36 pb-16">
        <div className="container-wide">
          <p className="eyebrow mb-4">Contact</p>
          <h1 className="display-xl mb-6 max-w-3xl">
            Start a conversation
            <span className="italic font-light" style={{ color: '#0f5d4a' }}> — about your roadmap, your role, or a build.</span>
          </h1>
          <p className="lead max-w-xl">
            Founding and advisory conversations, board or executive
            introductions, Senior BA engagements, BI &amp; integration
            programs, or hiring conversations — I read every message and
            respond within one business day.
          </p>
        </div>
      </section>

      {/* Form + info */}
      <section className="container-wide py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Form */}
          <div className="lg:col-span-7">
            {status === 'sent' ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="border border-accent/25 p-12 text-center bg-accent-soft/30"
              >
                <div className="text-4xl mb-4">✦</div>
                <h3 className="font-serif text-2xl font-medium text-ink mb-2">Message sent.</h3>
                <p className="text-ink/65 text-sm max-w-md mx-auto">
                  Thank you — it’s landed in my inbox. I’ll be in touch within
                  one business day. If something’s urgent, you can also reach
                  me directly at{' '}
                  <a className="underline text-accent" href="mailto:Noopur.trivedi@hotmail.com">
                    Noopur.trivedi@hotmail.com
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
                    <option value="Founding / advisory conversation">Founding / advisory conversation</option>
                    <option value="Board / fractional executive role">Board / fractional executive role</option>
                    <option value="Investor / partnership conversation">Investor / partnership conversation</option>
                    <option value="Senior BA / Contract role">Senior BA / Contract role</option>
                    <option value="BI, ETL or reporting program">BI, ETL or reporting program</option>
                    <option value="Systems / API integration">Systems / API integration</option>
                    <option value="SAP / M365 / SharePoint engagement">SAP / M365 / SharePoint engagement</option>
                    <option value="Hiring conversation">Hiring conversation</option>
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
                      <a href="mailto:Noopur.trivedi@hotmail.com" className="underline font-semibold">
                        Noopur.trivedi@hotmail.com
                      </a>
                    </span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary px-8 py-4 text-[13px] self-start disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending…' : <>Send Message <Send className="ml-2 w-4 h-4" /></>}
                </button>

                <p className="text-[11px] text-ink/40 mt-1">
                  Delivered directly to my inbox. Prefer to email me yourself?{' '}
                  <a href="mailto:Noopur.trivedi@hotmail.com" className="text-accent underline">
                    Noopur.trivedi@hotmail.com
                  </a>
                </p>
              </form>
            )}
          </div>

          {/* Side */}
          <div className="lg:col-span-5 flex flex-col gap-10">

            {/* Direct channels */}
            <div>
              <p className="eyebrow mb-5">Direct channels</p>
              <div className="card divide-y divide-ink/8">
                {[
                  { icon: Mail,     label: 'Email',    value: 'Noopur.trivedi@hotmail.com', href: 'mailto:Noopur.trivedi@hotmail.com' },
                  { icon: Linkedin, label: 'LinkedIn', value: '/in/noopur-trivedi',          href: 'https://linkedin.com/in/noopur-trivedi' },
                ].map((ch) => (
                  <a
                    key={ch.label}
                    href={ch.href}
                    target={ch.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 hover:bg-sand transition-colors group"
                  >
                    <div className="w-9 h-9 border border-ink/15 flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-200">
                      <ch.icon className="w-4 h-4 text-accent group-hover:text-canvas transition-colors" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ink/45 mb-0.5">{ch.label}</p>
                      <p className="text-sm text-ink/80 group-hover:text-ink transition-colors">{ch.value}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-ink/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>

            {/* Open to */}
            <div>
              <p className="eyebrow mb-5">Open to</p>
              <div className="flex flex-col gap-2.5">
                {[
                  'Founding / advisory conversations',
                  'Board / fractional executive roles',
                  'Investor & partnership intros',
                  'Senior BA / Lead BA contracts',
                  'BI, ETL and reporting programs',
                  'Enterprise integration (SAP, M365, POS)',
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
                  <p className="text-ink font-semibold text-sm">Canada · Remote-first</p>
                  <p className="text-xs text-ink/50 mt-1">Hybrid welcome in BC / AB</p>
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
