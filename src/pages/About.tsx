import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Eye, Heart, Zap, Users, TrendingUp, Award, Star, Sparkles } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import ParallaxSection from '../components/ParallaxSection';
import FloatingElements from '../components/FloatingElements';
import { Helmet } from 'react-helmet-async';

const About = () => {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const values = [
    {
      icon: Heart,
      title: "Intelligence with Integrity",
      description: "We build AI solutions that are ethical, transparent, and trustworthy.",
      gradient: "from-rose-500 to-pink-600"
    },
    {
      icon: Users,
      title: "Human-Centered Automation",
      description: "Our AI enhances human capabilities rather than replacing them.",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Zap,
      title: "Speed with Precision",
      description: "Fast implementation without compromising on quality or accuracy.",
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      icon: TrendingUp,
      title: "Growth by Design",
      description: "Every solution is crafted to drive measurable business growth.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Star,
      title: "Always On Innovation",
      description: "Continuous improvement and cutting-edge technology adoption.",
      gradient: "from-purple-500 to-violet-600"
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Aryantra - Our Story, Mission & Vision</title>
        <meta name="description" content="Learn about Aryantra's mission, vision, and story. Discover how we drive frictionless transformation through scalable AI automation." />
        <meta name="keywords" content="About Aryantra, AI Company, Mission, Vision, Story, Automation, Team" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About Aryantra - Our Story, Mission & Vision" />
        <meta property="og:description" content="Learn about Aryantra's mission, vision, and story. Discover how we drive frictionless transformation through scalable AI automation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aryantra.com/about" />
        <meta property="og:image" content="/vite.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Aryantra - Our Story, Mission & Vision" />
        <meta name="twitter:description" content="Learn about Aryantra's mission, vision, and story. Discover how we drive frictionless transformation through scalable AI automation." />
        <meta name="twitter:image" content="/vite.svg" />
        <link rel="canonical" href="https://aryantra.com/about" />
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
                <span>Discover Our Story</span>
              </motion.div>

              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                About <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">Aryantra</span>
              </motion.h1>

              <motion.p 
                className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Driving frictionless transformation through scalable AI automation that unlocks growth and optimizes operations.
              </motion.p>
            </motion.div>
          </motion.div>
        </section>

        {/* Mission & Vision */}
        <ParallaxSection speed={0.3}>
          <section className="py-16 sm:py-20 lg:py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                      <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900">Our Mission</h2>
                  </div>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    To drive frictionless transformation through scalable AI automation that unlocks growth and optimizes operations. We believe that every business deserves access to enterprise-grade AI solutions that deliver measurable results.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-6"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
                      <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900">Our Vision</h2>
                  </div>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    To become a global benchmark in seamless AI deployment that enhances customer experience and operational efficiency. We envision a future where AI automation is accessible, impactful, and transformative for businesses of all sizes.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>
        </ParallaxSection>

        {/* Our Story */}
        <ParallaxSection speed={0.4}>
          <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-indigo-50 relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center space-y-6 sm:space-y-8"
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900">Our Story</h2>
                <div className="prose prose-lg max-w-none space-y-6">
                  <motion.p 
                    className="text-base sm:text-lg text-gray-600 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  >
                    Aryantra was born from the desire to demystify AI and make enterprise-grade automation accessible, impactful, and efficient. Founded by a team of passionate technologists and growth strategists, we recognized that many businesses struggled with the complexity and implementation challenges of AI solutions.
                  </motion.p>
                  <motion.p 
                    className="text-base sm:text-lg text-gray-600 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    We set out to change this narrative by creating AI solutions that are not just powerful, but also intuitive and easy to deploy. Our approach combines cutting-edge technology with deep business understanding, ensuring that every solution we create drives real, measurable value for our clients.
                  </motion.p>
                  <motion.p 
                    className="text-base sm:text-lg text-gray-600 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    Today, we're reshaping the way businesses interact, market, and scale through our comprehensive suite of AI automation tools. From voice agents to content automation, we're helping companies transform their operations and achieve unprecedented growth.
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </section>
        </ParallaxSection>

        {/* Values */}
        <ParallaxSection speed={0.2}>
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
                  Our Core Values
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                  The principles that guide everything we do at Aryantra
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, rotateY: -15 }}
                    whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    whileHover={{ 
                      y: -10, 
                      rotateY: 5,
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                    className="group relative p-6 sm:p-8 bg-gradient-to-br from-white to-gray-50 rounded-3xl border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-500 overflow-hidden"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Gradient overlay on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />
                    
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                      <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                      {value.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {value.description}
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

        {/* Team Section */}
        <ParallaxSection speed={0.3}>
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
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
                  Meet Our Team
                </h2>
                <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
                  Our diverse team of AI specialists, engineers, and business strategists work together to deliver exceptional results for our clients.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-blue-100">
                  <p className="text-base sm:text-lg">
                    Detailed team profiles coming soon. Stay tuned to learn more about the innovative minds behind Aryantra's success.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>
        </ParallaxSection>
      </motion.div>
    </>
  );
};

export default About;