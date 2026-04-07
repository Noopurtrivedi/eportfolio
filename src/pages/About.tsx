import React from 'react'
import { motion } from 'framer-motion'
import { Award, BookOpen, Briefcase, Lightbulb } from 'lucide-react'

const About: React.FC = () => {
  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="bg-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-8">
              Connecting the dots between <span className="text-primary-600">business</span> and <span className="text-primary-600">technology</span>.
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              I'm Noopur, a multi-disciplinary professional sitting at the intersection of business analysis, AI engineering, and entrepreneurship. My mission is to build products and systems that solve real-world problems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            <p>
              My journey didn't start with code. It started with a curiosity about how businesses work—why some scale effortlessly while others struggle with the simplest processes. This curiosity led me to become a Business Analyst, where I learned the art of deconstructing complex systems.
            </p>
            <p>
              As the AI revolution began, I realized that the traditional "analyst" role was evolving. Analysis without implementation is just observation. I started building my own tools, diving into Python, LLMs, and automation workflows to bridge the gap between "what needs to be done" and "how it gets done."
            </p>
            <p>
              Today, I operate as a strategic partner for startups and established businesses alike. I don't just hand over a requirement document; I build the MVP, automate the operations, and design the strategy for growth.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <Lightbulb className="h-8 w-8 text-primary-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Philosophy</h3>
              <p className="text-sm text-gray-500">Simple solutions for complex problems. Focus on the outcome, not just the output.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <Briefcase className="h-8 w-8 text-primary-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Experience</h3>
              <p className="text-sm text-gray-500">Years of experience in Fintech, E-commerce, and SaaS environments.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <BookOpen className="h-8 w-8 text-primary-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Education</h3>
              <p className="text-sm text-gray-500">Business Management & Computer Science. Continuous learner in AI/ML.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <Award className="h-8 w-8 text-primary-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Goal</h3>
              <p className="text-sm text-gray-500">To build a portfolio of AI-driven products that impact 1M+ lives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="bg-gray-50 py-24 mt-20">
        <div className="container-custom">
          <h2 className="section-title mb-16">Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center text-sm mr-3">01</span>
                Business Analysis
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li>• Process Mapping & Optimization</li>
                <li>• Stakeholder Management</li>
                <li>• Requirement Engineering</li>
                <li>• Data-Driven Decision Making</li>
                <li>• Strategic Roadmapping</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center text-sm mr-3">02</span>
                AI & Automation
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li>• LLM Implementation (OpenAI, Anthropic)</li>
                <li>• Workflow Automation (Zapier, Make)</li>
                <li>• Python for Data & AI</li>
                <li>• Prompt Engineering</li>
                <li>• Semantic Search & RAG</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center text-sm mr-3">03</span>
                Product & Strategy
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li>• Rapid Prototyping (MVPs)</li>
                <li>• Market Research & Entry</li>
                <li>• User Experience Strategy</li>
                <li>• Growth Experiments</li>
                <li>• Startup Operations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className="container-custom py-24">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="section-title mb-6">Beyond the Screen</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              When I'm not building products or analyzing data, you'll find me exploring the latest in neurotechnology, reading about stoic philosophy, or trying to perfect my sourdough recipe. I believe that diverse interests make for better problem-solving in the professional world.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Reading', 'Travel', 'Cooking', 'Hiking', 'Tech News', 'Startups'].map(item => (
                <span key={item} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
             <div className="aspect-[3/4] bg-gray-100 rounded-2xl"></div>
             <div className="aspect-[3/4] bg-gray-200 rounded-2xl mt-8"></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
