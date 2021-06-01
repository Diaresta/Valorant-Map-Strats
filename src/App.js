// import './static/css/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import SiteCompile from './components/SiteCompile';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path={['', '/', '/home']} exact>
            <SiteCompile />
          </Route>
          <Route path='*' component={ErrorPage} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
