import { atom } from "recoil";
import CHARACTER from "../../Const/Character";

const characterState = atom({
  key: "characterState",
  default: [
    {
      id: 1,
      name: "RYAN",
      type: CHARACTER.KAKAO,
    },
    {
      id: 2,
      name: "APEACH",
      type: CHARACTER.KAKAO,
    },
    {
      id: 3,
      name: "TUBE",
      type: CHARACTER.KAKAO,
    },
    {
      id: 4,
      name: "BROWN",
      type: CHARACTER.LINE,
    },
    {
      id: 5,
      name: "CONY",
      type: CHARACTER.LINE,
    },
    {
      id: 6,
      name: "SALLY",
      type: CHARACTER.LINE,
    },
    {
      id: 7,
      name: "CHOCO",
      type: CHARACTER.LINE,
    },
  ],
});

export default characterState;
