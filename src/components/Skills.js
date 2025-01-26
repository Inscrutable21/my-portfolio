'use client';
import { motion } from 'framer-motion';
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiTypescript, 
  SiMongodb, SiPostgresql, SiTailwindcss, SiPython,
  SiGit, SiDocker, SiAmazon, SiFirebase
} from 'react-icons/si';

const Skills = () => {
  const technologies = [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold mb-16 text-center"
        >
          Tech Stack
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.5
              }}
              whileHover={{ 
                scale: 1.1,
                rotateY: 180,
                transition: { duration: 0.6 }
              }}
              className="group perspective"
            >
              <div className="relative transform-gpu transition-all duration-500 group-hover:rotate-y-180">
                <div 
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 
                            hover:border-[color:var(--hover-color)] transition-colors
                            flex flex-col items-center justify-center gap-4
                            hover:shadow-lg hover:shadow-[color:var(--hover-color)]/20"
                  style={{ '--hover-color': tech.color }}
                >
                  <tech.icon 
                    className="w-12 h-12 transition-transform group-hover:scale-110" 
                    style={{ color: tech.color }} 
                  />
                  <span className="text-sm font-medium text-gray-300">{tech.name}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
