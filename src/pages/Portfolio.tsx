import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/projects'
import { ArrowRight, Filter, Target, Zap, Rocket } from 'lucide-react'
import { Link } from 'react-router-dom'
import { clsx } from 'clsx'

const categories = ['All', 'AI', 'BA', 'Automation', 'Startup', 'Data']

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category.includes(activeFilter as any))

  return (
    <div className="pb-20">
      <section className="bg-white py-20 lg:py-32">
        <div className="container-custom">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-8">
                The <span className="text-primary-600">Proof</span> of Concept.
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 leading-relaxed max-w-3xl">
                A showcase of strategic problem-solving. From optimizing supply chains with AI to designing market entry strategies for startups.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="container-custom">
        {/* Advanced Filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-8">
          <div className="flex items-center space-x-2 text-gray-400">
            <Filter className="h-4 w-4" />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">Filter Capability</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={clsx(
                  'px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 border-2',
                  activeFilter === cat
                    ? 'bg-primary-600 border-primary-600 text-white shadow-lg shadow-primary-200'
                    : 'bg-white border-gray-100 text-gray-500 hover:border-primary-200 hover:text-primary-600'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group"
              >
                <Link to={`/portfolio/${project.slug}`} className="block space-y-8">
                  <div className="aspect-[16/10] bg-gray-50 rounded-[2.5rem] overflow-hidden relative border border-gray-100 group-hover:border-primary-100 transition-colors">
                     {/* Floating Insight Badge */}
                     <div className="absolute top-6 left-6 z-10">
                        <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-sm border border-gray-100 flex items-center gap-2">
                           <Zap className="h-3 w-3 text-primary-600" />
                           <span className="text-[10px] font-black uppercase tracking-widest text-gray-900">Key Outcome</span>
                        </div>
                     </div>
                     
                     {/* Main Category Badge */}
                     <div className="absolute top-6 right-6 z-10 flex gap-2">
                        {project.category.slice(0, 2).map(cat => (
                          <span key={cat} className="bg-primary-600 text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                            {cat}
                          </span>
                        ))}
                     </div>

                     {/* Placeholder / Visual */}
                     <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                        <Rocket className="h-24 w-24 text-primary-200 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700" />
                     </div>

                     {/* Hover Overlay with Result */}
                     <div className="absolute inset-0 bg-primary-950/90 flex flex-col justify-center items-center p-12 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <Target className="h-12 w-12 text-primary-400 mb-6" />
                        <h4 className="text-white text-2xl font-bold mb-4">{project.outcome}</h4>
                        <span className="text-primary-300 font-medium flex items-center">
                           Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                        </span>
                     </div>
                  </div>

                  <div className="space-y-4 px-2">
                    <div className="flex items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
                       <span>{project.role}</span>
                       <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                       <div className="flex gap-2">
                          {project.tools.slice(0, 3).map(tool => (
                            <span key={tool}>{tool}</span>
                          ))}
                       </div>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-lg text-gray-500 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Philosophy Callout */}
      <section className="container-custom py-32 mt-20">
        <div className="bg-gray-50 rounded-[3rem] p-12 lg:p-24 border border-gray-100 text-center max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Quality over Quantity.</h2>
          <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-2xl mx-auto">
            I don't list every task I've ever done. I highlight the moments where I significantly moved the needle for a business.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary-600 shadow-sm">
                   <Zap className="h-5 w-5" />
                </div>
                <span className="font-bold text-gray-900 tracking-tight">Rapid Execution</span>
             </div>
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary-600 shadow-sm">
                   <Target className="h-5 w-5" />
                </div>
                <span className="font-bold text-gray-900 tracking-tight">Strategic Intent</span>
             </div>
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary-600 shadow-sm">
                   <Rocket className="h-5 w-5" />
                </div>
                <span className="font-bold text-gray-900 tracking-tight">Measurable Scale</span>
             </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-custom py-24 text-center">
         <h2 className="text-4xl font-extrabold text-gray-900 mb-8">Have a challenge for me?</h2>
         <Link to="/contact" className="btn-primary px-12 py-5 text-xl">Let's Discuss Your Project</Link>
      </section>
    </div>
  )
}

export default Portfolio

