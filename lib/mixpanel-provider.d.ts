import { ComponentType, FunctionComponent, ReactNode } from 'react';
import { Mixpanel } from 'mixpanel-browser';
interface WithMixPanel {
    mixpanel: Mixpanel;
}
export declare const MixPanelContext: import("react").Context<WithMixPanel>;
export declare const useMixPanel: () => WithMixPanel;
export declare function withMixpanel<T>(Component: ComponentType<T>): FunctionComponent<T & WithMixPanel>;
export declare const MixPanelProvider: ({ children, token }: {
    children: ReactNode;
    token?: string | undefined;
}) => JSX.Element;
export {};
