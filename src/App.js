import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import SiteCompile from './components/SiteCompile';
import Esports from './components/Esports';
import ErrorPage from './components/ErrorPage';

function App() {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiCall = async () => {
    // const url = await 'https://api.github.com/users';
    const url = await 'https://pokeapi.co/api/v2/pokemon';

    const response = await fetch(url);
    const data = await response.json();
    setApiData(data.results);
    setLoading(false);
    console.log(data.results);
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path={['', '/', '/home']} exact>
            <SiteCompile />
          </Route>
          <Route path={'/esports'} exact>
            <Esports loading={loading} apiData={apiData} />
          </Route>
          <Route path='*' component={ErrorPage} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
