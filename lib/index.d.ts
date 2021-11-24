/// <reference types="react" />
declare const _default: {
    MixPanelActions: {
        init: (token: any) => void;
        identify: (userId: any) => void;
        track: (event: any, props: any) => void;
        people: {
            set: (props: any) => void;
            set_once: (props: any) => void;
        };
        register: (props: any) => void;
    };
    MixPanelProvider: ({ children, token }: {
        children: import("react").ReactNode;
        token?: string | undefined;
    }) => JSX.Element;
};
export default _default;
