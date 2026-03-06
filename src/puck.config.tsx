
import type { Config } from '@puckeditor/core';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const config: Config = {
  components: {
    Header: {
      fields: {
        logo: { type: 'text', label: 'Название бренда' },
        navItems: { type: 'text', label: 'Пункты меню (через запятую)' },
        ctaText: { type: 'text', label: 'Текст кнопки CTA' },
      },
      render: Header,
    },
    Hero: {
      fields: {
        title: { type: 'text', label: 'Заголовок' },
        subtitle: { type: 'textarea', label: 'Подзаголовок' },
        buttonText: { type: 'text', label: 'Текст кнопки' },
        backgroundImage: { type: 'text', label: 'URL фонового изображения' },
      },
      render: Hero,
    },
    Menu: {
      fields: {
        title: { type: 'text', label: 'Заголовок секции' },
        subtitle: { type: 'textarea', label: 'Подзаголовок' },
      },
      render: Menu,
    },
    About: {
      fields: {
        title: { type: 'text', label: 'Заголовок' },
        description: { type: 'textarea', label: 'Описание' },
        years: { type: 'text', label: 'Лет на рынке' },
        customers: { type: 'text', label: 'Количество клиентов' },
        recipes: { type: 'text', label: 'Количество рецептов' },
      },
      render: About,
    },
    Contact: {
      fields: {
        title: { type: 'text', label: 'Заголовок' },
        subtitle: { type: 'textarea', label: 'Подзаголовок' },
        phone: { type: 'text', label: 'Телефон' },
        email: { type: 'text', label: 'Email' },
        address: { type: 'text', label: 'Адрес' },
      },
      render: Contact,
    },
    Footer: {
      fields: {
        companyName: { type: 'text', label: 'Название компании' },
        tagline: { type: 'text', label: 'Слоган' },
      },
      render: Footer,
    },
  },
};
