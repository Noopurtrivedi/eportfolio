import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Coffee, Rocket, Target, Zap, Brain, Code, BarChart3, ChevronRight } from 'lucide-react'
import { projects } from '../data/projects'
import { motion } from 'framer-motion'

const Home: React.FC = () => {
  const featuredProjects = projects.filter(p => p.featured)

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-primary-100 rounded-full blur-3xl opacity-30"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-primary-50 text-primary-700 text-sm font-bold rounded-full mb-6 tracking-wide uppercase">
                Available for Strategic Projects
              </span>
              <h1 className="text-6xl font-extrabold tracking-tight text-gray-900 sm:text-7xl md:text-8xl leading-[1.1]">
                I bridge the gap between <span className="text-primary-600">Business</span> and <span className="text-primary-600">AI</span>.
              </h1>
              <p className="mt-8 max-w-2xl text-xl text-gray-500 sm:text-2xl leading-relaxed">
                Hi, I'm <span className="font-semibold text-gray-900">Noopur Trivedi</span>. I help ambitious companies automate complexity, build intelligent products, and scale through data-driven strategy.
              </p>
              <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link to="/portfolio" className="btn-primary px-8 py-4 text-lg shadow-lg shadow-primary-200">
                  View Case Studies <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/network" className="btn-secondary px-8 py-4 text-lg hover:bg-gray-50">
                  Book a Coffee Chat <Coffee className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <div className="w-6 h-10 border-2 border-gray-200 rounded-full flex justify-center p-1">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-2 bg-primary-600 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Trust Bar / Metrics */}
      <section className="py-12 border-y border-gray-100 bg-gray-50/50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Efficiency Increase', value: '40%+', icon: Zap },
              { label: 'Costs Saved', value: '$100k+', icon: BarChart3 },
              { label: 'Products Launched', value: '10+', icon: Rocket },
              { label: 'Strategic Chats', value: '100+', icon: Coffee },
            ].map((stat, idx) => (
              <div key={idx} className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-primary-600">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs font-medium text-gray-400 uppercase tracking-wider">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container-custom py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="section-title">Selected Work</h2>
            <p className="section-subtitle">Real-world impact through AI integration and business transformation.</p>
          </div>
          <Link to="/portfolio" className="group flex items-center text-primary-600 font-bold hover:text-primary-700 transition-colors">
            Explore All Projects <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {featuredProjects.slice(0, 2).map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <Link to={`/portfolio/${project.slug}`} className="block space-y-6">
                <div className="aspect-[16/10] bg-gray-100 rounded-3xl overflow-hidden relative border border-gray-100">
                  {/* Placeholder for project image */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                    <Rocket className="h-20 w-20 opacity-20" />
                  </div>
                  <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/5 transition-colors duration-500"></div>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    {project.category.map(cat => (
                      <span key={cat} className="text-[10px] font-bold uppercase tracking-widest text-primary-600">
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-500 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  <div className="pt-2 flex items-center text-sm font-bold text-gray-900 group-hover:underline underline-offset-4 decoration-primary-600">
                    Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The Mindset / Principles */}
      <section className="bg-primary-950 py-32 text-white overflow-hidden relative">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 leading-tight">
                How I help companies <br />
                <span className="text-primary-400 italic">build for the future</span>.
              </h2>
              <div className="space-y-12">
                {[
                  { 
                    icon: Brain, 
                    title: 'Strategic Analysis', 
                    desc: 'I don\'t just look at data; I look at the narrative behind the numbers to find the "why" before the "how".' 
                  },
                  { 
                    icon: Code, 
                    title: 'Intelligent Implementation', 
                    desc: 'I build MVPs and automation workflows that aren\'t just functional, but scalable and future-proof.' 
                  },
                  { 
                    icon: Target, 
                    title: 'Impact-First Design', 
                    desc: 'Every feature and line of code must map back to a business outcome or efficiency metric.' 
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-primary-400 border border-white/10">
                      <item.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-primary-100/70 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-primary-800/30 rounded-full border border-primary-700/50 flex items-center justify-center p-12">
                <div className="aspect-square bg-primary-700/50 rounded-full border border-primary-600/50 w-full flex items-center justify-center p-12">
                   <div className="aspect-square bg-primary-600 rounded-3xl rotate-12 flex items-center justify-center w-3/4 shadow-2xl">
                     <Brain className="h-32 w-32 text-white -rotate-12" />
                   </div>
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute top-0 right-0 bg-white text-gray-900 px-6 py-4 rounded-2xl shadow-2xl -rotate-6 font-bold">
                AI Native
              </div>
              <div className="absolute bottom-10 left-0 bg-primary-500 text-white px-6 py-4 rounded-2xl shadow-2xl rotate-3 font-bold">
                Strategy Driven
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative background text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-black text-white/[0.02] select-none pointer-events-none whitespace-nowrap">
          INNOVATE SCALE BUILD
        </div>
      </section>

      {/* Mini About Section */}
      <section className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[4/5] bg-gray-100 rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                {/* Photo placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                  <Users className="h-32 w-32 opacity-20" />
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 max-w-xs hidden sm:block">
                <p className="text-gray-600 italic leading-relaxed">
                  "Noopur has a rare ability to translate complex AI concepts into actionable business strategies."
                </p>
                <div className="mt-4 font-bold text-gray-900">— Strategic Partner</div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="section-title">Beyond the Analyst.</h2>
            <p className="text-xl text-gray-500 leading-relaxed">
              I'm not your typical Business Analyst. I'm a builder who understands the "why" and an entrepreneur who knows how to execute. My background in both tech and strategy allows me to speak both languages fluently.
            </p>
            <p className="text-xl text-gray-500 leading-relaxed">
              Whether I'm designing a new AI workflow or mapping out a market entry strategy, my focus is always on creating tangible, measurable value.
            </p>
            <div className="pt-4 flex space-x-6">
              <Link to="/about" className="group flex items-center text-gray-900 font-bold">
                My Full Story <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="group flex items-center text-primary-600 font-bold">
                Let's Collaborate <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container-custom pb-24">
        <div className="bg-primary-600 rounded-[3rem] p-12 sm:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-primary-200">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-6xl font-extrabold mb-8">Ready to build something <span className="underline decoration-white/30">extraordinary</span>?</h2>
            <p className="text-xl text-primary-50 px-6 mb-12">
              I'm currently accepting new projects and consulting engagements. If you have a challenge that needs a mix of AI and strategy, let's talk.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/contact" className="bg-white text-primary-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-primary-50 transition-colors shadow-xl">
                Get in Touch
              </Link>
              <Link to="/network" className="bg-primary-700 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-primary-800 transition-colors">
                Book a Chat
              </Link>
            </div>
          </div>
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl"></div>
        </div>
      </section>
    </div>
  )
}

export default Home

