import React from 'react';
import { render, cleanup } from '@testing-library/react';

import TrainerHome from './TrainerHome';

afterEach(cleanup);

describe('<TrainerHome />', () => {
  test('renders', () => {
    const { container } = render(<TrainerHome myProp="" />);
    expect(container).toMatchSnapshot();
  });
});

