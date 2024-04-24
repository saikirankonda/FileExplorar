import logo from "./logo.svg";
import "./App.css";
import FileExploreMain from "./FileExploreMain";
import explorer from "./ExploreJson";
import { useEffect, useState } from "react";
function App() {
  const [exploteData, setExploreData] = useState();

  useEffect(() => {
    setExploreData(explorer);
  }, []);
  return (
    <div className="App">
      <FileExploreMain
        setExploreData={setExploreData}
        exploteData={exploteData}
      />
    </div>
  );
}

export default App;
