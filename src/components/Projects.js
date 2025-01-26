'use client';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';

const projects = [
  {
    title: "AI Chatbot",
    description: "An intelligent conversational AI powered by machine learning, capable of natural language understanding and contextual responses",
    link: "https://github.com/Inscrutable21/Dev-challenge-",
    image: "/images/ai-chatbot.jpg",
    tech: ["React", "Node.js", "Chatpdf API", "MongoDB"],
    features: [
      "Natural Language Processing",
      "Context-aware responses",
      "Multi-language support",
      "Conversation history tracking"
    ]
  },
  {
    title: "Movie Booking Site",
    description: "A modern movie ticket booking platform with an immersive user experience",
    link: "https://github.com/Inscrutable21/movie-booking-site",
    image: "/images/movie-booking.jpg",
    tech: ["Next.js", "Express", "MongoDB", "Stripe", "TailwindCSS","Prisma"],
    features: [
      "Interactive seat selection",
      "Real-time availability",
      "Secure payments",
      "Movie recommendations"
    ]
  },
  {
    title: "VIP Number",
    description: "Premium phone number marketplace with advanced filtering and bidding system",
    link: "https://github.com/Inscrutable21/vip-number",
    demo: "https://www.vipnumbershop.in/",
    image: "/images/vip-number.jpg",
    tech: ["React", "Node.js", "MongoDB", "Prisma"],
    features: [
      "Real-time bidding system",
      "Advanced number search",
      "Secure payment gateway",
      "Admin dashboard"
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-white/3 to-white/5" />
      
      <div className="container mx-auto px-4 relative">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text"
        >
          Featured Projects
        </motion.h2>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] to-white/[0.05] 
                              rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              
              <div className="relative glass-morphism rounded-xl p-8 group-hover:border-white/20 
                              transition-all duration-300 overflow-hidden">
                <div className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Project Image */}
                  <div className="w-full lg:w-3/5 relative aspect-video overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-xl group-hover:bg-transparent transition-all duration-300" />
                    <motion.div
                      initial={{ scale: 1.1 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 1.2 }}
                      className="w-full h-full relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 group-hover:opacity-0 transition-opacity duration-300" />
                      {project.image && (
                        <Image 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover rounded-xl"
                          width={500}
                          height={300}
                        />
                      )}
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className="w-full lg:w-2/5 space-y-4">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <p className="text-gray-400 text-lg">{project.description}</p>
                    
                    {/* Features */}
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.2 }}
                          className="flex items-center gap-2 text-gray-400"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-3 pt-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 rounded-full text-sm font-medium
                                   bg-white/5 border border-white/10 text-gray-300
                                   hover:bg-white/10 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 pt-6">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white bg-white/10 
                                 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors"
                      >
                        <FiGithub className="w-5 h-5" />
                        Code
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white bg-purple-500/20 
                                 px-4 py-2 rounded-lg hover:bg-purple-500/30 transition-colors"
                      >
                        <FiExternalLink className="w-5 h-5" />
                        Live Demo
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
