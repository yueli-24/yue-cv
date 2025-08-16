# 部署说明

## 🚀 部署到Vercel

### 方法1: 通过Vercel Dashboard

1. **准备代码**
   - 确保所有代码已提交到GitHub仓库
   - 确保`package.json`中的依赖版本正确

2. **在Vercel中部署**
   - 访问 [vercel.com](https://vercel.com)
   - 点击"New Project"
   - 导入你的GitHub仓库
   - 选择`yue-cv-website`项目
   - 点击"Deploy"

3. **配置设置**
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

### 方法2: 通过Vercel CLI

1. **安装Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **登录Vercel**
   ```bash
   vercel login
   ```

3. **部署项目**
   ```bash
   cd yue-cv-website
   vercel
   ```

4. **生产环境部署**
   ```bash
   vercel --prod
   ```

## 🌐 自定义域名

1. 在Vercel Dashboard中选择你的项目
2. 进入"Settings" > "Domains"
3. 添加你的自定义域名
4. 按照提示配置DNS记录

## 🔧 环境变量

如果需要配置环境变量，可以在Vercel Dashboard中设置：

1. 进入项目设置
2. 选择"Environment Variables"
3. 添加必要的环境变量

## 📱 性能优化

### 图片优化
- 使用Next.js的`Image`组件
- 压缩图片文件
- 使用WebP格式

### 代码分割
- 组件懒加载
- 路由级别的代码分割

### 缓存策略
- 静态资源缓存
- API响应缓存

## 🔍 SEO优化

1. **Meta标签**
   - 在`layout.tsx`中配置完整的meta信息
   - 添加Open Graph标签
   - 配置Twitter Cards

2. **结构化数据**
   - 添加JSON-LD结构化数据
   - 配置网站地图

3. **性能指标**
   - Core Web Vitals优化
   - Lighthouse评分提升

## 📊 监控和分析

1. **Vercel Analytics**
   - 启用Vercel内置分析
   - 监控页面性能

2. **Google Analytics**
   - 集成GA4
   - 跟踪用户行为

## 🚨 故障排除

### 构建失败
- 检查依赖版本兼容性
- 查看构建日志
- 确保所有导入路径正确

### 运行时错误
- 检查浏览器控制台
- 查看Vercel函数日志
- 验证环境变量配置

### 性能问题
- 使用Lighthouse分析
- 检查包大小
- 优化图片和资源

## 📞 支持

如果遇到部署问题：

1. 查看Vercel文档
2. 检查Next.js官方指南
3. 查看项目GitHub Issues
4. 联系技术支持

---

**注意**: 部署前请确保：
- 所有代码已测试通过
- 构建命令执行成功
- 环境变量配置正确
- 域名DNS设置完成 