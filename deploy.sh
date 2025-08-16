#!/bin/bash

echo "🚀 开始部署李玥个人简历网站..."

# 检查是否有未提交的更改
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  发现未提交的更改，正在提交..."
    git add .
    git commit -m "feat: 更新简历网站内容 $(date '+%Y-%m-%d %H:%M:%S')"
else
    echo "✅ 没有未提交的更改"
fi

# 推送到远程仓库
echo "📤 推送到远程仓库..."
git push origin main

# 构建项目
echo "🔨 构建项目..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ 构建成功！"
    echo ""
    echo "🎉 部署完成！"
    echo ""
    echo "📋 下一步操作："
    echo "1. 访问 https://vercel.com"
    echo "2. 导入你的GitHub仓库"
    echo "3. 配置部署设置"
    echo "4. 点击部署"
    echo ""
    echo "🔗 或者使用Vercel CLI:"
    echo "   npm i -g vercel"
    echo "   vercel --prod"
else
    echo "❌ 构建失败，请检查错误信息"
    exit 1
fi 