<div align="center">
<sub>

[English](../../README.md) • [Català](../../locales/ca/README.md) • [Deutsch](../../locales/de/README.md) • [Español](../../locales/es/README.md) • [Français](../../locales/fr/README.md) • [हिन्दी](../../locales/hi/README.md) • [Italiano](../../locales/it/README.md)

</sub>
<sub>

[日本語](../../locales/ja/README.md) • 한국어 • [Polski](../../locales/pl/README.md) • [Português (BR)](../../locales/pt-BR/README.md) • [Türkçe](../../locales/tr/README.md) • [Tiếng Việt](../../locales/vi/README.md) • [简体中文](../../locales/zh-CN/README.md) • [繁體中文](../../locales/zh-TW/README.md)

</sub>
</div>
<br>
<div align="center">
  <h1>Symbiote</h1>
  <p>코드베이스와 함께 작동하여 아키텍처 설계, 코딩, 디버깅을 돕고 생산성을 향상시키는 AI 코딩 어시스턴트입니다.</p>

</div>
<br>
<br>

<div align="center">

<a href="https://github.com/RepairYourTech/Symbiote/releases" target="_blank"><img src="https://img.shields.io/badge/최신%20릴리스%20다운로드-blue?style=for-the-badge&logo=github&logoColor=white" alt="최신 릴리스 다운로드"></a>
<a href="https://github.com/RepairYourTech/Symbiote/issues" target="_blank"><img src="https://img.shields.io/badge/문제%20보고-red?style=for-the-badge&logo=github&logoColor=white" alt="문제 보고"></a>

</div>

## Symbiote란 무엇인가요?

**Symbiote**는 에디터 내에서 작동하는 **자율 코딩 에이전트**입니다. 이것은 Roo Code의 완전한 포크로, 개인 정보 보호와 사용자 정의에 중점을 두고 모든 VS Code 사용자를 위해 설계되었습니다.

Symbiote가 할 수 있는 것:

- 자연어로 의사소통
- 작업 공간에서 직접 파일 읽기 및 쓰기
- 터미널 명령 실행
- 브라우저 작업 자동화
- OpenAI 호환 또는 사용자 정의 API/모델과 통합
- **사용자 정의 모드**를 통한 기능 적응

자세한 업데이트 및 수정 사항은 [CHANGELOG](../../CHANGELOG.md)를 확인하세요.

---

## 빠른 시작

1. **Symbiote 설치**

    - [릴리스 페이지](https://github.com/RepairYourTech/Symbiote/releases)에서 다운로드 및 설치
    - 또는 VS Code 마켓플레이스에서 직접 설치

2. **AI 제공업체 연결**

    - 선호하는 AI 제공업체(OpenAI, Anthropic 등) 구성
    - 메시지가 표시되면 API 키 입력

3. **Symbiote 사용 시작**
    - VS Code에서 Symbiote 패널 열기
    - 자연어로 작업이나 질문 입력
    - Symbiote가 더 효율적으로 코딩하도록 도와줍니다

---

## 주요 기능

### 다중 모드

Symbiote는 전문화된 모드로 사용자의 요구에 맞게 적응합니다:

- **코드 모드:** 일반적인 코딩 작업용
- **아키텍트 모드:** 계획 및 기술 리더십용
- **질문 모드:** 질문에 답변하고 정보 제공용
- **디버그 모드:** 체계적인 문제 진단용
- **사용자 정의 모드:** 보안 감사, 성능 최적화, 문서화 또는 기타 작업을 위한 무제한 전문 페르소나 생성

### 스마트 도구

Symbiote에는 다음과 같은 강력한 도구가 포함되어 있습니다:

- 프로젝트에서 파일 읽기 및 쓰기
- VS Code 터미널에서 명령 실행
- 웹 브라우저 제어
- MCP(Model Context Protocol)를 통한 외부 도구 사용

MCP는 무제한 사용자 정의 도구를 추가할 수 있게 함으로써 Symbiote의 기능을 확장합니다. 외부 API와 통합하고, 데이터베이스에 연결하거나, 특수 개발 도구를 만들 수 있습니다 - MCP는 Symbiote의 기능을 특정 요구 사항에 맞게 확장하기 위한 프레임워크를 제공합니다.

### 사용자 정의

Symbiote를 다음과 같이 사용자 방식으로 작동하게 하세요:

- 개인화된 동작을 위한 사용자 정의 지침
- 전문 작업을 위한 사용자 정의 모드
- 오프라인 사용을 위한 로컬 모델
- 더 빠른 워크플로우를 위한 자동 승인 설정

---

## 리소스

- **GitHub:** [문제](https://github.com/RepairYourTech/Symbiote/issues) 보고 또는 기능 요청
- **변경 로그:** [CHANGELOG](../../CHANGELOG.md)에서 최근 업데이트 확인

---

## 면책 조항

Symbiote는 [Roo Code](https://github.com/RooVetGit/Roo-Code)의 포크로, 독립적으로 개발되었습니다. 핵심 기능을 유지하면서도 원격 측정의 완전한 제거 및 리브랜딩을 포함한 중요한 변경을 수행했습니다.

**참고하세요** 당사는 Symbiote와 관련하여 제공되거나 사용 가능하게 된 코드, 모델 또는 기타 도구, 관련 제3자 도구 또는 결과 출력에 관해 **어떠한** 진술이나 보증도 하지 않습니다. 귀하는 그러한 도구나 출력 사용과 관련된 **모든 위험**을 감수합니다; 그러한 도구는 **"있는 그대로"** 및 **"사용 가능한 대로"** 제공됩니다. 그러한 위험에는 지적 재산권 침해, 사이버 취약성 또는 공격, 편향, 부정확성, 오류, 결함, 바이러스, 다운타임, 재산 손실 또는 손상 및/또는 개인 상해가 포함될 수 있지만 이에 국한되지 않습니다. 귀하는 그러한 도구나 출력 사용(합법성, 적절성 및 결과를 포함하되 이에 국한되지 않음)에 대해 전적으로 책임이 있습니다.

---

## 기여

기여는 환영합니다! 풀 리퀘스트를 제출해 주세요.

1. 저장소 포크
2. 기능 브랜치 생성 (`git checkout -b feature/amazing-feature`)
3. 변경 사항 커밋 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 푸시 (`git push origin feature/amazing-feature`)
5. 풀 리퀘스트 열기

---

## 라이선스

[Apache 라이선스 2.0](../../LICENSE)
