import React, { ReactNode } from 'react';
import { LinkProps } from '../Link';
export interface BreadcrumbsItemProps extends Pick<LinkProps, 'variant'> {
    href?: string;
    className?: string;
    label: string;
    linkComponent?: React.ComponentType<Omit<LinkProps, 'color'> & React.AnchorHTMLAttributes<HTMLAnchorElement>>;
}
export declare const BreadcrumbsItem: import("styled-components").StyledComponent<({ href, label, className, variant, linkComponent: LinkComponent }: BreadcrumbsItemProps) => JSX.Element, any, {}, never>;
export interface BreadcrumbsProps {
    children: ReactNode;
}
export declare const Breadcrumbs: ({ children }: BreadcrumbsProps) => JSX.Element;
