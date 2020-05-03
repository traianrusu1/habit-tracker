import React from 'react';
import styles from './HabitListItemSchedule.module.scss';
import { Habit } from '../../../interfaces/Habit';

interface Props {
  habit: Habit;
}

// enum Days {
//   'sunday' = 0,
//   'monday' = 1,
//   'tuesday' = 2,
//   'wednesday' = 3,
//   'thursday' = 4,
//   'friday' = 5,
//   'saturday' = 6,
// }

const HabitListItemSchedule: React.FC<Props> = ({ habit }: Props) => {
  return (
    <div className={styles.habitListItemSchedule}>
      {habit.scheduleDays?.map((item) => (
        <div>
          {item} - {new Date().getDay()}
        </div>
      ))}
    </div>
  );
};

export default HabitListItemSchedule;
