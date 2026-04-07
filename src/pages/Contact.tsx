import React, { useState } from 'react'
import { Linkedin, Mail, MapPin, Send, Twitter } from 'lucide-react'
import { motion } from 'framer-motion'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you'd send this to a service
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="pb-20">
      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-8">
              Get in <span className="text-primary-600">touch</span>.
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              Have a question, a project, or just want to say hi? Fill out the form below or reach out directly via email or social media.
            </p>
          </div>
        </div>
      </section>

      <section className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-widest">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-widest">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-widest">Message</label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="How can I help you?"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center py-4 text-lg"
              >
                {submitted ? 'Message Sent!' : (
                  <>
                    Send Message <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </div>
          
          <div className="space-y-12">
             <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 uppercase tracking-widest text-sm mb-1">Email</h3>
                    <a href="mailto:noopur@example.com" className="text-xl text-gray-500 hover:text-primary-600 transition-colors">
                      noopur@example.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600">
                    <Linkedin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 uppercase tracking-widest text-sm mb-1">LinkedIn</h3>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-500 hover:text-primary-600 transition-colors">
                      /in/noopurtrivedi
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600">
                    <Twitter className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 uppercase tracking-widest text-sm mb-1">Twitter</h3>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-500 hover:text-primary-600 transition-colors">
                      @noopur_t
                    </a>
                  </div>
                </div>
             </div>
             
             <div className="bg-gray-900 rounded-3xl p-8 text-white relative overflow-hidden">
                <h3 className="text-xl font-bold mb-4 relative z-10">Current Location</h3>
                <div className="flex items-center text-gray-400 relative z-10">
                  <MapPin className="h-5 w-5 mr-2" /> San Francisco, CA (Open to global projects)
                </div>
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl"></div>
             </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
