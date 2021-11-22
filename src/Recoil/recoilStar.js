import { selector } from "recoil";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// 비동기 처리 셀렉터
export const recoilStarCountState = selector({
  key: "recoilStarCountState",
  get: async () => {
    const response = await fetch(
      "https://api.github.com/repos/facebookexperimental/Recoil"
    );
    const recoilProjectInfo = await response.json();
    await delay(1000); // 강제로 1초 지연
    return recoilProjectInfo["stargazers_count"];
  },
});
