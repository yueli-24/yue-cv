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
  title: "李玥 - 个人简历 | 产品市场专家 & GTM策略师",
  description: "李玥的个人简历网站，展示在AI产品市场、GTM策略、客户洞察与解决方案设计方面的专业能力和丰富经验。",
  keywords: ["李玥", "产品市场", "GTM策略", "AI产品", "具身智能", "客户洞察", "解决方案设计"],
  authors: [{ name: "李玥" }],
  creator: "李玥",
  openGraph: {
    title: "李玥 - 个人简历 | 产品市场专家 & GTM策略师",
    description: "李玥的个人简历网站，展示在AI产品市场、GTM策略、客户洞察与解决方案设计方面的专业能力和丰富经验。",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
