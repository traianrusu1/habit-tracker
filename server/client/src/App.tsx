import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import fetchUser from './actions/authActions';

import { Landing, Dashboard } from './components';
import Layout from './components/layout/Layout';

const Detail = (): JSX.Element => {
  return <h2>Detail</h2>;
};

const App = (): JSX.Element => {
  const dispatch = useDispatch();
  const [showCreateHabit, setShowCreateHabit] = useState(false);

  useEffect(() => {
    console.log('-- APP --');
    dispatch(fetchUser());
  }, [dispatch]);

  const handleShowCreateHabit = (show?: boolean): void => {
    setShowCreateHabit(show ? show : (prevState) => !prevState);
  };

  return (
    <div>
      <BrowserRouter>
        <Layout handleShowCreateHabit={handleShowCreateHabit}>
          <Switch>
            <Route path="/habits/:id" component={Detail} />
            {/* <Route path="/habits" component={Dashboard} exact /> */}
            <Route
              path="/habits"
              render={(props) => (
                <Dashboard
                  {...props}
                  showCreateHabit={showCreateHabit}
                  handleShowCreateHabit={handleShowCreateHabit}
                />
              )}
            />
            <Route path="/" component={Landing} exact />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
