import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { space, size, color, SpaceProps, SizeProps } from 'styled-system';
import { ThemeProps, composeTextStyle } from '@t3n/styles';

export type HeadingElements = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps extends SpaceProps, SizeProps {
  as?: HeadingElements;
  styleAs?: HeadingElements;
  color?: string;
  children?: ReactNode;
}

const font = ({ as, styleAs, theme }: HeadingProps & ThemeProps) =>
  composeTextStyle({ textStyle: styleAs || as || 'h1', theme });

const Heading = styled.h1<HeadingProps>`
  ${font}
  ${space}
  ${size}
  ${color}
`;

Heading.displayName = 'Heading';

Heading.defaultProps = {
  color: 'brand.anthracite'
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const H1 = ({ as, ...props }: HeadingProps) => (
  <Heading as="h1" {...props} />
);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const H2 = ({ as, ...props }: HeadingProps) => (
  <Heading as="h2" {...props} />
);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const H3 = ({ as, ...props }: HeadingProps) => (
  <Heading as="h3" {...props} />
);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const H4 = ({ as, ...props }: HeadingProps) => (
  <Heading as="h4" {...props} />
);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const H5 = ({ as, ...props }: HeadingProps) => (
  <Heading as="h5" {...props} />
);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const H6 = ({ as, ...props }: HeadingProps) => (
  <Heading as="h6" {...props} />
);

export default Heading;
