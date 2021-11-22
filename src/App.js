import "./App.css";
import { RecoilRoot } from "recoil";
import ReadOnlyCount from "./Components/ReadOnlyCount";
import ReadWriteCount from "./Components/ReadWriteCount";
import SelectorCount from "./Components/SelectorCount";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        {/* <ReadOnlyCount />
        <ReadWriteCount /> */}
        <SelectorCount />
      </div>
    </RecoilRoot>
  );
}

export default App;
