import React from 'react'
import { Linkedin, Mail, Twitter } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-xl font-bold tracking-tight text-gray-900">
              Noopur<span className="text-primary-600">.</span>
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Business Analyst + AI Builder + Entrepreneur
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-600 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-600 transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="mailto:noopur@example.com" className="text-gray-400 hover:text-primary-600 transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Noopur Trivedi. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-gray-600">Privacy Policy</a>
            <a href="#" className="hover:text-gray-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
