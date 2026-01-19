import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfolio | 개발자 포트폴리오',
  description:
    '프론트엔드 개발자의 포트폴리오 웹사이트입니다. 경력, 기술 스택, 프로젝트 경험을 확인하실 수 있습니다.',
  openGraph: {
    title: 'Portfolio | 개발자 포트폴리오',
    description:
      '프론트엔드 개발자의 포트폴리오 웹사이트입니다. 경력, 기술 스택, 프로젝트 경험을 확인하실 수 있습니다.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}
