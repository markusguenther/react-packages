import React, { Fragment } from 'react';
import {
  addDecorator,
  configure,
  setAddon,
  addParameters
} from '@storybook/react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { withA11y } from '@storybook/addon-a11y';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
// import JSXAddon from 'storybook-addon-jsx';
import { theme } from '@t3n/theme';
import viewports from './viewports';

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: ${({ theme }) => theme.fonts.default};
    font-size: 16px;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
  }
`;

addParameters({
  viewport: {
    viewports: {
      ...viewports,
      ...INITIAL_VIEWPORTS
    },
    defaultViewport: 'responsive'
  }
});

addDecorator(withA11y);
addDecorator(story => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyle />
      {story()}
    </Fragment>
  </ThemeProvider>
));

// setAddon(JSXAddon);

function loadStories() {
  // Storybook
  require('../src/stories/storybook/storybook.stories');
  // Style
  require('../src/stories/style/colors/colors.stories');
  require('../src/stories/style/typography/introduction/introduction.stories');
  require('../src/stories/style/typography/text/text.stories');
  require('../src/stories/style/typography/heading/heading.stories');
  // Layout
  require('../src/stories/layout/breakpoints/breakpoints.stories');
  require('../src/stories/layout/content/content.stories');
  require('../src/stories/layout/grid/grid.stories');
  require('../src/stories/layout/section/section.stories');
  // Components
  require('../src/stories/components/button/button.stories');
  require('../src/stories/components/card/card.stories');
  // Form
  require('../src/stories/form/input/input.stories');
  require('../src/stories/form/inputGroup/inputGroup.stories');
}

configure(loadStories, module);
