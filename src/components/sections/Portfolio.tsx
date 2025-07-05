'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import SectionWrapper from '../SectionWrapper';
import { motion } from 'framer-motion';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
} from "@/components/ui/dialog";
import { useState } from "react";
import Image from 'next/image';

const webProjects = [
  { img: '/angoorkaran.png', title: 'فروشگاه نهال انگور کاران', url: 'https://angorkaran.ir/' },
  { img: '/kalakesht.png', title: 'فروشگاه کود و سم کالاکشت', url: 'https://kalakesht.com/' },
  { img: '/royesh sabz.png', title: ' شرکت کود رویش سبز', url: 'https://ruyeshesabz.ir/' },
  { img: '/rol kala.png', title: 'فروشگاه ملزومات چاپ رول کالا', url: 'https://rollkala.com/' },
  { img: '/zoomkesht.png', title: ' مجله کشاورزی زومکشت', url: 'http://zoomkesht.com/' },
  { img: '/mester peste.png', title: ' فروشگاه کود و سم مستر پسته', url: 'http://mrpestee.com/' },
];

const graphicProjects = [
  { img: '/1.png', title: ' پست اینستاگرام مبلمان' },
  { img: '/16.png', title: 'پست اینستاگرام پزشکی' },
  { img: '/2.png', title: 'استوری اینستاگرام مبلمان' },
  { img: '/3.png', title: 'استوری اینستاگرام مبلمان' },
  { img: '/4.png', title: 'استوری اینستاگرام هدست گیمینگ' },
  { img: '/5.png', title: 'استوری اینستاگرام فروش کفش نایک' },
  { img: '/6.png', title: ' استوری اینستاگرام فروش اکانت اسپاتیفای' },
  { img: '/7.png', title: 'بنر سایت فروشگاه قهوه' },
  { img: '/8.png', title: 'بنر سایت صرافی کریپتو' },
  { img: '/9.png', title: 'بنر سایت تبلیغات هدست گیمینگ' },
  { img: '/10.png', title: 'بنر سایت فروش آیفون' },
  { img: '/11.png', title: 'بنر سایت فروش آیفون' },
  { img: '/12.png', title: 'بنر سایت لوازم آرایشی' },
  { img: '/13.png', title: 'بنر سایت تبلیغات کفش نایک' },
  { img: '/14.png', title: 'بنر سایت تخفیف ویژه سال نو' },
  { img: '/15.png', title: 'بنر سایت فروش هدست و میکروفون' },
];

const Portfolio = () => {
  const [showAllGraphics, setShowAllGraphics] = useState(false);

  return (
    <SectionWrapper id="portfolio" >
      <motion.h2 
        className="text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        نمونه کارها
      </motion.h2>
      <Tabs defaultValue="web" className="w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-card rounded-card border border-border">
            <TabsTrigger value="web" className="rounded-input">طراحی گرافیک</TabsTrigger>
            <TabsTrigger value="graphic" className="rounded-input">طراحی سایت</TabsTrigger>
          </TabsList>
        </motion.div>
        <TabsContent value="web">
          <div className="grid sm:grid-cols-2 gap-6">
            {(showAllGraphics ? graphicProjects : graphicProjects.slice(0, 4)).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="overflow-hidden group border-border bg-card backdrop-blur-sm rounded-card hover-lift cursor-pointer">
                      <div className="p-3">
                        <div className="relative overflow-hidden rounded-input">
                          <Image 
                            src={project.img} 
                            alt={project.title} 
                            width={400}
                            height={300}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="w-full aspect-[4/3] object-cover"
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyejFhd5NiI0X0/y1rNy9LNauvIV8FbL0BoiNf8ZIDMDNOEMLQTDaOKCCKcUWH5jHVyE"
                          />
                          <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-lg font-semibold">مشاهده پروژه</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 pt-0">
                        <h3 className="text-lg font-bold text-white text-right">{project.title}</h3>
                      </div>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-full p-0 bg-transparent shadow-none border-none flex justify-center items-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                      className="w-full flex justify-center"
                    >
                      <Card className="overflow-hidden border-border bg-card backdrop-blur-sm rounded-card mx-auto max-w-[1000px] w-full">
                        <div className="p-16 sm:p-6">
                          <Image
                            src={project.img}
                            alt={project.title}
                            width={1000}
                            height={750}
                            sizes="(max-width: 768px) 95vw, (max-width: 1200px) 80vw, 1000px"
                            className="w-full h-auto rounded-lg mb-4"
                            quality={90}
                            priority={index < 2}
                          />
                          <h3 className="text-lg font-bold text-right text-white">{project.title}</h3>
                        </div>
                      </Card>
                    </motion.div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </div>
          {!showAllGraphics && graphicProjects.length > 4 && (
            <div className="flex justify-center mt-8">
              <button
                className="px-6 py-2 rounded-card bg-primary text-black font-bold shadow hover:bg-primary/90 transition-colors"
                onClick={() => setShowAllGraphics(true)}
              >
                نمایش بیشتر
              </button>
            </div>
          )}
        </TabsContent>
        <TabsContent value="graphic">
          <div className="grid sm:grid-cols-3 gap-6">
            {webProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="overflow-hidden group border-border bg-card backdrop-blur-sm rounded-card hover-lift cursor-pointer">
                    <div className="p-3">
                      <div className="relative overflow-hidden rounded-input">
                        <Image 
                          src={project.img} 
                          alt={project.title} 
                          width={400}
                          height={300}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="w-full aspect-[4/3] object-cover"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyejFhd5NiI0X0/y1rNy9LNauvIV8FbL0BoiNf8ZIDMDNOEMLQTDaOKCCKcUWH5jHVyE"
                        />
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-white text-lg font-semibold">مشاهده پروژه</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 pt-0">
                      <h3 className="text-lg font-bold text-white text-right">{project.title}</h3>
                    </div>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </SectionWrapper>
  );
};

export default Portfolio;
