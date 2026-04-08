import React from 'react'
import { Coffee, MessageCircle, Sparkles, Users, ArrowRight, Zap, Brain, MessageSquare } from 'lucide-react'
import { motion } from 'framer-motion'

const Networking: React.FC = () => {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="bg-white py-20 lg:py-32 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-8">
                Let's skip the <span className="text-primary-600">small talk</span>.
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 leading-relaxed">
                I'm a firm believer that one 30-minute conversation can change the trajectory of a project, a career, or an idea. I keep my calendar open for curious minds and ambitious builders.
              </p>
            </motion.div>
          </div>
        </div>
        {/* Decorative background element */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-primary-50 rounded-full blur-3xl opacity-50"></div>
      </section>

      <section className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why we should chat</h2>
              <div className="space-y-8">
                {[
                  { 
                    icon: Zap, 
                    title: 'The "Art of Possible" in AI', 
                    desc: 'If you\'re wondering how AI can actually help your business without the fluff, I can help you cut through the noise.' 
                  },
                  { 
                    icon: Brain, 
                    title: 'Strategy Sounding Board', 
                    desc: 'I love thinking through complex operational challenges and finding the hidden levers for growth.' 
                  },
                  { 
                    icon: Sparkles, 
                    title: 'Startup Life & Lessons', 
                    desc: 'Whether you\'re just starting or scaling, I\'m happy to share my failures and wins in the arena.' 
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 group-hover:scale-110 transition-transform">
                      <item.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">A bit about my style:</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  I value directness and honesty over corporate jargon.
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  I'm more interested in your "hard problems" than your elevator pitch.
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  I'll always try to leave you with at least one actionable insight.
                </li>
              </ul>
            </div>
          </div>
          
          <div className="sticky top-24">
            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-primary-100 p-10 lg:p-16 text-center overflow-hidden relative">
              {/* Background gradient */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-400 to-primary-600"></div>
              
              <div className="relative z-10">
                <div className="w-24 h-24 bg-primary-50 rounded-3xl flex items-center justify-center text-primary-600 mx-auto mb-8">
                  <Coffee className="h-12 w-12" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Book a virtual coffee</h2>
                <p className="text-gray-500 mb-10 text-lg">
                  Grab a time on my Calendly. No agenda is perfectly fine—I love unstructured exploration.
                </p>
                
                <div className="space-y-4">
                  <a 
                    href="#" 
                    className="btn-primary w-full py-5 text-lg shadow-xl shadow-primary-200"
                    onClick={(e) => { e.preventDefault(); alert('Calendly integration placeholder'); }}
                  >
                    Schedule a 30-min Chat
                  </a>
                  <p className="text-xs text-gray-400">
                    Prefer email? Reach out at <a href="mailto:noopur@example.com" className="text-primary-600 font-bold">noopur@example.com</a>
                  </p>
                </div>
                
                <div className="mt-12 pt-8 border-t border-gray-50 grid grid-cols-2 gap-4 text-left">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">100%</div>
                    <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Human Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">0</div>
                    <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Sales Pitches</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Proof Quote */}
            <div className="mt-8 px-8 py-6 bg-primary-950 rounded-2xl text-white flex gap-4 items-center">
               <MessageSquare className="h-6 w-6 text-primary-400 flex-shrink-0" />
               <p className="text-sm italic text-primary-100">
                 "Our conversation completely reframed how we approached our AI product strategy."
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Networking Topics Section */}
      <section className="bg-gray-50 py-32 mt-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current obsessions</h2>
            <p className="text-gray-500">Things I'm currently thinking about and would love to discuss.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Multi-agent systems', 
              'Supply chain transparency', 
              'Ethical AI frameworks', 
              'Fractional leadership models', 
              'Bootstrap vs Venture', 
              'Remote team culture',
              'Personal knowledge management',
              'Future of business analysis'
            ].map((topic, idx) => (
              <span key={idx} className="px-6 py-3 bg-white border border-gray-200 rounded-full text-gray-700 font-medium hover:border-primary-300 hover:text-primary-600 transition-all cursor-default">
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Networking

