import React from 'react';
import { render, cleanup } from '@testing-library/react';

import SignIn from './SignIn';

afterEach(cleanup);

describe('<SignIn />', () => {
  test('renders', () => {
    const { container } = render(<SignIn myProp="" />);
    expect(container).toMatchSnapshot();
  });
});

