import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Sparkles, Code, Zap } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import ParallaxSection from '../components/ParallaxSection';
import FloatingElements from '../components/FloatingElements';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

const serviceSectionIds: Record<string, string> = {
  "AI Conversational Agent for Sales Funnel Automation": "ai-voice-agent",
  "Voice-Enabled Sales Assistant": "ai-voice-agent", // maps to the same section as AI Voice Agent
  "Generative Media Engine for Ecommerce Campaigns": "ai-generated-image-video-assets",
  "Automated Content Marketing Suite": "content-automation",
  "Multi-Language Customer Support Bot": "ai-chatbots"
};

const Portfolio = () => {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const navigate = useNavigate();

  const projects = [
    {
      title: "AI Conversational Agent for Sales Funnel Automation",
      description: "A comprehensive AI solution that automates the entire sales funnel, from lead capture to qualification and nurturing.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Natural Language Processing", "Machine Learning", "CRM Integration"],
      category: "Sales Automation",
      status: "Completed",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "Voice-Enabled Sales Assistant",
      description: "AI voice agent for outbound sales calls and appointment scheduling",
      image: "https://images.pexels.com/photos/3184359/pexels-photo-3184359.jpeg?auto=compress&cs=tinysrgb&w=800", // placeholder image
      technologies: ["Voice AI", "Sales Automation", "Appointment Scheduling"],
      category: "Sales Assistant",
      status: "Completed",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      title: "Generative Media Engine for Ecommerce Campaigns",
      description: "An AI-powered platform that creates personalized product images and videos for ecommerce marketing campaigns.",
      image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Computer Vision", "Generative AI", "Content Management"],
      category: "Media Generation",
      status: "Completed",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Automated Content Marketing Suite",
      description: "End-to-end content creation, optimization, and distribution platform",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800", // placeholder image
      technologies: ["Content Automation", "SEO", "Distribution"],
      category: "Content Marketing",
      status: "Completed",
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Multi-Language Customer Support Bot",
      description: "AI chatbot supporting 25+ languages with cultural context awareness",
      image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800", // placeholder image
      technologies: ["Natural Language Processing", "Multilingual AI", "Customer Support"],
      category: "Customer Support",
      status: "Completed",
      gradient: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Portfolio - Aryantra AI Projects & Case Studies</title>
        <meta name="description" content="Explore Aryantra's portfolio of AI automation projects, case studies, and business transformations across industries." />
        <meta name="keywords" content="AI Portfolio, Case Studies, Projects, Aryantra, Automation, Business Transformation" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Portfolio - Aryantra AI Projects & Case Studies" />
        <meta property="og:description" content="Explore Aryantra's portfolio of AI automation projects, case studies, and business transformations across industries." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aryantra.com/portfolio" />
        <meta property="og:image" content="/vite.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio - Aryantra AI Projects & Case Studies" />
        <meta name="twitter:description" content="Explore Aryantra's portfolio of AI automation projects, case studies, and business transformations across industries." />
        <meta name="twitter:image" content="/vite.svg" />
        <link rel="canonical" href="https://aryantra.com/portfolio" />
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
                <span>Showcasing Our Work</span>
              </motion.div>

              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Our <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">Portfolio</span>
              </motion.h1>

              <motion.p 
                className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Explore our featured AI automation projects and discover how we're transforming businesses across industries.
              </motion.p>
            </motion.div>
          </motion.div>
        </section>

        {/* Featured Projects */}
        <ParallaxSection speed={0.3}>
          <section className="py-16 sm:py-20 lg:py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12 sm:mb-16 lg:mb-20"
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
                  Featured Projects
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                  Showcasing our latest AI automation solutions and their impact on business growth
                </p>
              </motion.div>

              <div className="space-y-16 sm:space-y-20 lg:space-y-32">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center ${
                      index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                    }`}
                  >
                    <div className={`space-y-6 sm:space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="px-3 py-1 sm:px-4 sm:py-2 bg-blue-100 text-blue-600 rounded-full text-xs sm:text-sm font-medium">
                          {project.category}
                        </span>
                        <span className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium ${
                          project.status === 'Completed' 
                            ? 'bg-green-100 text-green-600' 
                            : 'bg-yellow-100 text-yellow-600'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
                        {project.title}
                      </h3>
                      
                      <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="space-y-3 sm:space-y-4">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: techIndex * 0.1, duration: 0.5 }}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm font-medium"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <motion.button 
                          className={`inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-xl font-bold text-sm sm:text-base hover:opacity-90 transition-all duration-300 space-x-2 shadow-lg hover:shadow-xl`}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            const sectionId = serviceSectionIds[project.title];
                            if (sectionId) {
                              navigate(`/services#${sectionId}`);
                            } else {
                              navigate('/services');
                            }
                          }}
                        >
                          <span>View Details</span>
                          <ExternalLink className="w-4 h-4" />
                        </motion.button>
                        <motion.button 
                          className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-bold text-sm sm:text-base hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300 space-x-2"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-4 h-4" />
                          <span>Case Study</span>
                        </motion.button>
                      </div>
                    </div>

                    <motion.div 
                      className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                      whileHover={{ scale: 1.02, rotateY: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 hover:opacity-20 transition-opacity duration-500`}
                        />
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </ParallaxSection>
      </motion.div>
    </>
  );
};

export default Portfolio;