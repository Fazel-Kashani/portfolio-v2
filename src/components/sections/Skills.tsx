'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Code, PenTool } from 'lucide-react';
import SectionWrapper from '../SectionWrapper';
import { motion } from 'framer-motion';
import Image from 'next/image';

const skillsData = [
  {
    icon: <Code className="w-10 h-10 text-primary" />,
    title: 'طراحی سایت با وردپرس',
    description: 'طراحی و توسعه وب‌سایت‌های حرفه‌ای، واکنش‌گرا و بهینه با استفاده از سیستم مدیریت محتوای وردپرس.',
    tools: [
      { name: 'WordPress', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg' },
      { name: 'Elementor', svg: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="6" fill="#92003B"/><path d="M10.5 9.5V22.5" stroke="white" stroke-width="2" stroke-linecap="round"/><rect x="15" y="9.5" width="7" height="2" rx="1" fill="white"/><rect x="15" y="14.5" width="7" height="2" rx="1" fill="white"/><rect x="15" y="19.5" width="7" height="2" rx="1" fill="white"/></svg>` },
      { name: 'WooCommerce', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/WooCommerce_logo.svg' },
    ]
  },
  {
    icon: <PenTool className="w-10 h-10 text-primary" />,
    title: 'طراحی گرافیک',
    description: 'طراحی پست و استوری شبکه‌های اجتماعی، وب بنر و عناصر گرافیکی؛ همچنین طراحی بروشور، بنر و موارد چاپی.',
    tools: [
      { name: 'Photoshop', logoUrl: 'https://raw.githubusercontent.com/gilbarbara/logos/main/logos/adobe-photoshop.svg' },
      { name: 'Illustrator', logoUrl: 'https://raw.githubusercontent.com/gilbarbara/logos/main/logos/adobe-illustrator.svg' },
      { name: 'Figma', logoUrl: 'https://raw.githubusercontent.com/gilbarbara/logos/main/logos/figma.svg' },
    ]
  }
];

const Skills = () => {
  return (
    <SectionWrapper id="skills" >
      <motion.h2 
        className="text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        مهارت‌ها
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -5 }}
          >
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover-lift text-center flex flex-col h-full">
              <CardHeader className="items-center">
                <motion.div 
                  className="p-4 bg-muted rounded-full mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {skill.icon}
                </motion.div>
                <CardTitle className="text-2xl">{skill.title}</CardTitle>
                <CardDescription className="text-muted-foreground mt-2 leading-relaxed">{skill.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto pt-6">
                 <h4 className="text-sm font-semibold text-muted-foreground mb-4">نرم‌افزارها</h4>
                 <div className="flex justify-center items-center gap-6">
                  {skill.tools.map((tool, toolIndex) => (
                    <motion.div 
                      key={tool.name} 
                      className="flex flex-col items-center gap-2" 
                      title={tool.name}
                      whileHover={{ scale: 1.1, y: -2 }}
                      transition={{ duration: 0.2 }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      animate={{ opacity: 1 }}
                      style={{ animationDelay: `${toolIndex * 0.1}s` }}
                    >
                      {tool.logoUrl ? (
                        <Image src={tool.logoUrl} alt={`${tool.name} logo`} width={32} height={32} className="h-8 w-8 object-contain" />
                      ) : tool.svg ? (
                        <span className="h-8 w-8 block" dangerouslySetInnerHTML={{ __html: tool.svg }} />
                      ) : null}
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
