import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://xbase.co.kr"),
  title: { default: "XBASE | 마케팅·데이터·AI 자동화 포트폴리오", template: "%s | XBASE" },
  description: "마케팅과 데이터, AI를 연결해 상상을 현실로 만들고 문제를 최선의 방법으로 해결하는 박영준의 개인 포트폴리오 XBASE입니다.",
  applicationName: "XBASE",
  authors: [{ name: "박영준", url: "https://xbase.co.kr/about/" }],
  creator: "박영준",
  publisher: "XBASE",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: { type: "website", locale: "ko_KR", siteName: "XBASE" },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/xbase-logo.png", apple: "/xbase-logo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
