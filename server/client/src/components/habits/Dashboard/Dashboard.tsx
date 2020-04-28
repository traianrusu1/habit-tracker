import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Dashboard.module.scss';
import CreateHabitForm from '../CreateHabitForm';
import { HabitNew } from '../CreateHabitForm/CreateHabitForm';
import { useDispatch, useSelector } from 'react-redux';
import fetchHabits from '../../../actions/habitActions';
import { RootState } from '../../../store/auth/types';

// interface Props {
//   myProp: string;
// }

const Dashboard: React.FC = () => {
  const [isCreating, setIsCreating] = useState(false);
  const dispatch = useDispatch();
  const habits = useSelector((state: RootState) => state.habits);

  console.log('Habits - ', habits);

  useEffect(() => {
    dispatch(fetchHabits());
  }, [dispatch]);

  const handleCreateHabit = (): void => {
    setIsCreating((prevState) => !prevState);
  };

  const handleSubmitNew = (habit: HabitNew): void => {
    console.log('-- HandleSubmitNew --');
    axios.post('/api/habits', habit);
  };

  return (
    <main className={styles.dashboard}>
      <div className="container">
        <div className="row">
          <div className="col s12">
            <button
              type="button"
              className="waves-effect waves-light btn"
              onClick={handleCreateHabit}
            >
              <i className="material-icons right">cloud</i>Add
            </button>
          </div>
        </div>
        {isCreating && <CreateHabitForm handleSubmitNew={handleSubmitNew} />}
      </div>
    </main>
  );
};

export default Dashboard;
