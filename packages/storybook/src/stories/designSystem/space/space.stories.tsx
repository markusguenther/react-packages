import React from 'react';
import styled, { ThemeConsumer } from 'styled-components';
import { Theme } from '@t3n/theme';
import { ColorProps, color, WidthProps, width } from 'styled-system';

import { GridItem, Grid } from '@t3n/components';

import { storyContainerDecorator } from '../../../utils/decorators';

export default {
  title: 'Design System|Space',
  decorators: [storyContainerDecorator],
  parameters: { docs: { page: null } }
};

const SpaceBox = styled.div<WidthProps & ColorProps>`
  ${width}
  ${color}
  height: 40px;
  margin-right: 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

export const spaces = () => (
  <ThemeConsumer>
    {(theme: Theme) => (
      <Grid>
        {theme.space.map((s: number, idx: number) => (
          <GridItem width={1} key={s}>
            <Wrapper>
              <SpaceBox
                width={s}
                color="shades.white"
                bg={theme.colors.background.highlight}
              />
              {idx} / {s} px
            </Wrapper>
          </GridItem>
        ))}
      </Grid>
    )}
  </ThemeConsumer>
);

spaces.story = {
  name: 'Abstände'
};
