import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { projects } from '../data/projects'
import { ArrowLeft, CheckCircle2, Clock, Globe, Layout, Settings, Target } from 'lucide-react'
import { motion } from 'framer-motion'

const CaseStudy: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    return <Navigate to="/portfolio" replace />
  }

  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-gray-50 py-20 border-b border-gray-100">
        <div className="container-custom">
          <Link to="/portfolio" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary-600 transition-colors mb-12">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.category.map(cat => (
                  <span key={cat} className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-bold rounded-full uppercase tracking-wider">
                    {cat}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                {project.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {project.description}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <div>
                <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Role</span>
                <span className="text-gray-900 font-semibold">{project.role}</span>
              </div>
              <div>
                <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Outcome</span>
                <span className="text-gray-900 font-semibold">{project.outcome}</span>
              </div>
              <div className="col-span-2">
                <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Tools & Tech</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tools.map(tool => (
                    <span key={tool} className="px-2 py-1 bg-gray-50 text-gray-600 text-[10px] font-bold rounded uppercase border border-gray-200">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container-custom py-24">
        <div className="max-w-4xl mx-auto space-y-24">
          {/* Challenge */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <div className="flex items-center text-primary-600 mb-4">
                <Target className="h-6 w-6 mr-2" />
                <h2 className="text-lg font-bold uppercase tracking-widest">Challenge</h2>
              </div>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg text-gray-600 leading-relaxed">
                {project.problem}
              </p>
            </div>
          </div>

          {/* Approach */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <div className="flex items-center text-primary-600 mb-4">
                <Settings className="h-6 w-6 mr-2" />
                <h2 className="text-lg font-bold uppercase tracking-widest">Approach</h2>
              </div>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg text-gray-600 leading-relaxed">
                {project.approach}
              </p>
            </div>
          </div>

          {/* Execution */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <div className="flex items-center text-primary-600 mb-4">
                <Layout className="h-6 w-6 mr-2" />
                <h2 className="text-lg font-bold uppercase tracking-widest">Execution</h2>
              </div>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg text-gray-600 leading-relaxed">
                {project.execution}
              </p>
            </div>
          </div>

          {/* Metrics & Outcome */}
          <div className="bg-primary-50 rounded-4xl p-12 sm:p-16">
            <div className="flex items-center text-primary-600 mb-10">
              <CheckCircle2 className="h-8 w-8 mr-3" />
              <h2 className="text-2xl font-bold">Key Results</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {project.metrics?.map((metric, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-primary-100 text-center">
                  <p className="text-primary-700 font-bold">{metric}</p>
                </div>
              )) || (
                <div className="col-span-3 text-center text-primary-700 font-bold">
                  {project.outcome}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="bg-gray-50 py-24 border-t border-gray-100">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-12">More Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(p => p.slug !== project.slug).slice(0, 3).map((p) => (
              <Link key={p.id} to={`/portfolio/${p.slug}`} className="group bg-white p-6 rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all">
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.category.slice(0, 2).map(cat => (
                    <span key={cat} className="px-2 py-0.5 bg-gray-50 text-gray-400 text-[10px] font-bold rounded uppercase">
                      {cat}
                    </span>
                  ))}
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors">{p.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudy
