import Image from "next/image";

const impacts = [
  { value: "₩100M+", label: "월간 광고 운영 규모" },
  { value: "12 → 18%", label: "DB 예약 전환율" },
  { value: "+200%", label: "홈페이지 예약 전환" },
  { value: "78 → 82%", label: "상담 동의율" },
  { value: "27 → 4%", label: "로켓설치 취소율" },
];

const capabilities = [
  {
    number: "01",
    title: "Marketing",
    text: "매체 운영에서 끝나지 않고, 유입부터 상담·예약·전환까지 전체 퍼널을 봅니다.",
    tags: ["Performance", "Full Funnel", "CX"],
  },
  {
    number: "02",
    title: "Data",
    text: "숫자와 고객의 목소리를 함께 읽어, 움직여야 할 지점을 구체적으로 찾습니다.",
    tags: ["Analysis", "GA", "Insight"],
  },
  {
    number: "03",
    title: "Build",
    text: "아이디어를 문서에 두지 않습니다. 웹과 자동화로 직접 작동하는 결과물을 만듭니다.",
    tags: ["Vibe Coding", "WordPress", "Automation"],
  },
  {
    number: "04",
    title: "Creative",
    text: "메시지와 화면, 콘텐츠를 하나의 경험으로 연결해 이해하기 쉽게 전달합니다.",
    tags: ["AI Creative", "UX", "Content"],
  },
];

const works = [
  {
    caseNo: "CASE 01",
    type: "MARKETING · DATA · CX",
    title: "치과 고객 여정 전체를\n하나의 퍼널로 보다",
    text: "월 1억 원 규모 광고 운영부터 상담, 예약, 내원, 치료 동의까지. 흩어진 지표를 연결해 병목을 찾고 전환 구조를 개선했습니다.",
    metrics: [
      ["12% → 18%", "DB 예약 전환"],
      ["78% → 82%", "치료 동의"],
    ],
    tone: "blue",
  },
  {
    caseNo: "CASE 02",
    type: "UX · DATA · MARKETING",
    title: "홈페이지를 소개서에서\n전환 도구로 바꾸다",
    text: "고객 행동과 예약 구조를 분석해 정보의 순서와 동선을 다시 설계했습니다. 더 쉽게 이해하고, 더 자연스럽게 행동하도록 만들었습니다.",
    metrics: [["+200%", "홈페이지 예약 전환"]],
    tone: "mint",
  },
  {
    caseNo: "CASE 03",
    type: "CX · OPERATIONS · DATA",
    title: "VOC를 읽고\n취소의 이유를 없애다",
    text: "로켓설치 운영 과정의 VOC와 취소 데이터를 분석했습니다. 고객이 놓치는 정보를 앞단에서 보완해 설치 경험을 개선했습니다.",
    metrics: [["27% → 4%", "설치 취소율"]],
    tone: "navy",
  },
  {
    caseNo: "CASE 04",
    type: "AI · AUTOMATION · CONTENT",
    title: "반복 업무를 줄이고\n콘텐츠 시스템을 만들다",
    text: "병원 블로그의 기획과 제작 흐름을 AI 기반으로 재설계했습니다. 사람은 판단에 집중하고, 반복은 시스템이 맡게 했습니다.",
    metrics: [["AI SYSTEM", "콘텐츠 자동화 구축"]],
    tone: "violet",
  },
];

const experience = [
  {
    year: "2026 — NOW",
    company: "치과병원",
    role: "Marketing · Growth",
    description: "퍼포먼스 광고, 고객 퍼널, 홈페이지 전환, 상담 프로세스를 하나의 성장 구조로 관리합니다.",
  },
  {
    year: "2025",
    company: "밝은눈안과",
    role: "Marketing · Partnership",
    description: "마케팅과 제휴, 대외협력을 맡아 새로운 고객 접점과 프로젝트를 기획했습니다.",
  },
  {
    year: "2024",
    company: "쿠팡로지스틱스서비스",
    role: "Rocket Installation · CX",
    description: "운영 데이터와 VOC를 바탕으로 고객 경험과 설치 프로세스의 문제를 개선했습니다.",
  },
  {
    year: "2015 — 2024",
    company: "대한민국 육군",
    role: "Leadership · Operations",
    description: "조직과 자원을 운영하며 책임, 판단, 실행의 기본기를 쌓았습니다.",
  },
];

const steps = [
  ["01", "Find", "데이터와 현장의 목소리에서 진짜 문제를 찾습니다."],
  ["02", "Frame", "복잡한 문제를 모두가 이해할 수 있는 구조로 정리합니다."],
  ["03", "Build", "가설을 빠르게 실행 가능한 결과물로 만듭니다."],
  ["04", "Improve", "결과를 확인하고 더 나은 방식으로 계속 고칩니다."],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <div className="scroll-progress" aria-hidden="true" />
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="XBASE 홈">
          <Image src="/xbase-logo.png" alt="" width={30} height={30} priority />
          <b>XBASE<span>.</span></b>
        </a>
        <nav aria-label="주요 메뉴">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#thinking">Thinking</a>
        </nav>
        <a className="header-cta" href="#contact">Let&apos;s talk <Arrow /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow reveal">MARKETING × DATA × VIBE CODING × CREATIVE</p>
          <h1 className="reveal delay-1">
            문제를 발견하고,<br />
            <span>더 나은 방식을 만듭니다.</span>
          </h1>
          <p className="hero-description reveal delay-2">
            마케팅과 데이터, AI와 기술을 연결해<br className="desktop-break" />
            아이디어를 실제로 움직이는 결과로 만듭니다.
          </p>
          <div className="hero-actions reveal delay-3">
            <a className="button primary" href="#work">프로젝트 보기 <span>↓</span></a>
            <a className="text-link" href="#about">XBASE에 대해 <Arrow /></a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="aurora-field">
            <span className="aurora-ribbon aurora-one" />
            <span className="aurora-ribbon aurora-two" />
            <span className="aurora-ribbon aurora-three" />
          </div>
          <div className="orbit orbit-one"><span className="orbiter orbiter-large" /></div>
          <div className="orbit orbit-two"><span className="orbiter orbiter-small" /></div>
          <div className="orbit orbit-three"><span className="orbiter orbiter-medium" /></div>
          <div className="core"><Image src="/xbase-logo.png" alt="XBASE 심볼" width={130} height={130} priority /></div>
          <span className="visual-label label-a">THINK</span>
          <span className="visual-label label-b">BUILD</span>
          <span className="visual-label label-c">GROW</span>
        </div>
        <a className="scroll-hint" href="#impact"><span />SCROLL</a>
      </section>

      <section className="impact section-pad" id="impact">
        <div className="section-heading compact">
          <p className="section-kicker">IMPACT</p>
          <h2>숫자로 먼저<br />증명합니다.</h2>
        </div>
        <div className="impact-grid">
          {impacts.map((item, index) => (
            <div className={`impact-item impact-${index + 1}`} key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="about section-pad" id="about">
        <div className="about-intro">
          <p className="section-kicker">ABOUT XBASE</p>
          <h2>직함보다,<br />문제를 푸는 방식으로<br />저를 설명합니다.</h2>
        </div>
        <div className="about-body">
          <p className="lead">
            산업과 역할은 달랐지만,<br />제가 해온 일에는 한 가지<br />공통점이 있습니다.
          </p>
          <p>
            군에서는 조직과 운영을, 쿠팡에서는 고객 경험을, 의료 업계에서는 마케팅과 전환을 다뤘습니다. 늘 데이터와 고객의 목소리에서 문제를 발견하고, 직접 실행해 더 나은 결과를 만들었습니다.
          </p>
          <p>
            <strong>XBASE</strong>는 그 과정과 생각을 기록하는 개인 브랜드입니다. X는 가능성과 교차점을, BASE는 모든 실행의 단단한 기반을 의미합니다.
          </p>
          <div className="signature">PARK YOUNG JUN <span>Founder of XBASE</span></div>
        </div>
      </section>

      <section className="capabilities section-pad">
        <div className="section-heading row-heading">
          <div>
            <p className="section-kicker">CAPABILITIES</p>
            <h2>생각을 결과로 바꾸는<br />네 가지 기반</h2>
          </div>
          <p>전략만 말하지 않고, 분석만 멈추지 않고,<br />직접 만들고 개선하는 데 필요한 역량입니다.</p>
        </div>
        <div className="capability-grid">
          {capabilities.map((item) => (
            <article className="capability-card" key={item.title}>
              <span className="card-number">{item.number}</span>
              <div className={`capability-icon icon-${item.number}`} aria-hidden="true"><span /></div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="tags">
                {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="work section-pad" id="work">
        <div className="section-heading row-heading work-heading">
          <div>
            <p className="section-kicker light">SELECTED WORK</p>
            <h2>문제를 발견하고<br />바꾼 것들</h2>
          </div>
          <p>성과만 나열하기보다 문제를 어떻게 보고,<br />무엇을 바꿨는지 보여드립니다.</p>
        </div>
        <div className="work-list">
          {works.map((project) => (
            <article className={`work-card ${project.tone}`} key={project.caseNo}>
              <div className="work-meta">
                <span>{project.caseNo}</span>
                <span>{project.type}</span>
              </div>
              <div className="work-content">
                <div>
                  <h3>{project.title.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</h3>
                  <p>{project.text}</p>
                </div>
                <div className="work-metrics">
                  {project.metrics.map(([value, label]) => (
                    <div key={label}><strong>{value}</strong><span>{label}</span></div>
                  ))}
                </div>
              </div>
              <div className="work-footer">
                <span>상세 케이스 스터디 준비 중</span>
                <span className="circle-arrow"><Arrow /></span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="process section-pad">
        <div className="section-heading centered">
          <p className="section-kicker">HOW I WORK</p>
          <h2>복잡한 문제를<br />움직이는 결과로</h2>
        </div>
        <div className="process-grid">
          {steps.map(([number, title, text]) => (
            <div className="process-step" key={number}>
              <div className="step-top"><span>{number}</span><i /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <p className="process-note">FIND THE SIGNAL · FRAME THE PROBLEM · BUILD THE ANSWER · IMPROVE THE SYSTEM</p>
      </section>

      <section className="experience section-pad" id="experience">
        <div className="section-heading row-heading">
          <div>
            <p className="section-kicker">EXPERIENCE</p>
            <h2>경험은 달라도,<br />방향은 같았습니다.</h2>
          </div>
          <p>조직 운영에서 고객 경험으로,<br />그리고 비즈니스 성장으로.</p>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={item.year}>
              <span className="timeline-year">{item.year}</span>
              <div><h3>{item.company}</h3><span className="timeline-role">{item.role}</span></div>
              <p>{item.description}</p>
              <span className="timeline-dot" />
            </article>
          ))}
        </div>
      </section>

      <section className="beyond section-pad">
        <div className="beyond-orbit" aria-hidden="true"><span>OPERATIONS</span><span>MARKETING</span><span>FINANCE</span><span>MANAGEMENT</span><i><Image src="/xbase-logo.png" alt="" width={118} height={118} /></i></div>
        <div className="beyond-copy">
          <p className="section-kicker light">BEYOND MARKETING</p>
          <h2>마케팅을 넘어,<br />비즈니스 전체를<br /><span>운영하는 사람으로.</span></h2>
          <p>
            고객을 이해하는 마케팅에서 시작해 숫자를 이해하는 회계와 재무, 조직과 시스템을 다루는 경영관리로 확장하고 있습니다.
          </p>
          <p>
            장기적으로는 전략과 실행을 연결하고 비즈니스 전체가 더 잘 움직이게 만드는 운영 책임자를 지향합니다.
          </p>
          <div className="growth-path"><span>Marketing</span><i>→</i><span>Finance</span><i>→</i><span>Management</span><i>→</i><strong>COO</strong></div>
        </div>
      </section>

      <section className="thinking section-pad" id="thinking">
        <div className="section-heading row-heading">
          <div>
            <p className="section-kicker">THINKING / THREADS</p>
            <h2>배운 것과<br />생각한 것을 기록합니다.</h2>
          </div>
          <p>마케팅, 일하는 방식, AI와 기술,<br />그리고 성장 과정의 생각을 나눕니다.</p>
        </div>
        <div className="thread-grid">
          <article className="thread-card feature">
            <span className="thread-type">LATEST THINKING</span>
            <p>좋은 마케팅은 광고를 잘 만드는 일이 아니라, 고객이 멈추는 지점을 찾아 없애는 일에 더 가깝다.</p>
            <div><span>@XBASE · THREADS</span><span className="circle-arrow"><Arrow /></span></div>
          </article>
          <article className="thread-card">
            <span className="thread-type">BUILD IN PUBLIC</span>
            <p>완벽해진 뒤 공개하는 대신, 만드는 과정부터 기록하려고 합니다. XBASE도 그렇게 시작했습니다.</p>
            <div><span>THREADS 채널 링크 연결 예정</span><span className="circle-arrow"><Arrow /></span></div>
          </article>
        </div>
      </section>

      <section className="contact section-pad" id="contact">
        <p className="section-kicker light">LET&apos;S CONNECT</p>
        <h2>더 나은 방식을<br />함께 만들어요.</h2>
        <p>프로젝트, 협업, 커리어에 관한 대화를 환영합니다.<br />좋은 질문에서 좋은 일이 시작된다고 믿습니다.</p>
        <div className="contact-actions">
          <a className="button white" href="https://xbase.co.kr">xbase.co.kr <Arrow /></a>
          <span>이메일 · Threads 링크 연결 예정</span>
        </div>
        <div className="contact-marquee" aria-hidden="true">THINK BETTER · BUILD BETTER · GROW BETTER ·</div>
      </section>

      <footer>
        <a className="wordmark inverse" href="#top"><Image src="/xbase-logo.png" alt="" width={30} height={30} /><b>XBASE<span>.</span></b></a>
        <p>Marketing × Data × Vibe Coding × Creative</p>
        <p>© 2026 XBASE. Built by Park Young Jun.</p>
      </footer>
    </main>
  );
}
