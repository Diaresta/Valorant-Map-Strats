import { useEffect, useState, useRef } from 'react';

const Canvas = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('white');
  const [thickness, setThickness] = useState('3');

  useEffect(() => {
    const canvas = canvasRef.current;

    // below for higher density screens?
    canvas.width = canvas.offsetWidth * 2;
    canvas.height = canvas.offsetHeight * 2;

    const context = canvas.getContext('2d');
    context.scale(2, 2);
    context.lineCap = 'round';
    // context.strokeStyle = 'white';
    // context.lineWidth = 5;

    contextRef.current = context;
  }, []);

  const startDraw = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);

    // Change Color
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.strokeStyle = color;
    context.lineWidth = thickness;
    //

    setIsDrawing(true);
  };

  const endDraw = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    // can always change clause without negate
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  // ---------- New Functions. Move/Refactor ---------- //
  // New clear draw function
  const clearDraw = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    context.clearRect(0, 0, 10000, 10000);
  };

  // New change color draw function
  const colorChange = () => {
    setColor('red');
  };

  // New change line thickness function
  const drawThickness = () => {
    setThickness('7');
  };
  // -------------------------------------------------- //

  return (
    <div>
      <canvas
        // {...props}
        onMouseDown={startDraw}
        onMouseUp={endDraw}
        onMouseMove={draw}
        ref={canvasRef}
      />
      <button onClick={clearDraw}>Clear</button>
      <button onClick={colorChange}>Color</button>
      <button onClick={drawThickness}>Thick</button>
    </div>
  );
};

export default Canvas;
