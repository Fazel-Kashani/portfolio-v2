'use client';

import { motion } from 'framer-motion';
import { Home, User, Lightbulb, Briefcase, BookImage, Mail } from 'lucide-react';

const navItems = [
  { name: 'خانه', href: '#hero', icon: Home },
  { name: 'درباره من', href: '#about', icon: User },
  { name: 'مهارت‌ها', href: '#skills', icon: Lightbulb },
  { name: 'تجربه کاری', href: '#experience', icon: Briefcase },
  { name: 'نمونه کارها', href: '#portfolio', icon: BookImage },
  { name: 'تماس با من', href: '#contact', icon: Mail },
];

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <nav className="mt-4 mx-auto max-w-max">
        <motion.ul 
          className="flex items-center justify-center gap-2 sm:gap-4 p-3 bg-black/30 backdrop-blur-lg border border-white/25 rounded-card shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {navItems.map((item, index) => (
            <motion.li 
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            >
              <motion.a
                href={item.href}
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors duration-300 px-4 py-2 rounded-card hover:bg-white/10 flex-row-reverse"
                title={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <span className="hidden sm:inline">{item.name}</span>
                <item.icon className="h-5 w-5" />
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </motion.header>
  );
};

export default Header;
