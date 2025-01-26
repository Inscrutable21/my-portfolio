'use client'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FiMail, FiUser, FiMessageSquare } from 'react-icons/fi'

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);
    
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-32 relative">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] animate-grid-fade" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-white/[0.02] to-black" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-gray-400 text-xl">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.form
            ref={formRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-morphism p-8 md:p-12 rounded-2xl space-y-8 relative overflow-hidden"
            onSubmit={handleSubmit}
          >
            {/* Add feedback messages */}
            {success && (
              <div className="text-green-400 text-center mb-4">
                Message sent successfully!
              </div>
            )}
            {error && (
              <div className="text-red-400 text-center mb-4">
                Failed to send message. Please try again.
              </div>
            )}

            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent" />

            <div className="relative z-10">
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="space-y-2"
                >
                  <label className="flex items-center text-gray-300 text-sm mb-2 space-x-2">
                    <FiUser className="w-4 h-4" />
                    <span>Your Name</span>
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3
                             focus:outline-none focus:border-white/30 focus:bg-white/10 
                             transition-all duration-300"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="space-y-2"
                >
                  <label className="flex items-center text-gray-300 text-sm mb-2 space-x-2">
                    <FiMail className="w-4 h-4" />
                    <span>Your Email</span>
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3
                             focus:outline-none focus:border-white/30 focus:bg-white/10 
                             transition-all duration-300"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="space-y-2 mt-8"
              >
                <label className="flex items-center text-gray-300 text-sm mb-2 space-x-2">
                  <FiMessageSquare className="w-4 h-4" />
                  <span>Your Message</span>
                </label>
                <textarea
                  name="message"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 h-40
                           focus:outline-none focus:border-white/30 focus:bg-white/10 
                           transition-all duration-300 resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-8 bg-gradient-to-r from-white/10 to-white/20 
                         hover:from-white/20 hover:to-white/30 py-4 rounded-lg 
                         font-medium text-white border border-white/10 
                         hover:border-white/30 transition-all duration-300 
                         relative group overflow-hidden"
                type="submit"
                disabled={loading}
              >
                {/* Button Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FiMail className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </span>
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
