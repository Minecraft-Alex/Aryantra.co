import React, { useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

// Add this to extend the Window interface
declare global {
  interface Window {
    smoothScrollAnimation?: number;
  }
}

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Smooth scroll function with easing that can be interrupted
  const smoothScrollTo = useCallback((targetY: number, duration = 1000) => {
    // Cancel any previous animation
    if (window.smoothScrollAnimation) {
      cancelAnimationFrame(window.smoothScrollAnimation);
    }
    
    const startingY = window.pageYOffset;
    const diff = targetY - startingY;
    let start: number;
    
    // Easing function
    const easeInOutCubic = (t: number) => 
      t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    
    // User scroll handler to cancel animation
    const handleUserScroll = () => {
      if (window.smoothScrollAnimation) {
        cancelAnimationFrame(window.smoothScrollAnimation);
        window.removeEventListener('wheel', handleUserScroll);
        window.removeEventListener('touchmove', handleUserScroll);
        delete window.smoothScrollAnimation;
      }
    };
    
    // Add interrupt listeners
    window.addEventListener('wheel', handleUserScroll);
    window.addEventListener('touchmove', handleUserScroll);
    
    // Animation step function
    const step = (timestamp: number) => {
      if (start === undefined) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);
      
      window.scrollTo(0, startingY + diff * easedProgress);
      
      if (elapsed < duration) {
        window.smoothScrollAnimation = requestAnimationFrame(step);
      } else {
        // Clean up
        window.removeEventListener('wheel', handleUserScroll);
        window.removeEventListener('touchmove', handleUserScroll);
        delete window.smoothScrollAnimation;
      }
    };
    
    // Start animation
    window.smoothScrollAnimation = requestAnimationFrame(step);
    
    // Timeout safety to clean up listeners
    setTimeout(() => {
      if (window.smoothScrollAnimation) {
        cancelAnimationFrame(window.smoothScrollAnimation);
        window.removeEventListener('wheel', handleUserScroll);
        window.removeEventListener('touchmove', handleUserScroll);
        delete window.smoothScrollAnimation;
      }
    }, duration + 100);
  }, []);
  
  // Function to scroll to top if already on the same page
  const handleLinkClick = useCallback((path: string) => (e: React.MouseEvent) => {
    if (location.pathname === path) {
      e.preventDefault();
      smoothScrollTo(0, 1000); // Scroll to top with 1000ms duration
    }
  }, [location.pathname, smoothScrollTo]);

  // Handle service link clicks with smooth scrolling to sections
  const handleServiceClick = useCallback((path: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Extract the base path and hash
    const [basePath, hash] = path.split('#');
    
    // If we're already on the services page
    if (location.pathname === '/services' && hash) {
      const element = document.getElementById(hash);
      if (element) {
        // Calculate position with offset
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        // Use our custom smooth scroll
        smoothScrollTo(offsetPosition, 1000);
      }
    } else {
      // Navigate to services page with the hash
      navigate(path);
    }
  }, [location.pathname, navigate, smoothScrollTo]);

  // Service mapping with their respective IDs
  const serviceLinks = [
    { 
      name: "AI Voice Agents", 
      path: "/services#ai-voice-agent"
    },
    { 
      name: "Lead Qualification", 
      path: "/services#ai-lead-qualification-and-nurturing" 
    },
    { 
      name: "AI-Generated Media", 
      path: "/services#ai-generated-image-and-video-assets" 
    },
    { 
      name: "AI Chatbots", 
      path: "/services#ai-chatbots" 
    },
    { 
      name: "Content Automation", 
      path: "/services#content-automation" 
    }
  ];

  // Quick links with paths
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" }
  ];

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
                className="relative"
              >
                <img src="/logo/ARYANTRA.svg" alt="Aryantra Logo" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 hover:opacity-20 transition-opacity scale-150 blur-sm"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
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
                { icon: Linkedin, href: "https://www.linkedin.com/company/aryantra-ai/", color: "hover:text-blue-400" },
                { icon: Twitter, href: "#", color: "hover:text-cyan-400" },
                { icon: Instagram, href: "#", color: "hover:text-pink-400" }
              ].map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href} 
                  className={`text-gray-400 ${social.color} transition-all duration-300 p-2 rounded-xl hover:bg-white/10`}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  target="_blank"
                  rel="noopener noreferrer"
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
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:bg-white/10 px-2 py-1 rounded-lg inline-block"
                    onClick={handleLinkClick(link.path)}
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
              {serviceLinks.map((service, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 5 }}
                >
                  <a 
                    href={service.path}
                    className="text-gray-400 hover:text-white text-sm sm:text-base transition-colors duration-300 hover:bg-white/10 px-2 py-1 rounded-lg inline-block"
                    onClick={handleServiceClick(service.path)}
                  >
                    {service.name}
                  </a>
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