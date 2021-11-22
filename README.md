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
- selector 는 atom 의 상태에 의존하는 동적인 데이터를 생성한다. 
```
selector 에서는 get 함수(필수항목)를 통해 atom 정보들을 1개이상 가져올 수 있다. 
atom 의 정보가 바뀌면 해당 atom 을 의존하는 selector 도 자동으로 리랜더링이 된다. 
또한, 한개 이상의 atom정보를 업데이트 하도록 set 함수(선택항목)를 받을 수 있다.
```
- React의 suspense를 지원하므로, 비동기 처리를 위해 별도의 작업이 필요 없다.

## 📄 예시

#### 1. 각기 다른 컴포넌트가 count라는 값을 구독하여 변경 + recoil 에서 제공되는 hook 함수 실행 <br/>
![Hnet-image](https://user-images.githubusercontent.com/81430564/142821776-0f3aeab1-d11d-428e-ba75-da206ddeb895.gif)

#### 2. Selector 적용하기 <br/>
![Hnet com-image (1)](https://user-images.githubusercontent.com/81430564/142821266-ce63b2c4-3291-45b3-a364-61dd08f68e07.gif)

#### 3. Selector 에서 set 을 통해 여러개의 atom 수정하기 <br/>
![Hnet-image](https://user-images.githubusercontent.com/81430564/142821933-00581b9b-4bae-4f87-9a9a-c4a06baba37c.gif)

#### 4. 비동기 처리를 위한 React.Suspense 적용하기 <br/>

![Hnet com-image (2)](https://user-images.githubusercontent.com/81430564/142822134-40836936-3ff6-46f2-97c3-bf94e34507dc.gif)



