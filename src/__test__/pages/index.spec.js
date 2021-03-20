import React from 'react';

import { render, screen } from '../test-utils';
import HomePage from '@pages/index';

describe('HomePage', () => {
  test('should render the heading', () => {
    render(<HomePage />);

    const heading = screen.getByText('Fun With Plaintext');

    expect(heading).toBeInTheDocument();
  });
});
