// import PropTypes from 'prop-types';

import { useEffect, useState, useRef } from 'react';
import MapButton from './MapButton';

const MapList = (props) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;

    // below for higher density screens?
    canvas.width = canvas.offsetWidth * 2;
    canvas.height = canvas.offsetHeight * 2;

    const context = canvas.getContext('2d');
    context.scale(2, 2);
    context.lineCap = 'round';
    context.strokeStyle = 'white';
    context.lineWidth = 5;

    contextRef.current = context;
  }, []);

  const startDraw = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
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

  const onClick = () => {
    console.log('ree');
  };

  return (
    <div id='map-list-container'>
      <ul id='map-list'>
        <li className='map-title'>
          <MapButton text='Ascent' onClick={onClick} />
        </li>
        <li className='map-title'>
          <MapButton text='Bind' onClick={onClick} />
        </li>
        <li className='map-title'>
          <MapButton text='Haven' onClick={onClick} />
        </li>
        <li className='map-title'>
          <MapButton text='Icebox' onClick={onClick} />
        </li>
        <li className='map-title'>
          <MapButton text='Split' onClick={onClick} />
        </li>
      </ul>

      <div id='left-container'>
        <div id='drawing-tools'>
          <i className='far fa-hand-pointer fa-3x dt-1' alt='Pointer' />
          <i className='fas fa-pencil-alt fa-3x dt-2' alt='Pencil' />
          <i className='fas fa-eraser fa-3x  dt-3' alt='Eraser' />
          <i className='fas fa-times fa-3x  dt-4' alt='Delete' />
          <button className='btn draw-btn'>Reset</button>
          <button className='btn draw-btn'>4px</button>
          {/* <button className='btn draw-btn'>Color</button> */}
          <div id='color-container'>
            <input id='color' type='color' className='btn draw-btn' />
            <label id='color-label' htmlFor='color'>
              Color
            </label>
          </div>

          {/* ^^ Pencil thickness above */}

          {/* <div id='dropdown'>
          <button id='dropdown-btn'>
            <ul>
              <li>2px</li>
              <li>4px</li>
              <li>6px</li>
            </ul>
          </button>
        </div> */}
        </div>

        <div id='map-container'>
          <img
            src='/images/Map-Images/Ascent-1.png'
            id='map-img'
            alt='Map Placeholder'
          />
          <canvas
            {...props}
            onMouseDown={startDraw}
            onMouseUp={endDraw}
            onMouseMove={draw}
            ref={canvasRef}
          />
        </div>
      </div>
    </div>
  );
};

export default MapList;
