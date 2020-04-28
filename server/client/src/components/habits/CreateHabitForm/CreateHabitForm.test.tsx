import React from 'react';
import { render, cleanup } from '@testing-library/react';

import CreateHabitForm from './CreateHabitForm';

afterEach(cleanup);

describe('<CreateHabitForm />', () => {
  test('renders', () => {
    const { container } = render(<CreateHabitForm myProp="" />);
    expect(container).toMatchSnapshot();
  });
});

