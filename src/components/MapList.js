// import PropTypes from 'prop-types';

const MapList = () => {
  return (
    <div id='map-list-container'>
      <ul id='map-list'>
        <li className='map-title'>
          <button>Ascent</button>
        </li>
        <li className='map-title'>
          <button>Bind</button>
        </li>
        <li className='map-title'>
          <button>Haven</button>
        </li>
        <li className='map-title'>
          <button>Icebox</button>
        </li>
        <li className='map-title'>
          <button>Split</button>
        </li>
      </ul>

      <div id='map-container'>
        <img
          src='/images/Map-Images/Ascent-1.png'
          id='map-img'
          alt='Map Placeholder'
        />
      </div>

      <div id='drawing-tools'>
        <i className='far fa-hand-pointer fa-3x' />
        <i className='fas fa-pencil-alt fa-3x' />
        <i className='fas fa-eraser fa-3x' />
        <i className='fas fa-times fa-3x' />
        <button>Reset</button>
        <button>4px</button>
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
    </div>
  );
};

export default MapList;
