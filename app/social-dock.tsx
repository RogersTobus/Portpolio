export default function SocialDock() {
  return <aside className="social-dock" aria-label="XBASE 소셜 채널">
    <button className="social-kakao" type="button" aria-label="카카오톡 상담 링크 연결 예정" title="카카오톡 · 연결 예정">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.6c-5.1 0-9.2 3.2-9.2 7.1 0 2.5 1.7 4.7 4.2 6l-.9 3.5 4-2.4c.6.1 1.2.1 1.9.1 5.1 0 9.2-3.2 9.2-7.2S17.1 3.6 12 3.6Z"/><text x="12" y="13.2">TALK</text></svg>
      <span>카카오톡</span>
    </button>
    <button className="social-threads" type="button" aria-label="Threads 링크 연결 예정" title="Threads · 연결 예정">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.7 11.1c-.2-3-1.8-4.6-4.8-4.6-2.5 0-4.2 1.1-4.8 3.2l2.4.6c.3-1.1 1.1-1.7 2.4-1.7 1.5 0 2.3.7 2.4 2.1-.6-.2-1.2-.3-1.9-.3-3.3 0-5.3 1.5-5.3 3.9 0 2.2 1.8 3.7 4.3 3.7 2.7 0 4.5-1.5 5.1-4 .8.5 1.3 1.3 1.3 2.4 0 3-2.4 4.9-5.9 4.9-5.2 0-8.4-3.5-8.4-9.3S6.8 2.7 12 2.7c4.7 0 7.7 2.6 8.3 7.1l2.3-.3C21.9 3.8 18 0 12 0 5 0 .9 4.6.9 12S5 24 11.9 24c4.9 0 8.4-3 8.4-7.3 0-2.6-1.4-4.6-3.6-5.6Zm-5.2 4.8c-1.2 0-2-.6-2-1.6 0-1.1 1-1.8 2.9-1.8.7 0 1.3.1 1.9.3-.2 2-1.2 3.1-2.8 3.1Z"/></svg>
      <span>Threads</span>
    </button>
    <button className="social-naver" type="button" aria-label="네이버 블로그 링크 연결 예정" title="네이버 블로그 · 연결 예정">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 3h6.1l4 6.1V3H20v18h-6.1l-4-6.1V21H4V3Z"/></svg>
      <span>블로그</span>
    </button>
  </aside>;
}
