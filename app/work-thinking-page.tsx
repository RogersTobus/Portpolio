import Image from "next/image";
import SocialDock from "./social-dock";

const menu = [["About","/about"],["Work","/work"],["Thinking","/thinking"]];
const Arrow = () => <span aria-hidden="true">↗</span>;

const workCases = [
  {no:"01",type:"CAMPAIGN · CX",title:"고객의 갈증을 해소하고,\n예약 전환을 높였습니다.",metric:"+200%",label:"예약 전환 향상",image:"/portfolio/thinking-editorial-anonymized.png",copy:"고객의 정보 탐색 과정과 상담 접점을 다시 살피고, 콘텐츠·현장 안내·상담 흐름을 하나의 여정으로 재설계했습니다."},
  {no:"02",type:"MEDIA · GROWTH",title:"새로운 채널을 실험해\n매출 접점을 확장했습니다.",metric:"+600%",label:"신규 채널 매출 성장",image:"/portfolio/work-funnel-anonymized.png",copy:"고객군에 맞는 제휴 채널과 광고 상품을 발굴하고, 온라인 노출부터 오프라인 접점까지 연결해 새로운 매출 흐름을 만들었습니다."},
  {no:"03",type:"OFFLINE · BRAND",title:"정보를 경험으로 바꿔\n현장의 반응을 만들었습니다.",metric:"3 FORMAT",label:"상담·세미나·행사",image:"/portfolio/work-events-anonymized.png",copy:"어려운 정보를 고객이 이해할 수 있는 콘텐츠와 현장 프로그램으로 바꾸고, 상담·강연·행사를 하나의 브랜드 경험으로 연결했습니다."},
  {no:"04",type:"DATA · OPERATIONS",title:"반복되는 VOC에서\n취소의 원인을 찾았습니다.",metric:"27→4%",label:"설치 취소율 감소",image:"/portfolio/work-funnel-anonymized.png",copy:"전국 운영 데이터와 고객의 목소리를 분석해 주문 단계의 정보 누락을 찾고, 상세페이지와 사전 안내 프로세스를 직접 개선했습니다."},
];

function Header({active}:{active:"work"|"thinking"}){return <header className="site-header detail-header editorial-header"><a className="wordmark" href="/"><Image src="/xbase-header-logo.svg" alt="XBASE" width={99} height={26} priority /></a><nav aria-label="주요 메뉴">{menu.map(([label,href])=><a className={href===`/${active}`?"active":""} href={href} key={href}>{label}</a>)}</nav><details className="mobile-menu"><summary aria-label="메뉴 열기"><span/><span/></summary><div>{menu.map(([label,href])=><a href={href} key={href}>{label}</a>)}</div></details></header>}
function Footer(){return <footer><a className="wordmark inverse" href="/"><Image src="/xbase-logo.svg" alt="" width={30} height={30}/><b>XBASE<span>.</span></b></a><p>회사와 브랜드를 식별할 수 있는 정보는 비공개 처리했습니다.</p><p>© 2026 XBASE.</p></footer>}

export function WorkPage(){return <main className="editorial-page work-detail-page"><SocialDock/><Header active="work"/>
  <section className="sub-hero work-sub-hero"><div className="sub-hero-copy"><p className="section-kicker">SELECTED WORK</p><h1>문제를 발견하고,<br/><span>변화를 설계합니다.</span></h1><p>광고·콘텐츠·현장 운영·고객 경험을 따로 보지 않고,<br/>측정 가능한 결과로 연결한 프로젝트를 소개합니다.</p></div><div className="sub-hero-media"><Image src="/portfolio/work-events-anonymized.png" alt="익명화된 프로젝트 현장과 성과 데이터" fill priority sizes="(max-width: 680px) 100vw, 52vw"/><span>CONFIDENTIALITY APPLIED</span></div></section>
  <section className="work-index"><span>04 CASES</span><p>CAMPAIGN · MEDIA · OFFLINE · OPERATIONS</p><a href="#cases">VIEW CASES ↓</a></section>
  <section className="work-case-list" id="cases">{workCases.map((item,i)=><article className="work-case-detail" key={item.no}><div className="work-case-copy"><div className="case-meta"><span>CASE {item.no}</span><b>{item.type}</b></div><h2>{item.title.split("\n").map(x=><span key={x}>{x}</span>)}</h2><p>{item.copy}</p><div className="case-result"><strong>{item.metric}</strong><span>{item.label}</span></div></div><div className="work-case-image"><Image src={item.image} alt="회사 식별 정보를 제거한 프로젝트 비주얼" fill sizes="(max-width: 680px) 100vw, 52vw"/><i>{String(i+1).padStart(2,"0")}</i></div></article>)}</section>
  <section className="editorial-next"><p className="section-kicker">NEXT</p><h2>결과보다 먼저 있었던<br/>생각을 기록합니다.</h2><a href="/thinking">THINKING 보기 <Arrow/></a></section><Footer/></main>}

export function ThinkingPage(){return <main className="editorial-page thinking-detail-page"><SocialDock/><Header active="thinking"/>
  <section className="sub-hero thinking-sub-hero"><div className="sub-hero-copy"><p className="section-kicker">THINKING / NOTES</p><h1>관찰한 것을 기록하고,<br/><span>다음 질문으로 연결합니다.</span></h1><p>마케팅, 데이터, AI와 일하는 방식에 대해<br/>현장에서 배운 생각을 정리합니다.</p></div><div className="sub-hero-media"><Image src="/portfolio/thinking-editorial-anonymized.png" alt="익명화된 리서치와 콘텐츠 기획 자료" fill priority sizes="(max-width: 680px) 100vw, 52vw"/><span>FIELD NOTES · 2026</span></div></section>
  <section className="blog-staging"><div className="blog-staging-head"><div><p className="section-kicker">ARCHIVE</p><h2>생각과 기록이<br/>쌓일 공간입니다.</h2></div><p>게시글과 블로그 콘텐츠를 순차적으로 정리해 공개할 예정입니다.</p></div><div className="blog-categories" aria-label="예정 카테고리"><span>ALL</span><span>MARKETING</span><span>DATA</span><span>AI & WORK</span><span>FIELD NOTES</span></div><div className="blog-empty"><span>COMING SOON</span><h3>첫 번째 기록을<br/>준비하고 있습니다.</h3><p>현재는 아카이브 구조만 정리되어 있습니다.</p><a href="https://www.threads.com/@xbase_lab?hl=ko" target="_blank" rel="noreferrer">THREADS 바로가기 <Arrow/></a></div></section>
  <section className="editorial-next thinking-next"><p className="section-kicker">SELECTED WORK</p><h2>먼저, 실행으로 만든<br/>결과를 확인해 보세요.</h2><a href="/work">WORK 보기 <Arrow/></a></section><Footer/></main>}
