import React from 'react'
import { Coffee, MessageCircle, Sparkles, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const Networking: React.FC = () => {
  return (
    <div className="pb-20">
      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-8">
              Let's grab a <span className="text-primary-600">(virtual) coffee</span>.
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              I'm a big believer in the power of serendipity and shared knowledge. Whether you're a founder, a fellow builder, or someone just starting out—I'd love to connect.
            </p>
          </div>
        </div>
      </section>

      <section className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Who should reach out?</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Early-stage Founders</h3>
                  <p className="text-gray-500">If you're building something new and need a sounding board for product strategy or automation.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Fellow Builders</h3>
                  <p className="text-gray-500">If you're working on AI, LLMs, or business systems and want to swap ideas or collaborate.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Curious Minds</h3>
                  <p className="text-gray-500">If you just want to chat about the future of work, AI ethics, or startup culture.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Topics of Interest</h2>
            <ul className="space-y-4 mb-10">
              {['AI Automation Workflows', 'Business Process Optimization', 'MVP Development', 'Startup Scaling', 'Market Entry Strategy', 'User Experience Design'].map(topic => (
                <li key={topic} className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3"></span>
                  {topic}
                </li>
              ))}
            </ul>
            
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm text-center">
              <Coffee className="h-10 w-10 text-primary-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Book a 30-min Chat</h3>
              <p className="text-sm text-gray-500 mb-6">Pick a time that works for you. No agenda needed—just good conversation.</p>
              <a 
                href="#" 
                className="btn-primary w-full"
                onClick={(e) => { e.preventDefault(); alert('Calendly integration placeholder'); }}
              >
                Schedule Meeting
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container-custom py-24 text-center">
         <h2 className="section-title mb-6">What to expect</h2>
         <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-12">
           I'm not here to sell you anything. I'm here to listen, learn, and provide value where I can. Expect a candid, thoughtful, and hopefully inspiring conversation.
         </p>
         <div className="flex justify-center space-x-6">
            <div className="flex items-center text-gray-500">
              <span className="font-bold text-gray-900 mr-2">100+</span> Coffee Chats
            </div>
            <div className="flex items-center text-gray-500">
              <span className="font-bold text-gray-900 mr-2">15+</span> Collaborations
            </div>
         </div>
      </section>
    </div>
  )
}

export default Networking
