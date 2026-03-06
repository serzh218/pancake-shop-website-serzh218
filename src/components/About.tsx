
import React from 'react';
import { motion } from 'framer-motion';

interface AboutProps {
  title: string;
  description: string;
  years: string;
  customers: string;
  recipes: string;
}

export function About({ title, description, years, customers, recipes }: AboutProps) {
  const stats = [
    { value: years, label: 'Лет на рынке', icon: '📅' },
    { value: customers, label: 'Довольных клиентов', icon: '😊' },
    { value: recipes, label: 'Рецептов блинчиков', icon: '📖' }
  ];
  
  return (
    <section id="about" className="w-full py-20 bg-brown">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-golden/20 text-golden px-4 py-2 rounded-full text-sm font-medium mb-4">
              🏠 О нас
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">{title}</h2>
            <p className="text-xl text-cream/80 leading-relaxed mb-8">{description}</p>
            
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <span className="text-3xl mb-2 block">{stat.icon}</span>
                  <div className="text-3xl font-bold text-golden mb-1">{stat.value}</div>
                  <div className="text-cream/60 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/5632987/pexels-photo-5632987.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Наши блинчики"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown/50 to-transparent" />
            </div>
            
            {/* Floating card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -left-6 bg-golden text-white p-6 rounded-2xl shadow-xl"
            >
              <div className="text-4xl mb-2">🥞</div>
              <div className="font-display text-xl font-bold">Сделано с любовью</div>
              <div className="text-cream/80 text-sm">Каждый блинчик</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
