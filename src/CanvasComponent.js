import React, { useEffect, useRef, useState, useCallback } from 'react';
import './App.css';

const CanvasComponent = () => {
  let canvasRef = useRef(null);
  // const [ctx, setCtx] = useState(); // Commented out to avoid 'no-unused-vars' warning

  const onDrop = useCallback((event) => {
    event.preventDefault();
    console.log("onDrop");
  }, []);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    console.log("onDragOver");
  }, []);

  useEffect(() => {
    let canvasObj = canvasRef.current;
    canvasObj.width = window.innerWidth;
    canvasObj.height = window.innerHeight;
    // let ctxObject = canvasObj.getContext('2d');
    // setCtx(ctxObject); // Commented out to avoid 'no-unused-vars' warning
  }, []);

  return <canvas ref={canvasRef} onDrop={onDrop} onDragOver={onDragOver} className="canvas" />;
}

export default CanvasComponent;
