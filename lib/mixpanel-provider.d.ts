import { ComponentType, FunctionComponent, ReactNode } from 'react';
import { Mixpanel } from 'mixpanel-browser';
interface WithMixPanel {
    mixpanel: Mixpanel;
}
declare const MixPanelContext: import("react").Context<WithMixPanel>;
declare const useMixPanel: () => WithMixPanel;
declare function withMixpanel<T>(Component: ComponentType<T>): FunctionComponent<T & WithMixPanel>;
declare const MixPanelProvider: ({ children, token }: {
    children: ReactNode;
    token?: string | undefined;
}) => JSX.Element;
export { useMixPanel, withMixpanel, MixPanelContext };
export default MixPanelProvider;
