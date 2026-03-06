
import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  companyName: string;
  tagline: string;
}

export function Footer({ companyName, tagline }: FooterProps) {
  const socialLinks = [
    { name: 'Telegram', icon: '📱' },
    { name: 'WhatsApp', icon: '💬' },
    { name: 'Instagram', icon: '📷' },
    { name: 'VK', icon: '🎵' }
  ];
  
  return (
    <footer className="w-full bg-brown py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-golden flex items-center justify-center">
                <span className="text-xl">🥞</span>
              </div>
              <span className="font-display text-xl font-bold text-white">{companyName}</span>
            </div>
            <p className="text-cream/70">{tagline}</p>
          </div>
          
          <div>
            <h4 className="font-display text-lg font-bold text-white mb-4">Навигация</h4>
            <ul className="space-y-2">
              {['Главная', 'Меню', 'О нас', 'Контакты'].map((item, index) => (
                <li key={index}>
                  <a href={`#${item.toLowerCase()}`} className="text-cream/70 hover:text-golden transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-display text-lg font-bold text-white mb-4">Мы в соцсетях</h4>
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 bg-golden/20 rounded-full flex items-center justify-center hover:bg-golden transition-colors"
                >
                  <span>{link.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-cream/20 pt-8 text-center">
          <p className="text-cream/60">© 2024 {companyName}. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
