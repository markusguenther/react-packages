import React from 'react';
import { MarginProps, WidthProps } from 'styled-system';
import { ThemeFeedbackColor } from '@t3n/theme/src/theme/colors/colors';
export declare type VariantType = 'light' | 'dark';
export interface SwitchProps extends MarginProps, WidthProps {
    label?: string;
    name: string;
    value: any;
    checked: boolean;
    disabled?: boolean;
    variant?: VariantType;
    feedbackColor?: ThemeFeedbackColor;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const Switch: React.FC<SwitchProps>;
