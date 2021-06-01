// import './static/css/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import SiteCompile from './components/SiteCompile';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <Router>
      <Switch>
        <div className='App'>
          <Header />
          <Route path={['', '/', '/home']} exact={true}>
            <SiteCompile />
          </Route>
          <Route path='*' component={ErrorPage} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
