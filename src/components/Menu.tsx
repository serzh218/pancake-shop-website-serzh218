
import React from 'react';
import { motion } from 'framer-motion';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

interface MenuProps {
  title: string;
  subtitle: string;
}

const menuItems: MenuItem[] = [
  {
    name: 'Блинчики с мясом',
    description: 'Нежные блинчики с начинкой из говядины и лука',
    price: '280 ₽',
    image: 'https://images.pexels.com/photos/5632988/pexels-photo-5632988.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Сытные'
  },
  {
    name: 'Блинчики с творогом',
    description: 'Сладкие блинчики с творогом и изюмом',
    price: '220 ₽',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Сладкие'
  },
  {
    name: 'Блинчики с грибами',
    description: 'Блинчики с шампиньонами и сметанным соусом',
    price: '260 ₽',
    image: 'https://images.pexels.com/photos/5632982/pexels-photo-5632982.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Сытные'
  },
  {
    name: 'Блинчики с ягодами',
    description: 'Свежие ягоды: клубника, малина, голубика',
    price: '290 ₽',
    image: 'https://images.pexels.com/photos/5632985/pexels-photo-5632985.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Сладкие'
  },
  {
    name: 'Блинчики с ветчиной',
    description: 'Нежная ветчина с сыром и зеленью',
    price: '270 ₽',
    image: 'https://images.pexels.com/photos/5632989/pexels-photo-5632989.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Сытные'
  },
  {
    name: 'Блинчики с Nutella',
    description: 'Шоколадная паста с бананом и орехами',
    price: '250 ₽',
    image: 'https://images.pexels.com/photos/5632986/pexels-photo-5632986.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Сладкие'
  }
];

export function Menu({ title, subtitle }: MenuProps) {
  return (
    <section id="menu" className="w-full py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-golden/20 text-golden px-4 py-2 rounded-full text-sm font-medium mb-4">
            🍽️ Наше меню
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brown mb-4">{title}</h2>
          <p className="text-xl text-brown/70 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-warm card-hover"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 right-4 bg-golden text-white px-3 py-1 rounded-full text-sm font-medium">
                  {item.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-brown mb-2">{item.name}</h3>
                <p className="text-brown/70 mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-golden">{item.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-golden text-white px-5 py-2 rounded-full font-medium hover:bg-caramel transition-colors"
                  >
                    Заказать
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
