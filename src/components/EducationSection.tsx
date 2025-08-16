'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, Star, Trophy } from 'lucide-react';

const EducationSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = {
    school: '早稻田大学',
    degree: '机械工程（本科）',
    period: '2020-04 ~ 2024-03',
    location: '日本',
    gpa: '3.56/4',
    rank: 'Top 3%',
    logo: '/waseda-logo.png', // 占位符
    description: '专注于机器人技术、控制论和工程创新，同时参与创业讲座和编程课程'
  };

  const honors = [
    {
      title: '日本机器人协会优秀学生奖',
      organization: '日本ロボット学会',
      description: '作为优秀毕业生获得日本机器人协会颁发的优秀学生奖'
    },
    {
      title: 'JASSO奖学金',
      organization: '日本文部科学省',
      count: 2,
      description: '获得2次日本文部科学省JASSO奖学金'
    },
    {
      title: 'Fuji Seal财团奖学金',
      organization: 'Fuji Seal财团',
      count: 2,
      description: '获得2次Fuji Seal财团奖学金'
    }
  ];

  const courses = [
    { name: '机器人项目', category: '核心专业' },
    { name: '控制论', category: '核心专业' },
    { name: '流体力学', category: '核心专业' },
    { name: '材料力学', category: '核心专业' },
    { name: '图像处理', category: '技术应用' },
    { name: '宇宙工程', category: '前沿技术' },
    { name: '创业讲座', category: '商业技能' },
    { name: 'C语言编程', category: '技术技能' }
  ];

  const courseCategories = ['核心专业', '技术应用', '前沿技术', '商业技能', '技术技能'];

  return (
    <section id="education" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            教育背景
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            在早稻田大学机械工程专业的学习经历，为我奠定了扎实的理工科基础，培养了创新思维和解决问题的能力
          </p>
        </motion.div>

        {/* Main Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8 border border-blue-100 dark:border-blue-800 mb-16"
        >
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* School Logo Placeholder */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-800/30 dark:to-purple-800/30 rounded-2xl border-4 border-white dark:border-gray-800 flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <GraduationCap size={48} className="text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                  <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">早稻田大学</span>
                </div>
              </div>
            </div>

            {/* School Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {education.school}
                </h3>
                <p className="text-xl text-purple-600 dark:text-purple-400 font-medium mb-4">
                  {education.degree}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  {education.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <Calendar size={20} />
                  <span>{education.period}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <MapPin size={20} />
                  <span>{education.location}</span>
                </div>
              </div>

              {/* GPA and Rank */}
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {education.gpa}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">GPA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                    {education.rank}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">专业排名</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Honors and Awards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            荣誉与奖项
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {honors.map((honor, index) => (
              <motion.div
                key={honor.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Trophy size={32} className="text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {honor.title}
                </h4>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">
                  {honor.organization}
                </p>
                {honor.count && (
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    {[...Array(honor.count)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-500 fill-current" />
                    ))}
                  </div>
                )}
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {honor.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Course Categories */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            主要课程
          </h3>
          <div className="grid md:grid-cols-5 gap-4 mb-8">
            {courseCategories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg py-3 px-4 font-medium">
                  {category}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {courses.map((course, index) => (
              <motion.div
                key={course.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.05 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-200 text-center"
              >
                <BookOpen size={24} className="text-blue-500 dark:text-blue-400 mx-auto mb-2" />
                <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                  {course.name}
                </h4>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {course.category}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8 border border-purple-100 dark:border-purple-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              学术成就与未来展望
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              在早稻田大学的学习经历不仅让我掌握了扎实的工程技术基础，更重要的是培养了跨学科思维和创新能力。这些经历为我后续在AI产品市场和GTM领域的发展奠定了坚实的基础。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection; 