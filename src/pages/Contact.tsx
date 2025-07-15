import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Sparkles } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import ParallaxSection from '../components/ParallaxSection';
import FloatingElements from '../components/FloatingElements';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const GOOGLE_SCRIPT_URL = "http://localhost:3001/api/contact";

const Contact = () => {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state && (location.state as any).scrollToForm && formRef.current) {
      // Wait for layout/animation to finish
      setTimeout(() => {
        const formEl = formRef.current;
        if (formEl) {
          // Get the form's position relative to the document
          const rect = formEl.getBoundingClientRect();
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          // Offset so the form is nicely centered, but not hidden by sticky nav
          const navOffset = 80; // adjust if your nav is taller
          const top = rect.top + scrollTop - navOffset;
          window.scrollTo({ top, behavior: 'smooth' });
          // Focus the first input after scroll
          setTimeout(() => {
            const el = formEl.querySelector('input, textarea');
            if (el && 'focus' in el && typeof (el as HTMLElement).focus === 'function') {
              (el as HTMLElement).focus();
            }
          }, 600); // match scroll duration
        }
      }, 400); // allow layout/animation to finish
    }
  }, [location.state]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    let success = false;
    try {
      console.log('Submitting form data:', formData);
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      
      console.log('Response status:', response.status);
      if (response.ok) {
        const responseText = await response.text();
        console.log('Response text:', responseText);
        
        try {
          const data = JSON.parse(responseText);
          console.log('Response data (JSON):', data);
        } catch (e) {
          console.log('Response is not JSON, using as text');
        }
        
        success = true;
      } else {
        console.error('Error response:', await response.text());
      }
    } catch (err) {
      console.error('Submission error:', err);
      success = false;
    }
    setIsSubmitting(false);
    setIsSubmitted(success);
    // Reset form after 3 seconds if successful
    if (success) {
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "aryantra.ai@gmail.com",
      href: "mailto:aryantra.ai@gmail.com",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91-9391100788",
      href: "tel:+919391100788",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Hyderabad, India",
      href: "#",
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  const benefits = [
    "Enterprise-grade AI solutions",
    "Rapid deployment and results",
    "24/7 support and maintenance",
    "Proven track record of success"
  ];

  return (
    <>
      <Helmet>
        <title>Contact Aryantra - AI Automation Consultation</title>
        <meta name="description" content="Contact Aryantra for AI automation solutions, business consultation, and support. Let's automate your pain into profit." />
        <meta name="keywords" content="Contact Aryantra, AI Consultation, Business Automation, Support, Inquiry" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contact Aryantra - AI Automation Consultation" />
        <meta property="og:description" content="Contact Aryantra for AI automation solutions, business consultation, and support. Let's automate your pain into profit." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aryantra.com/contact" />
        <meta property="og:image" content="/vite.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Aryantra - AI Automation Consultation" />
        <meta name="twitter:description" content="Contact Aryantra for AI automation solutions, business consultation, and support. Let's automate your pain into profit." />
        <meta name="twitter:image" content="/vite.svg" />
        <link rel="canonical" href="https://aryantra.com/contact" />
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen pt-16 overflow-hidden"
      >
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
          <AnimatedBackground />
          <FloatingElements />
          
          {/* Animated gradient orbs */}
          <motion.div
            className="absolute top-20 left-10 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full opacity-20 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full opacity-15 blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div 
            style={{ y: heroY, opacity: heroOpacity }}
            className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Animated badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="inline-flex items-center px-3 sm:px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-xs sm:text-sm font-medium text-indigo-700 mb-4 sm:mb-6"
              >
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                <span>Let's Connect</span>
              </motion.div>

              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Get in <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">Touch</span>
              </motion.h1>

              <motion.p 
                className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Ready to transform your business with AI automation? Let's discuss how we can help you automate pain into profit.
              </motion.p>
            </motion.div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <ParallaxSection speed={0.3}>
          <section className="py-16 sm:py-20 lg:py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6 sm:space-y-8"
                >
                  <div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-4 sm:mb-6">
                      Let's Start a Conversation
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                      We're here to help you unlock the potential of AI automation for your business. 
                      Reach out to us and let's explore how we can drive your growth together.
                    </p>
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        whileHover={{ scale: 1.02, x: 10 }}
                        className="group flex items-center space-x-4 p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 cursor-pointer"
                      >
                        <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${info.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <info.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                            {info.title}
                          </h3>
                          <a
                            href={info.href}
                            className="text-sm sm:text-base text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div 
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                      Why Choose Aryantra?
                    </h3>
                    <ul className="space-y-2 sm:space-y-3">
                      {benefits.map((benefit, index) => (
                        <motion.li 
                          key={index}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm sm:text-base text-gray-600">{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 p-6 sm:p-8 lg:p-10"
                >
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center space-y-4 sm:space-y-6"
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                      </div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900">Message Sent!</h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        Thank you for contacting us. We'll get back to you within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
                      <div>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 mb-2">
                          Send us a Message
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600">
                          Fill out the form below and we'll respond promptly.
                        </p>
                      </div>

                      <div>
                        <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 resize-none text-sm sm:text-base"
                          placeholder="Tell us about your project and how we can help..."
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-6 py-4 sm:py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold text-sm sm:text-base hover:from-purple-600 hover:to-indigo-600 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            <span>Send Message</span>
                          </>
                        )}
                      </motion.button>
                    </form>
                  )}
                </motion.div>
              </div>
            </div>
          </section>
        </ParallaxSection>

        {/* CTA Section */}
        <ParallaxSection speed={0.2}>
          <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 relative overflow-hidden">
            {/* Animated background elements */}
            <motion.div
              className="absolute inset-0 opacity-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-1/4 left-1/4 w-16 sm:w-32 h-16 sm:h-32 border border-white rounded-full" />
              <div className="absolute top-3/4 right-1/4 w-24 sm:w-48 h-24 sm:h-48 border border-white rounded-full" />
              <div className="absolute top-1/2 left-3/4 w-12 sm:w-24 h-12 sm:h-24 border border-white rounded-full" />
            </motion.div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6 sm:space-y-8"
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
                  Join hundreds of businesses that have already automated their operations with our AI solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                  <motion.button 
                    className="mx-auto px-8 py-4 sm:px-10 sm:py-5 bg-white text-indigo-600 rounded-xl font-bold text-base sm:text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      if (formRef.current) {
                        formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        setTimeout(() => {
                          const el = formRef.current?.querySelector('input, textarea');
                          if (el && 'focus' in el && typeof (el as HTMLElement).focus === 'function') {
                            (el as HTMLElement).focus();
                          }
                        }, 500);
                      }
                    }}
                  >
                    Schedule a Demo
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </section>
        </ParallaxSection>
      </motion.div>
    </>
  );
};

export default Contact;