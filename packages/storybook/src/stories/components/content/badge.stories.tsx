import React from 'react';
import { ThemeConsumer } from 'styled-components';

import { Badge, Heading, Grid, GridItem } from '@t3n/components';
import { text, select, boolean } from '@storybook/addon-knobs';
import { ThemeBackgroundColor } from '@t3n/theme/src/theme/colors/colors';

import { storyContainerDecorator } from '../../../utils/decorators';

export default {
  title: 'Components|Content/Badge',
  component: Badge,
  decorators: [storyContainerDecorator]
};

export const defaultStory = () => (
  <ThemeConsumer>
    {theme => {
      const colors = Object.keys(
        theme.colors.background
      ) as ThemeBackgroundColor[];

      return (
        <Badge
          rounded={boolean('Abgerundet?', false)}
          small={boolean('Klein?', false)}
          variant={select('Variante', colors, 'highlight')}
        >
          {text('Badge Text', 'Ratgeber')}
        </Badge>
      );
    }}
  </ThemeConsumer>
);

defaultStory.story = {
  name: 'Default'
};

export const variants = () => (
  <ThemeConsumer>
    {theme => {
      const colors = Object.keys(
        theme.colors.background
      ) as ThemeBackgroundColor[];

      const badgeText = text('Badge Text', 'Ratgeber');

      return (
        <>
          <Heading as="h3" mt={0}>
            Kleine Badges
          </Heading>
          <Grid wide>
            {colors.map(c => (
              <GridItem key={c} width={1 / colors.length}>
                <Badge small variant={c}>
                  {badgeText}
                </Badge>
              </GridItem>
            ))}
          </Grid>

          <Heading as="h3">Abgerundet</Heading>
          <Grid wide>
            {colors.map(c => (
              <GridItem key={c} width={1 / colors.length}>
                <Badge small rounded variant={c}>
                  {badgeText}
                </Badge>
              </GridItem>
            ))}
          </Grid>

          <Heading as="h3">Große Badges</Heading>
          <Grid wide>
            {colors.map(c => (
              <GridItem key={c} width={1 / colors.length}>
                <Badge small={false} variant={c}>
                  {badgeText}
                </Badge>
              </GridItem>
            ))}
          </Grid>

          <Heading as="h3">Abgerundet</Heading>
          <Grid wide>
            {colors.map(c => (
              <GridItem key={c} width={1 / colors.length}>
                <Badge small={false} variant={c}>
                  {badgeText}
                </Badge>
              </GridItem>
            ))}
          </Grid>
        </>
      );
    }}
  </ThemeConsumer>
);

variants.story = {
  name: 'Varianten'
};
