import React from 'react';
import { render, cleanup } from '@testing-library/react';

import HabitListItem from './HabitListItem';

afterEach(cleanup);

describe('<HabitListItem />', () => {
  test('renders', () => {
    const { container } = render(<HabitListItem myProp="" />);
    expect(container).toMatchSnapshot();
  });
});

