import type { Metadata } from "next";
import type { DetailSlug } from "./detail-data";

export const siteUrl = "https://xbase.co.kr";

export const seoPages: Record<DetailSlug, { title: string; description: string; imageAlt: string }> = {
  about: { title: "자기소개와 커리어", description: "군 조직 운영, 이커머스 물류 고객 경험, 의료 마케팅을 거쳐 마케팅·재무·경영관리·사업 운영으로 성장하는 박영준의 커리어와 일하는 방식을 소개합니다.", imageAlt: "XBASE 박영준 자기소개와 커리어" },
  impact: { title: "마케팅·CX 개선 경험", description: "고객 퍼널, 홈페이지 예약 동선과 서비스 경험을 데이터 기반으로 개선한 과정과 역할을 공개 가능한 범위에서 소개합니다.", imageAlt: "XBASE 마케팅과 고객 경험 개선 사례" },
  work: { title: "마케팅·CX 프로젝트", description: "의료 고객 퍼널, 홈페이지 전환 최적화, 설치 서비스 CX 개선과 AI 콘텐츠 시스템 프로젝트를 공개 가능한 범위에서 소개합니다.", imageAlt: "XBASE 마케팅 고객 경험 프로젝트 모음" },
  creative: { title: "광고·AI 이미지 디자인 아카이브", description: "광고 소재, 생성형 AI 이미지, 콘텐츠 디자인과 웹 비주얼 제작물을 목적과 카테고리에 따라 정리한 XBASE 디자인 아카이브입니다.", imageAlt: "XBASE 광고 AI 이미지 디자인 아카이브" },
  build: { title: "바이브 코딩·AI 업무 자동화", description: "바이브 코딩, AI 자동화와 워드프레스로 만든 병원 콘텐츠 시스템, 업무 도구와 웹 구축 과정을 소개합니다.", imageAlt: "XBASE 바이브 코딩 AI 업무 자동화 시스템" },
  thinking: { title: "마케팅·데이터·AI 인사이트", description: "마케팅과 데이터, AI, 고객 경험, 일하는 방식과 성장 과정에서 얻은 생각과 기록을 공유합니다.", imageAlt: "XBASE 마케팅 데이터 AI 인사이트" },
};

export function detailMetadata(slug: DetailSlug): Metadata {
  const seo = seoPages[slug];
  const canonical = `/${slug}/`;
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical },
    openGraph: { title: `${seo.title} | XBASE`, description: seo.description, url: canonical, images: [{ url: "/og.png", width: 1200, height: 630, alt: seo.imageAlt }] },
    twitter: { title: `${seo.title} | XBASE`, description: seo.description, images: ["/og.png"] },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  };
}

export function JsonLd({ slug }: { slug?: DetailSlug }) {
  const canonical = slug ? `${siteUrl}/${slug}/` : `${siteUrl}/`;
  const seo = slug ? seoPages[slug] : { title: "마케팅·데이터·AI 자동화 포트폴리오", description: "마케팅과 데이터, AI를 연결해 상상을 현실로 만들고 문제를 최선의 방법으로 해결하는 박영준의 개인 포트폴리오 XBASE입니다." };
  const graph: Record<string, unknown>[] = [
    { "@type": "Person", "@id": `${siteUrl}/#person`, name: "박영준", url: `${siteUrl}/about/`, jobTitle: "마케팅·데이터 기반 문제 해결자", knowsAbout: ["그로스 마케팅", "고객 경험", "데이터 분석", "AI 자동화", "바이브 코딩", "사업 운영"] },
    { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "XBASE", url: siteUrl, logo: { "@type": "ImageObject", url: `${siteUrl}/xbase-logo.svg` }, founder: { "@id": `${siteUrl}/#person` } },
    { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: siteUrl, name: "XBASE", inLanguage: "ko-KR", publisher: { "@id": `${siteUrl}/#organization` } },
    { "@type": slug ? "CollectionPage" : "WebPage", "@id": `${canonical}#webpage`, url: canonical, name: seo.title, description: seo.description, inLanguage: "ko-KR", isPartOf: { "@id": `${siteUrl}/#website` }, about: { "@id": `${siteUrl}/#person` }, primaryImageOfPage: { "@type": "ImageObject", url: `${siteUrl}/og.png`, width: 1200, height: 630 } },
  ];
  if (slug) graph.push({ "@type": "BreadcrumbList", "@id": `${canonical}#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: "홈", item: `${siteUrl}/` }, { "@type": "ListItem", position: 2, name: seo.title, item: canonical }] });
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c") }} />;
}
