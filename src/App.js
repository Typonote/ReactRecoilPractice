import "./App.css";
import CharacterSelector from "./Components/CharacterSelector";
import Character from "./Components/Character";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <CharacterSelector />
        <Character />
      </div>
    </RecoilRoot>
  );
}

export default App;
