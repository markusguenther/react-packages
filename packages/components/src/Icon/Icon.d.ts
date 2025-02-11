import React from 'react';
import { WidthProps, HeightProps, ColorProps, MarginProps, PositionProps } from 'styled-system';
export interface BaseIconProps extends React.SVGProps<SVGSVGElement>, MarginProps, PositionProps {
    component: React.FunctionComponent<React.SVGProps<SVGElement>>;
}
export interface IconProps extends Omit<BaseIconProps, 'width' | 'height' | 'fill'>, WidthProps, HeightProps {
    fill?: ColorProps['color'];
}
export declare const Icon: import("styled-components").StyledComponent<({ component: IconComponent, width, height, m, margin, mt, marginTop, mb, marginBottom, ml, marginLeft, mr, marginRight, my, mx, top, bottom, left, right, ...props }: BaseIconProps) => JSX.Element, any, IconProps, never>;
export default Icon;
