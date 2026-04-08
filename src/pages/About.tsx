import React from 'react'
import { motion } from 'framer-motion'
import { Award, BookOpen, Briefcase, Lightbulb, Coffee, Rocket, Target, Globe, Heart } from 'lucide-react'

const About: React.FC = () => {
  return (
    <div className="pb-20">
      {/* Hero Section - The "Hook" */}
      <section className="bg-white py-20 lg:py-32 overflow-hidden relative">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="text-primary-600 font-bold tracking-widest uppercase text-sm mb-4 block">The Narrative</span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-8 leading-tight">
              I don't just analyze systems. <br />
              <span className="text-primary-600">I reinvent them.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 leading-relaxed max-w-3xl">
              From a Business Analyst curiosity to an AI Builder's execution, my journey has been defined by one goal: bridging the gap between human intuition and machine intelligence.
            </p>
          </motion.div>
        </div>
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -z-10 skew-x-12 translate-x-24"></div>
      </section>

      {/* The Journey - Timeline Style */}
      <section className="container-custom py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
             <div className="sticky top-24">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Evolution</h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                  My career hasn't been a straight line. It's been a series of strategic pivots, each adding a new tool to my arsenal.
                </p>
                <div className="flex flex-col gap-4">
                   <div className="p-4 bg-primary-50 rounded-2xl border border-primary-100">
                      <div className="text-primary-700 font-bold">2018 — The Foundation</div>
                      <div className="text-sm text-primary-600">Business Analysis & Strategy</div>
                   </div>
                   <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                      <div className="text-gray-900 font-bold">2021 — The Shift</div>
                      <div className="text-sm text-gray-500">Automation & Product Building</div>
                   </div>
                   <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                      <div className="text-gray-900 font-bold">2024 — The Future</div>
                      <div className="text-sm text-gray-500">AI Integration & Entrepreneurship</div>
                   </div>
                </div>
             </div>
          </div>
          
          <div className="lg:col-span-8 space-y-20">
            <div className="relative pl-12 border-l-2 border-gray-100">
              <div className="absolute top-0 left-0 -translate-x-[calc(50%+1px)] w-6 h-6 bg-primary-600 rounded-full ring-8 ring-primary-50"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Phase 1: Decoding Complexity</h3>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  I started my career deep in the trenches of business operations. My job was to listen, observe, and document. I learned how to talk to stakeholders, how to spot a bottleneck from a mile away, and how to translate "we have a problem" into a 50-page requirement document.
                </p>
                <p>
                  But I soon realized that documentation wasn't enough. I wanted to be the one who fixed the problem, not just the one who described it.
                </p>
              </div>
            </div>

            <div className="relative pl-12 border-l-2 border-gray-100">
              <div className="absolute top-0 left-0 -translate-x-[calc(50%+1px)] w-6 h-6 bg-primary-600 rounded-full ring-8 ring-primary-50"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Phase 2: Building the Bridge</h3>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  I taught myself to code. Not to become a "Software Engineer" in the traditional sense, but to become a "Problem Solver" with a broader toolkit. I started building custom CRMs, automation workflows, and internal tools that saved teams hundreds of hours.
                </p>
                <p>
                  This is where I discovered the power of the "Builder-Analyst" hybrid. I could see the business need and implement the technical solution simultaneously.
                </p>
              </div>
            </div>

            <div className="relative pl-12 border-l-2 border-gray-100">
              <div className="absolute top-0 left-0 -translate-x-[calc(50%+1px)] w-6 h-6 bg-primary-600 rounded-full ring-8 ring-primary-50"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Phase 3: The AI Frontier</h3>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Now, I focus on the most powerful tool in our history: Artificial Intelligence. I don't just use AI; I integrate it into the core of business strategy. I build systems that think, learn, and act—allowing human teams to focus on what they do best: creativity and connection.
                </p>
                <p>
                  Today, I operate as a fractional CTO/COO for startups, helping them navigate the complex world of AI transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy - What I stand for */}
      <section className="bg-gray-900 py-32 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-6">Core Principles</h2>
            <p className="text-gray-400 text-lg">The values that guide every project I take on.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                icon: Target, 
                title: 'Outcomes > Outputs', 
                desc: 'I don\'t care how many lines of code I write or how many pages a report is. I care if the business grew or the costs went down.' 
              },
              { 
                icon: Heart, 
                title: 'Human-Centric AI', 
                desc: 'Technology should empower people, not replace them. I build tools that make work feel less like work.' 
              },
              { 
                icon: Rocket, 
                title: 'Radical Execution', 
                desc: 'Speed is a feature. I believe in shipping MVPs quickly, learning from real usage, and iterating fast.' 
              }
            ].map((principle, idx) => (
              <div key={idx} className="p-10 bg-white/5 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-colors">
                <principle.icon className="h-10 w-10 text-primary-400 mb-6" />
                <h3 className="text-xl font-bold mb-4">{principle.title}</h3>
                <p className="text-gray-400 leading-relaxed">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Now Section - What I'm doing lately */}
      <section className="container-custom py-32">
        <div className="bg-primary-50 rounded-[3rem] p-12 lg:p-20 flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-primary-100 shadow-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
              </span>
              <span className="text-xs font-bold text-primary-700 uppercase tracking-widest">What I'm doing now</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">Currently building, reading, and exploring.</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-600">
               <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary-600 shadow-sm flex-shrink-0">
                    <Rocket className="h-5 w-5" />
                  </div>
                  <p>Building an AI-first CRM for specialized consulting firms.</p>
               </div>
               <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary-600 shadow-sm flex-shrink-0">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <p>Reading "The Coming Wave" by Mustafa Suleyman.</p>
               </div>
               <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary-600 shadow-sm flex-shrink-0">
                    <Globe className="h-5 w-5" />
                  </div>
                  <p>Exploring the potential of agentic workflows in supply chain.</p>
               </div>
               <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary-600 shadow-sm flex-shrink-0">
                    <Coffee className="h-5 w-5" />
                  </div>
                  <p>Mastering the art of pour-over coffee (current bean: Ethiopian Yirgacheffe).</p>
               </div>
            </div>
          </div>
          <div className="flex-1 w-full max-w-sm">
             <div className="aspect-square bg-white rounded-[3rem] shadow-2xl shadow-primary-200 overflow-hidden p-8 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="relative w-full h-full border-4 border-dashed border-primary-100 rounded-full flex items-center justify-center"
                >
                  <Rocket className="h-20 w-20 text-primary-600" />
                  {/* Decorative orbital elements */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary-400 rounded-full"></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-6 h-6 bg-primary-200 rounded-full"></div>
                </motion.div>
             </div>
          </div>
        </div>
      </section>

      {/* Social Proof CTA */}
      <section className="container-custom py-12 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Want to be part of the next phase?</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
           <a href="/portfolio" className="btn-primary px-10 py-4">View My Work</a>
           <a href="/contact" className="btn-secondary px-10 py-4">Start a Project</a>
        </div>
      </section>
    </div>
  )
}

export default About

