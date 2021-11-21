import { atom } from "recoil";
import ALL from "../../Const/All";

const characterFilterState = atom({
  key: "characterFilterState",
  default: ALL,
});

export default characterFilterState;
