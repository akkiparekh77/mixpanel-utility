import mixpanel from 'mixpanel-browser';

const envCheck = true; // process.env.NODE_ENV === 'production';

const MixPanelActions = {
  init: (token: any) => {
    mixpanel.init(token, { debug: true });
  },
  identify: (userId: any) => {
    if (envCheck) {
      mixpanel.identify(userId);
    }
  },
  track: (event: any, props: any) => {
    if (envCheck) {
      mixpanel.track(event, props);
    }
  },
  people: {
    set: (props: any) => {
      if (envCheck) {
        mixpanel.people.set(props);
      }
    },
    set_once: (props: any) => {
      if (envCheck) {
        mixpanel.people.set_once(props);
      }
    }
  },
  register: (props: any) => {
    if (envCheck) {
      mixpanel.register(props);
    }
  }
};

export default MixPanelActions;
