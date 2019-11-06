import React from 'react';
import { renderWithTheme } from '../helper/renderWithTheme';
import { Divider } from './Divider';

test('Divider in default/primary state matches snapshot', () => {
  const { container } = renderWithTheme(
    <>
      <Divider />
      <Divider variant="primary">test</Divider>
    </>,
    {}
  );

  expect(container).toMatchSnapshot();
});

test('Divider inverse state matches snapshot', () => {
  const { container } = renderWithTheme(
    <>
      <Divider variant="inverse" />
      <Divider variant="inverse">test</Divider>
    </>,
    {}
  );

  expect(container).toMatchSnapshot();
});

test('Divider with "width"-attribute matches snapshot', () => {
  const { container } = renderWithTheme(
    <>
      <Divider width="1" />
      <Divider width="0.5" />
      <Divider width="200px" />
      <Divider width="2rem" />
    </>,
    {}
  );

  expect(container).toMatchSnapshot();
});

test('Divider with custom margin matches snapshot', () => {
  const { container } = renderWithTheme(
    <>
      <Divider my={4} />
      <Divider mx={6} />
      <Divider mb="100px" />
      <Divider ml="3rem" />
    </>,
    {}
  );

  expect(container).toMatchSnapshot();
});
