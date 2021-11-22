import React from "react";
import "./scss/ReadWriteCount.scss";
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import { countState } from "../Recoil/Atom/count"; // Atom을 가져옴

const ReadWriteCount = () => {
  const [count, setCount] = useRecoilState(countState); // useRecoilState 을 통한 value, setter 반환(useState 와 같이 변경되는 값과 해당 값을 변경하는 함수를 반환)
  const setCountUseSetRecoilState = useSetRecoilState(countState); // 구독하는 값을 변경하는 함수릉 반환
  const resetCount = useResetRecoilState(countState); // 값을 기본값으로 reset 시키는 함수

  return (
    <div className="ReadWriteCount__Container">
      <h2>읽기 쓰기 카운트 컴포넌트</h2>
      <p>카운트: {count}</p>
      <button className="Button__One" onClick={() => setCount(count + 1)}>
        숫자 증가
      </button>
      <button className="Button__Two" onClick={() => setCount(count - 1)}>
        숫자 감소
      </button>
      <button
        className="Button__Three"
        onClick={() => setCountUseSetRecoilState(count + 1)}
      >
        숫자 증가 (useSetRecoilState 사용)
      </button>
      <button
        className="Button__Four"
        onClick={() => setCountUseSetRecoilState(count - 1)}
      >
        숫자 감소 (useSetRecoilState 사용)
      </button>
      <button className="Button__Five" onClick={resetCount}>
        카운트 리셋
      </button>
    </div>
  );
};

export default ReadWriteCount;
