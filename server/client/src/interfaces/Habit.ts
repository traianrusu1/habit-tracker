export interface Habit {
  _id?: string;
  title: string;
  userId: string;
  category: string;
  description?: string;
  scheduleType: string;
  scheduleDays?: number[] | undefined;
  scheduleDaysPer?: number | undefined;
  duration?: any;
  colour?: string;
}
