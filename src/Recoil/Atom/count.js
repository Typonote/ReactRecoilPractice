import { atom } from "recoil";

// atom 의 값을 변경 시, 해당 atom 을 구독하고 있는 모든 컴포넌트들이 리렌더링 되며 해당 변경된 atom의 값을 사용할 수 있다.
// redux 에서는 reducer 단위로 state 를 구성하였으나 atom 은 더 잘게 쪼개진 state 단위로 상태로 관리.

export const countState = atom({
  key: "countState", // 해당 atom의 고유 key
  default: 0, // atom 의 초기값을 정의
});
