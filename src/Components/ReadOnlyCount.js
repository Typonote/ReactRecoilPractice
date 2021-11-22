import React from "react";
import "./scss/ReadOnlyCount.scss";
import { useRecoilValue } from "recoil";
import { countState } from "../Recoil/Atom/count";

const ReadOnlyCount = () => {
  const count = useRecoilValue(countState); // 구독하는 atom 의 값만 반환.

  return (
    <div className="ReadOnlyCount__Container">
      <h2>읽기 전용 컴포넌트</h2>
      <p>카운트: {count}</p>
    </div>
  );
};

export default ReadOnlyCount;
