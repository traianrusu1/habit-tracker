import React, { useState, useEffect } from "react";
import "./App.css";
import { Landing, TraineeHome, PrivateRoute, SignUp } from "./components";
import SignIn from "./components/landing/SignIn/SignIn";
import TrainerHome from "./components/trainer/TrainerHome/TrainerHome";
import {
  useHistory,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
} from "react-router-dom";
import axios from "axios";

function App() {
  // const [userType, setUserType] = useState("trainer");
  const [user, setUser] = useState<any>();
  // const history = useHistory();

  useEffect(() => {
    axios.get("/api/current_user").then((res) => {
      setUser(res.data);
      // history.push("/home");
    });
  }, []);
  console.log("-- App --");
  console.log(user);

  // const auth = {
  //   isAuthenticated: true,
  //   authenticate(cb: Function) {
  //     fakeAuth.isAuthenticated = true;
  //     setTimeout(cb, 100); // fake async
  //   },
  //   signout(cb: Function) {
  //     fakeAuth.isAuthenticated = false;
  //     setTimeout(cb, 100);
  //   },
  // };

  return (
    <Router>
      <div className="App"></div>

      <Switch>
        <Route path="/landing">
          <Landing myProp="test" />
        </Route>
        <Route path="/signin">
          <SignIn myProp="test" />
        </Route>
        <Route path="/signup">
          <SignUp myProp="test" />
        </Route>

        <Route path="/home">
          {user && (
            <Redirect
              to={{
                pathname:
                  user.accountType === "trainer"
                    ? "/trainer-home"
                    : "/trainee-home",
                // state: { from: location },
              }}
            />
          )}
        </Route>
        <Route path="/trainer-home">
          {user ? <TrainerHome myProp="test" /> : <Redirect to="/landing" />}
        </Route>
        <Route path="/trainee-home">
          {user ? <TraineeHome myProp="test" /> : <Redirect to="/landing" />}
        </Route>

        <Route path="/">
          <Redirect to="/landing" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
