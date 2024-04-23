import logo from "./logo.svg";
import "./App.css";
import FileExploreMain from "./FileExploreMain";
import explorer from "./ExploreJson";
import { useEffect, useState } from "react";
function App() {
  const [exploteData, setExploreData] = useState();

  console.log(exploteData);
  const addFolder = (fileName, isFolder, item) => {
    const newItem = {
      id: new Date().getTime().toString(),
      name: fileName,
      isFolder: isFolder,
      items: item
    };
    const data = explorer?.items?.unshift(newItem);
    setExploreData({ ...exploteData, data });
  };

  // const addFile = (id, fileName, isFolder, item) => {
  //   const newItem = {
  //     id: new Date().getTime().toString(),
  //     name: fileName,
  //     isFolder: isFolder,
  //     items: item
  //   };
  //   const data = explorer?.items?.id?.unshift(newItem);
  //   setExploreData({ ...exploteData, data });
  // };

  useEffect(() => {
    setExploreData(explorer);
  }, []);
  return (
    <div className="App">
      <FileExploreMain
        explorer={exploteData}
        addFolder={addFolder}
        // addFile={addFile}
      />
    </div>
  );
}

export default App;
