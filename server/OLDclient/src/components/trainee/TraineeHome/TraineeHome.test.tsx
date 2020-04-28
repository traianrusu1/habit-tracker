import React from 'react';
import { render, cleanup } from '@testing-library/react';

import TraineeHome from './TraineeHome';

afterEach(cleanup);

describe('<TraineeHome />', () => {
  test('renders', () => {
    const { container } = render(<TraineeHome myProp="" />);
    expect(container).toMatchSnapshot();
  });
});

