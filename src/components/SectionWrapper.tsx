'use client';

import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

const SectionWrapper = ({ children, id, className = '' }: SectionWrapperProps) => {
  return (
    <motion.section
      id={id}
      className={`py-24 px-4 sm:px-6 lg:px-8 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto">
        {children}
      </div>
    </motion.section>
  );
};

export default SectionWrapper;
