'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  const scrollToNext = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = '李玥简历.pdf';
    link.click();
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden tech-gradient dark:tech-gradient-dark">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-200/30 dark:bg-pink-900/20 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl opacity-30"></div>
        {/* 科技感网格背景 */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(236,72,153,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white"
              >
                你好，我是{' '}
                <span className="gradient-text">李玥</span>
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-medium"
              >
                AI产品市场专家 & GTM策略师
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4"
            >
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                在日本创办学生社团，AI创业获得本地VC融资，在字节跳动飞书和星动纪元积累丰富的GTM实战经验。
              </p>
              
              <div className="flex flex-wrap gap-3">
                {[
                  'AI产品市场',
                  'GTM策略',
                  '客户洞察',
                  '解决方案设计'
                ].map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-pink-200/50 dark:border-pink-700/50 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm hover:shadow-pink-100 dark:hover:shadow-pink-900/20 transition-all duration-200"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={downloadResume}
                className="flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:shadow-lg hover:shadow-pink-200 hover:scale-105 transition-all duration-200 font-medium"
              >
                <Download size={20} />
                <span>下载简历</span>
              </button>
              
              <button
                onClick={scrollToNext}
                className="flex items-center justify-center space-x-2 px-8 py-4 border-2 border-pink-300 dark:border-pink-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-pink-500 hover:text-pink-600 dark:hover:border-pink-400 dark:hover:text-pink-400 transition-all duration-200 font-medium"
              >
                <span>了解更多</span>
                <ChevronDown size={20} />
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex space-x-4"
            >
              {[
                { icon: Github, href: 'https://github.com/yueli-24', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:yue.career2023@gmail.com', label: 'Email' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-pink-200/50 dark:border-pink-700/50 rounded-lg hover:bg-pink-50 dark:hover:bg-pink-900/20 hover:border-pink-300 dark:hover:border-pink-600 transition-all duration-200 group"
                >
                  <social.icon 
                    size={20} 
                    className="text-gray-600 dark:text-gray-400 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-200" 
                  />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Personal Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* 照片容器 */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden tech-glow">
                <Image
                  src="/photo.jpg"
                  alt="李玥个人照片"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 320px, 384px"
                />
                {/* 照片边框装饰 */}
                <div className="absolute inset-0 border-4 border-white dark:border-gray-800 rounded-3xl"></div>
              </div>
              
              {/* 科技感装饰元素 */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-bounce shadow-lg"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse shadow-lg"></div>
              
              {/* 照片信息标签 */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-pink-200/50 dark:border-pink-700/50 rounded-full px-4 py-2 shadow-lg">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">李玥</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={scrollToNext}
          className="animate-bounce p-2 rounded-full bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm border border-pink-200/50 dark:border-pink-700/50 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-200"
        >
          <ChevronDown size={24} className="text-pink-600 dark:text-pink-400" />
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection; 