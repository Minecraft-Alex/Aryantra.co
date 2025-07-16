import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Volume2, Users, Image, MessageCircle, FileText, ArrowRight, CheckCircle, Sparkles, Zap, Shield, Rocket } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import ParallaxSection from '../components/ParallaxSection';
import FloatingElements from '../components/FloatingElements';
import ImageCarousel from '../components/ImageCarousel';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Helmet } from 'react-helmet-async';
import AudioWaveformPlayer from '../components/AudioWaveformPlayer';
import MediaCarousel from '../components/MediaCarousel';
import PhotoAudioOverlay from '../components/PhotoAudioOverlay';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const navigate = useNavigate();

  const services = [
    {
      icon: Volume2,
      title: "AI Voice Agent",
      description: "Intelligent, always-on voice support that handles customer service, outbound sales, and appointment scheduling.",
      features: [
        "24/7 customer service automation",
        "Intelligent call routing and handling",
        "Appointment scheduling and management",
        "Multi-language support",
        "Real-time sentiment analysis"
      ],
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "AI Lead Qualification & Nurturing",
      description: "Automatically qualify leads, score intent, and drive engagement with AI-powered communication flows.",
      features: [
        "Automated lead scoring and qualification",
        "Intelligent conversation flows",
        "Behavioral analysis and insights",
        "CRM integration and management",
        "Personalized nurturing campaigns"
      ],
      gradient: "from-cyan-500 to-cyan-600"
    },
    {
      icon: Image,
      title: "AI-Generated Image & Video Assets",
      description: "Create on-brand, high-conversion visual content in minutes using generative AI models.",
      features: [
        "On-brand visual content generation",
        "High-quality image and video creation",
        "Automated asset optimization",
        "Brand consistency maintenance",
        "Rapid content production"
      ],
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: MessageCircle,
      title: "AI Chatbots",
      description: "Deploy multi-lingual, context-aware chatbots that resolve queries, upsell, and delight customers 24/7.",
      features: [
        "Multi-language conversation support",
        "Context-aware responses",
        "Intelligent query resolution",
        "Automated upselling and cross-selling",
        "Seamless human handoff"
      ],
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: FileText,
      title: "Content Automation",
      description: "From blog articles to product descriptions—automate your content lifecycle at scale.",
      features: [
        "Automated blog and article writing",
        "Product description generation",
        "SEO-optimized content creation",
        "Brand voice consistency",
        "Content calendar management"
      ],
      gradient: "from-orange-500 to-orange-600"
    }
  ];

  // Carousel images for AI-Generated Image & Video Assets
  const carouselImages = [
    '/carousel/photo1.png',
    '/carousel/photo2.png',
    '/carousel/photo3.png',
    '/carousel/photo4.png',
    '/carousel/photo5.png',
    '/carousel/photo6.png',
    '/carousel/photo7.png',
    '/carousel/photo8.png',
    '/carousel/photo9.png',
    '/carousel/photo10.png'
  ];

  // Carousel images for AI Chatbots
  const aiChatbotsImages = [
    '/ai-chatbots/photo1.png',
    '/ai-chatbots/photo2.png',
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We analyze your business needs and identify automation opportunities",
      icon: Zap
    },
    {
      step: "02",
      title: "Custom Development",
      description: "Our team develops tailored AI solutions specific to your requirements",
      icon: Rocket
    },
    {
      step: "03",
      title: "Deploy & Optimize",
      description: "We deploy the solution and continuously optimize for maximum performance",
      icon: Shield
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Automation Services | Voice Agents, Chatbots, Content Automation | Aryantra</title>
        <meta name="description" content="Transform your business with Aryantra's AI services: AI voice agents, lead qualification, chatbots, content automation, and AI-generated media. Scalable, enterprise-grade solutions." />
        <meta name="keywords" content="AI voice agents, AryantraAI services, Aryantra automation, business AI solutions, lead qualification AI, AI chatbots, content automation, AI-generated media, enterprise AI solutions, Aryantra, voice automation technology, 24/7 AI customer service, multi-language chatbots, automated lead scoring, AI sales automation, Aryantra.co, AI business automation, AI content creation, voice AI for business, AI customer support, virtual AI assistants, AI voice support systems, enterprise automation software, B2B AI solutions, AI-driven business growth" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="AI Automation Services | Voice Agents, Chatbots, Content Automation | Aryantra" />
        <meta property="og:description" content="Transform your business with Aryantra's AI services: AI voice agents, lead qualification, chatbots, content automation, and AI-generated media." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aryantra.co/services" />
        <meta property="og:image" content="/logo/ARYANTRA.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Automation Services | Voice Agents, Chatbots, Content Automation | Aryantra" />
        <meta name="twitter:description" content="Transform your business with Aryantra's AI services: voice agents, lead qualification, chatbots, content automation, and AI-generated media." />
        <meta name="twitter:image" content="/logo/ARYANTRA.svg" />
        <link rel="canonical" href="https://aryantra.co/services" />

        {/* Structured data for services page */}
        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "Service",
                "position": 1,
                "name": "AI Voice Agent",
                "description": "Intelligent, always-on voice support that handles customer service, outbound sales, and appointment scheduling.",
                "provider": {
                  "@type": "Organization",
                  "name": "Aryantra"
                },
                "url": "https://aryantra.co/services#ai-voice-agent"
              },
              {
                "@type": "Service",
                "position": 2,
                "name": "AI Lead Qualification & Nurturing",
                "description": "Automatically qualify leads, score intent, and drive engagement with AI-powered communication flows.",
                "provider": {
                  "@type": "Organization",
                  "name": "Aryantra"
                },
                "url": "https://aryantra.co/services#ai-lead-qualification-and-nurturing"
              },
              {
                "@type": "Service",
                "position": 3,
                "name": "AI-Generated Image & Video Assets",
                "description": "Create on-brand, high-conversion visual content in minutes using generative AI models.",
                "provider": {
                  "@type": "Organization",
                  "name": "Aryantra"
                },
                "url": "https://aryantra.co/services#ai-generated-image-and-video-assets"
              },
              {
                "@type": "Service",
                "position": 4,
                "name": "AI Chatbots",
                "description": "Deploy multi-lingual, context-aware chatbots that resolve queries, upsell, and delight customers 24/7.",
                "provider": {
                  "@type": "Organization",
                  "name": "Aryantra"
                },
                "url": "https://aryantra.co/services#ai-chatbots"
              },
              {
                "@type": "Service",
                "position": 5,
                "name": "Content Automation",
                "description": "From blog articles to product descriptions—automate your content lifecycle at scale.",
                "provider": {
                  "@type": "Organization",
                  "name": "Aryantra"
                },
                "url": "https://aryantra.co/services#content-automation"
              }
            ]
          }
        `}
        </script>
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
                <span>Comprehensive AI Solutions</span>
              </motion.div>

              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Our <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">AI Services</span>
              </motion.h1>

              <motion.p 
                className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Comprehensive AI automation solutions designed to transform your business operations and drive measurable growth.
              </motion.p>
            </motion.div>
          </motion.div>
        </section>

        {/* Services Grid */}
        <ParallaxSection speed={0.3}>
          <section className="py-16 sm:py-20 lg:py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-16 sm:space-y-20 lg:space-y-32">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    id={service.title
                      .toLowerCase()
                      .replace(/&/g, 'and')
                      .replace(/[^a-z0-9]+/g, '-')
                      .replace(/(^-|-$)/g, '')}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center ${
                      index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                    }`}
                  >
                    <div className={`space-y-6 sm:space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <motion.div 
                          className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center`}
                          whileHover={{ scale: 1.1, rotate: 12 }}
                          transition={{ duration: 0.3 }}
                        >
                          <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                        </motion.div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900">{service.title}</h2>
                      </div>
                      
                      <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="space-y-3 sm:space-y-4">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div 
                            key={featureIndex} 
                            className="flex items-start space-x-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: featureIndex * 0.1, duration: 0.5 }}
                          >
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      <motion.button 
                        className={`inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r ${service.gradient} text-white rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base hover:opacity-90 transition-all duration-300 space-x-2 shadow-lg hover:shadow-xl`}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/contact', { state: { scrollToForm: true } })}
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </motion.button>
                    </div>

                    <motion.div 
                      className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                      whileHover={{ scale: 1.02, rotateY: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.title === "AI-Generated Image & Video Assets" ? (
                        <div className="h-64 sm:h-80 lg:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                          <ImageCarousel images={carouselImages} interval={3000} />
                        </div>
                      ) : service.title === "AI Chatbots" ? (
                        <div className="h-64 sm:h-80 lg:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                          <ImageCarousel images={aiChatbotsImages} interval={3000} />
                        </div>
                      ) : service.title === "AI Voice Agent" ? (
                        <div className="h-64 sm:h-80 lg:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600">
                          <PhotoAudioOverlay photoUrl="/AiVoiceAgent/Aibot.png" audioUrl="/AiVoiceAgent/HealthcareNeha.wav" />
                        </div>
                      ) : service.title === "Content Automation" ? (
                        <div className="h-64 sm:h-80 lg:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-600">
                          <DotLottieReact
                            src="https://lottie.host/ebb288f3-6f2c-4f33-ae53-19c4545f76ae/AC641kx6i7.lottie"
                            loop
                            autoplay
                            style={{ width: '100%', height: '100%' }}
                          />
                        </div>
                      ) : service.title === "AI Lead Qualification & Nurturing" ? (
                        <div className="h-64 sm:h-80 lg:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center bg-gradient-to-r from-cyan-500 to-cyan-600">
                          <PhotoAudioOverlay photoUrl="/lead/photo1.png" />
                        </div>
                      ) : (
                        <div className={`h-64 sm:h-80 lg:h-96 bg-gradient-to-r ${service.gradient} rounded-2xl sm:rounded-3xl flex items-center justify-center relative overflow-hidden`}>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 opacity-10"
                          >
                            <service.icon className="w-32 h-32 sm:w-48 sm:h-48 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                          </motion.div>
                          <service.icon className="w-16 h-16 sm:w-24 sm:h-24 text-white opacity-80 relative z-10" />
                        </div>
                      )}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </ParallaxSection>

        {/* Process Section */}
        <ParallaxSection speed={0.4}>
          <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-indigo-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12 sm:mb-16 lg:mb-20"
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
                  Our Implementation Process
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                  A streamlined approach to deploying AI solutions that deliver results
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                    whileHover={{ y: -10, scale: 1.05 }}
                    className="text-center space-y-4 sm:space-y-6 group"
                  >
                    <div className="relative">
                      <motion.div 
                        className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl sm:rounded-3xl flex items-center justify-center text-xl sm:text-2xl font-black mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300"
                        whileHover={{ rotate: 12 }}
                      >
                        {step.step}
                      </motion.div>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 scale-110 blur-sm"
                      />
                    </div>
                    
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
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
                  Ready to Automate Your Business?
                </h2>
                <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
                  Let's discuss how our AI solutions can transform your operations and drive growth.
                </p>
                <motion.button 
                  className="inline-flex items-center px-8 py-4 sm:px-10 sm:py-5 bg-white text-indigo-600 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:bg-gray-100 transition-colors duration-300 space-x-2 sm:space-x-3 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/contact', { state: { scrollToForm: true } })}
                >
                  <span>Schedule a Consultation</span>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.button>
              </motion.div>
            </div>
          </section>
        </ParallaxSection>
      </motion.div>
    </>
  );
};

export default Services;
