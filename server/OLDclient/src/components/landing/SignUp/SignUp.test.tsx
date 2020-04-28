import React from 'react';
import { render, cleanup } from '@testing-library/react';

import SignUp from './SignUp';

afterEach(cleanup);

describe('<SignUp />', () => {
  test('renders', () => {
    const { container } = render(<SignUp myProp="" />);
    expect(container).toMatchSnapshot();
  });
});

