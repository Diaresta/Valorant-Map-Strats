import Header from './Header';
import MapList from './MapList';
import Agents from './Agents';

const SiteCompile = () => {
  return (
    <div className='App'>
      <div id='app-container'>
        <div id='map-comp-container'>
          <MapList />
        </div>
        <div id='agent-comp-container'>
          <Agents />
        </div>
      </div>
    </div>
  );
};

export default SiteCompile;
