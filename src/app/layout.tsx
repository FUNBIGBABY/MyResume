import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '顾哲毓 | 全栈工程师 & AI 开发者',
  description: '顾哲毓的个人网站 — 全栈工程师 / AI 开发者，专注于 React、Next.js、Python、FastAPI 等技术栈',
  keywords: ['顾哲毓', 'Michael Gu', '全栈工程师', 'AI 开发者', '个人网站'],
  icons: {
    icon: '/logo.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
