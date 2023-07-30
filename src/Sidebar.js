import React, { useState } from "react";
import './App.css';

function Sidebar() {
  const [isLeftOpen, setLeftOpen] = useState(false);
  const [isRightOpen, setRightOpen] = useState(false);

  const leftItems = ["Rectangle", "Circle", "Triangle"];
  const rightItems = ["Red", "Green", "Blue"];

  const onDragStart = (event, item) => {
    console.log(item); // Placeholder function. You'll need to replace this with your actual function.
  }

  return (
    <>
      <div className={`sidebar leftSidebar ${isLeftOpen ? "open" : ""}`}>
        {leftItems.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
        <button onClick={() => setLeftOpen(!isLeftOpen)}>
          {isLeftOpen ? "Close" : "Open"}
        </button>
      </div>
      <div className={`sidebar rightSidebar ${isRightOpen ? "open" : ""}`}>
        {rightItems.map((item, index) => (
          <p key={index} draggable onDragStart={(event) => onDragStart(event, item)}>
            {item}
          </p>
        ))}
        <button onClick={() => setRightOpen(!isRightOpen)}>
          {isRightOpen ? "Close" : "Open"}
        </button>
      </div>
    </>
  );
}

export default Sidebar;
