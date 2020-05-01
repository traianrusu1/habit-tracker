import React from 'react';
import styles from './HabitList.module.scss';
import { Habit } from '../../../interfaces/Habit';
// import HabitListItem from '../HabitListItem';
import { List, Skeleton, Avatar, Button, Dropdown, Menu } from 'antd';
import {
  CarryOutOutlined,
  EditOutlined,
  DeleteOutlined,
  EllipsisOutlined,
  // UserOutlined,
} from '@ant-design/icons';
import { ClickParam } from 'antd/lib/menu';

interface Props {
  habits: Habit[] | null;
}

const HabitList: React.FC<Props> = ({ habits }: Props) => {
  console.log('HABIT LIST ', habits);

  const handleMarkDone = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    console.log('-- handleMarkDone --', event);
  };
  const handleEdit = () => {
    console.log('-- handleEdit --');
  };
  const handleDelete = () => {
    console.log('-- handleDelete --');
  };
  const handleMenuItemClick = (param: ClickParam) => {
    switch (param.key) {
      case 'edit':
        handleEdit();
        break;
      case 'delete':
        handleDelete();
        break;
      default:
        break;
    }
  };

  const menu = (
    <Menu onClick={handleMenuItemClick}>
      <Menu.Item key="edit" icon={<EditOutlined />}>
        Edit
      </Menu.Item>
      <Menu.Item key="delete" icon={<DeleteOutlined />}>
        Delete
      </Menu.Item>
    </Menu>
  );

  return (
    <article className={`${styles.habitList} row`}>
      <List
        className="demo-loadmore-list"
        loading={false}
        itemLayout="horizontal"
        loadMore={() => null}
        dataSource={habits || undefined}
        renderItem={(item: Habit) => (
          <List.Item
            actions={[
              <Button
                type="primary"
                shape="round"
                onClick={handleMarkDone}
                icon={<CarryOutOutlined />}
                size="large"
              >
                Done
              </Button>,
              // <a key="list-loadmore-edit" onClick={handleMarkDone}>
              //   Done
              // </a>,
              // <Button
              //   type="primary"
              //   shape="round"
              //   onClick={handleEdit}
              //   icon={<EditOutlined />}
              //   size="large"
              // ></Button>,
              <Dropdown overlay={menu}>
                <Button type="link">
                  <EllipsisOutlined />
                </Button>
              </Dropdown>,
              // <Dropdown.Button type="primary" overlay={menu}></Dropdown.Button>,
            ]}
          >
            <Skeleton avatar title={false} loading={false} active>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={<a href="https://ant.design">{item.title}</a>}
                description={item.description}
              />
              {/* <div>content</div> */}
            </Skeleton>
          </List.Item>
        )}
      />
      {/* <ul className="collection">
        {habits?.map((h) => {
          return <HabitListItem habit={h} key={h._id} />;
        })}
      </ul> */}
    </article>
  );
};

export default HabitList;
