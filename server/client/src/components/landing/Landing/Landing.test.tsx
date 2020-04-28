import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Landing from './Landing';

afterEach(cleanup);

describe('<Landing />', () => {
  test('renders', () => {
    const { container } = render(<Landing myProp="" />);
    expect(container).toMatchSnapshot();
  });
});

