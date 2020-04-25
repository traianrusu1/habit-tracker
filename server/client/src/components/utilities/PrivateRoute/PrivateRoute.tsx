import React, { ReactNode } from "react";
import { Route, Redirect } from "react-router-dom";
import styles from "./PrivateRoute.module.scss";

interface Props {
  path: string;
  isAuthenticated: boolean;
  children: ReactNode;
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.

const PrivateRoute: React.FC<Props> = ({
  children,
  path,
  isAuthenticated,
}: Props) => {
  console.log("-- PrivateRoute --");
  console.log(isAuthenticated);

  return (
    <Route
      path={path}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
