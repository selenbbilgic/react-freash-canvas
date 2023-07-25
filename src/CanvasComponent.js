import React, { useEffect, useRef, useState, useCallback } from 'react';
const CanvasComponent = () => {
    
    const canvasRef = useRef(null);

    // Variables for panning
    const [panX, setPanX] = useState(0);
    const [panY, setPanY] = useState(0);

    // Variables for zooming
    const [zoom, setZoom] = useState(1);
    const zoomFactor = 1.01;
    const minZoom = 0.6; // minimum zoom level
    const maxZoom = 3; // maximum zoom level

    // Variables for mouse panning
    const [isPanning, setIsPanning] = useState(false);
    const [startPanX, setStartPanX] = useState(0);
    const [startPanY, setStartPanY] = useState(0);

    const drawGrid = (ctx, canvas) => {
        ctx.beginPath();
        ctx.strokeStyle = "lightgray";
        ctx.lineWidth = 2;
      
        // calculate the number of lines to draw based on the zoom level
        const numLines = Math.ceil(Math.max(canvas.width, canvas.height) / (5 * zoom));
        
        // draw vertical lines
        for (let i = -numLines; i <= numLines; i++) {
          const x = (panX % (15 * zoom)) + i * 15 * zoom;
          ctx.moveTo(x, -canvas.height);
          ctx.lineTo(x, canvas.height);
        }
        
        // draw horizontal lines
        for (let i = -numLines; i <= numLines; i++) {
          const y = (panY % (20 * zoom)) + i * 15 * zoom;
          ctx.moveTo(-canvas.width, y);
          ctx.lineTo(canvas.width, y);
        }
      
        ctx.stroke();
      };
      

    // Draw function
    const draw = useCallback((ctx, canvas) => {
        // clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // save context state
        ctx.save();

        // translate and scale context
        ctx.translate(panX, panY);
        ctx.scale(zoom, zoom);

        // draw grid
        drawGrid(ctx, canvas);

        // restore context state
        ctx.restore();

        // request next animation frame
        requestAnimationFrame(() => draw(ctx, canvas));
    }, [panX, panY, zoom]);

    // useEffect to handle canvas drawing and events
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let animationFrameId;

        const render = () => {
            draw(ctx, canvas);
            animationFrameId = window.requestAnimationFrame(render);
        };
        render();

        // Add event listeners for panning and zooming
        const handleMouseDown = (event) => {
            setIsPanning(true);
            setStartPanX(event.clientX - panX);
            setStartPanY(event.clientY - panY);
        };
        const handleMouseMove = (event) => {
          if (isPanning) {
              // calculate new pan values
              let newPanX = event.clientX - startPanX;
              let newPanY = event.clientY - startPanY;
      
              // define maximum and minimum allowed pan values
              const maxPanX = 900;
              const maxPanY = 500;
              const minPanX = 800;
              const minPanY = 300;
      
              // check if new pan values exceed maximum or minimum allowed values
              if (newPanX > maxPanX) {
                  newPanX = maxPanX;
              } else if (newPanX < minPanX) {
                  newPanX = minPanX;
              }
              if (newPanY > maxPanY) {
                  newPanY = maxPanY;
              } else if (newPanY < minPanY) {
                  newPanY = minPanY;
              }
      
              // update pan values
              setPanX(newPanX);
              setPanY(newPanY);
          }
      };
      const handleWheel = (event) => {
        event.preventDefault();
    
        // update zoom based on scroll direction
        let newZoom;
        if (event.deltaY < 0) {
            newZoom = zoom * zoomFactor;
        } else {
            newZoom = zoom / zoomFactor;
        }
    
        // check if new zoom value is within allowed range
        if (newZoom < minZoom) {
            newZoom = minZoom;
        } else if (newZoom > maxZoom) {
            newZoom = maxZoom;
        }
    
        // update zoom value
        setZoom(newZoom);
    };
    
          
        const handleMouseUp = () => setIsPanning(false);


        canvas.addEventListener('mousedown', handleMouseDown);
        canvas.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        canvas.addEventListener('wheel', handleWheel);

        return () => {

            window.cancelAnimationFrame(animationFrameId);
            canvas.removeEventListener('mousedown', handleMouseDown);
            canvas.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            canvas.removeEventListener('wheel', handleWheel);
        };
    }, [draw, panX, panY, startPanX, startPanY, isPanning, zoom, zoomFactor, minZoom, maxZoom]);

    return <canvas ref={canvasRef} />;
};
export default CanvasComponent;