import Image from "next/image";
import { detailPages, type DetailSlug } from "./detail-data";
import { JsonLd, seoPages } from "./seo";
import SocialDock from "./social-dock";

const menu = [["About","/about"],["Impact","/impact"],["Work","/work"],["Creative","/creative"],["Build","/build"],["Thinking","/thinking"]];

export default function DetailPage({ slug }: { slug: DetailSlug }) {
  const page = detailPages[slug];
  return <main className={`detail-page detail-${slug}`}>
    <JsonLd slug={slug} />
    <SocialDock />
    <header className="site-header detail-header">
      <a className="wordmark" href="/"><Image src="/xbase-header-logo.svg" alt="" width={110} height={29} priority /></a>
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
    <section className="detail-coming" id="detail"><p className="section-kicker">NEXT UPDATE</p><h2>세부 콘텐츠가<br/>이곳에 이어집니다.</h2><p>현재는 전체 구조와 화면 흐름을 확인할 수 있는 1차 페이지입니다.<br/>기획과 자료가 정리되면 실제 사례와 이미지로 채웁니다.</p><a href="/">BACK TO HOME ↗</a></section>
    <footer><a className="wordmark inverse" href="/"><Image src="/xbase-logo.svg" alt="" width={30} height={30}/><b>XBASE<span>.</span></b></a><p>개인 포트폴리오 · 프로젝트 내용은 공개 가능한 범위에서 재구성했습니다.</p><p>© 2026 XBASE.</p></footer>
  </main>
}
