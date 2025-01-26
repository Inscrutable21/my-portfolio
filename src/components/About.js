import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 container mx-auto px-4 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] animate-grid-fade" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-white/[0.02] to-black" />

      <div className="relative">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-7xl font-bold mb-20 text-center bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-[1fr,2px,1fr] gap-12 max-w-6xl mx-auto">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <p className="text-xl text-gray-300 leading-relaxed">
              I&apos;m a passionate Full Stack Developer with expertise in modern web technologies.
              My journey in software development has equipped me with strong problem-solving
              skills and a deep understanding of both frontend and backend development.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              I specialize in building scalable web applications using React/Next.js,
              Node.js, and various databases. I&apos;m always eager to learn new technologies
              and take on challenging projects.
            </p>
          </motion.div>

          {/* Divider Line */}
          <motion.div 
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            className="hidden md:block w-[2px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"
          />

          {/* Right Column - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {[
              { icon: "🎓", title: "Education", desc: "Computer Science Graduate" },
              { icon: "💻", title: "Expertise", desc: "Full Stack Development" },
              { icon: "🚀", title: "Focus", desc: "Building Scalable Solutions" }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="glass-morphism p-6 rounded-xl space-y-2"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
