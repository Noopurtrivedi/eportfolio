import React, { useState } from 'react'
import { Linkedin, Mail, MapPin, Send, Twitter, MessageSquare, ArrowRight } from 'lucide-react'
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
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="pb-20">
      <section className="bg-white py-20 lg:py-32 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-8">
                Let's build <span className="text-primary-600">together</span>.
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 leading-relaxed">
                Whether you have a specific project in mind or just want to explore how we can collaborate, I'm all ears.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2.5rem] border border-gray-100 p-8 md:p-12 shadow-2xl shadow-gray-100 relative">
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary-600 rounded-2xl flex items-center justify-center text-white shadow-xl rotate-12">
                 <MessageSquare className="h-10 w-10" />
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-50 rounded-2xl focus:bg-white focus:border-primary-500 outline-none transition-all text-gray-900 font-medium"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-50 rounded-2xl focus:bg-white focus:border-primary-500 outline-none transition-all text-gray-900 font-medium"
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label htmlFor="message" className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Your Message</label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-50 rounded-2xl focus:bg-white focus:border-primary-500 outline-none transition-all text-gray-900 font-medium resize-none"
                    placeholder="Tell me about your project or idea..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <button
                  type="submit"
                  className={clsx(
                    "w-full flex items-center justify-center py-5 rounded-2xl font-bold text-lg transition-all",
                    submitted 
                      ? "bg-green-500 text-white shadow-lg shadow-green-100" 
                      : "bg-primary-600 text-white hover:bg-primary-700 shadow-xl shadow-primary-100"
                  )}
                >
                  {submitted ? 'Message Sent Successfully!' : (
                    <>
                      Send Message <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
          
          <div className="lg:col-span-5 space-y-12">
             <div className="space-y-10">
                <h2 className="text-3xl font-bold text-gray-900">Direct Channels</h2>
                <div className="space-y-8">
                   {[
                     { icon: Mail, label: 'Email', value: 'noopur@example.com', href: 'mailto:noopur@example.com' },
                     { icon: Linkedin, label: 'LinkedIn', value: '/in/noopurtrivedi', href: 'https://linkedin.com' },
                     { icon: Twitter, label: 'Twitter', value: '@noopur_t', href: 'https://twitter.com' }
                   ].map((item, idx) => (
                     <a 
                      key={idx}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-6 group"
                     >
                       <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:bg-primary-50 group-hover:text-primary-600 transition-all">
                         <item.icon className="h-6 w-6" />
                       </div>
                       <div>
                         <div className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">{item.label}</div>
                         <div className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">{item.value}</div>
                       </div>
                     </a>
                   ))}
                </div>
             </div>

             <div className="p-8 bg-primary-950 rounded-[2.5rem] text-white relative overflow-hidden">
                <div className="relative z-10">
                   <h3 className="text-2xl font-bold mb-4">Location</h3>
                   <div className="flex items-center text-primary-300 mb-8">
                     <MapPin className="h-5 w-5 mr-2" /> San Francisco, CA (GMT-7)
                   </div>
                   <p className="text-primary-100/70 leading-relaxed mb-8">
                     I'm currently based in SF but work with partners and clients worldwide.
                   </p>
                   <a href="/network" className="inline-flex items-center font-bold text-white hover:text-primary-400 transition-colors group">
                      Book a Coffee Chat instead <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                   </a>
                </div>
                {/* Decorative glow */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-48 h-48 bg-primary-500/20 rounded-full blur-3xl"></div>
             </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

