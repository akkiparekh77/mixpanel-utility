declare const MixPanelActions: {
    init: (token: any) => void;
    identify: (userId: any) => void;
    track: (event: any, props: any) => void;
    people: {
        set: (props: any) => void;
        set_once: (props: any) => void;
    };
    register: (props: any) => void;
};
export default MixPanelActions;
