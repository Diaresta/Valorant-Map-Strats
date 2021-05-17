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

/* <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header> */
