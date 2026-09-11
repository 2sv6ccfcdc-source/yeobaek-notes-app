import type { Metadata, Viewport } from 'next';
import './globals.css';
export const metadata: Metadata = { title: '여백 — 나만의 메모장', description: '언제 어디서든 기록하는 나만의 메모장', manifest: '/manifest.webmanifest', appleWebApp: { capable: true, title: '여백', statusBarStyle: 'default' } };
export const viewport: Viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover', themeColor: [{ media: '(prefers-color-scheme: light)', color: '#f7f7f5' },{ media: '(prefers-color-scheme: dark)', color: '#121212' }] };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ko"><body>{children}</body></html>}
