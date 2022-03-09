# 맛집 사이트 - 퍼플아이오

[Next.js, React, Bootstrap]로 구현한 맛집 사이트입니다.


## 📌 데모 영상

### 웹

<img src="https://user-images.githubusercontent.com/78027252/157437104-592a0852-77df-494a-8218-6002dcf4c02e.gif" width="70%" height="70%">

### 모바일/탭
<img src="https://user-images.githubusercontent.com/78027252/157437910-138c1696-7ce2-49f9-bfa9-6de1293ecfc2.gif" width="40%" height="40%">


## 📌 기능 구현

### json-server 사용 및 api 연동

- [[feat] json-server 사용 및 api 연동](https://github.com/tae100k/Purpleio-SSR/pull/5)
- 개발 pc에서 json-server사용
- db.json파일 사용 (9000 port)
- axios로 데이터 가져오는 것 확인


### 헤더, 그리드, about 페이지 구현
 - [[feat] 맛집 리스트 전체 UI 구현](https://github.com/tae100k/Purpleio-SSR/pull/6)
 - [[refactor] footer, about, modal 리팩토링](https://github.com/tae100k/Purpleio-SSR/pull/10)
 - (공통) 미디어쿼리 사용하여 반응형으로 구현
 - (about 페이지) 과제 지시에 정적데이터로 데이터 가져와서 바인딩

### 모달 구현
 - [[feat] 팝업 구현](https://github.com/tae100k/Purpleio-SSR/pull/7)
 - [[refactor] footer, about, modal 리팩토링](https://github.com/tae100k/Purpleio-SSR/pull/10)
 - 클릭되면 모달창을 표시, X를 클릭할 시 모달창을 숨김
 - 자세히 보기 버튼을 클릭하면 해당 맛집으로 이동 **(url 있을 시에만 버튼 표시)**
 - 현재 `lebreadlab.net` 와 `장화 신은 젖소`의 url은 존재하지 않는 페이지(db상의 오류)라서 나타나지 않음

### 404 페이지
 - [[feat] 404 페이지](https://github.com/tae100k/Purpleio-SSR/pull/8)
- _erro.jsx를 사용하여 500 에러 페이지 생성
- 404.jsx를 사용하여 400에러 페이지 생성
- 5초 후 메인페이지로 이동

## 📌 로컬 환경 구동


```bash
  yarn install &&  yarn dev
```

## 📌 자료 구조
```
Purpleio-SSR
├── components
│   ├── 404 error
│   ├── about
│   ├── card
│   ├── footer
│   ├── grid
│   ├── header
│   └── modal
├── pages
│   ├── 404.jsx
│   ├── _app.jsx
│   ├── _document.js
│   ├── _error.jsx
│   ├── about.jsx
│   └── index.jsx
├── public
│   └── site.webmanifest
├── styles
│   ├── Home.module.css
│   └── global.css
├── .babelrc
├── .eslintrc.json
├── .gitignore
├── README.md
├── db.json
├── next.config.js
├── package.json
├── package-lock.json
└── yarn.lock

```

## 📌 프로젝트 하면서 작성한 

- [[Next.js, React]로 구현한 맛집 사이트](https://fallacious-smash-138.notion.site/Next-js-React-7fbb273f5c8345809bf55d3dbb386d1b)
