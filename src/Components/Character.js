import React from "react";
import { selector, useRecoilValue } from "recoil";
import ALL from "../Const/All";
import CHARACTER from "../Const/Character";
import characterFilterState from "../Recoil/State/CharacterFilterState";
import characterState from "../Recoil/State/CharacterState";

const filteredCharacterState = selector({
  key: "characterListState",
  get: ({ get }) => {
    const filter = get(characterFilterState);
    const character = get(characterState);
    if (filter === ALL) return character;
    return character.filter((character) => character.type === filter);
  },
});

const icon = (type) => {
  if (type === CHARACTER.KAKAO) return "🟡";
  if (type === CHARACTER.LINE) return "🟢";
};

const Character = () => {
  const character = useRecoilValue(filteredCharacterState);

  return (
    <div>
      <h1>캐릭터</h1>
      {character.map((character) => (
        <div key={character.id}>
          {icon(character.type)} {character.name} - {character.type}
        </div>
      ))}
    </div>
  );
};

export default Character;
