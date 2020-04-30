import React, { useEffect } from 'react';
import axios from 'axios';
import styles from './Dashboard.module.scss';
import CreateHabitForm from '../CreateHabitForm';
import { HabitNew } from '../CreateHabitForm/CreateHabitForm';
import { useDispatch, useSelector } from 'react-redux';
import fetchHabits from '../../../actions/habitActions';
import { RootState } from '../../../store/auth/types';
import HabitList from '../HabitList';

interface Props {
  showCreateHabit: boolean;
}

const Dashboard: React.FC<Props> = ({ showCreateHabit }: Props) => {
  const dispatch = useDispatch();
  const habitsState = useSelector((state: RootState) => state.habitsState);

  console.log('-- Dashboard --', habitsState);

  useEffect(() => {
    dispatch(fetchHabits());
  }, [dispatch]);

  // const handleShowCreateHabit = (): void => {
  //   setIsCreating((prevState) => !prevState);
  // };

  const handleSubmitNew = async (habit: HabitNew): Promise<void> => {
    console.log('-- HandleSubmitNew --');
    try {
      await axios.post('/api/habits', habit);
    } catch (error) {
      console.error('ERROR -', error);
    }

    dispatch(fetchHabits());
  };

  console.log('HAHAHAHAHAHAHAHAHAHA', showCreateHabit);

  return (
    <main className={styles.dashboard}>
      <div className="container">
        <div className="row center">
          {/* <div className="col s3">
            <button
              type="button"
              className="waves-effect waves-light btn"
              onClick={handleShowCreateHabit}
            >
              <i className="material-icons right">add_circle_outline</i>New
            </button>
          </div>
          <div className="col s3">
            <button
              type="button"
              className="waves-effect waves-light btn"
              onClick={handleShowCreateHabit}
            >
              <i className="material-icons right">collections</i>Category
            </button>
          </div>
          <div className="col s3">
            <button
              type="button"
              className="waves-effect waves-light btn"
              onClick={handleShowCreateHabit}
            >
              <i className="material-icons right">filter_list</i>Filter
            </button>
          </div>
          <div className="col s3">
            <button
              type="button"
              className="waves-effect waves-light btn"
              onClick={handleShowCreateHabit}
            >
              <i className="material-icons right">group</i>Group
            </button>
          </div> */}
        </div>
        {showCreateHabit && <CreateHabitForm handleSubmitNew={handleSubmitNew} />}
        <HabitList habits={habitsState?.habits} />
      </div>
    </main>
  );
};

export default Dashboard;
