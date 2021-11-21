import React from "react";
import { useSetRecoilState } from "recoil";
import ALL from "../Const/All";
import CHARACTER from "../Const/Character";
import characterFilterState from "../Recoil/State/CharacterFilterState";

const CharacterSelector = () => {
  const setCharacterFilter = useSetRecoilState(characterFilterState);
  return (
    <div className="buttons">
      <button onClick={() => setCharacterFilter(ALL)}>All</button>
      <button onClick={() => setCharacterFilter(CHARACTER.KAKAO)}>
        KAKAO FRIENDS
      </button>
      <button onClick={() => setCharacterFilter(CHARACTER.LINE)}>
        LINE FRIENDS
      </button>
    </div>
  );
};

export default CharacterSelector;
