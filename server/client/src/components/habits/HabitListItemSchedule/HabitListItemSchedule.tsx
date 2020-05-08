import React, { useState, useEffect } from 'react';
import styles from './HabitListItemSchedule.module.scss';
import { Habit } from '../../../interfaces/Habit';
import { CaretUpOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { findDateAroundToday } from '../../../utils/dateUtils';
import Badge from '../../utils/Badge';
import isDone from '../../../utils/habitUtils';
// import useLongPress from '../../../hooks/useLongPress';

interface Props {
  habit: Habit;
  handleToggleDone: (habit: Habit, date: Date) => void;
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

const HabitListItemSchedule: React.FC<Props> = ({ habit, handleToggleDone }: Props) => {
  const [startLongPress, setStartLongPress] = useState(false);
  const [clickedDate, setClickedDate] = useState<Date | null>(null);
  const todayDay = new Date().getDay();
  const longCLickTime = 1000;
  const handleLongPress = (dateClicked: Date, habit: Habit) => {
    handleToggleDone(habit, dateClicked);

    console.log('WORKEDDDDDD', dateClicked);
    if (isDone(habit, dateClicked || undefined)) {
      // call to remove completed day from array
    } else {
      // call to add dat to completed array
    }
  };
  // const backspaceLongPress = useLongPress(handleLongPress, 1000, { habit });

  const daysWithDates = [
    { day: 0, date: findDateAroundToday(todayDay, 0) },
    { day: 1, date: findDateAroundToday(todayDay, 1) },
    { day: 2, date: findDateAroundToday(todayDay, 2) },
    { day: 3, date: findDateAroundToday(todayDay, 3) },
    { day: 4, date: findDateAroundToday(todayDay, 4) },
    { day: 5, date: findDateAroundToday(todayDay, 5) },
    { day: 6, date: findDateAroundToday(todayDay, 6) },
  ];

  useEffect(() => {
    let timerId: any;
    if (startLongPress) {
      timerId = setTimeout(() => {
        handleLongPress(clickedDate as Date, habit);
      }, longCLickTime);
    } else {
      clearTimeout(timerId);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [handleLongPress, longCLickTime, startLongPress]);

  const isScheduledDay = (day: number) => {
    return habit.scheduleDays?.includes(day);
  };

  const ShowBadge = (item: typeof daysWithDates[0]) => {
    // if (item.day === todayDay && habit.scheduleDays?.includes(item.day)) {
    return (
      <Badge
        show={
          (item.day === todayDay &&
            isScheduledDay(item.day) &&
            !isDone(habit, item.date || undefined)) ||
          false
        }
      >
        <div
          className={`${styles.scheduleItem} ${isScheduledDay(item.day) && styles.dayScheduled} ${
            item.day === todayDay && styles.todayDay
          } ${isDone(habit, item.date || undefined) && styles.dayCompleted}`}
        >
          {/* {Days[item]} - {new Date().getDay()} */}
          {Days[item.day]}
        </div>
        {isDone(habit, item.date || undefined) && <CheckOutlined />}
        {isScheduledDay(item.day) &&
          !isDone(habit, item.date || undefined) &&
          item.date &&
          new Date(item.date.toLocaleDateString()) < new Date(new Date().toLocaleDateString()) && (
            <CloseOutlined />
          )}
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
          <div
            onMouseDown={() => {
              setStartLongPress(true);
              setClickedDate(item.date);
            }}
            onMouseUp={() => {
              setStartLongPress(false);
            }}
            onMouseLeave={() => {
              setStartLongPress(false);
            }}
            onTouchStart={() => {
              setStartLongPress(true);
              setClickedDate(item.date);
            }}
            onTouchEnd={() => {
              setStartLongPress(false);
            }}
            key={item.day}
            className={styles.dayItemContainer}
          >
            {ShowBadge(item)}
            {/* {item.date?.toLocaleDateString().split('/')[1]} */}
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
