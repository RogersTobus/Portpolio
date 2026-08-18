import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://xbase.co.kr"),
  title: { default: "XBASE | 데이터로 길을 찾고, 경험과 성과를 만듭니다", template: "%s | XBASE" },
  description: "마케팅·데이터·AI를 연결해 사람에게 남는 경험을 더 나은 성과로 바꾸는 박영준의 개인 포트폴리오 XBASE입니다.",
  applicationName: "XBASE",
  authors: [{ name: "박영준", url: "https://xbase.co.kr/about/" }],
  creator: "박영준",
  publisher: "XBASE",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: { type: "website", locale: "ko_KR", siteName: "XBASE" },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/xbase-logo.svg", apple: "/xbase-logo.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
