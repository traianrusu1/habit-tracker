import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState, AuthStates } from '../../../store/auth/types';

// interface Props {
//   myProp: string;
// }

const Header: React.FC = () => {
  const authState = useSelector((state: RootState) => state.authState);
  console.log('-- HEADER --');
  console.log(authState);

  const renderContent = (userAuth: typeof authState): JSX.Element | null => {
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
          <>
            {/* <li>
              <a href="#">Add</a>
            </li> */}
            <li>
              <a href="/api/Logout">Logout</a>
            </li>
          </>
        );
    }
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <Link
          to={authState?.status === AuthStates.LoggedIn ? '/habits' : '/'}
          className="brand-logo left"
        >
          HabitPro
        </Link>
        <ul id="nav-mobile" className="right ">
          {renderContent(authState)}
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
