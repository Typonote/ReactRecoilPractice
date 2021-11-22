import React from "react";
import "./scss/SelectorCount.scss";
import { useRecoilState, useRecoilValue } from "recoil";
import { countInputState, countState, inputState } from "../Recoil/Atom/count";

const SelectorCount = () => {
  const [count, setCount] = useRecoilState(countState); // useRecoilState 을 통한 value, setter 반환
  const [input, setInput] = useRecoilState(inputState); // useRecoilState 을 통한 value, setter 반환
  const [countInput, setCountInput] = useRecoilState(countInputState); // useRecoilState 을 통한 value, setter 반환

  return (
    <div className="SelectorCount__Container">
      <h2>읽기 쓰기 카운트 컴포넌트(Selector)</h2>
      <p>카운트 {count}</p>
      <p>selector {countInput}</p>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button className="Button__One" onClick={() => setCount(count + 1)}>
        숫자 증가
      </button>
      <button className="Button__Five" onClick={() => setCount(count - 1)}>
        숫자 감소
      </button>
      <button className="Button__Three" onClick={() => setCountInput("1234")}>
        selector 값 1234로 변경
      </button>
    </div>
  );
};

export default SelectorCount;
