# 주의사항

## 01. 의존성 설치

package.json에 있는 패키지 정의 부분(`dependencies`, `devDependencies`)을 복사해서 작업중인 프로젝트에 붙여넣으세요.

## 02. 차크라 설정

`_app.tsx`에 있는 `Chakra UI 테마 설정` 부분을 복사해주세요. (`ChakraProvider`, `theme`)

## 03. 파이어베이스 설정

- 에디터에 이미지를 첨부했을때 Firebase Storage에 업로드 되게 하려면 파이어베이스 설정값이 필요합니다.
- src/firebase/config.json에 각 프로젝트의 firebase 설정값을 넣어주세요.

### 예시)

```json
{
  "apiKey": "각 프로젝트에 맞는 설정값을 넣어주세요",
  "authDomain": "각 프로젝트에 맞는 설정값을 넣어주세요",
  "projectId": "각 프로젝트에 맞는 설정값을 넣어주세요",
  "storageBucket": "각 프로젝트에 맞는 설정값을 넣어주세요",
  "messagingSenderId": "각 프로젝트에 맞는 설정값을 넣어주세요",
  "appId": "각 프로젝트에 맞는 설정값을 넣어주세요",
  "measurementId": "각 프로젝트에 맞는 설정값을 넣어주세요"
}
```

# 컴포넌트 가이드

https://www.notion.so/simsimjae/a51dc942b05541eabfffe3c59e7929a6

# 프로젝트 실행

- 컴포넌트 동작 확인은 yarn start 입력 후 http://localhost:3000에 접속해서 확인하세요.
