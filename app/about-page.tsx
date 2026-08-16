import Image from "next/image";
import { JsonLd } from "./seo";
import SocialDock from "./social-dock";

const menu = [["About", "/about"], ["Work", "/work"], ["Thinking", "/thinking"]];

const career = [
  { period: "2026.06 — NOW", company: "식품 이커머스 기업", role: "상품 운영 · 판매 데이터 · 매출 관리", description: "상품과 채널의 운영 흐름을 살피고 판매 데이터를 기반으로 성과를 관리합니다. 고객이 상품을 발견하고 구매하는 과정뿐 아니라, 재고와 운영이 매출로 연결되는 비즈니스의 전체 구조를 배우고 있습니다.", tags: ["E-COMMERCE", "MD", "OPERATIONS"] },
  { period: "2026.02 — 2026.06", company: "명동 치과의원", role: "그로스 마케팅 · 고객 퍼널 · 전환 개선", description: "광고 유입 이후 상담, 예약, 내원까지 흩어진 접점을 하나의 고객 여정으로 분석했습니다. 퍼포먼스 마케터와 협업하며 매체 성과와 현장 데이터를 연결하고, 예약 전환을 개선할 수 있는 실행 과제를 만들었습니다.", tags: ["GROWTH", "FUNNEL", "DATA"] },
  { period: "2025.02 — 2025.12", company: "강남 안과의원", role: "마케팅 · 제휴 · 신규 고객 접점 기획", description: "마케팅과 대외 협력을 담당하며 병원을 처음 만나는 고객의 접점을 넓혔습니다. 제휴처와 내부 이해관계자를 조율하고, 아이디어가 실제 프로젝트와 고객 경험으로 이어지도록 기획하고 실행했습니다.", tags: ["MARKETING", "PARTNERSHIP", "CX"] },
  { period: "2024.08 — 2025.01", company: "국내 이커머스 물류기업", role: "설치 서비스 운영 · VOC · 고객 경험 개선", description: "전국 단위 현장 운영과 품질을 관리하고 반복되는 고객 불편을 데이터와 VOC로 분석했습니다. 안내 구조와 운영 프로세스를 보완해 설치 서비스 취소율을 낮추고 고객 경험을 개선했습니다.", tags: ["VOC", "SERVICE CX", "PROCESS"] },
  { period: "2015.07 — 2024.04", company: "대한민국 육군", role: "조직 운영 · 교육 · 리더십", description: "사람과 자원이 제한된 환경에서 조직을 운영하고 교육·평가 체계를 관리했습니다. 현장을 관찰해 문제를 정의하고, 기준을 만들고, 끝까지 실행하는 업무의 기본기를 쌓았습니다.", tags: ["LEADERSHIP", "EDUCATION", "OPERATIONS"] },
];

const learning = [
  { year: "2025", title: "Google Analytics Certification", label: "GAC", description: "고객 행동 데이터와 디지털 성과를 측정하고 분석하는 기반을 갖췄습니다.", use: "고객 행동 측정 · 퍼널 분석 · 전환 개선" },
  { year: "2024", title: "데이터분석 준전문가", label: "ADsP", description: "데이터 이해부터 분석 기획과 통계적 사고까지 실무 분석의 기본 체계를 학습했습니다.", use: "분석 기획 · 통계적 사고 · 데이터 해석" },
  { year: "2024", title: "이어드림스쿨 4기", label: "DATA SCIENCE", description: "데이터 분석과 문제 해결 프로젝트를 통해 숫자를 실행 가능한 인사이트로 바꾸는 과정을 익혔습니다.", use: "프로젝트 · 분석 실습 · 문제 해결" },
];

const foundations = [
  ["01", "고객과 현장을 봅니다", "숫자만 보지 않고 고객의 목소리와 실제 운영 현장을 함께 관찰해 문제의 시작점을 찾습니다."],
  ["02", "데이터로 원인을 좁힙니다", "감에 머무르지 않도록 퍼널, 운영 지표와 행동 데이터를 연결해 개선 우선순위를 정합니다."],
  ["03", "직접 실행하고 검증합니다", "기획에서 끝내지 않고 화면, 콘텐츠, 프로세스를 직접 바꾸며 결과가 달라지는지 확인합니다."],
];

const skillCategories = [
  { category: "OFFICE", description: "문서와 데이터를 정확하게 정리합니다.", tools: [
    { name: "PowerPoint", src: "/skills/powerpoint.svg" }, { name: "Excel", src: "/skills/excel.svg" }, { name: "Word", src: "/skills/word.svg" }, { name: "Google Drive", src: "/skills/google-drive.svg" },
  ] },
  { category: "DESIGN & CONTENTS", description: "생각을 화면과 콘텐츠로 구현합니다.", tools: [
    { name: "Figma", src: "/skills/figma.svg" }, { name: "Canva", src: "/skills/canva.png" }, { name: "미리캔버스", src: "/skills/miricanvas.png" }, { name: "WordPress", src: "/skills/wordpress.png" },
  ] },
  { category: "AI", description: "아이디어를 빠르게 실행 가능한 형태로 만듭니다.", tools: [
    { name: "ChatGPT", src: "/skills/chatgpt.svg" }, { name: "Claude", src: "/skills/claude.svg" }, { name: "Gemini", src: "/skills/gemini.svg" },
  ] },
];

export default function AboutPage() {
  return <main className="about-page">
    <JsonLd slug="about" />
    <SocialDock />
    <header className="site-header about-header">
      <a className="wordmark" href="/" aria-label="XBASE 홈"><Image src="/xbase-header-logo.svg" alt="" width={99} height={26} priority /></a>
      <nav aria-label="주요 메뉴">{menu.map(([label, href]) => <a className={href === "/about" ? "active" : ""} href={href} key={href}>{label}</a>)}</nav>
      <details className="mobile-menu"><summary aria-label="메뉴 열기"><span /><span /></summary><div>{menu.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</div></details>
    </header>

    <section className="about-hero">
      <div className="about-hero-copy">
        <p className="section-kicker">ABOUT ME</p>
        <h1>경험을 연결해,<br /><span>더 나은 결과를 만듭니다.</span></h1>
        <p>마케팅, 고객 경험, 데이터와 운영을 오가며<br className="desktop-break" /> 문제의 원인을 찾고 실행 가능한 변화로 연결해 왔습니다.</p>
      </div>
    </section>

    <section className="about-profile about-section" id="profile">
      <div className="about-portrait">
        <Image className="about-portrait-photo" src="/about/park-youngjun-portrait.jpg" alt="박영준 프로필 사진" fill priority sizes="(max-width: 680px) 100vw, 38vw" />
      </div>
      <div className="about-profile-copy">
        <p className="section-kicker">INTRODUCTION</p>
        <h2>데이터로 길을 찾고,<br />현장에서 답을 만듭니다.</h2>
        <div className="profile-lead">안녕하세요. 문제를 발견하고 직접 개선해 결과를 만드는 박영준입니다.</div>
        <p>군에서는 조직과 운영을, 이커머스 물류 현장에서는 고객 경험을, 의료 업계에서는 마케팅과 전환을 다뤘습니다. 산업과 역할은 달랐지만 제가 일하는 방식에는 한 가지 공통점이 있었습니다.</p>
        <p>현장을 관찰하고 데이터를 통해 원인을 좁힌 뒤, 실행 가능한 형태로 바꾸는 것입니다. 지금은 마케팅을 넘어 상품과 매출, 재무와 사업 운영까지 시야를 넓히며 비즈니스 전체를 이해하는 사람으로 성장하고 있습니다.</p>
      </div>
    </section>

    <section className="about-career about-section" id="experience">
      <div className="about-section-heading">
        <div><p className="section-kicker">EXPERIENCE</p><h2>경험은 달라도,<br />문제를 푸는 방향은 같았습니다.</h2></div>
        <p>조직 운영에서 고객 경험으로,<br />마케팅에서 비즈니스 성장으로.</p>
      </div>
      <div className="about-career-list">
        {career.map((item, index) => <article key={`${item.period}-${item.company}`}>
          <div className="career-number">{String(index + 1).padStart(2, "0")}</div>
          <time>{item.period}</time>
          <div className="career-title"><h3>{item.company}</h3><strong>{item.role}</strong></div>
          <div className="career-detail"><p>{item.description}</p><div>{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
        </article>)}
      </div>
    </section>

    <section className="about-foundation about-section">
      <div className="about-section-heading compact-heading">
        <div><p className="section-kicker">WORKING PRINCIPLES</p><h2>성과를 만드는 세 가지 기준</h2></div>
      </div>
      <div className="foundation-grid">{foundations.map(([no, title, text]) => <article key={no}><span>{no}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="about-learning about-section" id="learning">
      <div className="learning-editorial">
        <div className="learning-statement">
          <p className="section-kicker">CERTIFICATION & EDUCATION</p>
          <h2>배우는 데 그치지 않고,<br /><span>문제 해결에 활용합니다.</span></h2>
          <p>현장에서 얻은 질문을 체계적인 학습으로 확장하고, 다시 실행과 개선에 적용합니다.</p>
        </div>
        <div className="learning-ledger">{learning.map((item, index) => <article key={item.label}>
          <div className="learning-index"><span>{String(index + 1).padStart(2, "0")}</span><time>{item.year}</time></div>
          <div className="learning-entry"><div><b>{item.label}</b><span>↗</span></div><h3>{item.title}</h3><p>{item.description}</p><strong>{item.use}</strong></div>
        </article>)}</div>
      </div>
    </section>

    <section className="about-skills about-section" id="skills">
      <div className="about-skills-title"><p className="section-kicker">SKILLS</p><h2>성과를 만드는 실행 도구</h2></div>
      <div className="skill-category-grid">{skillCategories.map(group => <article className="skill-category-box" key={group.category}>
        <h3>{group.category}</h3>
        <div className="skill-category-tools">{group.tools.map(tool => <div className="skill-tool-icon" title={tool.name} key={tool.name}><img src={tool.src} alt={`${tool.name} 로고`} /></div>)}</div>
      </article>)}</div>
    </section>

    <section className="about-next">
      <p className="section-kicker">NEXT</p>
      <h2>소개보다 결과가 궁금하다면,<br /><span>직접 바꿔낸 일을 확인해 보세요.</span></h2>
      <div><a href="/work">WORK 보기 <span>↗</span></a><a href="/">HOME으로 <span>↗</span></a></div>
    </section>

    <footer><a className="wordmark inverse" href="/"><Image src="/xbase-logo.svg" alt="" width={30} height={30} /><b>XBASE<span>.</span></b></a><p>개인 포트폴리오 · 프로젝트 내용은 공개 가능한 범위에서 재구성했습니다.</p><p>© 2026 XBASE.</p></footer>
  </main>;
}
