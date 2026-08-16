import Image from "next/image";
import type { Metadata } from "next";
import { JsonLd } from "./seo";
import SocialDock from "./social-dock";

export const metadata: Metadata = {
  title: "마케팅·데이터·AI 자동화 포트폴리오",
  description: "마케팅과 데이터, AI를 연결해 상상을 현실로 만들고 문제를 최선의 방법으로 해결하는 박영준의 개인 포트폴리오 XBASE입니다.",
  alternates: { canonical: "/" },
  openGraph: { title: "XBASE | 문제를 발견하고 더 나은 방식을 만듭니다", description: "Marketing × Data × AI", url: "/", images: [{ url: "/og.png", width: 1200, height: 630, alt: "XBASE 마케팅 데이터 AI 포트폴리오" }] },
  twitter: { title: "XBASE | Think better. Build better.", description: "Marketing × Data × AI", images: ["/og.png"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};

const impacts = [
  { value: "₩100M", label: "월간 퍼포먼스 광고 운영 규모" },
  { value: "12→18%", label: "DB 예약 전환율 개선" },
  { value: "+200%", label: "홈페이지 예약 전환 향상" },
  { value: "27→4%", label: "설치 서비스 취소율 감소" },
  { value: "15 CAMPS", label: "전국 단위 운영·품질 관리" },
];

const skillLogos = ["Excel", "PowerPoint", "Illustrator", "Figma", "Canva", "Google Ads", "Google Analytics", "ChatGPT", "Claude"] as const;
const skillCategories = [
  { category: "OFFICE", tools: [
    { name: "PowerPoint", src: "/skills/powerpoint.svg" },
    { name: "Excel", src: "/skills/excel.svg" },
    { name: "Word", src: "/skills/word.svg" },
    { name: "Google Drive", src: "/skills/google-drive.svg" },
  ] },
  { category: "DESIGN & CONTENTS", tools: [
    { name: "Figma", src: "/skills/figma.svg" },
    { name: "Canva", src: "/skills/canva.png" },
    { name: "미리캔버스", src: "/skills/miricanvas.png" },
  ] },
  { category: "AI", tools: [
    { name: "ChatGPT", src: "/skills/chatgpt.svg" },
    { name: "Claude", src: "/skills/claude.svg" },
    { name: "Gemini", src: "/skills/gemini.svg" },
  ] },
];

const works = [
  { no: "01", type: "GROWTH · DATA · CX", title: "의료 고객 여정 전체를\n하나의 퍼널로 보다", text: "퍼포먼스 마케터와 협업하며 광고 유입 이후 상담, 예약, 내원까지 흩어진 고객 접점을 연결해 개선 지점을 찾았습니다.", metric: "12→18%", label: "DB 예약 전환율", color: "blue" },
  { no: "02", type: "UX · DATA · MARKETING", title: "홈페이지를 소개서에서\n전환 도구로 바꾸다", text: "고객 행동을 바탕으로 정보의 순서와 예약 동선을 재구성해 더 쉽게 이해하고 행동할 수 있도록 개선했습니다.", metric: "+200%", label: "홈페이지 예약 전환", color: "cyan" },
  { no: "03", type: "CX · OPERATIONS · DATA", title: "VOC에서 취소의 이유를\n찾아 개선하다", text: "설치 서비스 과정의 VOC와 운영 데이터를 바탕으로 고객이 놓치기 쉬운 정보를 보완하고 이용 경험을 개선했습니다.", metric: "27→4%", label: "설치 취소율", color: "violet" },
  { no: "04", type: "AI · AUTOMATION · CONTENT", title: "반복 업무를 줄이고\n콘텐츠 시스템을 만들다", text: "병원 블로그의 기획과 제작 흐름을 AI 기반으로 재설계했습니다. 사람은 판단에 집중하고 반복은 시스템이 맡게 했습니다.", metric: "AI SYSTEM", label: "콘텐츠 자동화 구축", color: "navy" },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

function SkillLogo({ name }: { name: (typeof skillLogos)[number] }) {
  if (name === "Excel") return <svg viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="15" fill="#107c41"/><path d="M16 15h22v34H16z" fill="#0b5f31"/><path d="m21 23 5 9-5 9h6l3-6 3 6h6l-6-9 6-9h-6l-3 6-3-6z" fill="#fff"/><path d="M41 19h8v8h-8zm0 10h8v8h-8zm0 10h8v8h-8z" fill="#d8f3e5"/></svg>;
  if (name === "PowerPoint") return <svg viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="15" fill="#d24726"/><circle cx="40" cy="32" r="16" fill="#ed6c47"/><path d="M40 16v16h16A16 16 0 0 0 40 16" fill="#ffb89f"/><rect x="10" y="16" width="28" height="32" rx="4" fill="#b5361a"/><path d="M18 23h9c7 0 9 11 0 11h-4v7h-5zm5 5v4h4c3 0 3-4 0-4z" fill="#fff"/></svg>;
  if (name === "Illustrator") return <svg viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="15" fill="#330000"/><rect x="7" y="7" width="50" height="50" rx="11" fill="none" stroke="#ff9a00" strokeWidth="3"/><path d="m18 43 8-25h7l8 25h-6l-2-6h-8l-2 6zm9-11h5l-2-8h-1z" fill="#ff9a00"/><path d="M43 24h5v19h-5zm0-7h5v5h-5z" fill="#ff9a00"/></svg>;
  if (name === "Figma") return <svg viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="15" fill="#fff"/><path d="M22 10h10v15H22a7.5 7.5 0 0 1 0-15" fill="#f24e1e"/><path d="M32 10h10a7.5 7.5 0 0 1 0 15H32z" fill="#ff7262"/><path d="M22 25h10v15H22a7.5 7.5 0 0 1 0-15" fill="#a259ff"/><circle cx="39.5" cy="32.5" r="7.5" fill="#1abcfe"/><path d="M22 40h10v7.5a7.5 7.5 0 1 1-10-7.1z" fill="#0acf83"/></svg>;
  if (name === "Canva") return <svg viewBox="0 0 64 64" aria-hidden="true"><defs><linearGradient id="canva-g" x1="8" y1="8" x2="56" y2="56"><stop stopColor="#00c4cc"/><stop offset="1" stopColor="#7d2ae8"/></linearGradient></defs><rect width="64" height="64" rx="15" fill="url(#canva-g)"/><path d="M43 23c-3-6-15-4-20 4-5 9 2 17 10 14 4-1 7-4 9-8-4 3-7 5-10 5-5 0-7-5-4-9 3-5 9-6 15-6z" fill="#fff"/></svg>;
  if (name === "Google Ads") return <svg viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="15" fill="#fff"/><path d="m27 13 9 5 18 31-9 5z" fill="#4285f4"/><path d="M27 13 9 45a9 9 0 0 0 4 12l9-5 18-31z" fill="#34a853"/><circle cx="17" cy="49" r="8" fill="#fbbc04"/></svg>;
  if (name === "Google Analytics") return <svg viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="15" fill="#fff4e7"/><rect x="14" y="35" width="9" height="17" rx="4" fill="#f9ab00"/><rect x="27" y="24" width="9" height="28" rx="4" fill="#e37400"/><rect x="40" y="12" width="10" height="40" rx="5" fill="#e37400"/></svg>;
  if (name === "ChatGPT") return <svg viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="15" fill="#10a37f"/><g fill="none" stroke="#fff" strokeWidth="3.4"><path d="M32 13a11 11 0 0 1 10 6 11 11 0 0 1 8 14 11 11 0 0 1-10 12 11 11 0 0 1-16 3 11 11 0 0 1-9-14 11 11 0 0 1 8-15 11 11 0 0 1 9-6z"/><path d="m23 19 18 10v20M15 34l17-10 18 10M24 48V28l17-9"/></g></svg>;
  return <svg viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="15" fill="#d97757"/><g stroke="#fff" strokeWidth="4" strokeLinecap="round"><path d="M32 13v38M13 32h38M19 19l26 26M45 19 19 45"/><path d="m24 14 16 36M14 24l36 16M40 14 24 50M14 40l36-16" strokeWidth="2.5"/></g></svg>;
}

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
        <div className="hero-copy">
          <p className="eyebrow reveal">MARKETING × DATA × AI</p>
          <h1 className="reveal delay-1"><span className="hero-accent">데이터</span>로 길을 찾고,<br /><span className="hero-secondary-line">경험과 성과를 만듭니다.</span></h1>
          <p className="hero-description reveal delay-2">정보가 넘칠수록, 사람을 움직이는 건 마음에 남는 경험입니다.<br className="desktop-break" /> 마케팅·데이터·AI를 연결해 그 경험을 <strong>더 나은 성과</strong>로 바꿉니다.</p>
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

      <section className="work section-pad" id="work">
        <div className="section-intro split-title work-title"><div><p className="section-kicker">WORK</p><h2>문제를 발견하고<br />바꿔낸 것들</h2></div><p>고객 여정과 운영 데이터에서 문제를 찾고,<br />직접 바꾼 과정을 보여드립니다.</p></div>
        <div className="work-list">
          {works.map((work) => <article className={`work-card ${work.color}`} key={work.no}>
            <div className="work-number">CASE {work.no}</div>
            <div className="work-copy"><span>{work.type}</span><h3>{work.title.split("\n").map(line => <span key={line}>{line}<br /></span>)}</h3><p>{work.text}</p><a className="private-case-link" href="/work">PRIVATE CASE <Arrow /></a></div>
            <div className="work-metric"><span>KEY RESULT</span><strong>{work.metric}</strong><p>{work.label}</p></div>
          </article>)}
        </div>
      </section>

      <section className="impact section-pad" id="capabilities">
        <div className="section-intro light-intro">
          <p className="section-kicker">CAPABILITIES</p>
          <h2>문제를 나누어 보고,<br />연결해서 해결합니다.</h2>
          <p>고객 여정과 데이터, 화면과 운영을 하나의 흐름으로 봅니다. 문제를 구조화하고 실행 가능한 개선으로 연결합니다.</p>
        </div>
        <div className="impact-grid">
          {impacts.map((item, index) => <article className={index === 0 ? "impact-card featured" : "impact-card"} key={item.label}><span>0{index + 1}</span><strong>{item.value}</strong><p>{item.label}</p></article>)}
        </div>
        <div className="impact-about" id="about">
          <div className="section-intro split-title">
            <div><h2>산업은 달라도,<br />문제를 푸는 방식은 같았습니다.</h2></div>
            <div className="about-copy"><p>군에서는 조직과 운영을, 이커머스에서는 고객 경험을, 의료에서는 그로스 마케팅과 전환을 다뤘습니다.</p><p>현장을 관찰하고 데이터를 분석한 뒤, 직접 실행해 더 나은 결과로 연결해 왔습니다.</p></div>
          </div>
        </div>
        <div className="signal-marquee" aria-hidden="true"><div>MARKETING · DATA ANALYTICS · CUSTOMER EXPERIENCE · SYSTEM · OPERATIONS · MARKETING · DATA ANALYTICS · CUSTOMER EXPERIENCE · SYSTEM · OPERATIONS ·</div></div>
      </section>

      <section className="skills section-pad" id="skills">
        <div className="section-intro split-title skills-title">
          <div><p className="section-kicker">SKILLS</p><h2>성과를 만드는<br />실행 도구</h2></div>
        </div>
        <div className="skill-category-grid">
          {skillCategories.map((group, index) => <article className="skill-category-box" key={group.category}>
            <span>0{index + 1}</span>
            <h3>{group.category}</h3>
            <div className="skill-category-tools">{group.tools.map((tool) => <div className="skill-tool-icon" title={tool.name} key={tool.name}><img src={tool.src} alt={`${tool.name} 로고`} /></div>)}</div>
          </article>)}
        </div>
      </section>

      <section className="thinking section-pad" id="thinking">
        <div className="section-intro split-title"><div><p className="section-kicker">THINKING / THREADS</p><h2>NEWS</h2></div><p>마케팅과 데이터, AI를 실제 일에 적용하며<br />얻은 생각과 배움을 기록합니다.</p></div>
        <div className="thinking-track"><article className="thread-feature"><span>LATEST THINKING</span><h3>좋은 마케팅은 광고를 잘 만드는 일이 아니라, 고객을 멈추게 하는 지점을 찾아 없애는 일에 더 가깝습니다.</h3><div><span>@XBASE · THREADS</span><Arrow /></div></article><article><span>BUILD IN PUBLIC</span><h3>완성된 뒤 공개하는 대신, 만들어가는 과정부터 기록합니다.</h3><div><span>BUILD LOG</span><Arrow /></div></article><article><span>FIELD NOTE</span><h3>데이터는 답을 말하지 않습니다. 더 좋은 질문을 시작하게 합니다.</h3><div><span>XBASE NOTE</span><Arrow /></div></article></div>
      </section>

      <section className="beyond section-pad">
        <div className="beyond-visual" aria-hidden="true"><div className="rings"><span>MARKETING</span><span>FINANCE</span><span>MANAGEMENT</span><span>OPERATIONS</span><i><Image src="/xbase-logo.svg" alt="" width={118} height={118} /></i></div></div>
        <div className="beyond-copy"><p className="section-kicker">BEYOND MARKETING</p><h2>마케팅을 넘어,<br /><span>비즈니스 전체를<br />운영하는 사람으로.</span></h2><div className="beyond-actions"><a href="/work">WORK 보기 <Arrow /></a><a href="/about">ABOUT 더 보기 <Arrow /></a></div></div>
      </section>

      <footer><a className="wordmark inverse" href="#top"><Image src="/xbase-logo.svg" alt="" width={30} height={30} /><b>XBASE<span>.</span></b></a><p>개인 포트폴리오 · 프로젝트 내용은 공개 가능한 범위에서 재구성했습니다.</p><p>© 2026 XBASE. Built by Park Young Jun.</p></footer>
    </main>
  );
}
