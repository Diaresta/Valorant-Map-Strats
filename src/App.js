// import './static/css/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import MapList from './components/MapList';
import Agents from './components/Agents';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <Router>
      <Switch>
        <div className='App'>
          <Header />
          <Route path={['', '/', '/home']} exact={true}>
            <div id='app-container'>
              <div id='map-comp-container'>
                <MapList />
              </div>
              <div id='agent-comp-container'>
                <Agents />
              </div>
            </div>
          </Route>
          <Route path='*' component={ErrorPage} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
