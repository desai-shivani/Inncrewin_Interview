import React from 'react';
import { render } from '../../test/test-utils';

import Home from './Home';

it('renders <Home /> page', () => {
  // You should be able to show that you can verify Home rendered correctly
  const {getByRole} = render(<Home />);
  const linkText = getByRole('link');
  const welcomeText = getByText('Welcome!');
  expect(welcomeText).toBeInTheDocument();
  expect(linkText).toBeVisible();
  expect(linkText).toHaveTextContent('Go to about');
});

