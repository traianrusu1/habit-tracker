import React from 'react';
import { render, cleanup } from '@testing-library/react';

import HabitListItemSchedule from './HabitListItemSchedule';

afterEach(cleanup);

describe('<HabitListItemSchedule />', () => {
  test('renders', () => {
    const { container } = render(<HabitListItemSchedule myProp="" />);
    expect(container).toMatchSnapshot();
  });
});

