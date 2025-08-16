'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: '关于我', href: '#about' },
    { name: '工作经历', href: '#experience' },
    { name: '教育背景', href: '#education' },
    { name: '项目经历', href: '#projects' },
    { name: '技能', href: '#skills' },
    { name: '联系方式', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const downloadResume = () => {
    // 这里可以链接到实际的PDF文件
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = '李玥简历.pdf';
    link.click();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-pink-200/50 dark:border-pink-700/50 shadow-lg shadow-pink-50/50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center tech-glow">
              <span className="text-white font-bold text-sm">李</span>
            </div>
            <span className="text-xl font-bold gradient-text">李玥</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-200 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={downloadResume}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:shadow-lg hover:shadow-pink-200 hover:scale-105 transition-all duration-200 font-medium"
            >
              <Download size={16} />
              <span>下载简历</span>
            </button>
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-pink-50 dark:bg-pink-900/20 hover:bg-pink-100 dark:hover:bg-pink-800/30 transition-colors duration-200 border border-pink-200/50 dark:border-pink-700/50"
            >
              {theme === 'light' ? <Moon size={20} className="text-pink-600" /> : <Sun size={20} className="text-pink-400" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-pink-50 dark:bg-pink-900/20 hover:bg-pink-100 dark:hover:bg-pink-800/30 transition-colors duration-200 border border-pink-200/50 dark:border-pink-700/50"
          >
            {isOpen ? <X size={24} className="text-pink-600" /> : <Menu size={24} className="text-pink-600" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-pink-200/50 dark:border-pink-700/50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-900/20 rounded-lg transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                ))}
                
                <div className="px-4 pt-4 border-t border-pink-200/50 dark:border-pink-700/50">
                  <button
                    onClick={downloadResume}
                    className="flex items-center justify-center space-x-2 w-full px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:shadow-lg hover:shadow-pink-200 transition-all duration-200"
                  >
                    <Download size={16} />
                    <span>下载简历</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar; 