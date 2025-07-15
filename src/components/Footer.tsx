import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white rounded-full" />
        <div className="absolute top-3/4 right-1/4 w-48 h-48 border border-white rounded-full" />
        <div className="absolute top-1/2 left-3/4 w-24 h-24 border border-white rounded-full" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <motion.div 
            className="space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />
              </motion.div>
              <span className="text-xl sm:text-2xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Aryantra
              </span>
            </motion.div>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Powering modern businesses with friction-free, enterprise-grade AI solutions that deliver measurable growth.
            </p>
            <div className="flex space-x-4 sm:space-x-6">
              {[
                { icon: Linkedin, href: "#", color: "hover:text-blue-400" },
                { icon: Twitter, href: "#", color: "hover:text-cyan-400" },
                { icon: Instagram, href: "#", color: "hover:text-pink-400" }
              ].map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href} 
                  className={`text-gray-400 ${social.color} transition-all duration-300 p-2 rounded-xl hover:bg-white/10`}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Contact", path: "/contact" }
              ].map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:bg-white/10 px-2 py-1 rounded-lg inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                "AI Voice Agents",
                "Lead Qualification", 
                "AI-Generated Media",
                "AI Chatbots",
                "Content Automation"
              ].map((service, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <span className="text-gray-400 text-sm sm:text-base hover:text-gray-300 transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">Contact Info</h3>
            <ul className="space-y-3 sm:space-y-4">
              {[
                { icon: Mail, text: "aryantra.ai@gmail.com", href: "mailto:aryantra.ai@gmail.com" },
                { icon: Phone, text: "+91-9391100788", href: "tel:+919391100788" },
                { icon: MapPin, text: "Hyderabad, India", href: "#" }
              ].map((contact, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-all duration-300 cursor-pointer group"
                  whileHover={{ x: 5 }}
                >
                  <contact.icon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-blue-400 transition-colors duration-300" />
                  <a href={contact.href} className="text-sm sm:text-base">
                    {contact.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-400 text-sm sm:text-base">
            &copy; 2024 <span className="font-bold text-white">Aryantra</span>. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;