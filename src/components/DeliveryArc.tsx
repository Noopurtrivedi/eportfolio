import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, Search, FileText, ShieldCheck, Rocket, LineChart } from 'lucide-react'

/* The end-to-end arc I run on modernization programs, told as a sticky
   scroll story. Every line is drawn from the published resume record. */
const phases = [
  {
    key:   'Discover',
    icon:  Search,
    title: 'Respect the operational reality first.',
    body:  'Discovery with the people who run the system today: current-state processes, data, interfaces, and constraints, before anyone proposes the change.',
    proof: 'Global aerospace MRO, Crown utility, and oil sands operations',
  },
  {
    key:   'Define',
    icon:  FileText,
    title: 'Write the spec before the slide.',
    body:  'Structured requirements, traceability, and acceptance criteria a team can build against without ambiguity, across business, compliance, and technical needs.',
    proof: '160+ documented requirements on an enterprise LMS replacement',
  },
  {
    key:   'Govern',
    icon:  ShieldCheck,
    title: 'Build trust into the architecture.',
    body:  'Metadata, classification, retention, permissions, and auditability designed in from day one, including controlled-goods and export-compliance handling.',
    proof: 'Governance for a global Microsoft 365 modernization',
  },
  {
    key:   'Deliver',
    icon:  Rocket,
    title: 'Migrate, pilot, validate, cut over.',
    body:  'Migration and cutover planning, pilots, validation, and test strategy, coordinated across global teams, vendors, and concurrent high-visibility initiatives.',
    proof: 'SharePoint Online, Teams, OneDrive, and Azure-aligned services',
  },
  {
    key:   'Stabilize',
    icon:  LineChart,
    title: 'Leave behind a system of record.',
    body:  'KPI frameworks, dashboards, and adoption metrics built for executive decision-making, so the reporting outlives the rollout.',
    proof: 'Documented performance gains after stabilization',
  },
]

const Step: React.FC<{ i: number; onActive: (i: number) => void; children: React.ReactNode }> = ({ i, onActive, children }) => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.55 })
  useEffect(() => { if (inView) onActive(i) }, [inView, i, onActive])
  return <div ref={ref} className="lg:min-h-[62vh] flex items-center">{children}</div>
}

const DeliveryArc: React.FC = () => {
  const [active, setActive] = useState(0)

  return (
    <section className="ink-band border-b border-white/[0.06]">
      <div className="container-wide py-24">
        <div className="max-w-2xl mb-6 lg:mb-0">
          <p className="eyebrow mb-3">The delivery arc</p>
          <h2 className="display-lg">
            Strategy through stabilization, <span className="italic font-light accent-word">one governed arc.</span>
          </h2>
          <p className="lead mt-5">
            The same five-phase discipline across utilities, aerospace, telecom,
            and oil &amp; gas. Scroll through it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Sticky control-room panel (desktop) */}
          <div className="hidden lg:block lg:col-span-6">
            <div className="sticky top-[18vh] mt-16">
              <div className="glass rounded-3xl p-7">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-[10px] uppercase tracking-[0.24em] font-semibold text-[#ece7da]/50">Program · Delivery status</p>
                  <span className="inline-flex items-center gap-1.5 text-[11px] text-[#7fd6b2]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3fbf8f] animate-pulse-soft" /> Governed
                  </span>
                </div>
                <div className="flex flex-col gap-2.5">
                  {phases.map((p, i) => {
                    const done = i < active
                    const now  = i === active
                    return (
                      <motion.div
                        key={p.key}
                        animate={{
                          opacity: i > active ? 0.45 : 1,
                          x: now ? 6 : 0,
                        }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className={`flex items-center gap-4 rounded-2xl px-4 py-3.5 border transition-colors duration-500 ${now ? 'border-[#c8a558]/50 bg-[#c8a558]/[0.08]' : 'border-white/[0.07] bg-white/[0.02]'}`}
                      >
                        <span className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-500 ${done ? 'bg-[#0f5d4a] text-[#d9f0e6]' : now ? 'bg-[#c8a558] text-[#0b100e]' : 'bg-white/[0.05] text-[#ece7da]/50'}`}>
                          {done ? <Check className="w-4 h-4" /> : <p.icon className="w-4 h-4" />}
                        </span>
                        <div className="min-w-0">
                          <p className="text-[14px] font-semibold text-[#f5f1e8]">{p.key}</p>
                          <p className="text-[12px] text-[#ece7da]/50 truncate">{p.proof}</p>
                        </div>
                        <span className="ml-auto font-serif text-[13px] text-[#ece7da]/35">0{i + 1}</span>
                      </motion.div>
                    )
                  })}
                </div>
                <div className="mt-6 h-1 rounded-full bg-white/[0.06] overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: 'linear-gradient(90deg, #0f5d4a, #c8a558)' }}
                    animate={{ width: `${((active + 1) / phases.length) * 100}%` }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Scrolling narrative */}
          <div className="lg:col-span-6">
            {phases.map((p, i) => (
              <Step key={p.key} i={i} onActive={setActive}>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="py-10 lg:py-0 border-t border-white/[0.08] lg:border-0"
                >
                  <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] font-semibold text-[#d9b96a]">
                    <span className="font-serif text-[13px] normal-case tracking-normal text-[#ece7da]/40">0{i + 1}</span>
                    {p.key}
                  </p>
                  <h3 className="mt-4 font-serif text-3xl sm:text-4xl font-medium leading-tight">{p.title}</h3>
                  <p className="mt-5 text-[16px] leading-relaxed text-[#ece7da]/70 max-w-lg">{p.body}</p>
                  <p className="mt-6 inline-flex items-center gap-2 text-[12px] text-[#ece7da]/55 border border-white/10 rounded-full px-3.5 py-1.5">
                    <Check className="w-3.5 h-3.5 text-[#7fd6b2]" /> {p.proof}
                  </p>
                </motion.div>
              </Step>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default DeliveryArc
