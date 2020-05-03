import React from 'react';
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { RootState, AuthStates } from '../../../store/auth/types';
import styles from './Header.module.scss';
import { FileDoneOutlined } from '@ant-design/icons';

const { Header: AntHeader } = Layout;

interface Props {
  handleShowCreateHabit: () => void;
}

const Header: React.FC<Props> = ({ handleShowCreateHabit }: Props) => {
  const authState = useSelector((state: RootState) => state.authState);
  console.log('-- HEADER --');
  console.log(authState);

  const renderContent = (userAuth: typeof authState): JSX.Element | null => {
    switch (userAuth.status) {
      case AuthStates.Pending:
        return null;
      case AuthStates.LoggedOut:
        return (
          <AntHeader>
            <div className={styles.logo} />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">
                <a href="/auth/google">Login With Google</a>
              </Menu.Item>
            </Menu>
          </AntHeader>
        );
      default:
        return (
          <AntHeader>
            <div className={styles.logo}>
              <FileDoneOutlined />
            </div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1" onClick={handleShowCreateHabit} className="navItems">
                Add
              </Menu.Item>
              {/* <Menu.Item className="navItems" key="2">
                Categories
              </Menu.Item>
              <Menu.Item className="navItems" key="3">
                Reports
              </Menu.Item> */}
              <Menu.Item className="navItems" key="2">
                <a href="#">Group</a>
              </Menu.Item>
              <Menu.Item className="navItems" key="3">
                <a href="#">View</a>
              </Menu.Item>
              <Menu.Item className="navItems" key="4">
                <a href="/api/Logout">Logout</a>
              </Menu.Item>
            </Menu>
          </AntHeader>
          // <>
          //   <li>
          //     <a onClick={handleShowCreateHabit}>
          //       <i className="material-icons right">add_circle_outline</i>
          //       Add
          //     </a>
          //   </li>
          //   <li>
          //     <a href="#">
          //       <i className="material-icons right">collections</i>Category
          //     </a>
          //   </li>
          //   <li>
          //     <a href="#">
          //       <i className="material-icons right">filter_list</i>Filter
          //     </a>
          //   </li>
          //   <li>
          //     <a href="#">
          //       <i className="material-icons right">group</i>Group
          //     </a>
          //   </li>
          //   <li>
          //     <a href="/api/Logout">Logout</a>
          //   </li>
          // </>
        );
    }
  };

  return (
    <nav>
      {/* <div className="nav-wrapper">
        <Link
          to={authState?.status === AuthStates.LoggedIn ? '/habits' : '/'}
          className="brand-logo left"
        >
          HabitPro
        </Link> */}
      {/* <ul id="nav-mobile" className="right "> */}
      {renderContent(authState)}
      {/* <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">JavaScript</a>
          </li> */}
      {/* </ul>
      </div> */}
    </nav>
  );
};

export default React.memo(Header);
