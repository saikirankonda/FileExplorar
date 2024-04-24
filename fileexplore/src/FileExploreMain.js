import React, { useEffect, useState } from "react";

function FileExploreMain({ exploteData, addFolder, setExploreData }) {
  const [expand, setExpand] = useState(false);

  const expandFunc = () => {
    if (expand === true) {
      setExpand(false);
    } else {
      setExpand(true);
    }
  };
  const [showInput, setShowInput] = useState({
    visble: false,
    isFolder: null
  });

  const onCreateFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({ ...showInput, visble: true, isFolder: isFolder });
  };

  const handleCreateFolder = (e, id, items, folder) => {
    console.log("checkid", exploteData?.id, id);
    console.log("items", items);
    // addFolder(e, id, items, folder);
    if (e.keyCode === 13 && e.target.value) {
      const newItem = {
        id: new Date().getTime().toString(),
        name: e.target.value,
        isFolder: folder,
        items: []
      };
      const addNewFile = items?.items?.unshift(newItem);
      setShowInput({ ...showInput, visble: false });
    }
  };

  return (
    <div>
      <div onClick={expandFunc} className="folder">
        {" "}
        {exploteData?.isFolder ? "📁" : "📄"} {exploteData?.name}
        {exploteData?.isFolder && (
          <div>
            <button onClick={(e) => onCreateFolder(e, true)}>Folder +</button>
            <button onClick={(e) => onCreateFolder(e, false)}>File +</button>
          </div>
        )}
      </div>
      <div style={{ display: expand ? "block" : "none" }}>
        {showInput.visble && (
          <div>
            {showInput?.isFolder ? "📁" : "📄"}{" "}
            <input
              type="text"
              onKeyDown={(e) => {
                handleCreateFolder(
                  e,
                  exploteData?.id,
                  exploteData,
                  showInput?.isFolder
                );
              }}
            />
          </div>
        )}
        {exploteData?.items?.map((each, i) => (
          <div className="file" style={{ marginLeft: "20px" }}>
            <FileExploreMain exploteData={each} key={i} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FileExploreMain;
