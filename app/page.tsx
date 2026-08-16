import Image from "next/image";
import type { Metadata } from "next";
import { JsonLd } from "./seo";
import SocialDock from "./social-dock";
import MotionLayer from "./motion-layer";

export const metadata: Metadata = {
  title: "마케팅·데이터·AI 자동화 포트폴리오",
  description: "마케팅과 데이터, AI를 연결해 상상을 현실로 만들고 문제를 최선의 방법으로 해결하는 박영준의 개인 포트폴리오 XBASE입니다.",
  alternates: { canonical: "/" },
  openGraph: { title: "XBASE | 문제를 발견하고 더 나은 방식을 만듭니다", description: "Marketing × Data × AI", url: "/", images: [{ url: "/og.png", width: 1200, height: 630, alt: "XBASE 마케팅 데이터 AI 포트폴리오" }] },
  twitter: { title: "XBASE | Think better. Build better.", description: "Marketing × Data × AI", images: ["/og.png"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};

const works = [
  { no: "01", type: "GROWTH · DATA · CX", title: "의료 고객 여정 전체를\n하나의 퍼널로 보다", text: "퍼포먼스 마케터와 협업하며 광고 유입 이후 상담, 예약, 내원까지 흩어진 고객 접점을 연결해 개선 지점을 찾았습니다.", teaser: "광고 이후의 고객 여정을 하나의 퍼널로 다시 설계했습니다.", metric: "12→18%", label: "DB 예약 전환율", color: "blue" },
  { no: "02", type: "UX · DATA · MARKETING", title: "홈페이지를 소개서에서\n전환 도구로 바꾸다", text: "고객 행동을 바탕으로 정보의 순서와 예약 동선을 재구성해 더 쉽게 이해하고 행동할 수 있도록 개선했습니다.", teaser: "소개 중심의 홈페이지를 고객이 행동하는 전환 도구로 바꿨습니다.", metric: "+200%", label: "홈페이지 예약 전환", color: "cyan" },
  { no: "03", type: "CX · OPERATIONS · DATA", title: "VOC에서 취소의 이유를\n찾아 개선하다", text: "설치 서비스 과정의 VOC와 운영 데이터를 바탕으로 고객이 놓치기 쉬운 정보를 보완하고 이용 경험을 개선했습니다.", teaser: "반복되는 고객의 목소리에서 서비스 취소의 원인을 찾았습니다.", metric: "27→4%", label: "설치 취소율", color: "violet" },
  { no: "04", type: "AI · AUTOMATION · CONTENT", title: "반복 업무를 줄이고\n콘텐츠 시스템을 만들다", text: "병원 블로그의 기획과 제작 흐름을 AI 기반으로 재설계했습니다. 사람은 판단에 집중하고 반복은 시스템이 맡게 했습니다.", metric: "AI SYSTEM", label: "콘텐츠 자동화 구축", color: "navy" },
];

const newsItems = [
  { category: "MARKETING", date: "2026. 08. 16", title: "광고보다 먼저 살펴봐야 할 고객 여정의 이탈 지점", image: "/news/customer-journey.svg", href: "https://www.threads.com/@xbase_lab?hl=ko" },
  { category: "DATA", date: "2026. 08. 09", title: "전환율 숫자 뒤에 숨어 있는 고객 행동을 읽는 방법", image: "/news/data-signal.svg", href: "/thinking" },
  { category: "AI", date: "2026. 08. 02", title: "반복 업무는 줄이고 판단에 집중하는 AI 활용 방식", image: "/news/ai-workflow.svg", href: "/thinking" },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  return (
    <main>
      <JsonLd />
      <SocialDock />
      <MotionLayer />
      <div className="scroll-progress" aria-hidden="true" />
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="XBASE 홈">
          <Image src="/xbase-header-logo.svg" alt="" width={99} height={26} priority />
        </a>
        <nav aria-label="주요 메뉴">
          <a href="/about">About</a><a href="/work">Work</a><a href="/thinking">Thinking</a>
        </nav>
        <details className="mobile-menu">
          <summary aria-label="메뉴 열기"><span /><span /></summary>
          <div>
            <a href="/about">About</a><a href="/work">Work</a><a href="/thinking">Thinking</a>
          </div>
        </details>
      </header>

      <section className="hero" id="top">
        <video className="hero-background-video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
          <source src="/media/hero-background.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow reveal">MARKETING × DATA × AI</p>
            <h1 className="hero-title reveal delay-1"><span className="hero-title-line"><span><b className="hero-accent">데이터</b>로 길을 찾고,</span></span><span className="hero-title-line"><span className="hero-secondary-line">경험과 성과를 만듭니다.</span></span></h1>
            <p className="hero-description reveal delay-2">정보가 넘칠수록, 사람을 움직이는 건 마음에 남는 경험입니다.<br />마케팅·데이터·AI를 연결해 그 경험을 <strong>더 나은 성과</strong>로 바꿉니다.</p>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="sphere-sheen" />
          <div className="orbit orbit-one"><span className="orbiter orbiter-large" /></div>
          <div className="orbit orbit-two"><span className="orbiter orbiter-small" /></div>
          <div className="orbit orbit-three"><span className="orbiter orbiter-medium" /></div>
          <div className="core"><Image src="/xbase-hero-symbol.svg" alt="XBASE 심볼" width={92} height={80} priority /></div>
          <span className="visual-label label-a">MARKETING</span><span className="visual-label label-b">DATA</span><span className="visual-label label-c">AI</span>
        </div>
      </section>

      <section className="impact merged-results section-pad" id="work">
        <div className="section-intro light-intro preview-heading">
          <p className="section-kicker">CAPABILITIES</p>
          <h2>실행의 결과는,<br />숫자로 증명합니다.</h2>
          <a className="preview-cta" href="/work">모든 프로젝트 보기 <Arrow /></a>
        </div>
        <div className="result-teaser-grid">
          {works.slice(0, 3).map((work) => <a className="result-teaser-card" href="/work" key={work.no}>
            <div className="teaser-meta"><span>{work.no}</span><b>{work.type}</b></div>
            <strong className="teaser-metric">{work.metric}</strong><p className="teaser-label">{work.label}</p>
            <p className="teaser-hook">{work.teaser}</p><div className="teaser-link">CASE 보기 <Arrow /></div>
          </a>)}
        </div>
      </section>

      <section className="experience-band about-band section-pad" id="about">
        <div className="impact-about">
          <div className="section-intro split-title experience-heading">
            <div><p className="section-kicker">EXPERIENCE</p><h2>산업은 달라도,<br />문제를 푸는 방식은 같았습니다.</h2></div>
            <a className="preview-cta" href="/about">경력과 일하는 방식 보기 <Arrow /></a>
          </div>
        </div>
        <div className="career-spectrum" aria-label="경력 방향 미리보기">
          <div className="career-spectrum-shade" />
          <div className="career-spectrum-track">
            <article><time>2015—2024</time><span>01</span><h3>조직 운영</h3><p>현장 운영과 리더십</p></article>
            <article><time>2024</time><span>02</span><h3>고객 경험</h3><p>설치 여정과 VOC 개선</p></article>
            <article><time>2025</time><span>03</span><h3>그로스 마케팅</h3><p>유입부터 전환까지</p></article>
            <article><time>2026—NOW</time><span>04</span><h3>비즈니스 운영</h3><p>데이터 기반 성장 설계</p></article>
          </div>
        </div>
      </section>

      <section className="thinking section-pad" id="thinking">
        <div className="section-intro split-title"><div><p className="section-kicker">THINKING / THREADS</p><h2>NEWS</h2></div></div>
        <div className="thinking-track">{newsItems.map((item) => <article key={item.title}>
          <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined}>
            <div className="news-thumb"><img src={item.image} alt="" /></div>
            <div className="news-card-body"><div className="news-meta"><span>{item.category}</span><time>{item.date}</time></div><h3>{item.title}</h3><div className="news-link">READ MORE <Arrow /></div></div>
          </a>
        </article>)}</div>
      </section>

      <div className="signal-marquee home-transition-marquee" aria-hidden="true"><div className="signal-marquee-track"><span>OBSERVE THE FIELD · READ THE DATA · FIND THE PROBLEM · BUILD THE CHANGE · PROVE THE RESULT · </span><span>OBSERVE THE FIELD · READ THE DATA · FIND THE PROBLEM · BUILD THE CHANGE · PROVE THE RESULT · </span><span>OBSERVE THE FIELD · READ THE DATA · FIND THE PROBLEM · BUILD THE CHANGE · PROVE THE RESULT · </span></div></div>

      <section className="beyond section-pad">
        <div className="beyond-visual" aria-hidden="true"><div className="rings"><span>MARKETING</span><span>FINANCE</span><span>MANAGEMENT</span><span>OPERATIONS</span><i><Image src="/xbase-logo.svg" alt="" width={118} height={118} /></i></div></div>
        <div className="beyond-copy"><p className="section-kicker">BEYOND MARKETING</p><h2>마케팅을 넘어,<br /><span>비즈니스 전체로.</span></h2></div>
        <div className="beyond-actions"><a href="/work">WORK 보기 <Arrow /></a><a href="/about">ABOUT 더 보기 <Arrow /></a></div>
      </section>

      <footer><a className="wordmark inverse" href="#top"><Image src="/xbase-logo.svg" alt="" width={30} height={30} /><b>XBASE<span>.</span></b></a><p>개인 포트폴리오 · 프로젝트 내용은 공개 가능한 범위에서 재구성했습니다.</p><p>© 2026 XBASE. Built by Park Young Jun.</p></footer>
    </main>
  );
}
