import { createContext, useContext, ComponentType, FunctionComponent, ReactNode } from 'react';
import mixpanel, { Mixpanel } from 'mixpanel-browser';

interface WithMixPanel {
  mixpanel: Mixpanel;
}

export const MixPanelContext = createContext({} as WithMixPanel);
export const useMixPanel = () => useContext(MixPanelContext);

export function withMixpanel<T>(Component: ComponentType<T>): FunctionComponent<T & WithMixPanel> {
  return (props: T) => <Component {...props} mixpanel={mixpanel} />;
}

export const MixPanelProvider = ({ children, token = '' }: { children: ReactNode; token?: string }) => {
  if (!!token) {
    mixpanel.init(token);
  }
  return <MixPanelContext.Provider value={{ mixpanel }}>{children}</MixPanelContext.Provider>;
};
