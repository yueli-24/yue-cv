'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, ChevronUp, Calendar, MapPin, Building, Award, Target, Users, TrendingUp } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [expandedJobs, setExpandedJobs] = useState<number[]>([]);

  const toggleJob = (index: number) => {
    setExpandedJobs(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const experiences = [
    {
      company: '北京星动纪元有限公司',
      role: '产品市场，GTM',
      period: '2025-06 ~ 至今',
      location: '北京',
      description: '具身智能行业灵巧手产品的产品经理和GTM',
      achievements: [
        '帮助产品迭代，和关键用户沟通，需求收集分析，大客户售前'
      ],
      skills: ['产品管理', 'GTM策略', '客户沟通', '需求分析'],
      icon: Building
    },
    {
      company: '字节跳动-飞书',
      role: '海外GTM 技术售前，客户经理',
      period: '2024-03 ~ 2025-06',
      location: '海外',
      description: '负责海外市场的技术售前和客户管理工作',
      achievements: [
        '精准洞察，助力关单：深入洞察客户系统需求，围绕客户业务痛点，定制技术提案，有效推动业务成交',
        '攻克难题，打造AI方案：针对万人规模企业，主导AI解决方案的策划与撰写，所提AI提案获得高度认可',
        '大客户定制化服务：和日本上市公司CEO建立联系，通过深度沟通，精准把握客户需求',
        '销售流程标准化与团队赋能：制定标准化打单SOP，赋能代理店，帮助其提升关单能力',
        '代理店渠道精细化管理：全面负责代理店渠道管理，将签单成功率提升50%+'
      ],
      skills: ['技术售前', 'AI解决方案', '大客户管理', '渠道管理', '团队赋能'],
      icon: Target
    },
    {
      company: '字节跳动-飞书',
      role: '海外GTM Presales技术售前',
      period: '2023-11 ~ 2024-03',
      location: '海外',
      description: '实习期间负责技术售前工作',
      achievements: [
        '市场调研与报告撰写：独立开展市场调研，借助多渠道收集数据，完成具行业分析报告',
        '技术营销与客户转化：制作对客技术提案资料，助力80%以上客户成功签约，大幅提升销售转化效率',
        'AI生态搭建与产品优化：开展AI领域专家采访，整理超10万字采访文档，举办AI黑客松，邀请3名日本头部KOL出席，吸引100余名行业人士参与'
      ],
      skills: ['市场调研', '技术提案', 'AI生态', '活动策划'],
      icon: Users
    },
    {
      company: '株式会社Mujin(牧今科技日本母公司)',
      role: 'Frontend前端',
      period: '2022-07 ~ 2023-03',
      location: '日本',
      description: '负责机器人相关的前端开发工作',
      achievements: [
        '机器人3D模型校准与展示：积极协同团队，围绕机器人3D模型开展校准和展示工作',
        '3D数据库管理：主导机器人3D数据库整理，录入、分类并更新150余条数据，搭建高效检索体系',
        '数据接入系统验证：全面验证数据接入系统，通过多轮数据比对，定位并反馈多处数据接入故障'
      ],
      skills: ['前端开发', '3D模型', '数据库管理', '系统验证'],
      icon: TrendingUp
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            工作经历
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            从技术前端到产品市场，从日本到中国，积累了丰富的跨文化工作经验和GTM实战能力
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <exp.icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.company}
                      </h3>
                      <p className="text-lg font-medium text-purple-600 dark:text-purple-400 mb-2">
                        {exp.role}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => toggleJob(index)}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    {expandedJobs.includes(index) ? (
                      <ChevronUp size={20} className="text-gray-600 dark:text-gray-400" />
                    ) : (
                      <ChevronDown size={20} className="text-gray-600 dark:text-gray-400" />
                    )}
                  </button>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                  {exp.description}
                </p>
              </div>

              {/* Expandable Content */}
              <AnimatePresence>
                {expandedJobs.includes(index) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-100 dark:border-gray-700"
                  >
                    <div className="p-6 space-y-6">
                      {/* Key Achievements */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                          <Award size={20} className="text-yellow-500 mr-2" />
                          关键成就
                        </h4>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          相关技能
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-100 dark:border-blue-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              职业发展轨迹
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              从技术开发到产品市场，从日本本土企业到中国互联网巨头，我不断拓展自己的专业边界，积累了跨文化、跨领域的丰富经验。每一次角色转换都让我对产品、市场和客户有了更深的理解。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection; 