import React from 'react';
import styles from './HabitListItemSchedule.module.scss';
import { Habit } from '../../../interfaces/Habit';
import { CaretUpOutlined } from '@ant-design/icons';
import { findDateAroundToday } from '../../../utils/dateUtils';
import Badge from '../../utils/Badge';
import isDone from '../../../utils/habitUtils';

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

  const daysWithDates = [
    { day: 0, date: findDateAroundToday(todayDay, 0) },
    { day: 1, date: findDateAroundToday(todayDay, 1) },
    { day: 2, date: findDateAroundToday(todayDay, 2) },
    { day: 3, date: findDateAroundToday(todayDay, 3) },
    { day: 4, date: findDateAroundToday(todayDay, 4) },
    { day: 5, date: findDateAroundToday(todayDay, 5) },
    { day: 6, date: findDateAroundToday(todayDay, 6) },
  ];

  const ShowBadge = (item: typeof daysWithDates[0]) => {
    // if (item.day === todayDay && habit.scheduleDays?.includes(item.day)) {
    return (
      <Badge show={(item.day === todayDay && habit.scheduleDays?.includes(item.day)) || false}>
        <div
          className={`${styles.scheduleItem} ${
            habit.scheduleDays?.includes(item.day) && styles.dayScheduled
          } ${item.day === todayDay && styles.todayDay} ${
            isDone(habit, item.date || undefined) && styles.dayCompleted
          }`}
        >
          {/* {Days[item]} - {new Date().getDay()} */}
          {Days[item.day]}
        </div>
      </Badge>
    );
    // } else {
    //   return (
    //     <div
    //       className={`${styles.scheduleItem} ${
    //         habit.scheduleDays?.includes(item.day) && styles.dayScheduled
    //       } ${item.day === todayDay && styles.todayDay} ${
    //         habit.datesCompleted?.find((date) => {
    //           if (item.date) {
    //             return (
    //               new Date(item.date).toLocaleDateString() === new Date(date).toLocaleDateString()
    //             );
    //           }
    //           return false;
    //         }) && styles.dayCompleted
    //       }`}
    //     >
    //       {/* {Days[item]} - {new Date().getDay()} */}
    //       {Days[item.day]}
    //       <CheckOutlined />
    //     </div>
    //   );
    // }
  };

  return (
    <div className={styles.habitListItemSchedule}>
      {daysWithDates.map((item: typeof daysWithDates[0]) => {
        console.log('INSIDE: ', item);
        return (
          <div className={styles.dayItemContainer}>
            {ShowBadge(item)}
            {item.date?.toLocaleDateString().split('/')[1]}
            {item.day === todayDay && (
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
