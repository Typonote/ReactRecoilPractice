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

// selector 에서는 set 이라는 함수를 통해 여러개의 atom 정보를 동시에 수정할 수 있다. 필요한 경우에만 사용하면 된다.

export const countInputState = selector({
  key: "countTitleState",
  get: ({ get }) => {
    return `현재 카운트는 ${get(countState)} 이고 input 입력값은 ${get(
      inputState
    )} 입니다.`;
  },
  set: ({ set }, newValue) => {
    // 2번째 파라미터에는 추가로 받을 인자를 나타냅니다.
    set(countState, Number(newValue)); // count atom 수정
    set(inputState, newValue + ""); // input atom 수정
  },
});
