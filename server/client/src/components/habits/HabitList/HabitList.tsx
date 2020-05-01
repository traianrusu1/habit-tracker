import React from 'react';
import styles from './HabitList.module.scss';
import { Habit } from '../../../interfaces/Habit';
// import HabitListItem from '../HabitListItem';
import { List, Skeleton, Avatar, Button } from 'antd';
import { CarryOutOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

interface Props {
  habits: Habit[] | null;
}

const HabitList: React.FC<Props> = ({ habits }: Props) => {
  console.log('HABIT LIST ', habits);

  const handleMarkDone = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    console.log('-- handleMarkDone --', event);
  };
  const handleEdit = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    console.log('-- handleEdit --', event);
  };
  const handleDelete = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    console.log('-- handleDelete --', event);
  };

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
              <Button
                type="primary"
                shape="round"
                onClick={handleEdit}
                icon={<EditOutlined />}
                size="large"
              ></Button>,
              <Button
                type="primary"
                shape="round"
                onClick={handleDelete}
                icon={<DeleteOutlined />}
                size="large"
                danger
              ></Button>,
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
