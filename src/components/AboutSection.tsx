'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Users, TrendingUp, Award, Calendar, MapPin } from 'lucide-react';

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const coreStrengths = [
    {
      icon: Target,
      title: 'AI产品市场专家',
      description: '在日本创办早稻田AI研究会，聚集200+成员，成为日本规模最大的AI学生社团',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: TrendingUp,
      title: '创业与融资经验',
      description: 'AI创业项目获得日本本土VC投资意向，荒波VC奖及EMIRA商赛冠军',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'GTM实战专家',
      description: '在字节跳动飞书和星动纪元积累丰富的GTM实战经验，精通产品市场、客户洞察与解决方案设计',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const timeline = [
    {
      year: '2025',
      title: '星动纪元',
      role: '产品市场，GTM',
      description: '具身智能行业灵巧手产品的产品经理和GTM',
      location: '北京'
    },
    {
      year: '2024',
      title: '字节跳动-飞书',
      role: '海外GTM 技术售前，客户经理',
      description: '技术提案与AI解决方案输出，大客户定制化服务',
      location: '海外'
    },
    {
      year: '2023',
      title: '校园创业',
      role: '项目负责人',
      description: '获得日本本土VC投资意向，验证项目商业价值',
      location: '日本'
    },
    {
      year: '2020',
      title: '早稻田大学',
      role: '机械工程本科',
      description: 'GPA 3.56/4(Top 3%)，获得日本机器人协会优秀学生奖',
      location: '日本'
    }
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            关于我
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            我对新鲜事物充满好奇，喜欢挑战有难度的任务。凭借理工科基础，我参与机器人制作项目，以及机器人软件前端实习，加深了对底层技术的理解。
          </p>
        </motion.div>

        {/* Core Strengths */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {coreStrengths.map((strength, index) => (
            <motion.div
              key={strength.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group-hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-r ${strength.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <strength.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {strength.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {strength.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
          
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative flex items-start"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>
                
                {/* Content */}
                <div className="ml-16 flex-1">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {item.year}
                      </span>
                      <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                        <MapPin size={16} />
                        <span>{item.location}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-lg font-medium text-purple-600 dark:text-purple-400 mb-3">
                      {item.role}
                    </p>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-100 dark:border-blue-800">
            <Award className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              持续学习，追求卓越
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              在SaaS行业的经验中，我努力学习产品技术提案与客户管理知识，优化销售策略，达成率保持100%，还完成行业分析报告。面对难题，我尝试用逻辑思维剖析解决。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection; 