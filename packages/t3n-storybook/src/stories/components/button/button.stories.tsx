import React from 'react';
import { storiesOf } from '@storybook/react';
import { doc } from 'storybook-readme';

import { Button, Text } from '@t3n/components';
import StoryContainer from '../../../components/StoryContainer';
import buttonMD from './button.md';


storiesOf('Components|Button', module)
  .addDecorator(story => <StoryContainer>{story()}</StoryContainer>)
  .add('Einleitung', doc(buttonMD))
  .add('Variants', () => (
    <div>
      <Button href="http://www.google.de" onClick={() => null} target="_blank">
        Click me
      </Button>
      <Button
        color="dark"
        href="http://www.google.de"
        onClick={() => null}
        target="_blank"
      >
        Click me
      </Button>
      <Button
        secondary
        href="http://www.google.de"
        onClick={() => null}
        target="_blank"
      >
        Click me
      </Button>
    </div>
  ));
