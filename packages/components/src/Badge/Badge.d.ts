import { ThemeBackgroundColor } from '@t3n/theme/src/theme/colors/colors';
export interface BadgeProps {
    variant?: ThemeBackgroundColor;
    small?: boolean;
    rounded?: boolean;
}
export declare const Badge: import("styled-components").StyledComponent<"span", any, BadgeProps, never>;
