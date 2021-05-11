// import PropTypes from 'prop-types';

const MapList = () => {
  return (
    <div id='map-list-container'>
      <ul id='map-list'>
        <li className='map-title'>
          <button className='btn map-btn'>Ascent</button>
        </li>
        <li className='map-title'>
          <button className='btn map-btn'>Bind</button>
        </li>
        <li className='map-title'>
          <button className='btn map-btn'>Haven</button>
        </li>
        <li className='map-title'>
          <button className='btn map-btn'>Icebox</button>
        </li>
        <li className='map-title'>
          <button className='btn map-btn'>Split</button>
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
        </div>
      </div>
    </div>
  );
};

export default MapList;
