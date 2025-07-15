import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Zap, Users, TrendingUp, Award, Bot, MessageCircle, Image, Volume2, FileText, Sparkles, Rocket, Shield } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import ParallaxSection from '../components/ParallaxSection';
import FloatingElements from '../components/FloatingElements';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const services = [
    {
      icon: Volume2,
      title: "AI Voice Agents",
      description: "Intelligent voice support for customer service and sales",
      gradient: "from-blue-500 to-indigo-600",
      delay: 0.1
    },
    {
      icon: Users,
      title: "Lead Qualification",
      description: "Automated lead scoring and engagement flows",
      gradient: "from-indigo-500 to-purple-600",
      delay: 0.2
    },
    {
      icon: Image,
      title: "AI-Generated Media",
      description: "On-brand visual content created in minutes",
      gradient: "from-purple-500 to-pink-600",
      delay: 0.3
    },
    {
      icon: MessageCircle,
      title: "AI Chatbots",
      description: "Multi-lingual, context-aware customer support",
      gradient: "from-pink-500 to-rose-600",
      delay: 0.4
    },
    {
      icon: FileText,
      title: "Content Automation",
      description: "Automated content lifecycle at scale",
      gradient: "from-rose-500 to-orange-600",
      delay: 0.5
    }
  ];


  const features = [
    {
      icon: Rocket,
      title: "Lightning Fast Deployment",
      description: "Get your AI solutions up and running in days, not months"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with SOC 2 compliance and data encryption"
    },
    {
      icon: Sparkles,
      title: "Continuous Learning",
      description: "AI that gets smarter with every interaction and adapts to your business"
    }
  ];

  const serviceSectionIds: Record<string, string> = {
    "AI Voice Agents": "ai-voice-agent",
    "Lead Qualification": "ai-lead-qualification-and-nurturing",
    "AI-Generated Media": "ai-generated-image-video-assets",
    "AI Chatbots": "ai-chatbots",
    "Content Automation": "content-automation"
  };

  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Aryantra - Seamless AI, Scalable Growth</title>
        <meta name="description" content="Powering modern businesses with friction-free, enterprise-grade AI solutions that deliver measurable growth. Automate Pain into Profit with Aryantra." />
        <meta name="keywords" content="AI, Automation, Business, Growth, Chatbots, Voice Agents, Content Automation, Aryantra" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Aryantra - Seamless AI, Scalable Growth" />
        <meta property="og:description" content="Powering modern businesses with friction-free, enterprise-grade AI solutions that deliver measurable growth." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aryantra.com/" />
        <meta property="og:image" content="/vite.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aryantra - Seamless AI, Scalable Growth" />
        <meta name="twitter:description" content="Powering modern businesses with friction-free, enterprise-grade AI solutions that deliver measurable growth." />
        <meta name="twitter:image" content="/vite.svg" />
        <link rel="canonical" href="https://aryantra.com/" />
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen overflow-hidden"
      >
        {/* Hero Section with Parallax */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
          <AnimatedBackground />
          <FloatingElements />
          
          {/* Animated gradient orbs */}
          <motion.div
            className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full opacity-20 blur-3xl"
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
            className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full opacity-15 blur-3xl"
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
              className="space-y-8"
            >
              {/* Animated badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-medium text-indigo-700 mb-6"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                <span>Introducing Next-Gen AI Automation</span>
              </motion.div>

              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-tight tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <motion.span
                  className="block"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Seamless AI,
                </motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  Scalable Growth
                </motion.span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="space-y-4"
              >
                <p className="text-2xl md:text-3xl font-bold text-indigo-600">
                  Automate Pain into Profit
                </p>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
                  Powering modern businesses with friction-free, enterprise-grade AI solutions that deliver measurable growth.
                </p>
              </motion.div>

              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/services"
                    className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 flex items-center space-x-3 overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <span className="relative z-10">Get Started</span>
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 rounded-2xl font-bold text-lg hover:bg-indigo-600 hover:text-white transition-all duration-300 backdrop-blur-sm bg-white/10"
                  >
                    Schedule a Demo
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-indigo-400 rounded-full flex justify-center">
              <motion.div 
                className="w-1 h-3 bg-indigo-400 rounded-full mt-2"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <ParallaxSection speed={0.3}>
          <section className="py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-20"
              >
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                  Why Choose <span className="text-indigo-600">Aryantra</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Experience the future of business automation with our cutting-edge AI solutions
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="group p-8 bg-gradient-to-br from-white to-gray-50 rounded-3xl border border-gray-200 hover:border-indigo-200 hover:shadow-2xl transition-all duration-500"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </ParallaxSection>

        {/* Services Overview with Enhanced Animations */}
        <ParallaxSection speed={0.4}>
          <section className="py-32 bg-gradient-to-br from-gray-50 to-indigo-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-20"
              >
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                  Our AI <span className="text-indigo-600">Solutions</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive AI automation services designed to transform your business operations
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, rotateY: -15 }}
                    whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: service.delay, duration: 0.8 }}
                    whileHover={{ 
                      y: -15, 
                      rotateY: 5,
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                    className="group relative p-8 bg-white rounded-3xl border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
                    style={{ transformStyle: 'preserve-3d' }}
                    onClick={() => {
                      const sectionId = serviceSectionIds[service.title];
                      if (sectionId) {
                        navigate(`/services#${sectionId}`);
                      } else {
                        navigate('/services');
                      }
                    }}
                  >
                    {/* Gradient overlay on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />
                    
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* Hover effect particles */}
                    <motion.div
                      className="absolute top-4 right-4 w-2 h-2 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100"
                      animate={{ scale: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    />
                    <motion.div
                      className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100"
                      animate={{ scale: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </ParallaxSection>
        

        {/* CTA Section with Enhanced Design */}
        <ParallaxSection speed={0.3}>
          <section className="py-32 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
            
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <motion.h2 
                  className="text-4xl md:text-5xl font-black text-white leading-tight"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  Ready to Transform Your Business?
                </motion.h2>
                
                <motion.p 
                  className="text-xl text-blue-100 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Join hundreds of businesses that have automated their pain into profit with our AI solutions.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/contact"
                      className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 space-x-3 relative overflow-hidden"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      <span className="relative z-10">Start Your AI Journey</span>
                      <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </ParallaxSection>
      </motion.div>
    </>
  );
};

export default Home;