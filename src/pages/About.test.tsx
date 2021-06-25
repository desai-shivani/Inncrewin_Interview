import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '../../test/test-utils';

import About from './About';

it('renders <About /> page', () => {
  // You should be able to verify the About page rendered correctly.
  const {getByText} = render(<About />);
  const headerText = getByText('About Page');
  expect(headerText).toBeInTheDocument();

});

it('clicks button and fires increment counter', () => {
  // You should be able to click the increment button and verify the count.
  const {getByText, getByTestId} = render(<About />);
  const printerOutput = getByTestId('someTestIdForP');
  expect(printerOutput).toHaveTextContent('Current Count: 1');
  const buttonField = getByText('Increment');
  userEvent.click(buttonField);
  expect(printerOutput).toHaveTextContent('Current Count: 2');
});
