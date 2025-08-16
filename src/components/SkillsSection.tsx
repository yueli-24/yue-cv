'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Globe, Award, FileText, Languages, Wrench, Database, Palette } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      name: '编程语言',
      icon: Code,
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'C++', level: 85, description: '机器人项目开发' },
        { name: 'Python', level: 80, description: 'AI和数据分析' },
        { name: 'JavaScript', level: 75, description: '前端开发' },
        { name: 'HTML/CSS', level: 80, description: '网页开发' }
      ]
    },
    {
      name: '工具软件',
      icon: Wrench,
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'SolidWorks', level: 85, description: '3D制图设计' },
        { name: 'Figma', level: 75, description: 'UI/UX设计' },
        { name: 'Git', level: 80, description: '版本控制' },
        { name: 'VS Code', level: 85, description: '代码编辑' }
      ]
    },
    {
      name: '语言能力',
      icon: Languages,
      color: 'from-green-500 to-green-600',
      skills: [
        { name: '中文', level: 100, description: '母语' },
        { name: '日语', level: 95, description: 'N1级，在日本学习工作4年' },
        { name: '英语', level: 85, description: '工作语言，技术文档阅读' }
      ]
    },
    {
      name: '专业技能',
      icon: Database,
      color: 'from-orange-500 to-orange-600',
      skills: [
        { name: '产品管理', level: 90, description: 'GTM策略，产品市场' },
        { name: '客户洞察', level: 85, description: '需求分析，解决方案设计' },
        { name: '项目管理', level: 80, description: '团队协作，进度控制' },
        { name: '数据分析', level: 75, description: '市场调研，用户研究' }
      ]
    }
  ];

  const certificates = [
    {
      name: '日本语能力测试1级',
      organization: 'JLPT',
      description: '最高级别的日语能力认证',
      icon: FileText,
      color: 'from-red-500 to-red-600'
    },
    {
      name: 'ITパスポート試験',
      organization: '日本IT推进机构',
      description: '日本IT基础技能认证',
      icon: FileText,
      color: 'from-blue-500 to-blue-600'
    }
  ];

  const otherSkills = [
    '中国C2驾照',
    '日本AT车驾照',
    '机器人技术',
    '3D建模',
    'AI产品设计',
    '跨文化沟通',
    '创业思维',
    '团队领导'
  ];

  return (
    <section id="skills" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            技能专长
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            结合理工科背景和商业实践，形成了技术+商业的复合型技能体系
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-4`}>
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.name}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                          {skill.description}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-fill"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.5, delay: 0.5 + index * 0.1 + idx * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            专业认证
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-800 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-2xl flex items-center justify-center`}>
                    <cert.icon size={32} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {cert.name}
                    </h4>
                    <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">
                      {cert.organization}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            其他技能
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {otherSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.05 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-200 text-center group hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300">
                  <Palette size={24} className="text-white" />
                </div>
                <span className="font-medium text-gray-900 dark:text-white text-sm">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 border border-green-100 dark:border-green-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              技能体系特点
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              我的技能体系具有技术深度和商业广度的双重优势。理工科背景让我能够深入理解产品技术，而丰富的GTM经验则让我能够从市场和客户角度思考问题。这种技术+商业的复合型能力，正是现代产品管理岗位所需要的核心素质。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection; 