import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Header from './Header';

afterEach(cleanup);

describe('<Header />', () => {
  test('renders', () => {
    const { container } = render(<Header myProp="" />);
    expect(container).toMatchSnapshot();
  });
});

