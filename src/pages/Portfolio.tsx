import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/projects'
import { ArrowRight, Filter } from 'lucide-react'
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
      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-8">
              Selected <span className="text-primary-600">Projects</span>.
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              A collection of work spanning business analysis, AI integration, and product building. Each project represents a unique challenge and a strategic solution.
            </p>
          </div>
        </div>
      </section>

      <section className="container-custom">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 gap-6">
          <div className="flex items-center text-gray-500">
            <Filter className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">Filter by:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={clsx(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all',
                  activeFilter === cat
                    ? 'bg-primary-600 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all flex flex-col"
              >
                <div className="aspect-video bg-gray-100 relative overflow-hidden">
                   {/* Placeholder for project image */}
                   <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                     <span className="text-lg font-bold uppercase tracking-widest">{project.title.split(' ')[0]}</span>
                   </div>
                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.category.map(cat => (
                      <span key={cat} className="px-2 py-1 bg-primary-50 text-primary-700 text-[10px] font-bold rounded uppercase tracking-wider">
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-400">Role: {project.role}</span>
                    <Link to={`/portfolio/${project.slug}`} className="flex items-center text-sm font-bold text-gray-900 hover:text-primary-600 transition-colors">
                      View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="container-custom mt-24">
        <div className="bg-gray-900 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Have a specific project in mind?</h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, startups, and consulting projects.
          </p>
          <Link to="/contact" className="btn-primary bg-white text-gray-900 hover:bg-gray-100 border-none">
            Let's Connect
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
