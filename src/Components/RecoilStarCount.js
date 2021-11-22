import React from "react";
import { useRecoilValueLoadable } from "recoil";
import { recoilStarCountState } from "../Recoil/recoilStar";
import "./scss/RecoilStarCount.scss";

const RecoilStarCount = () => {
  const recoilStarCount = useRecoilValueLoadable(recoilStarCountState);

  // 로딩 상태 처리
  if (recoilStarCount.state === "loading") {
    return <div className="RecoilStarCount__Container">loading</div>;
  }

  return (
    <div className="RecoilStarCount__Container">
      <p>recoil gitbub star 갯수 </p>
      <p>{recoilStarCount.contents}개</p>
    </div>
  );
};

export default RecoilStarCount;
