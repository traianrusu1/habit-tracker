import { Habit } from '../interfaces/Habit';

const isDone = (habit: Habit, dateToCheck?: Date): boolean => {
  if (!dateToCheck) {
    dateToCheck = new Date();
  }

  if (
    habit.datesCompleted?.find(
      (date) => dateToCheck?.toLocaleDateString() === new Date(date).toLocaleDateString(),
    )
  ) {
    return true;
  }

  return false;
};

export default isDone;
