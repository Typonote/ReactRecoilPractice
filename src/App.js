import "./App.css";
import { RecoilRoot } from "recoil";
import ReadOnlyCount from "./Components/ReadOnlyCount";
import ReadWriteCount from "./Components/ReadWriteCount";
import SelectorCount from "./Components/SelectorCount";
import React from "react";
import RecoilStarCount from "./Components/RecoilStarCount";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        {/* <ReadOnlyCount />
        <ReadWriteCount /> 
        <SelectorCount /> */}
        <React.Suspense>
          <RecoilStarCount />
        </React.Suspense>
      </div>
    </RecoilRoot>
  );
}

export default App;
