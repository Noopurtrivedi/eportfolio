import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Coffee, Rocket, Target, Zap } from 'lucide-react'
import { projects } from '../data/projects'
import { motion } from 'framer-motion'

const Home: React.FC = () => {
  const featuredProjects = projects.filter(p => p.featured)

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative bg-white pt-10 sm:pt-20">
        <div className="container-custom">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
                I build <span className="text-primary-600">solutions</span> for the <span className="text-primary-600">AI-driven</span> world.
              </h1>
              <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-500 sm:text-2xl">
                Hi, I'm <span className="font-semibold text-gray-900">Noopur Trivedi</span>. A Business Analyst + AI Builder + Entrepreneur helping businesses transform through data and automation.
              </p>
              <div className="mt-10 flex justify-center space-x-6">
                <Link to="/portfolio" className="btn-primary flex items-center">
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/network" className="btn-secondary flex items-center">
                  Book a Coffee Chat <Coffee className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-gray-50 py-24">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="section-title">Featured Work</h2>
              <p className="section-subtitle">A selection of impact-driven projects across AI and strategy.</p>
            </div>
            <Link to="/portfolio" className="hidden sm:flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors">
              Explore All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group"
              >
                <div className="p-8 h-full flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.category.map(cat => (
                      <span key={cat} className="px-2 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded capitalize">
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 mb-6 flex-grow">
                    {project.description}
                  </p>
                  <Link to={`/portfolio/${project.slug}`} className="flex items-center text-sm font-semibold text-gray-900">
                    Read Case Study <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 sm:hidden text-center">
            <Link to="/portfolio" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors">
              Explore All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="container-custom">
        <div className="bg-primary-950 rounded-3xl p-12 sm:p-20 text-white relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-extrabold text-primary-400">40%</div>
              <p className="text-primary-100 text-lg">Avg. Efficiency Increase</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-extrabold text-primary-400">$100k+</div>
              <p className="text-primary-100 text-lg">Costs Saved for Clients</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-extrabold text-primary-400">10+</div>
              <p className="text-primary-100 text-lg">Products Launched</p>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-primary-800/30 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Core Values / Strengths */}
      <section className="container-custom py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Strategic Problem Solving</h2>
          <p className="section-subtitle">Combining business analysis with AI capabilities to create tangible business outcomes.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Target, title: 'Analysis', desc: 'Deep-diving into processes to find bottlenecks.' },
            { icon: Zap, title: 'Automation', desc: 'Building workflows that eliminate manual work.' },
            { icon: Rocket, title: 'Growth', desc: 'Designing products that scale from day one.' },
            { icon: Coffee, title: 'Human', desc: 'Prioritizing people and communication.' }
          ].map((item, idx) => (
            <div key={idx} className="p-8 border border-gray-100 rounded-2xl hover:border-primary-200 transition-colors">
              <item.icon className="h-10 w-10 text-primary-600 mb-6" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mini About/Connect CTA */}
      <section className="container-custom pb-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="section-title text-left">Let's talk about the future.</h2>
            <p className="text-xl text-gray-500 leading-relaxed">
              I'm always looking for interesting problems to solve and ambitious people to collaborate with. Whether it's a potential startup idea, a business process that needs automation, or just a chat about AI—I'm all ears.
            </p>
            <div className="flex space-x-4">
              <Link to="/contact" className="btn-primary">Get in Touch</Link>
              <Link to="/about" className="btn-secondary">My Story</Link>
            </div>
          </div>
          <div className="flex-1 w-full flex justify-center">
             <div className="relative w-full max-w-sm aspect-square bg-primary-100 rounded-3xl overflow-hidden shadow-xl">
               {/* Placeholder for personal photo */}
               <div className="absolute inset-0 flex items-center justify-center text-primary-400">
                 <Rocket className="h-24 w-24" />
               </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
