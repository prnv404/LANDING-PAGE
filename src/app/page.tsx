'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react';

const features = [
  {
    title: "Android POS Terminal",
    description: "State-of-the-art hardware designed for durability and ease of use. Features a large touchscreen display and long-lasting battery life.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "UPI Integration",
    description: "Seamlessly accept digital payments with integrated UPI support. Quick, secure, and hassle-free transactions for your passengers.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    )
  },
  {
    title: "Smart Ticketing",
    description: "Automated fare calculation and instant ticket generation. Includes route management and real-time revenue tracking features.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
      </svg>
    )
  }
];

const problemStatements = [
  {
    title: "Technological Gap",
    description: "The bus industry lags behind in digital transformation, missing opportunities for efficiency and innovation.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Limited Payment Options",
    description: "Cash-only systems create friction and reduce passenger convenience.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    )
  },
  {
    title: "Revenue Management",
    description: "Lack of digital systems makes tracking and optimizing revenue challenging.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
      </svg>
    )
  },
];

const benefits = [
  {
    title: "Increased Revenue",
    description: "Minimize revenue leakage and maximize earnings through digital ticketing and payments",
  },
  {
    title: "Operational Efficiency",
    description: "Reduce ticket issuing time and streamline fare collection process",
  },
  {
    title: "Better Passenger Experience",
    description: "Provide multiple payment options and faster ticketing for improved customer satisfaction",
  },
  {
    title: "Data Insights",
    description: "Access real-time reports and analytics to make informed business decisions",
  }
];

const featureCards = [
  {
    icon: "⚡",
    title: "Lightning Fast Ticketing",
    description: "Issue tickets in seconds with our optimized system"
  },
  {
    icon: "💳",
    title: "UPI Integration",
    description: "Seamless digital payments with UPI support"
  },
  {
    icon: "📱",
    title: "NFC Bus Pass",
    description: "Quick tap-and-go digital bus passes"
  },
  {
    icon: "🔄",
    title: "Seamless Integration",
    description: "Works with your existing systems"
  },
  {
    icon: "📊",
    title: "Smart Analytics",
    description: "Data-driven insights for your operations"
  }
];

export default function Home() {
  const [cards, setCards] = useState([...featureCards, ...featureCards, ...featureCards]);
  const [currentIndex, setCurrentIndex] = useState(featureCards.length);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const scrollRef = useRef(null);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
    autoScrollRef.current = setInterval(() => {
      if (!isTransitioning) {
        handleNext();
      }
    }, 3000);
  };

  useEffect(() => {
    startAutoScroll();
    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isTransitioning]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev - 1);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    setTouchStart(0);
    setTouchEnd(0);
    startAutoScroll();
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (currentIndex >= featureCards.length * 2) {
      // If we've moved past the middle set, quickly reset to the start of middle set
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(featureCards.length);
      }, 500); // Match this with your transition duration
      return () => clearTimeout(timeout);
    } else if (currentIndex < featureCards.length) {
      // If we've moved before the middle set, quickly reset to the end of middle set
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(featureCards.length * 2 - 1);
      }, 500);
      return () => clearTimeout(timeout);
    }
    setIsTransitioning(false);
  }, [currentIndex]);

  return (
    <footer className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-3xl font-black text-white">
                BUS<span className="text-white">3</span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              <a href="#contact" className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
                Contact Sales
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5">
                <span className={`absolute left-0 w-full h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-2' : 'top-0'}`}></span>
                <span className={`absolute left-0 w-full h-0.5 bg-white top-2 transition-all duration-200 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute left-0 w-full h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-2' : 'top-4'}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div 
            className={`md:hidden fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            style={{ top: '64px' }}
          >
            <div className="flex flex-col h-full bg-black">
              <div className="flex flex-col space-y-4 p-6 bg-gradient-to-b from-black via-black to-black/95">
                <a 
                  href="#features" 
                  className="text-2xl font-medium text-gray-200 hover:text-white transition-colors py-2 border-b border-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </a>
                <a 
                  href="#about" 
                  className="text-2xl font-medium text-gray-200 hover:text-white transition-colors py-2 border-b border-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="#contact" 
                  className="text-2xl font-medium text-gray-200 hover:text-white transition-colors py-2 border-b border-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
                <div className="pt-4">
                  <a 
                    href="#contact" 
                    className="inline-block w-full px-6 py-3 bg-white text-black rounded-full text-center font-medium hover:bg-gray-200 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact Sales
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen relative bg-black overflow-hidden">
        {/* Navigation Bar */}
        {/* <nav className="absolute top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              Logo
              <div className="flex items-center">
                <div className="text-3xl font-black text-white">
                  BUS<span className="text-white">3</span>
                </div>
              </div>
              
              Desktop Navigation Links
              <div className="hidden md:flex items-center space-x-8">
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
                <a href="#contact" className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </nav> */}

        {/* Hero Content */}
        <div className="container mx-auto px-4 pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Introducing <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">BUS3-X</span>
                <span className="block text-gray-400 mt-2">Smart Ticketing Revolution</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl">
                Transform your bus operations with our state-of-the-art ticketing solution. Combining cutting-edge hardware with intelligent software for seamless revenue management.
              </p>
            </div>

            {/* Right Content */}
            <div className="relative">
              <div className="relative z-20">
                <div className="relative w-full max-w-md mx-auto lg:max-w-full">
                  {/* Bus Image */}
                  <Image
                    src="/Hf8e59accd6ec453a8ca1c31e7d0bac53O.jpg_720x720q50.jpg"
                    alt="Modern Bus"
                    width={600}
                    height={600}
                    className="object-cover rounded-2xl w-full shadow-xl"
                    priority
                  />
                  {/* App Interface Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-2xl">
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                      <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 md:p-4 border border-white/20">
                        <div className="flex items-center justify-between mb-2 md:mb-4">
                          <div className="flex-1">
                            <div className="text-white text-base md:text-lg font-semibold">Smart Ticketing Machine</div>
                            <div className="text-gray-300 text-xs md:text-sm">All-in-one payment solution</div>
                          </div>
                          <div className="bg-white text-black px-3 py-1 md:px-4 md:py-2 rounded-lg font-medium text-xs md:text-sm ml-2">
                            Learn More
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-green-400 text-xs md:text-sm">UPI & Card Ready</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Contact Sales Button */}
              <div className="md:hidden flex justify-center mt-8">
                <a href="#contact" className="w-full px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors text-center font-medium">
                  Contact Sales
                </a>
              </div>

              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-transparent rounded-full blur-3xl -z-10"></div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>

        {/* Decorative Bottom Border */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </section>

      {/* Why Choose BUS3 Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose BUS3</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experience the future of bus ticketing with our cutting-edge features designed for modern transportation
            </p>
          </div>

          <div className="relative w-full max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="overflow-hidden pb-4">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ 
                  transform: `translateX(calc(${isMobile ? 'calc(50% - 140px)' : '0px'} - ${currentIndex * (280 + (isMobile ? 32 : 16))}px))`,
                }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {cards.map((card, index) => (
                  <div 
                    key={index}
                    className={`w-[280px] flex-shrink-0 mx-4 md:mx-2 bg-white/5 backdrop-blur-lg rounded-xl p-4 md:p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300`}
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-xl md:text-2xl">{card.icon}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-2">{card.title}</h3>
                    <p className="text-sm md:text-base text-gray-400">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-4">
              {featureCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsTransitioning(true);
                    setCurrentIndex(featureCards.length + index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    (currentIndex % featureCards.length) === index 
                      ? 'bg-purple-500 w-4' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows - Hidden on mobile */}
            <div className="hidden md:block">
              <button
                onClick={handlePrev}
                className="absolute -left-12 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all z-10"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="absolute -right-12 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all z-10"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-12 md:py-20 bg-black text-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Solving Critical Bus Industry Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problemStatements.map((problem, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <div className="text-3xl mb-4">{problem.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
                <p className="text-gray-400">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-black text-white py-12 md:py-16 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">About BUS3</h2>
            <p className="text-xl text-gray-400 leading-relaxed mb-12">
              BUS3 is revolutionizing the bus travel industry with cutting-edge digital solutions. Our smart ticketing machines and comprehensive management system make bus operations efficient, reliable, and future-ready.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-left">
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-400">
                  To transform bus travel through innovative technology, making it more accessible, efficient, and sustainable for everyone.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-left">
                <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                <p className="text-gray-400">
                  To be the leading provider of smart bus ticketing solutions, setting new standards in public transportation technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-b from-black to-purple-900/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
              Get in Touch
            </h2>
            <div className="h-1 w-20 bg-white mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg">
              Ready to revolutionize your bus ticketing system?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* Email Card */}
            <a 
              href="mailto:info@bus3.in" 
              className="bg-black/40 rounded-lg p-8 border border-white/20 hover:border-white/50 transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Email Us</h3>
                  <p className="text-gray-400 text-sm">Drop us a line anytime</p>
                </div>
              </div>
              <a 
                href="mailto:info@bus3.in" 
                className="text-white hover:text-gray-300 font-medium text-lg block mt-2"
              >
                info@bus3.in
              </a>
            </a>

            {/* Phone Card */}
            <a 
              href="tel:+919567296056" 
              className="bg-black/40 rounded-lg p-8 border border-white/20 hover:border-white/50 transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Call Us</h3>
                  <p className="text-gray-400 text-sm">Mon-Fri from 9am to 6pm</p>
                </div>
              </div>
              <a 
                href="tel:+919567296056" 
                className="text-white hover:text-gray-300 font-medium text-lg block mt-2"
              >
                +91 95672 96056
              </a>
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black text-white py-12 md:py-16 border-t border-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="text-gray-400">
                  <span className="block">Email:</span>
                  <a href="mailto:info@bus3.in" className="hover:text-white transition-colors">info@bus3.in</a>
                </li>
                <li className="text-gray-400">
                  <span className="block">Phone:</span>
                  <a href="tel:+919567296056" className="hover:text-white transition-colors">+91 9567296056</a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V12v-2.5h-2v2.5V12h2.5V9.378c0-3.229 1.792-6.158 4.577-6.944 2.142-.551 4.387-.805 6.65-.805 3.356 0 6.227 1.184 6.65.805 2.785.786 4.577 3.715 4.577 6.944v2.028h-2.5v2.5H22v-2.5C22 16.991 22 14.515 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} BUS3. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </footer>
  )
}
