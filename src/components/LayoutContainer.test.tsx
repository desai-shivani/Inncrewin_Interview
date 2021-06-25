import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '../../test/test-utils';

import LayoutContainer from './LayoutContainer';

it('can browse to the about page', async () => {
  // For `LayoutContainer`, you should be able to render the layout container, followed by navigating to the About page.
  const {getByText} = render(<LayoutContainer />);
  const linkText = await getByText('Go to about');
  expect(linkText).toBeTruthy();
  userEvent.click(linkText);
  const newPageHeader = await getByText('About Page');
  expect(newPageHeader).toBeTruthy();
});
