import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import SiteCompile from './components/SiteCompile';
import Esports from './components/Esports';
import ErrorPage from './components/ErrorPage';

function App() {
  // const [apiData, setApiData] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const url = await axios(`https://api.randomuser.me`);

  //     console.log(url.data);
  //     setApiData(url.data);
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, []);

  // -----------------------------------------
  // const [items, setItems] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     const result = await axios(`https://pokeapi.co/api/v2/pokemon`);

  //     console.log(result.data.results);
  //     setItems(result.data);
  //     setIsLoading(false);
  //   };

  //   fetchItems();
  // }, []);

  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path={['', '/', '/home']} exact>
            <SiteCompile />
          </Route>
          <Route path={'/esports'} exact>
            {/* <Esports loading={loading} apiData={apiData} /> */}
            {/* <Esports isLoading={isLoading} items={items} /> */}
            <Esports />
          </Route>
          <Route path='*' component={ErrorPage} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
