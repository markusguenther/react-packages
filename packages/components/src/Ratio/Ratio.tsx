import { ReactNode } from 'react';
import styled from 'styled-components';
import { ThemeProps } from '@t3n/theme';
import { BackgroundColorProps, color } from 'styled-system';

export interface RatioProps extends ThemeProps, BackgroundColorProps {
  ratio?: 'auto' | number;
  as?: keyof JSX.IntrinsicElements;
  children?: ReactNode;
}

export const Ratio = styled.div<RatioProps>`
  ${color}

  ${({ ratio }: RatioProps) =>
    ratio === 'auto'
      ? ''
      : `
    &:before {
      content: '';
      float: left;
      width: 0;
      height: 0;
      padding-bottom: ${100 / Number(ratio)}%;
    }

    &:after {
      content: '';
      display: block;
      clear: both;
    }
  `}
`;

Ratio.defaultProps = {
  ratio: 16 / 9
};
Ratio.displayName = 'Ratio';
