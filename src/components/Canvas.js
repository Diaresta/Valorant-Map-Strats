import { useEffect, useState, useRef } from 'react';

const Canvas = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('white');
  const [thickness, setThickness] = useState(2);

  // Add ::after styling for when i elements are clicked
  const [pencilStyle, setPencil] = useState('2px solid #ff4655');
  const [eraserStyle, setEraser] = useState('none');

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
    } else {
      const { offsetX, offsetY } = nativeEvent;
      contextRef.current.lineTo(offsetX, offsetY);
      contextRef.current.stroke();
    }
  };

  // Resets canvas to blank
  const clearDraw = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    context.clearRect(0, 0, 10000, 10000);
  };

  const colorChange = (e) => {
    setColor(e.target.value);
  };

  const drawThickness = () => {
    console.log({ thickness });
    if (thickness === 10) {
      setThickness(2);
    } else {
      setThickness(thickness + 2);
    }
  };

  // Enables eraser
  const eraserUse = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.globalCompositeOperation = 'destination-out';
    drawButtonStyle('none', '2px solid #ff4655');
  };

  // Enables drawing
  const drawUse = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.globalCompositeOperation = 'source-over';
    drawButtonStyle('2px solid #ff4655', 'none');
  };

  const drawButtonStyle = (pencil, eraser) => {
    setPencil(pencil);
    setEraser(eraser);
  };

  return (
    <div>
      <div id='drawing-tools'>
        {/* <i
          className='far fa-hand-pointer fa-3x dt-1'
          alt='Pointer'
          onClick={endDraw}
        /> */}
        <i
          className='fas fa-pencil-alt fa-3x dt-2'
          alt='Pencil'
          onClick={drawUse}
          style={{ borderBottom: pencilStyle }}
        />
        <i
          className='fas fa-eraser fa-3x  dt-3'
          onClick={eraserUse}
          alt='Eraser'
          style={{ borderBottom: eraserStyle }}
        />
        <i
          className='fas fa-times fa-3x  dt-4'
          onClick={clearDraw}
          alt='Delete'
        />
        <button className='btn draw-btn' onClick={drawThickness}>
          {thickness}px
        </button>
        <div id='color-container'>
          <input
            id='color'
            type='color'
            className='btn draw-btn'
            onChange={colorChange}
          />
          <label id='color-label' htmlFor='color'>
            Color
          </label>
        </div>
      </div>

      <canvas
        // {...props}
        onMouseDown={startDraw}
        onMouseUp={endDraw}
        onMouseMove={draw}
        ref={canvasRef}
      />
    </div>
  );
};

export default Canvas;
