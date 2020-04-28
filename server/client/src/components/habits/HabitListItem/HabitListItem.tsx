import React from 'react';
// import styles from './HabitListItem.module.scss';
import { Habit } from '../../../interfaces/Habit';

interface Props {
  habit: Habit;
}

const HabitListItem: React.FC<Props> = ({ habit }: Props) => {
  return (
    // <div className={styles.habitListItem}>
    <li className="collection-item avatar">
      <img src="images/yuna.jpg" alt="" className="circle" />
      <span className="title">{habit.title}</span>
      <p>
        {habit.description} <br />
        {habit.category}
      </p>
      <a href="#!" className="secondary-content">
        <i className="material-icons">grade</i>
      </a>
    </li>
    // </div>
  );
};

export default HabitListItem;
