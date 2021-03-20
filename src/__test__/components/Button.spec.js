import React from 'react';

import Button from '@components/Button';
import { render, screen, fireEvent } from '../test-utils';

describe('Button', () => {
  let expectedChildren, expectedOnClick;

  beforeEach(() => {
    expectedOnClick = jest.fn();
    expectedChildren = 'Edit';
  });

  test('Should render button label text', () => {
    render(<Button onClick={expectedOnClick}>{expectedChildren}</Button>);

    const buttonText = screen.getByText(expectedChildren);

    expect(buttonText).toBeInTheDocument();
  });

  test('Should fire click handler on click', () => {
    const { getByText } = render(
      <Button onClick={expectedOnClick}>{expectedChildren}</Button>
    );
    const myButton = getByText(expectedChildren);

    fireEvent.click(myButton);

    expect(expectedOnClick).toHaveBeenCalledTimes(1);
  });
});
