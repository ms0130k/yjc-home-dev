# Vue.js + TypeScript 프로젝트 구조

```
yjc-home-dev/
├── .git/                    # Git 폴더
├── .vscode/                 # VSCode 설정
├── node_modules/            # npm 패키지들 (git에서 무시됨)
├── public/                  # 정적 파일들
│   ├── favicon.ico
│   └── index.html           # HTML 템플릿
├── src/                     # 소스 코드
│   ├── assets/              # 이미지, 폰트 등 자산 파일들
│   ├── components/          # 재사용 가능한 Vue 컴포넌트들
│   │   ├── common/          # 공통 컴포넌트
│   │   ├── layout/          # 레이아웃 관련 컴포넌트
│   │   └── ui/              # UI 컴포넌트
│   ├── composables/         # 재사용 가능한 Vue 컴포지션 API 기능
│   ├── views/               # 페이지 컴포넌트들
│   ├── router/              # Vue Router 설정
│   │   └── index.ts
│   ├── store/               # Pinia 또는 Vuex 상태 관리
│   │   └── index.ts
│   ├── services/            # API 요청 등 백엔드 통신 관련 코드
│   │   └── api.ts
│   ├── types/               # TypeScript 타입 정의
│   │   └── index.ts
│   ├── utils/               # 유틸리티 함수들
│   ├── App.vue              # 루트 컴포넌트
│   ├── main.ts              # 앱 진입점
│   ├── shims-vue.d.ts       # Vue 파일 타입 선언
│   └── vite-env.d.ts        # Vite 환경 변수 타입
├── .env                     # 환경 변수 (git에서 무시됨)
├── .env.development         # 개발 환경 변수
├── .env.production          # 배포 환경 변수
├── .eslintrc.js             # ESLint 설정
├── .gitignore               # Git 무시 파일 목록
├── .prettierrc              # Prettier 설정
├── index.html               # 진입점 HTML 파일
├── package.json             # 프로젝트 설정 및 의존성
├── README.md                # 프로젝트 설명
├── tsconfig.json            # TypeScript 설정
├── vite.config.ts           # Vite 설정
└── yarn.lock                # 의존성 잠금 파일 (또는 package-lock.json)
```

## 주요 파일 구성 설명

1. **package.json**: 프로젝트 메타데이터와 의존성을 정의
2. **tsconfig.json**: TypeScript 컴파일러 설정
3. **vite.config.ts**: Vite 빌드 도구 설정
4. **index.html**: 앱의 HTML 템플릿
5. **src/main.ts**: 앱 진입점
6. **src/App.vue**: 루트 Vue 컴포넌트
7. **src/components/**: 재사용 가능한 UI 컴포넌트들
8. **src/views/**: 라우터에 의해 렌더링되는 페이지 컴포넌트들
9. **src/router/**: 라우팅 설정
10. **src/store/**: 상태 관리 설정 (Pinia 추천)
11. **src/services/**: API 통신 관련 로직
12. **src/types/**: TypeScript 타입 정의
13. **src/composables/**: Vue 컴포지션 API를 이용한 재사용 가능한 로직

## 핵심 라이브러리 및 도구

- **Vue 3**: 프론트엔드 프레임워크
- **TypeScript**: 정적 타입 지원
- **Vite**: 빠른 개발 서버 및 빌드 도구
- **Vue Router**: 라우팅 관리
- **Pinia**: 상태 관리 (Vuex의 대안)
- **Axios**: HTTP 요청 클라이언트
- **ESLint & Prettier**: 코드 스타일 및 품질 관리
- **Vitest**: 단위 테스트
