# 李玥个人简历网站

一个基于Next.js和Tailwind CSS构建的现代化个人简历网站，展示了李玥在AI产品市场、GTM策略和客户洞察方面的专业能力。

## ✨ 特性

- 🎨 **现代化设计** - 采用极简风格，使用渐变色和玻璃态效果
- 🌙 **深色模式** - 支持深色/浅色主题切换
- 📱 **响应式设计** - 完美适配各种设备尺寸
- 🚀 **性能优化** - 使用Framer Motion实现流畅动画
- 🎯 **交互体验** - 平滑滚动、悬停效果和页面加载动画
- 🖨️ **打印友好** - 优化的打印样式

## 🛠️ 技术栈

- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **图标**: Lucide React
- **语言**: TypeScript
- **部署**: Vercel

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 启动生产服务器

```bash
npm start
```

## 📁 项目结构

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # 全局样式
│   ├── layout.tsx      # 根布局
│   └── page.tsx        # 主页面
├── components/          # React组件
│   ├── Navbar.tsx      # 导航栏
│   ├── HeroSection.tsx # 首页Hero区域
│   ├── AboutSection.tsx # 关于我部分
│   ├── ExperienceSection.tsx # 工作经历
│   ├── EducationSection.tsx # 教育背景
│   ├── ProjectsSection.tsx # 项目经历
│   ├── SkillsSection.tsx # 技能专长
│   ├── ContactSection.tsx # 联系方式
│   └── Footer.tsx      # 页脚
└── contexts/           # React上下文
    └── ThemeContext.tsx # 主题管理
```

## 🎨 设计系统

### 颜色方案
- **主色**: 专业蓝色系 (#0066CC)
- **辅助色**: 科技感紫色 (#6B46C1)
- **强调色**: 活力橙色 (#FF6B35)
- **中性色**: 灰色系

### 组件特点
- 玻璃态效果 (backdrop-blur)
- 渐变背景和边框
- 悬停动画和过渡效果
- 响应式网格布局

## 📱 响应式断点

- **移动端**: < 768px
- **平板**: 768px - 1024px
- **桌面**: > 1024px

## 🚀 部署到Vercel

1. 将代码推送到GitHub
2. 在Vercel中导入项目
3. 配置构建命令: `npm run build`
4. 配置输出目录: `.next`
5. 部署完成

## 📄 自定义

### 修改个人信息
编辑各个组件文件中的内容，更新个人信息、工作经历、技能等。

### 修改样式
- 全局样式: `src/app/globals.css`
- 组件样式: 使用Tailwind CSS类名
- 主题配置: `tailwind.config.ts`

### 添加新组件
1. 在`src/components/`目录下创建新组件
2. 在`src/app/page.tsx`中导入并使用
3. 确保组件支持响应式设计和深色模式

## 🔧 开发建议

- 使用TypeScript确保类型安全
- 遵循组件化开发原则
- 保持代码简洁和可维护性
- 测试各种设备和浏览器兼容性

## 📞 联系信息

- **邮箱**: yue.career2023@gmail.com
- **电话**: 13522868262
- **位置**: 北京 / 日本

## 📄 许可证

MIT License

---

**注意**: 这是一个个人简历网站模板，请根据实际需求修改内容和样式。
