# XBASE Portfolio

XBASE 공개용 개인 포트폴리오의 공식 원본 저장소입니다.

- Production: https://xbase.co.kr/
- Brand: XBASE
- Identity: Marketing × Data Analytics × Vibe Coding × System
- Hosting: Cafe24 WordPress custom theme

## 작업 전 필수 문서

1. `AGENTS.md`
2. `HANDOFF.md`
3. `docs/PUBLIC_CONTENT_POLICY.md`
4. `docs/DEPLOYMENT.md`
5. `docs/WORKLOG.md`

특히 광고 매체를 직접 세팅·운영한 경력으로 표현하면 안 됩니다. 실제 역할은 퍼포먼스 마케터와 협업하여 광고 유입 이후 상담·예약·내원 퍼널과 성장 과제를 개선한 그로스 마케팅입니다.

## 로컬 실행

필요 환경:

- Node.js 22.13 이상
- pnpm

```powershell
pnpm install
pnpm run dev
```

검증:

```powershell
pnpm run build
```

## Cafe24 배포

자세한 절차는 `docs/DEPLOYMENT.md`를 따르세요. 카페24 비밀번호와 로컬 자격증명은 저장소에 포함되지 않습니다.

## 주요 경로

- `app/page.tsx`: 홈 콘텐츠와 구조
- `app/globals.css`: 전체 디자인
- `app/detail-data.ts`: 세부 페이지 데이터
- `app/seo.tsx`: SEO 및 구조화 데이터
- `public/`: 로고와 공유 이미지
- `work/`: 비밀정보를 제외한 Cafe24 배포 도구
