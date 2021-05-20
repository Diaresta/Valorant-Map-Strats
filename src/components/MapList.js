// import PropTypes from 'prop-types';
import { useEffect, useState, useRef } from 'react';
import MapButton from './MapButton';
import Canvas from './Canvas';

const MapList = (props) => {
  const mapImageRef = useRef(null);

  const maps = {
    ascent: '/images/Map-Images/Ascent-1.png',
    bind: '/images/Map-Images/Bind-1.png',
    haven: '/images/Map-Images/Haven-1.png',
    icebox: '/images/Map-Images/Icebox-1.png',
    split: '/images/Map-Images/Split-1.png',
  };

  const [map, setMap] = useState(maps.ascent);

  const onClickMap = (e) => {
    if (e.target.innerHTML === 'Ascent') {
      setMap(maps.ascent);
    } else if (e.target.innerHTML === 'Bind') {
      setMap(maps.bind);
    } else if (e.target.innerHTML === 'Haven') {
      setMap(maps.haven);
    } else if (e.target.innerHTML === 'Icebox') {
      setMap(maps.icebox);
    } else if (e.target.innerHTML === 'Split') {
      setMap(maps.split);
    }
  };

  return (
    <div id='map-list-container'>
      <ul id='map-list'>
        <li className='map-title'>
          <MapButton text='Ascent' onClick={onClickMap} />
        </li>
        <li className='map-title'>
          <MapButton text='Bind' onClick={onClickMap} />
        </li>
        <li className='map-title'>
          <MapButton text='Haven' onClick={onClickMap} />
        </li>
        <li className='map-title'>
          <MapButton text='Icebox' onClick={onClickMap} />
        </li>
        <li className='map-title'>
          <MapButton text='Split' onClick={onClickMap} />
        </li>
      </ul>

      <div id='left-container'>
        <div id='map-container'>
          <img src={map} id='map-img' alt='Map Placeholder' ref={mapImageRef} />
          <Canvas />
        </div>
      </div>
    </div>
  );
};

export default MapList;
