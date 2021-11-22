import "./App.css";
import { RecoilRoot } from "recoil";
import ReadOnlyCount from "./Components/ReadOnlyCount";
import ReadWriteCount from "./Components/ReadWriteCount";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <ReadOnlyCount />
        <ReadWriteCount />
      </div>
    </RecoilRoot>
  );
}

export default App;
