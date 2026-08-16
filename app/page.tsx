import Image from "next/image";
import type { Metadata } from "next";
import { JsonLd } from "./seo";
import SocialDock from "./social-dock";

export const metadata: Metadata = {
  title: "마케팅·데이터·AI 자동화 포트폴리오",
  description: "마케팅과 데이터, AI를 연결해 상상을 현실로 만들고 문제를 최선의 방법으로 해결하는 박영준의 개인 포트폴리오 XBASE입니다.",
  alternates: { canonical: "/" },
  openGraph: { title: "XBASE | 문제를 발견하고 더 나은 방식을 만듭니다", description: "Marketing × Data Analytics × Vibe Coding × System", url: "/", images: [{ url: "/og.png", width: 1200, height: 630, alt: "XBASE 마케팅 데이터 분석 바이브 코딩 시스템 포트폴리오" }] },
  twitter: { title: "XBASE | Think better. Build better.", description: "Marketing × Data Analytics × Vibe Coding × System", images: ["/og.png"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};

const impacts = [
  { value: "GROWTH", label: "퍼포먼스 마케터와 협업한 성과 개선" },
  { value: "CONTENT", label: "의료정보를 이해되는 콘텐츠로 전환" },
  { value: "FUNNEL", label: "상담·예약까지 이어지는 여정 개선" },
  { value: "COMPLIANCE", label: "의료광고 기준을 고려한 기획" },
  { value: "SYSTEM", label: "측정·보고·반복 업무의 시스템화" },
];

const capabilities = [
  { no: "01", en: "MARKETING", title: "성과를 성장 과제에 연결합니다", text: "퍼포먼스 마케터와 협업해 광고 성과를 상담·예약 흐름과 연결하고, 개선 우선순위를 함께 조정합니다.", tags: ["Growth", "Collaboration", "Full Funnel"] },
  { no: "02", en: "DATA ANALYTICS", title: "상담 이후까지 읽습니다", text: "광고 지표에 머무르지 않고 고객의 상담과 예약 흐름을 함께 살펴 개선해야 할 지점을 찾습니다.", tags: ["GA4", "Conversion", "Insight"] },
  { no: "03", en: "VIBE CODING", title: "아이디어를 작동시킵니다", text: "랜딩페이지와 웹, 반복 업무 자동화를 빠르게 구현하고 실제 사용 흐름에서 검증합니다.", tags: ["Web", "WordPress", "Automation"] },
  { no: "04", en: "SYSTEM", title: "성과가 반복되는 구조를 만듭니다", text: "의료광고 기준을 고려하면서 목표와 일정, 콘텐츠, 데이터, 보고가 하나의 흐름으로 움직이게 만듭니다.", tags: ["Compliance", "KPI", "Operations"] },
];

const works = [
  { no: "01", type: "GROWTH · DATA · CX", title: "의료 고객 여정 전체를\n하나의 퍼널로 보다", text: "퍼포먼스 마케터와 협업하며 광고 유입 이후 상담, 예약, 내원까지 흩어진 고객 접점을 연결해 개선 지점을 찾았습니다.", metric: "FUNNEL", label: "고객 여정 기반 협업", color: "blue" },
  { no: "02", type: "UX · DATA · MARKETING", title: "홈페이지를 소개서에서\n전환 도구로 바꾸다", text: "고객 행동을 바탕으로 정보의 순서와 예약 동선을 재구성해 더 쉽게 이해하고 행동할 수 있도록 개선했습니다.", metric: "WEB UX", label: "예약 동선 최적화", color: "cyan" },
  { no: "03", type: "CX · OPERATIONS · DATA", title: "VOC에서 취소의 이유를\n찾아 개선하다", text: "설치 서비스 과정의 VOC와 운영 데이터를 바탕으로 고객이 놓치기 쉬운 정보를 보완하고 이용 경험을 개선했습니다.", metric: "CX", label: "취소 요인 개선", color: "violet" },
  { no: "04", type: "AI · AUTOMATION · CONTENT", title: "반복 업무를 줄이고\n콘텐츠 시스템을 만들다", text: "병원 블로그의 기획과 제작 흐름을 AI 기반으로 재설계했습니다. 사람은 판단에 집중하고 반복은 시스템이 맡게 했습니다.", metric: "AI SYSTEM", label: "콘텐츠 자동화 구축", color: "navy" },
];

const experiences = [
  ["2026 — NOW", "명동 치과의원", "Marketing · Growth", "퍼포먼스 마케터와 협업하며 콘텐츠와 고객 퍼널 분석을 연결해 성장 과제를 수행하고 있습니다."],
  ["2025", "강남 안과의원", "Marketing · Partnership", "마케팅과 제휴, 대외협력을 맡아 새로운 고객 접점과 프로젝트를 기획했습니다."],
  ["2024", "국내 이커머스 물류기업", "Installation Service · CX", "운영 데이터와 VOC를 바탕으로 고객 경험과 설치 프로세스의 문제를 개선했습니다."],
  ["2015 — 2024", "대한민국 육군", "Leadership · Operations", "조직과 자원을 운영하며 책임, 판단, 실행의 기본기를 익혔습니다."],
];

const steps = [
  ["01", "FIND", "데이터와 현장의 목소리에서 진짜 문제를 찾습니다."],
  ["02", "FRAME", "복잡한 문제를 모두가 이해할 수 있는 구조로 정리합니다."],
  ["03", "BUILD", "가설을 빠르게 실행 가능한 결과물로 만듭니다."],
  ["04", "IMPROVE", "결과를 확인하고 더 나은 방식으로 계속 고칩니다."],
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  return (
    <main>
      <JsonLd />
      <SocialDock />
      <div className="scroll-progress" aria-hidden="true" />
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="XBASE 홈">
          <Image src="/xbase-header-logo.svg" alt="" width={99} height={26} priority />
        </a>
        <nav aria-label="주요 메뉴">
          <a href="/about">About</a><a href="/impact">Impact</a><a href="/work">Work</a><a href="/creative">Creative</a><a href="/build">Build</a><a href="/thinking">Thinking</a>
        </nav>
        <a className="header-cta" href="#contact">Let&apos;s talk <Arrow /></a>
        <details className="mobile-menu">
          <summary aria-label="메뉴 열기"><span /><span /></summary>
          <div>
            <a href="/about">About</a><a href="/impact">Impact</a><a href="/work">Work</a><a href="/creative">Creative</a><a href="/build">Build</a><a href="/thinking">Thinking</a><a href="#contact">Contact</a>
          </div>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow reveal">MARKETING × DATA × AI</p>
          <h1 className="reveal delay-1">데이터로 문제를 찾고,<br /><span>최선의 방향으로 개선합니다.</span></h1>
          <p className="hero-description reveal delay-2">마케팅과 데이터, AI를 연결해<br className="desktop-break" /> 상상을 현실로 만들고, 문제를 최선의 방법으로 해결합니다.</p>
          <div className="hero-actions reveal delay-3">
            <a className="button hero-secondary" href="#work">프로젝트 보기 <Arrow /></a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="sphere-sheen" />
          <div className="orbit orbit-one"><span className="orbiter orbiter-large" /></div>
          <div className="orbit orbit-two"><span className="orbiter orbiter-small" /></div>
          <div className="orbit orbit-three"><span className="orbiter orbiter-medium" /></div>
          <div className="core"><Image src="/xbase-hero-symbol.svg" alt="XBASE 심볼" width={92} height={80} priority /></div>
          <span className="visual-label label-a">THINK</span><span className="visual-label label-b">BUILD</span><span className="visual-label label-c">GROW</span>
        </div>
        <a className="scroll-hint" href="#about"><span />SCROLL</a>
      </section>

      <section className="about section-pad" id="about">
        <div className="section-intro split-title">
          <div><p className="section-kicker">ABOUT XBASE</p><h2>직함보다,<br />문제를 푸는 방식으로<br />저를 설명합니다.</h2></div>
          <div className="about-copy"><h3>산업과 역할은 달랐지만,<br />제가 해온 일에는 한 가지<br />공통점이 있습니다.</h3><p>군에서는 조직과 운영을, 이커머스 물류기업에서는 고객 경험을, 의료 업계에서는 그로스 마케팅과 전환을 다뤘습니다. 퍼포먼스 마케터와 협업하며 콘텐츠와 광고 성과를 상담·예약 흐름에 연결해 문제를 찾고 개선합니다.</p><p><b>XBASE</b>는 그 과정과 생각을 기록하는 개인 브랜드입니다. X는 가능성과 교차점을, BASE는 모든 실행의 단단한 기반을 의미합니다.</p></div>
        </div>
        <div className="about-statement"><span>ONE PERSON.</span><span>MULTIPLE PERSPECTIVES.</span><span>ONE WAY OF WORKING.</span></div>
      </section>

      <section className="capabilities section-pad" id="capabilities">
        <div className="section-intro dark-intro"><p className="section-kicker">CAPABILITIES</p><h2>성장을 만드는<br />네 가지 실행 기반</h2><p>전략과 분석, 제작을 분리하지 않습니다.<br />필요한 답을 찾고 직접 작동하게 만듭니다.</p></div>
        <div className="capability-stack">
          {capabilities.map((item, i) => <article className={`capability-panel panel-${i + 1}`} key={item.no}>
            <div className="cap-visual" aria-hidden="true"><span>{item.no}</span><i /><i /></div>
            <div className="cap-copy"><div className="cap-line" /><span>{item.en}</span><h3>{item.title}</h3><p>{item.text}</p><div className="tags">{item.tags.map(t => <span key={t}>{t}</span>)}</div></div>
          </article>)}
        </div>
      </section>

      <section className="impact section-pad" id="impact">
        <div className="section-intro light-intro">
          <p className="section-kicker">PROBLEMS I SOLVE</p>
          <h2>문제를 나누어 보고,<br />연결해서 해결합니다.</h2>
          <p>고객 여정과 데이터, 화면과 운영을 따로 보지 않습니다. 서로 연결된 문제를 구조화하고 실행 가능한 개선점으로 바꿉니다.</p>
        </div>
        <div className="impact-grid">
          {impacts.map((item, index) => <article className={index === 0 ? "impact-card featured" : "impact-card"} key={item.label}><span>0{index + 1}</span><strong>{item.value}</strong><p>{item.label}</p></article>)}
        </div>
        <div className="signal-marquee" aria-hidden="true"><div>MARKETING · DATA ANALYTICS · CUSTOMER EXPERIENCE · SYSTEM · OPERATIONS · MARKETING · DATA ANALYTICS · CUSTOMER EXPERIENCE · SYSTEM · OPERATIONS ·</div></div>
      </section>

      <section className="work section-pad" id="work">
        <div className="section-intro split-title work-title"><div><p className="section-kicker">SELECTED WORK</p><h2>문제를 발견하고<br />바꿔낸 것들</h2></div><p>성과만 나열하기보다 문제를 어떻게 보고,<br />무엇을 바꿨는지 보여드립니다.</p></div>
        <div className="work-list">
          {works.map((work) => <article className={`work-card ${work.color}`} key={work.no}>
            <div className="work-number">CASE {work.no}</div>
            <div className="work-copy"><span>{work.type}</span><h3>{work.title.split("\n").map(line => <span key={line}>{line}<br /></span>)}</h3><p>{work.text}</p><a className="private-case-link" href="#contact">PRIVATE CASE <Arrow /></a></div>
            <div className="work-metric"><span>KEY RESULT</span><strong>{work.metric}</strong><p>{work.label}</p></div>
          </article>)}
        </div>
      </section>

      <section className="process section-pad">
        <div className="section-intro centered"><p className="section-kicker">HOW I WORK</p><h2>전략보다 실행으로,<br />실행보다 결과로.</h2><p>감이 아니라 관찰과 데이터로 시작하고,<br />빠르게 만들고 반복해서 개선합니다.</p></div>
        <div className="process-grid">{steps.map(([no,title,text]) => <article key={no}><span>{no}</span><div className="process-symbol" aria-hidden="true"><i /><i /></div><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="experience section-pad" id="experience">
        <div className="section-intro split-title"><div><p className="section-kicker">EXPERIENCE</p><h2>경험은 달라도,<br />방향은 같았습니다.</h2></div><p>조직 운영에서 고객 경험으로,<br />그리고 비즈니스 성장으로.</p></div>
        <div className="timeline">{experiences.map(([year,company,role,description]) => <article key={year}><span className="year">{year}</span><div><h3>{company}</h3><span>{role}</span></div><p>{description}</p><i /></article>)}</div>
      </section>

      <section className="beyond section-pad">
        <div className="beyond-visual" aria-hidden="true"><div className="rings"><span>MARKETING</span><span>FINANCE</span><span>MANAGEMENT</span><span>OPERATIONS</span><i><Image src="/xbase-logo.svg" alt="" width={118} height={118} /></i></div></div>
        <div className="beyond-copy"><p className="section-kicker">BEYOND MARKETING</p><h2>마케팅을 넘어,<br /><span>비즈니스 전체를<br />운영하는 사람으로.</span></h2><p>고객을 이해하는 마케팅에서 시작해 숫자를 이해하는 회계와 재무, 조직과 시스템을 다루는 경영관리로 확장하고 있습니다.</p><div className="growth-path"><span>Marketing</span><i>→</i><span>Finance</span><i>→</i><span>Management</span><i>→</i><b>COO</b></div></div>
      </section>

      <section className="thinking section-pad" id="thinking">
        <div className="section-intro split-title"><div><p className="section-kicker">THINKING / THREADS</p><h2>배운 것과<br />생각한 것을 기록합니다.</h2></div><p>마케팅, 일하는 방식, AI와 기술,<br />그리고 성장 과정에 대한 생각을 나눕니다.</p></div>
        <div className="thinking-track"><article className="thread-feature"><span>LATEST THINKING</span><h3>좋은 마케팅은 광고를 잘 만드는 일이 아니라, 고객을 멈추게 하는 지점을 찾아 없애는 일에 더 가깝습니다.</h3><div><span>@XBASE · THREADS</span><Arrow /></div></article><article><span>BUILD IN PUBLIC</span><h3>완성해진 뒤 공개하는 대신, 만들어가는 과정부터 기록합니다.</h3><div><span>THREADS 연결 예정</span><Arrow /></div></article><article><span>FIELD NOTE</span><h3>데이터는 답을 말하지 않습니다. 더 좋은 질문을 시작하게 합니다.</h3><div><span>XBASE NOTE</span><Arrow /></div></article></div>
      </section>

      <section className="contact section-pad" id="contact">
        <div className="contact-glow" aria-hidden="true" />
        <p className="section-kicker">LET&apos;S CONNECT</p><h2>더 나은 방식을<br />함께 만들어요.</h2><p>프로젝트, 협업, 커리어에 관한 대화를 환영합니다.<br />공개하지 않은 세부 성과와 과정은 요청 시 비공개로 공유합니다.</p><div className="contact-actions"><a className="button white" href="mailto:hello@xbase.co.kr?subject=XBASE%20비공개%20포트폴리오%20문의">PRIVATE PORTFOLIO <Arrow /></a><a href="#top">BACK TO TOP ↑</a></div>
      </section>

      <footer><a className="wordmark inverse" href="#top"><Image src="/xbase-logo.svg" alt="" width={30} height={30} /><b>XBASE<span>.</span></b></a><p>개인 포트폴리오 · 프로젝트 내용은 공개 가능한 범위에서 재구성했습니다.</p><p>© 2026 XBASE. Built by Park Young Jun.</p></footer>
    </main>
  );
}
