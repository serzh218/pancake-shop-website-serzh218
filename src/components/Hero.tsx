
import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  backgroundImage: string;
}

export function Hero({ title, subtitle, buttonText, backgroundImage }: HeroProps) {
  return (
    <section 
      className="w-full py-20 md:py-32 relative overflow-hidden"
      style={{
        background: backgroundImage 
          ? `linear-gradient(rgba(93, 64, 55, 0.7), rgba(93, 64, 55, 0.8)), url(${backgroundImage})`
          : 'linear-gradient(135deg, #5D4037 0%, #8D6E63 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-golden/20 text-golden px-4 py-2 rounded-full text-sm font-medium mb-6">
              🥞 Свежие блинчики каждый день
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            {title}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-cream/90 mb-10 leading-relaxed"
          >
            {subtitle}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-golden text-white px-8 py-4 rounded-full font-semibold text-lg shadow-warm hover:shadow-xl transition-all"
            >
              {buttonText}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
            >
              📞 +7 (999) 123-45-67
            </motion.button>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-golden/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-caramel/20 rounded-full blur-3xl" />
    </section>
  );
}
