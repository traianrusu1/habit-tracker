import React from 'react';
import { Layout as AntLayout } from 'antd';
import styles from './Layout.module.scss';
import Header from '../Header';

const { Footer, Content } = AntLayout;

interface Props {
  children: any;
  handleShowCreateHabit: () => void;
}

const Layout: React.FC<Props> = ({ children, handleShowCreateHabit }: Props) => {
  return (
    <AntLayout className={styles.siteLayoutBackground}>
      <Header handleShowCreateHabit={handleShowCreateHabit} />
      <Content style={{ padding: '20px 50px' }}>
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
        <div className="site-layout-content">{children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Habit Pro ©2020 Created by Traian Rusu</Footer>
    </AntLayout>
  );
};

export default Layout;
