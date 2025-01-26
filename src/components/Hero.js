'use client';
import { motion } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiFileText } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  // Generate consistent random positions for floating elements
  const floatingElements = useMemo(() => {
    return Array(40).fill(null).map((_, i) => ({
      id: i,
      initialX: Math.sin(i) * 500,  // Use deterministic values
      initialY: Math.cos(i) * 500,
      scale: 0.5 + (i % 5) * 0.1,   // Deterministic scale
      duration: 3 + (i % 4),        // Deterministic duration
    }));
  }, []);

  useEffect(() => {
    setIsClient(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (!isClient) {
    return null; // or a loading state
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff10_0%,transparent_65%)]" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:1rem_1rem]" />
        </div>

        {/* Mouse Follow Effect */}
        <motion.div
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          transition={{ type: "spring", stiffness: 75, damping: 15 }}
          className="absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_50%,#ffffff15,transparent)]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-7xl mx-auto px-4">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12" // Increased spacing
        >
          {/* Name Title with Enhanced Glow */}
          <div className="relative">
            <motion.h1 
              className="text-7xl md:text-9xl font-bold relative z-10"
            >
              {"Anand Singh".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  variants={letterVariants}
                  className="inline-block bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.h1>
            
            {/* Enhanced Glow Effect */}
            <div className="absolute -inset-x-20 -top-20 -bottom-20 bg-gradient-to-r from-white/20 via-white/5 to-transparent blur-3xl opacity-50 animate-pulse" />
          </div>

          {/* Role Text with Enhanced Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <div className="text-2xl md:text-3xl font-medium space-y-3">
              <p className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent animate-gradient">
                Full Stack Developer
              </p>
              <p className="text-lg text-gray-400">Crafting Digital Experiences</p>
            </div>
          </motion.div>

          {/* Updated Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center gap-8 mb-12"
          >
            {[
              { 
                icon: FiGithub, 
                href: "https://github.com/Inscrutable21",
                label: "GitHub"
              },
              { 
                icon: FiLinkedin, 
                href: "https://www.linkedin.com/in/anand-singh-1314b2270/",
                label: "LinkedIn"
              },
              { 
                icon: SiLeetcode, 
                href: "https://leetcode.com/u/anandsinghoffical21/",
                label: "LeetCode"
              },
              { 
                icon: FiFileText, 
                href: "https://drive.google.com/file/d/1jLHBaUKm3QaAz5tVW4z0DXpBYES1mZ-T/view?usp=sharing",
                label: "Resume"
              },
              { 
                icon: FiMail, 
                href: "#contact",
                label: "Contact"
              }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="group relative w-12 h-12 rounded-full bg-white/5 border border-white/20 
                         hover:border-white/50 hover:bg-white/10 flex items-center justify-center"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                {/* Tooltip */}
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                               opacity-0 group-hover:opacity-100 transition-opacity
                               text-sm text-gray-400 whitespace-nowrap">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-6 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-4 rounded-full bg-white text-black font-medium 
                       hover:bg-gray-100 transition-all duration-300 relative group"
            >
              <span className="relative z-10 flex items-center gap-2">
                <FiMail className="w-5 h-5" />
                Get in touch
              </span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/1jLHBaUKm3QaAz5tVW4z0DXpBYES1mZ-T/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-white/10 text-white font-medium 
                       border-2 border-white/30 hover:border-white hover:bg-white/20 
                       transition-all duration-300 flex items-center gap-2"
            >
              <FiFileText className="w-5 h-5" />
              View Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-4 rounded-full border-2 border-white/30 text-white 
                       hover:border-white hover:bg-white/5 transition-all duration-300"
            >
              View Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            initial={{
              x: element.initialX,
              y: element.initialY,
              scale: element.scale,
            }}
            animate={{
              y: [0, -30, 0],
              x: [element.initialX, element.initialX + 20, element.initialX],
              rotate: [0, 360],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-1 h-1 bg-gradient-to-r from-white to-transparent rounded-full"
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
