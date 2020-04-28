import React from 'react';
import { render, cleanup } from '@testing-library/react';

import HabitList from './HabitList';

afterEach(cleanup);

describe('<HabitList />', () => {
  test('renders', () => {
    const { container } = render(<HabitList myProp="" />);
    expect(container).toMatchSnapshot();
  });
});

