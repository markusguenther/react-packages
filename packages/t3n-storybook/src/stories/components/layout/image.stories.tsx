import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, number } from '@storybook/addon-knobs';

import { Image } from '@t3n/components';
import StoryContainer from '../../../components/StoryContainer';

const options = {
  range: true,
  min: 0,
  max: 100,
  step: 5
};

storiesOf('Components|Content/Image', module)
  .addDecorator(story => <StoryContainer>{story()}</StoryContainer>)
  .addDecorator(withKnobs)
  .add(
    'Default',
    () => (
      <div>
        <Image
          src="https://assets.t3n.sc/news/wp-content/uploads/2019/08/tier-e-scooter-hero.jpg"
          alt="Image Alt-Text"
          width={text('Breite', '')}
          height={text('Höhe', '')}
          processConfiguration={{
            fit: 'crop',
            quality: number('Qualität', 65, options),
            aspectRatio: '16:9'
          }}
        />
      </div>
    ),
    {
      options: {
        showPanel: true
      }
    }
  );
