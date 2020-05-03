import React from 'react';
import styles from './HabitList.module.scss';
import { Habit } from '../../../interfaces/Habit';
import { List, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { HabitListItem } from '../..';

const { confirm } = Modal;

interface Props {
  habits: Habit[] | null;
  handleDeleteHabit: (habitId: string) => void;
}

const HabitList: React.FC<Props> = ({ habits, handleDeleteHabit }: Props) => {
  console.log('HABIT LIST ', habits);

  const handleMarkDone = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    console.log('-- handleMarkDone --', event);
  };
  const handleEdit = (habitId: string) => {
    console.log('-- handleEdit --', habitId);
  };
  const handleDelete = (habitId: string) => {
    console.log('-- handleDelete --', habitId);
    confirm({
      title: 'Are you sure you want to delete this habit?',
      icon: <ExclamationCircleOutlined />,
      content: 'It will be gone forever and you will not be able to get it back',
      okText: 'Yes',

      cancelText: 'No',
      onOk() {
        handleDeleteHabit(habitId);
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  return (
    <article className={`${styles.habitList} row`}>
      <List
        className="demo-loadmore-list"
        loading={false}
        itemLayout="horizontal"
        loadMore={() => null}
        dataSource={habits || undefined}
        renderItem={(habit: Habit) => (
          <HabitListItem
            habit={habit}
            handleMarkDone={handleMarkDone}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        )}
      />
    </article>
  );
};

export default HabitList;
