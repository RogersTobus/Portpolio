# XBASE 로컬 실행과 Cafe24 배포

## 준비물

- Windows 10/11
- Git
- Node.js 22.13 이상
- pnpm
- Windows OpenSSH Client
- Cafe24 SFTP 비밀번호

## 새 컴퓨터 최초 설정

```powershell
git clone https://github.com/RogersTobus/Portpolio.git
cd Portpolio
pnpm install
powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\work\setup-cafe24-credential.ps1
```

자격증명은 `work/.secrets/cafe24-sftp.credential.xml`에 현재 Windows 사용자만 복호화할 수 있는 형태로 저장된다. 다른 컴퓨터로 복사하지 않고 새 컴퓨터에서 다시 등록한다.

## 개발과 검증

```powershell
pnpm run dev
```

브라우저에서 `http://localhost:3000/`을 확인한다. 완료 전:

```powershell
pnpm run build
```

오류가 발생하면 배포하지 않는다.

## 배포

로컬 개발 서버가 3000번 포트에서 실행 중이어야 한다.

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\work\deploy-xbase-wordpress.ps1
```

배포 과정:

1. 홈과 여섯 개 세부 페이지의 렌더링 결과를 읽음
2. WordPress용 PHP 템플릿과 CSS 생성
3. 임시 압축파일 생성
4. Cafe24 서버에 전송
5. 기존 `xbase` 테마를 시간표시 백업으로 저장
6. 새 파일을 활성 테마에 적용
7. `https://xbase.co.kr/`의 HTTP 200 및 XBASE 문자열 확인

## 서버 정보

- 서버: `183.111.183.64`
- 사용자: `yjpak0229`
- WordPress: `/home/hosting_users/yjpak0229/www`
- 테마: `/home/hosting_users/yjpak0229/www/wp-content/themes/xbase`

## 롤백

배포 출력에 표시된 백업 파일은 다음 형태다.

`/home/hosting_users/yjpak0229/.xbase-backup-YYYYMMDDHHMMSS.tar.gz`

정확한 백업 경로를 확인한 뒤 복구한다. 광범위한 삭제 명령은 사용하지 않는다. 가능하면 정상 Git 커밋으로 되돌린 뒤 배포 스크립트를 다시 실행한다.

## 비밀정보 규칙

- `work/.secrets/`를 Git에 올리지 않는다.
- 비밀번호를 문서, 스크립트, 이슈, 커밋 메시지에 넣지 않는다.
- `work/wordpress-theme/`와 압축파일은 생성물이며 올리지 않는다.

## 일반적인 문제

### localhost:3000 연결 실패

`pnpm run dev`가 실행 중인지 확인한다.

### 자격증명 없음

`work/setup-cafe24-credential.ps1`을 다시 실행한다.

### SSH 연결이 일시적으로 종료됨

소스와 빌드가 정상인지 확인하고 잠시 후 같은 배포를 한 번 다시 시도한다. 반복 실패하면 Cafe24 SSH 허용 상태를 확인한다.

### WordPress와 로컬 화면 차이

서버에서 직접 테마를 수정하지 않는다. 로컬 원본을 수정하고 다시 배포한다.
