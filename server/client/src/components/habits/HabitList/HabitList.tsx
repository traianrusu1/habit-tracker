import React from 'react';
import styles from './HabitList.module.scss';
import { Habit } from '../../../interfaces/Habit';
import HabitListItem from '../HabitListItem';

interface Props {
  habits: Habit[] | null;
}

const HabitList: React.FC<Props> = ({ habits }: Props) => {
  console.log('HABIT LIST ', habits);
  return (
    <article className={`${styles.habitList} row`}>
      <ul className="collection">
        {habits?.map((h) => {
          return <HabitListItem habit={h} key={h._id} />;
        })}
      </ul>
    </article>
  );
};

export default HabitList;
