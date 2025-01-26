import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 py-6"
    >
      <div className="container mx-auto px-4">
        <div className="relative backdrop-blur-md bg-black/30 rounded-2xl border border-white/10 p-4">
          <div className="flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
            >
              AS
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.1 }}
                  className="relative group"
                >
                  <span className="text-gray-300 hover:text-white transition-colors">
                    {item}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <div className="w-6 h-0.5 bg-white mb-1.5" />
              <div className="w-6 h-0.5 bg-white mb-1.5" />
              <div className="w-6 h-0.5 bg-white" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
