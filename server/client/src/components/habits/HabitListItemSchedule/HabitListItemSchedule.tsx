import React from 'react';
import styles from './HabitListItemSchedule.module.scss';
import { Habit } from '../../../interfaces/Habit';
import { CaretUpOutlined } from '@ant-design/icons';
import { Badge } from 'antd';

interface Props {
  habit: Habit;
}

enum Days {
  'Sun' = 0,
  'Mon' = 1,
  'Tue' = 2,
  'Wed' = 3,
  'Thu' = 4,
  'Fri' = 5,
  'Sat' = 6,
}

const HabitListItemSchedule: React.FC<Props> = ({ habit }: Props) => {
  const todayDay = new Date().getDay();
  console.log('VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV');
  console.log('todayDay: ', todayDay);

  const ShowBadge = (item: number) => {
    if (item === todayDay && habit.scheduleDays?.includes(item)) {
      return (
        <Badge count="!">
          <div
            className={`${styles.scheduleItem} ${
              habit.scheduleDays?.includes(item) && styles.dayScheduled
            } ${item === todayDay && styles.todayDay}`}
          >
            {/* {Days[item]} - {new Date().getDay()} */}
            {Days[item]}
          </div>
        </Badge>
      );
    }

    return (
      <div
        className={`${styles.scheduleItem} ${
          habit.scheduleDays?.includes(item) && styles.dayScheduled
        } ${item === todayDay && styles.todayDay}`}
      >
        {/* {Days[item]} - {new Date().getDay()} */}
        {Days[item]}
      </div>
    );
  };

  return (
    <div className={styles.habitListItemSchedule}>
      {[0, 1, 2, 3, 4, 5, 6].map((item: number) => {
        console.log('INSIDE: ', item);
        return (
          <div className={styles.dayItemContainer}>
            {ShowBadge(item)}
            {item === todayDay && (
              <div className={styles.todayDayIcon}>
                <CaretUpOutlined />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default HabitListItemSchedule;
