import React, { useEffect } from 'react';
import styles from './HabitList.module.scss';
import { Habit } from '../../../interfaces/Habit';
import { List, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { HabitListItem } from '../..';
import { useDispatch } from 'react-redux';
import { fetchHabits, deleteHabit, patchHabit } from '../../../actions/habitActions';
import isDone from '../../../utils/habitUtils';

const { confirm } = Modal;

interface Props {
  habits: Habit[] | null;
}

const HabitList: React.FC<Props> = ({ habits }: Props) => {
  console.log('HABIT LIST ', habits);
  const dispatch = useDispatch();
  // const { user } = useSelector((state: RootState) => state.authState);

  useEffect(() => {
    dispatch(fetchHabits());
  }, [dispatch]);

  // const handleShowCreateHabit = (): void => {
  //   setIsCreating((prevState) => !prevState);
  // };

  const handleDeleteHabit = async (habitId: string): Promise<void> => {
    console.log('-- handleDeleteHabit --', habitId);
    try {
      await dispatch(deleteHabit(habitId));
      dispatch(fetchHabits());
    } catch (error) {
      console.error('ERROR -', error);
    }
  };

  const handleMarkDone = async (habit: Habit) => {
    console.log('-- handleMarkDone --', habit);
    const today = new Date().toISOString();
    const updateObj = {
      datesCompleted: [...(habit.datesCompleted || []), today],
    };
    await dispatch(patchHabit(habit._id as string, updateObj));
    dispatch(fetchHabits());
  };

  const handleToggleDone = async (habit: Habit, date: Date) => {
    console.log('-- handleToggleDone --', habit);
    console.log('-- handleToggleDone --', date);
    let updateObj;
    if (isDone(habit, date)) {
      const datesWithRemoved = habit.datesCompleted?.filter((val) => {
        return new Date(val).toLocaleDateString() !== date.toLocaleDateString();
      });
      updateObj = {
        datesCompleted: datesWithRemoved,
      };
    } else {
      updateObj = {
        datesCompleted: [...(habit.datesCompleted || []), date.toISOString()],
      };
    }

    await dispatch(patchHabit(habit._id as string, updateObj));
    dispatch(fetchHabits());
  };

  const handleEdit = (habitId: string) => {
    console.log('-- handleEdit --', habitId);
  };

  const deleteConfirm = (habitId: string) => {
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
            handleMarkDone={() => handleMarkDone(habit)}
            handleEdit={handleEdit}
            handleDelete={deleteConfirm}
            handleToggleDone={handleToggleDone}
          />
        )}
      />
    </article>
  );
};

export default HabitList;
