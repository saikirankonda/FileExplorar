import React, { useState } from "react";

function FileExploreMain({ explorer, addFolder }) {
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

  const handleCreateFolder = (e, id, items) => {
    console.log("checkid", explorer?.id, id);
    if (e.keyCode === 13 && e.target.value) {
      if (explorer?.id === id && showInput?.isFolder) {
        addFolder(e.target.value, true, [], id);
        setShowInput({ ...showInput, visble: false });
      }
    }
  };

  return (
    <div>
      <div onClick={expandFunc} className="folder">
        {" "}
        {explorer?.isFolder ? "📁" : "📄"} {explorer?.name}
        {explorer?.isFolder && (
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
                handleCreateFolder(e, explorer?.id, explorer);
              }}
            />
          </div>
        )}
        {explorer?.items?.map((each, i) => (
          <div className="file" style={{ marginLeft: "20px" }}>
            <FileExploreMain explorer={each} key={i} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FileExploreMain;
