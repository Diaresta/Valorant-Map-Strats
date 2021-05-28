import './static/css/App.css';
import Header from './components/Header';
import MapList from './components/MapList';
import Agents from './components/Agents';

function App() {
  return (
    <div className='App'>
      <Header />
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
}

export default App;
