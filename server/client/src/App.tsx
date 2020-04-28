import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import fetchUser from './actions';

import { Header, Landing, Dashboard } from './components';

const Detail = (): JSX.Element => {
  return <h2>Detail</h2>;
};

const App = (): JSX.Element => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('-- APP --');
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/habits/:id" component={Detail} />
            <Route path="/habits" component={Dashboard} exact />
            <Route path="/" component={Landing} exact />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
