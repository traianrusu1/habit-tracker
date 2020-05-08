const addSubtractDaysToDate = (date: Date, days: number): Date => {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

export const findDateAroundToday = (todayDay: number, day: number) => {
  switch (todayDay) {
    case 0:
      switch (day) {
        case 0:
          return new Date();
        case 1:
          return addSubtractDaysToDate(new Date(), 1);
        case 2:
          return addSubtractDaysToDate(new Date(), 2);
        case 3:
          return addSubtractDaysToDate(new Date(), 3);
        case 4:
          return addSubtractDaysToDate(new Date(), 4);
        case 5:
          return addSubtractDaysToDate(new Date(), 5);
        case 6:
          return addSubtractDaysToDate(new Date(), 6);
        default:
          return null;
      }
    case 1:
      switch (day) {
        case 0:
          return addSubtractDaysToDate(new Date(), -1);
        case 1:
          return new Date();
        case 2:
          return addSubtractDaysToDate(new Date(), 1);
        case 3:
          return addSubtractDaysToDate(new Date(), 2);
        case 4:
          return addSubtractDaysToDate(new Date(), 3);
        case 5:
          return addSubtractDaysToDate(new Date(), 4);
        case 6:
          return addSubtractDaysToDate(new Date(), 5);
        default:
          return null;
      }
    case 2:
      switch (day) {
        case 0:
          return addSubtractDaysToDate(new Date(), -2);
        case 1:
          return addSubtractDaysToDate(new Date(), -1);
        case 2:
          return new Date();
        case 3:
          return addSubtractDaysToDate(new Date(), 1);
        case 4:
          return addSubtractDaysToDate(new Date(), 2);
        case 5:
          return addSubtractDaysToDate(new Date(), 3);
        case 6:
          return addSubtractDaysToDate(new Date(), 4);
        default:
          return null;
      }
    case 3:
      switch (day) {
        case 0:
          return addSubtractDaysToDate(new Date(), -3);
        case 1:
          return addSubtractDaysToDate(new Date(), -2);
        case 2:
          return addSubtractDaysToDate(new Date(), -1);
        case 3:
          return new Date();
        case 4:
          return addSubtractDaysToDate(new Date(), 1);
        case 5:
          return addSubtractDaysToDate(new Date(), 2);
        case 6:
          return addSubtractDaysToDate(new Date(), 3);
        default:
          return null;
      }
    case 4:
      switch (day) {
        case 0:
          return addSubtractDaysToDate(new Date(), -4);
        case 1:
          return addSubtractDaysToDate(new Date(), -3);
        case 2:
          return addSubtractDaysToDate(new Date(), -2);
        case 3:
          return addSubtractDaysToDate(new Date(), -1);
        case 4:
          return new Date();
        case 5:
          return addSubtractDaysToDate(new Date(), 1);
        case 6:
          return addSubtractDaysToDate(new Date(), 2);
        default:
          return null;
      }
    case 5:
      switch (day) {
        case 0:
          return addSubtractDaysToDate(new Date(), -5);
        case 1:
          return addSubtractDaysToDate(new Date(), -4);
        case 2:
          return addSubtractDaysToDate(new Date(), -3);
        case 3:
          return addSubtractDaysToDate(new Date(), -2);
        case 4:
          return addSubtractDaysToDate(new Date(), -1);
        case 5:
          return new Date();

        case 6:
          return addSubtractDaysToDate(new Date(), 1);
        default:
          return null;
      }
    case 6:
      switch (day) {
        case 0:
          return addSubtractDaysToDate(new Date(), -6);
        case 1:
          return addSubtractDaysToDate(new Date(), -5);
        case 2:
          return addSubtractDaysToDate(new Date(), -4);
        case 3:
          return addSubtractDaysToDate(new Date(), -3);
        case 4:
          return addSubtractDaysToDate(new Date(), -2);
        case 5:
          return addSubtractDaysToDate(new Date(), -1);
        case 6:
          return new Date();
        default:
          return null;
      }

    default:
      return null;
  }
};

export default addSubtractDaysToDate;
