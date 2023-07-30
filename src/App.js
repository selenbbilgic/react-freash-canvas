import React, { Suspense } from "react";
import Sidebar from "./Sidebar";
import CanvasComponent from "./CanvasComponent";
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Suspense fallback={<div>Loading...</div>}>
        <CanvasComponent />
      </Suspense>
    </div>
  );
}

export default App;
