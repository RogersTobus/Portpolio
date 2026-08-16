import Image from "next/image";
import SocialDock from "./social-dock";

const menu = [["About","/about"],["Work","/work"],["Thinking","/thinking"]];
const Arrow = () => <span aria-hidden="true">↗</span>;

const workCases = [
  {no:"01",type:"CAMPAIGN · CX",title:"고객이 멈추는 지점을 찾아\n예약 전환을 높였습니다.",metric:"+200%",label:"예약 전환 향상",image:"/portfolio/thinking-editorial-anonymized.png",copy:"고객의 정보 탐색 과정과 상담 접점을 다시 살피고, 콘텐츠·현장 안내·상담 흐름을 하나의 여정으로 재설계했습니다."},
  {no:"02",type:"MEDIA · GROWTH",title:"새로운 채널을 실험해\n매출 접점을 확장했습니다.",metric:"+600%",label:"신규 채널 매출 성장",image:"/portfolio/work-funnel-anonymized.png",copy:"고객군에 맞는 제휴 채널과 광고 상품을 발굴하고, 온라인 노출부터 오프라인 접점까지 연결해 새로운 매출 흐름을 만들었습니다."},
  {no:"03",type:"OFFLINE · BRAND",title:"정보를 경험으로 바꿔\n현장의 반응을 만들었습니다.",metric:"3 FORMAT",label:"상담·세미나·행사",image:"/portfolio/work-events-anonymized.png",copy:"어려운 정보를 고객이 이해할 수 있는 콘텐츠와 현장 프로그램으로 바꾸고, 상담·강연·행사를 하나의 브랜드 경험으로 연결했습니다."},
  {no:"04",type:"DATA · OPERATIONS",title:"반복되는 VOC에서\n취소의 원인을 찾았습니다.",metric:"27→4%",label:"설치 취소율 감소",image:"/portfolio/work-funnel-anonymized.png",copy:"전국 운영 데이터와 고객의 목소리를 분석해 주문 단계의 정보 누락을 찾고, 상세페이지와 사전 안내 프로세스를 직접 개선했습니다."},
];

const thoughts = [
  ["01","CUSTOMER JOURNEY","광고보다 먼저 살펴봐야 할 고객 여정의 이탈 지점","좋은 마케팅은 더 크게 말하는 일이 아니라, 고객이 멈추는 순간을 찾아 없애는 일에 가깝습니다."],
  ["02","DATA","전환율 숫자 뒤에 숨어 있는 고객 행동을 읽는 방법","숫자는 결과를 보여주지만 원인을 말해주지는 않습니다. 현장과 VOC를 함께 봐야 다음 행동이 보입니다."],
  ["03","AI & WORK","반복 업무는 줄이고 판단에 집중하는 AI 활용 방식","AI는 생각을 대신하는 도구보다, 자료를 정리하고 가설을 빠르게 검증하는 실행 파트너로 활용합니다."],
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
  <section className="featured-thought"><div><p className="section-kicker">FEATURED NOTE</p><h2>데이터는 답을 말하지 않습니다.<br/>더 좋은 질문을 시작하게 합니다.</h2><p>전환율, 취소율, 상담량 같은 숫자를 고객의 실제 행동과 함께 읽을 때 비로소 개선해야 할 지점이 보입니다.</p><a href="https://www.threads.com/@xbase_lab?hl=ko" target="_blank" rel="noreferrer">THREADS에서 읽기 <Arrow/></a></div><div className="featured-number">01<i/></div></section>
  <section className="thought-archive"><div className="archive-heading"><p className="section-kicker">LATEST NOTES</p><h2>일하면서 발견한<br/>세 가지 관점</h2></div><div className="thought-list">{thoughts.map(([no,cat,title,copy])=><a href="https://www.threads.com/@xbase_lab?hl=ko" target="_blank" rel="noreferrer" key={no}><span>{no}</span><div><b>{cat}</b><h3>{title}</h3><p>{copy}</p></div><Arrow/></a>)}</div></section>
  <section className="thinking-manifesto"><div className="manifesto-media"><Image src="/portfolio/work-funnel-anonymized.png" alt="익명화된 고객 여정과 데이터 화면" fill sizes="50vw"/></div><div><p className="section-kicker">HOW I THINK</p><h2>현장을 보고,<br/>데이터로 확인하고,<br/><span>실행으로 검증합니다.</span></h2><p>정보를 모으는 데서 멈추지 않고, 실제 고객 경험과 운영 방식이 달라질 때까지 연결합니다.</p></div></section>
  <section className="editorial-next"><p className="section-kicker">SELECTED WORK</p><h2>생각이 실제 결과로<br/>이어진 과정을 확인하세요.</h2><a href="/work">WORK 보기 <Arrow/></a></section><Footer/></main>}
