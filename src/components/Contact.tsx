
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

interface ContactProps {
  title: string;
  subtitle: string;
  phone: string;
  email: string;
  address: string;
}

export function Contact({ title, subtitle, phone, email, address }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };
  
  const contacts = [
    { icon: Phone, label: 'Телефон', value: phone },
    { icon: Mail, label: 'Email', value: email },
    { icon: MapPin, label: 'Адрес', value: address },
    { icon: Clock, label: 'Режим работы', value: '10:00 - 22:00' }
  ];
  
  return (
    <section id="contact" className="w-full py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-golden/20 text-golden px-4 py-2 rounded-full text-sm font-medium mb-4">
            📞 Контакты
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brown mb-4">{title}</h2>
          <p className="text-xl text-brown/70 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-warm"
          >
            <h3 className="font-display text-2xl font-bold text-brown mb-6">Оставить заявку</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-brown font-medium mb-2">Ваше имя</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border-2 border-golden/20 focus:border-golden focus:outline-none transition-colors"
                  placeholder="Иван Иванов"
                  required
                />
              </div>
              <div>
                <label className="block text-brown font-medium mb-2">Телефон</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border-2 border-golden/20 focus:border-golden focus:outline-none transition-colors"
                  placeholder="+7 (999) 123-45-67"
                  required
                />
              </div>
              <div>
                <label className="block text-brown font-medium mb-2">Сообщение</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border-2 border-golden/20 focus:border-golden focus:outline-none transition-colors resize-none"
                  rows={4}
                  placeholder="Ваше сообщение..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-golden text-white py-4 rounded-xl font-semibold text-lg hover:bg-caramel transition-colors"
              >
                Отправить заявку
              </motion.button>
            </form>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contacts.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-warm flex items-center gap-4"
              >
                <div className="w-14 h-14 bg-golden/10 rounded-xl flex items-center justify-center">
                  <contact.icon className="w-6 h-6 text-golden" />
                </div>
                <div>
                  <div className="text-brown/60 text-sm">{contact.label}</div>
                  <div className="text-brown font-semibold text-lg">{contact.value}</div>
                </div>
              </motion.div>
            ))}
            
            {/* Map placeholder */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-warm h-48">
              <div className="w-full h-full bg-gradient-to-br from-golden/20 to-caramel/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-golden mx-auto mb-2" />
                  <span className="text-brown/60">Карта загружается...</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
