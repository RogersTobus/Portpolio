import Image from "next/image";
import { detailPages, type DetailSlug } from "./detail-data";
import { JsonLd, seoPages } from "./seo";
import SocialDock from "./social-dock";

const menu = [["About","/about"],["Impact","/impact"],["Work","/work"],["Creative","/creative"],["Build","/build"],["Thinking","/thinking"]];

const experiences = [
  ["2026 — NOW", "명동 치과의원", "Marketing · Growth", "퍼포먼스 마케터와 협업하며 콘텐츠와 고객 퍼널 분석을 연결해 성장 과제를 수행하고 있습니다."],
  ["2025", "강남 안과의원", "Marketing · Partnership", "마케팅과 제휴, 대외협력을 맡아 새로운 고객 접점과 프로젝트를 기획했습니다."],
  ["2024", "국내 이커머스 물류기업", "Installation Service · CX", "운영 데이터와 VOC를 바탕으로 고객 경험과 설치 프로세스의 문제를 개선했습니다."],
  ["2015 — 2024", "대한민국 육군", "Leadership · Operations", "조직과 자원을 운영하며 책임, 판단, 실행의 기본기를 익혔습니다."],
];

export default function DetailPage({ slug }: { slug: DetailSlug }) {
  const page = detailPages[slug];
  return <main className={`detail-page detail-${slug}`}>
    <JsonLd slug={slug} />
    <SocialDock />
    <header className="site-header detail-header">
      <a className="wordmark" href="/"><Image src="/xbase-header-logo.svg" alt="" width={99} height={26} priority /></a>
      <nav aria-label="주요 메뉴">{menu.map(([label,href])=><a className={href===`/${slug}`?"active":""} href={href} key={href}>{label}</a>)}</nav>
      <a className="header-cta" href="/#contact">Let&apos;s talk ↗</a>
      <details className="mobile-menu"><summary aria-label="메뉴 열기"><span/><span/></summary><div>{menu.map(([label,href])=><a href={href} key={href}>{label}</a>)}<a href="/#contact">Contact</a></div></details>
    </header>
    <section className="detail-hero">
      <div className="detail-orb" aria-hidden="true"><i/><i/><span>{page.kicker}</span></div>
      <p className="section-kicker">{page.kicker}</p>
      <nav className="breadcrumbs" aria-label="탐색경로"><a href="/">홈</a><span>›</span><span aria-current="page">{seoPages[slug].title}</span></nav>
      <h1>{page.title.split("\n").map(line=><span key={line}>{line}<br/></span>)}</h1>
      <p>{page.intro}</p>
      <a href="#overview">EXPLORE <span>↓</span></a>
    </section>
    <section className="detail-stats" id="overview">{page.stats.map(([value,label])=><article key={value}><strong>{value}</strong><span>{label}</span></article>)}</section>
    <section className="detail-overview section-pad">
      <div className="detail-overview-title"><p className="section-kicker">OVERVIEW</p><h2>{slug === "creative" ? "이미지로 보여줄 공간" : slug === "build" ? "시스템으로 해결한 일" : "XBASE의 관점과 기록"}</h2></div>
      <div className="detail-card-grid">{page.sections.map(([no,title,text],i)=><article className={`detail-card detail-card-${i+1}`} key={no}><span>{no}</span><div className="detail-card-art" aria-hidden="true"><i/><i/></div><h3>{title}</h3><p>{text}</p><a href="#detail">DETAIL VIEW ↗</a></article>)}</div>
    </section>
    {slug === "about" && <section className="experience section-pad" id="experience">
      <div className="section-intro split-title"><div><p className="section-kicker">EXPERIENCE</p><h2>경험은 달라도,<br />방향은 같았습니다.</h2></div><p>조직 운영에서 고객 경험으로,<br />그리고 비즈니스 성장으로.</p></div>
      <div className="timeline">{experiences.map(([year,company,role,description]) => <article key={year}><span className="year">{year}</span><div><h3>{company}</h3><span>{role}</span></div><p>{description}</p><i /></article>)}</div>
    </section>}
    <section className="detail-coming" id="detail"><p className="section-kicker">NEXT UPDATE</p><h2>세부 콘텐츠가<br/>이곳에 이어집니다.</h2><p>현재는 전체 구조와 화면 흐름을 확인할 수 있는 1차 페이지입니다.<br/>기획과 자료가 정리되면 실제 사례와 이미지로 채웁니다.</p><a href="/">BACK TO HOME ↗</a></section>
    <footer><a className="wordmark inverse" href="/"><Image src="/xbase-logo.svg" alt="" width={30} height={30}/><b>XBASE<span>.</span></b></a><p>개인 포트폴리오 · 프로젝트 내용은 공개 가능한 범위에서 재구성했습니다.</p><p>© 2026 XBASE.</p></footer>
  </main>
}
