import React from 'react';
import { withKnobs, number } from '@storybook/addon-knobs';

import { Ratio } from '@t3n/components';

import { storyContainerDecorator } from '../../../utils/decorators';

export default {
  title: 'Components|Layout/Ratio',
  component: Ratio,
  decorators: [withKnobs, storyContainerDecorator]
};

export const defaultStory = () => (
  <Ratio ratio={number('Verhältnis', 16 / 9)} bg="background.secondary" />
);

defaultStory.story = {
  name: 'Default'
};
