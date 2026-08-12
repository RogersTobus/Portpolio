import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://xbase.co.kr"),
  title: "XBASE — Think Better. Build Better.",
  description: "마케팅과 데이터, AI와 기술을 연결해 문제를 발견하고 더 나은 방식을 만드는 박영준의 개인 포트폴리오.",
  openGraph: {
    title: "XBASE — 문제를 발견하고, 더 나은 방식을 만듭니다.",
    description: "Marketing × Data × Vibe Coding × Creative",
    type: "website",
    locale: "ko_KR",
    siteName: "XBASE",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "XBASE — Think better. Build better." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "XBASE — Think better. Build better.",
    description: "Marketing × Data × Vibe Coding × Creative",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
