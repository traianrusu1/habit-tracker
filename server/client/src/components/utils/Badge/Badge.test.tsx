import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Badge from './Badge';

afterEach(cleanup);

describe('<Badge />', () => {
  test('renders', () => {
    const { container } = render(<Badge myProp="" />);
    expect(container).toMatchSnapshot();
  });
});

