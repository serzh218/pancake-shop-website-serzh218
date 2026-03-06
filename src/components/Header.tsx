
import React from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  logo: string;
  navItems: string;
  ctaText: string;
}

export function Header({ logo, navItems, ctaText }: HeaderProps) {
  const items = navItems.split(',').map(item => item.trim());
  
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="w-full bg-cream/90 backdrop-blur-md sticky top-0 z-40 border-b border-golden/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-golden flex items-center justify-center">
            <span className="text-2xl">🥞</span>
          </div>
          <span className="font-display text-2xl font-bold text-brown">{logo}</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {items.map((item, index) => (
            <motion.a
              key={index}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.05 }}
              className="text-brown/80 hover:text-golden transition-colors font-medium"
            >
              {item}
            </motion.a>
          ))}
        </nav>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-golden text-white px-6 py-2.5 rounded-full font-semibold shadow-warm hover:shadow-lg transition-all"
        >
          {ctaText}
        </motion.button>
      </div>
    </motion.header>
  );
}
