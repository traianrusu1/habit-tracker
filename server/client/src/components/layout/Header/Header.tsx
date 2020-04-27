import React from "react";
import { useSelector } from "react-redux";
import styles from "./Header.module.scss";
import { RootState, AuthStates } from "../../../store/auth/types";
import { createSelector } from "reselect";
import { User } from "../../../interfaces/User";

interface Props {
  myProp: string;
}

const Header: React.FC<Props> = ({ myProp }: Props) => {
  const auth = useSelector((state: RootState) => state.auth);
  console.log("-- HEADER --");
  console.log(auth);

  const renderContent = (userAuth: typeof auth) => {
    switch (userAuth.status) {
      case AuthStates.Pending:
        return null;
      case AuthStates.LoggedOut:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/Logout">Logout</a>
          </li>
        );
    }
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo left">
          HabitPro
        </a>
        <ul id="nav-mobile" className="right ">
          {renderContent(auth)}
          {/* <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">JavaScript</a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default React.memo(Header);
