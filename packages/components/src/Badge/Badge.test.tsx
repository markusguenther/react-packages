import React from 'react';
import { renderWithTheme } from '../helper/renderWithTheme';
import { Badge } from './Badge';

test('Badge matches snapshot', () => {
  const { container } = renderWithTheme(<Badge>text</Badge>, {});
  expect(container.firstChild).toMatchSnapshot();
});
