import logo from "./logo.svg";
import "./App.css";
import FileExploreMain from "./FileExploreMain";
import explorer from "./ExploreJson";
import { useEffect, useState } from "react";
function App() {
  const [exploteData, setExploreData] = useState();

  //  console.log(exploteData);
  const addFolder = (e, id, items, folder) => {
    console.log("checkid", explorer?.id, id);
    console.log("items", items);
    if (e.keyCode === 13 && e.target.value) {
      const newItem = {
        id: new Date().getTime().toString(),
        name: e.target.value,
        isFolder: folder,
        items: []
      };
      const addNewFile = items?.items?.unshift(newItem);
    }
    // console.log(addFile);
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
       // explorer={exploteData}
        addFolder={addFolder}
        // addFile={addFile}
        setExploreData={setExploreData}
        exploteData={exploteData}
      />
    </div>
  );
}

export default App;
