import { atom, selector } from "recoil";

// atom 의 값을 변경 시, 해당 atom 을 구독하고 있는 모든 컴포넌트들이 리렌더링 되며 해당 변경된 atom의 값을 사용할 수 있다.
// redux 에서는 reducer 단위로 state 를 구성하였으나 atom 은 더 잘게 쪼개진 state 단위로 상태로 관리.

export const countState = atom({
  key: "countState", // 해당 atom의 고유 key
  default: 0, // atom 의 초기값을 정의
});

// input에 관한 atom

export const inputState = atom({
  key: "inputState",
  default: "",
});

// selector 는 atom 의 상태에 의존하는 동적인 데이터를 생성할 수 있다. selector 에서는 get 함수(필수항목)를 통해 atom 정보들을 1개 이상 가져올 수 있다.
// atom 의 정보가 바뀌면 해당 atom 을 의존하는 selector도 자동으로 리랜더링이 된다.

export const countInputState = selector({
  key: "countTitleState",
  get: ({ get }) => {
    return `현재 카운트는 ${get(countState)} 이고 input 입력값은 ${get(
      inputState
    )} 입니다.`;
  },
});
