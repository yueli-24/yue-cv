# 🚀 快速启动指南

## 📋 前置要求

- Node.js 18+ 
- npm 或 yarn
- Git

## ⚡ 5分钟快速启动

### 1. 克隆项目
```bash
git clone <your-repository-url>
cd yue-cv-website
```

### 2. 安装依赖
```bash
npm install
```

### 3. 启动开发服务器
```bash
npm run dev
```

### 4. 打开浏览器
访问 [http://localhost:3000](http://localhost:3000)

## 🔧 自定义配置

### 修改个人信息
编辑以下文件中的内容：

- **基本信息**: `src/components/HeroSection.tsx`
- **工作经历**: `src/components/ExperienceSection.tsx`
- **教育背景**: `src/components/EducationSection.tsx`
- **项目经历**: `src/components/ProjectsSection.tsx`
- **技能专长**: `src/components/SkillsSection.tsx`
- **联系方式**: `src/components/ContactSection.tsx`

### 修改样式
- **全局样式**: `src/app/globals.css`
- **主题配置**: `tailwind.config.ts`
- **组件样式**: 直接在组件中使用Tailwind类名

### 修改颜色主题
在 `src/app/globals.css` 中修改CSS变量：

```css
:root {
  --primary: 221.2 83.2% 53.3%;     /* 主色 */
  --secondary: 210 40% 96%;         /* 辅助色 */
  --accent: 210 40% 96%;            /* 强调色 */
}
```

## 📱 响应式测试

### 开发工具
- 使用浏览器开发者工具
- 测试不同屏幕尺寸
- 检查移动端体验

### 断点测试
- **移动端**: 375px - 767px
- **平板**: 768px - 1023px
- **桌面**: 1024px+

## 🌙 深色模式测试

1. 点击导航栏右侧的月亮/太阳图标
2. 检查所有组件的深色模式样式
3. 验证主题切换的流畅性

## 🚀 部署到生产环境

### 方法1: Vercel (推荐)
```bash
npm run build
vercel --prod
```

### 方法2: 其他平台
```bash
npm run build
# 将 .next 文件夹部署到你的服务器
```

## 🔍 常见问题

### Q: 构建失败怎么办？
A: 检查依赖版本，运行 `npm install` 重新安装

### Q: 样式不生效？
A: 确保Tailwind CSS正确配置，检查 `globals.css` 导入

### Q: 动画不流畅？
A: 检查Framer Motion安装，确保浏览器支持

### Q: 移动端显示异常？
A: 检查响应式类名，使用开发者工具测试

## 📚 学习资源

- [Next.js 文档](https://nextjs.org/docs)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [Framer Motion 文档](https://www.framer.com/motion/)
- [TypeScript 文档](https://www.typescriptlang.org/docs/)

## 🆘 获取帮助

1. 查看项目文档
2. 检查GitHub Issues
3. 搜索相关技术文档
4. 联系技术支持

---

**🎯 目标**: 5分钟内启动项目，30分钟内完成基本自定义，1小时内部署上线！

**💡 提示**: 如果遇到问题，先检查控制台错误信息，大部分问题都有详细的错误提示。 