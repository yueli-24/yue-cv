import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Navbar from "@/components/Navbar";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "李玥 - 个人简历 | AI产品市场专家 & GTM策略师",
  description: "李玥的个人简历网站，展示在AI产品市场、GTM策略、客户洞察与解决方案设计方面的专业能力和丰富经验。早稻田大学机械工程毕业，在字节跳动飞书和星动纪元积累丰富经验。",
  keywords: [
    "李玥", 
    "产品市场", 
    "GTM策略", 
    "AI产品", 
    "具身智能", 
    "客户洞察", 
    "解决方案设计",
    "早稻田大学",
    "字节跳动",
    "星动纪元",
    "日本留学",
    "机器人技术"
  ],
  authors: [{ name: "李玥", url: "https://github.com/yueli-24" }],
  creator: "李玥",
  publisher: "李玥",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://yue-cv.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "李玥 - 个人简历 | AI产品市场专家 & GTM策略师",
    description: "李玥的个人简历网站，展示在AI产品市场、GTM策略、客户洞察与解决方案设计方面的专业能力和丰富经验。",
    url: 'https://yue-cv.vercel.app',
    siteName: '李玥个人简历',
    images: [
      {
        url: '/photo.jpg',
        width: 1200,
        height: 630,
        alt: '李玥个人照片',
      },
    ],
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '李玥 - 个人简历 | AI产品市场专家 & GTM策略师',
    description: '李玥的个人简历网站，展示在AI产品市场、GTM策略、客户洞察与解决方案设计方面的专业能力和丰富经验。',
    images: ['/photo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        {/* 结构化数据 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "李玥",
              "jobTitle": "AI产品市场专家 & GTM策略师",
              "description": "在日本创办学生社团，AI创业获得本地VC融资，在字节跳动飞书和星动纪元积累丰富的GTM实战经验",
              "url": "https://yue-cv.vercel.app",
              "image": "/photo.jpg",
              "email": "yue.career2023@gmail.com",
              "telephone": "+86-13522868262",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "北京",
                "addressCountry": "CN"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "早稻田大学",
                "url": "https://www.waseda.jp/"
              },
              "worksFor": [
                {
                  "@type": "Organization",
                  "name": "北京星动纪元有限公司",
                  "jobTitle": "产品市场，GTM"
                },
                {
                  "@type": "Organization", 
                  "name": "字节跳动",
                  "jobTitle": "海外GTM 技术售前，客户经理"
                }
              ],
              "knowsAbout": [
                "AI产品市场",
                "GTM策略", 
                "客户洞察",
                "解决方案设计",
                "产品管理",
                "机器人技术"
              ],
              "sameAs": [
                "https://github.com/yueli-24"
              ]
            })
          }}
        />
        
        {/* 预加载关键资源 */}
        <link rel="preload" href="/photo.jpg" as="image" />
        <link rel="preload" href="/resume.pdf" as="document" />
        
        {/* 网站图标 */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* 字体预加载 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
