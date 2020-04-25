import React from 'react';
import { render, cleanup } from '@testing-library/react';

import PrivateRoute from './PrivateRoute';

afterEach(cleanup);

describe('<PrivateRoute />', () => {
  test('renders', () => {
    const { container } = render(<PrivateRoute myProp="" />);
    expect(container).toMatchSnapshot();
  });
});

