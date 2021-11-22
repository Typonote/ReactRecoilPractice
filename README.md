# ReactRecoilPractice
상태관리 라이브러리인 Recoil을 학습하기 위한 코드

## 💻 기술 스택

- HTML5
- CSS3 & SCSS
- JavaScript
- React
- Git
- Recoil

## ✨ 공부 내용 메모

- 프로젝트 최상단 위치에 recoilRoot를 설정 해야한다. (마치 redux 에서 provider를 통해 store을 세팅하는 것처럼..)
- atom(recoil의 상태단위)을 생성하기 위해서는 2가지의 값을 필수로 설정 해주어야 한다.
```
1. key : 고유한 key 값 (보통 해당 atom을 생성하는 변수 명으로 지정.)
2. default : atom 의 초기값을 정의.

예시)

export const countState = atom({
  key: 'countState',
  default: 0
});

```
- component 에서 해당 atom 을 사용할 땐, Recoil 에서 제공하는 hook 함수를 통해 사용할 수 있다.
```
1. useRecoilState : 변경되는 값과 해당 값을 변경하는 함수를 반환,(useState 와 비숫) 
2. useRecoilValue : 구독하는 값만 반환하는 함수로, 값의 update 함수가 필요없을 경우 사용.
3. useSetRecoilState : 구독하는 값을 변경하는 함수만 반환.
4. useResetRecoilState: 값을 기본값으로 reset 시키는 함수를 반환.
```

## 📄 예시



