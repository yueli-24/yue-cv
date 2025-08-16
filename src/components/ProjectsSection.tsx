'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Rocket, Users, Trophy, Award, Target, Calendar, MapPin, ExternalLink, Github } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: '早稲田AI研究会',
      role: '共同创始人',
      period: '2023-06 ~ 2024-03',
      location: '日本',
      description: '作为共同创始人创办早稻田AI研究会，聚集200+成员，成为日本规模最大的AI学生社团',
      achievements: [
        '社团成立以来聚集200+社员',
        '任期内举办7+场交流活动，2场黑客松，每周举办AI讲座',
        '合作/赞助企业达7家'
      ],
      skills: ['社团管理', '活动策划', 'AI教育', '企业合作'],
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      badges: ['规模最大', '200+成员']
    },
    {
      title: 'AI创业项目',
      role: '项目负责人',
      period: '2023-08 ~ 2023-11',
      location: '日本',
      description: '担任创业项目负责人，带领团队开展从市场调研、用户研究到产品雏形打造的全流程工作',
      achievements: [
        '担任创业项目负责人，带领团队开展从市场调研、用户研究到产品雏形打造的全流程工作',
        '独立完成商业计划书的撰写，并主导项目公演与路演',
        '成功获得日本本土VC投资意向，验证了项目的商业价值与可行性'
      ],
      skills: ['创业管理', '市场调研', '商业计划', '路演展示', '融资'],
      icon: Rocket,
      color: 'from-purple-500 to-purple-600',
      badges: ['VC投资', '商赛冠军', '30万日元奖金']
    },
    {
      title: '早稲田大学ROBOSTEP',
      role: '软件部分负责人',
      period: '2020-08 ~ 2022-08',
      location: '日本',
      description: '负责机器人制作的战略决策和sensor部门管理与开发，新生教育',
      achievements: [
        '负责机器人制作的战略决策和sensor部门管理与开发，新生教育',
        '使用激光雷达和相机完成足球追迹编程'
      ],
      skills: ['机器人编程', '传感器管理', '团队领导', '新生教育', '激光雷达'],
      icon: Target,
      color: 'from-orange-500 to-orange-600',
      badges: ['技术领导', '足球机器人']
    }
  ];

  const awards = [
    {
      title: '荒波VC奖',
      description: '获得日本本土投资',
      icon: Trophy,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'EMIRA商赛第一名',
      description: '奖金30万日元',
      icon: Award,
      color: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            项目经历
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            从校园社团到创业项目，从技术开发到团队管理，展现了全面的项目执行能力和领导才能
          </p>
        </motion.div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            主要成就
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${award.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <award.icon size={40} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {award.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {award.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                {/* Header */}
                <div className={`bg-gradient-to-r ${project.color} p-6 text-white`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                      <project.icon size={32} />
                    </div>
                    <div className="text-right">
                      <div className="text-sm opacity-80">{project.role}</div>
                      <div className="text-sm opacity-80">{project.period}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center space-x-2 text-sm opacity-80">
                    <MapPin size={16} />
                    <span>{project.location}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.badges.map((badge, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* Key Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      主要成就
                    </h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
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
                      {project.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-2xl p-8 border border-orange-100 dark:border-orange-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              项目管理的核心价值
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              通过这些项目经历，我不仅积累了丰富的实战经验，更重要的是培养了从0到1的创业思维、团队协作能力和项目管理技能。每一个项目都让我对产品、市场和用户有了更深的理解。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection; 