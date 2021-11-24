# mixpanel-utility

This is the mixpanel utility for the apps we designed in Talview

The utility provides simple wrapper over The project provides simple wrapper over mixpanel-browser to ease using Mixpanel in your React app.

# install

```bash
  npm install mixpanel-utility
```

## Usage

Then use it like you would use [Context API](https://reactjs.org/docs/context.html). In your root `App.js` :

Render your app using `MixpanelProvider`

```jsx
import mixPanelUtility from 'mixpanel-utility';
ReactDOM.render(
  <mixPanelUtility.MixPanelProvider token="xxxxxxxxxxxxxxxxx">
    <App />
  </mixPanelUtility.MixPanelProvider>,
  document.getElementById('root')
);
```

`Don't forget to initialize your Mixpanel instance if you haven't passed the token to the provider`

`Functional component`

```jsx
import React, { useEffect } from 'react';
import mixPanelUtility from 'mixpanel-utility';
const App = () => {
  const { mixpanel } = umixPanelUtility.seMixPanel();
  useEffect(() => {
    mixpanel.init('TOKEN');
    mixpanel.track('logged to site');
  }, []);
  return <div>Hello world!</div>;
};
```

`Class component`

```jsx
import React, { useEffect } from 'react';
import mixPanelUtility from 'mixpanel-utility';
class App extends React.Component {
  componentDidMount() {
    this.props.mixpanel.init('TOKEN');
    this.props.mixpanel.track('logged to site');
  }
  render() {
    return <div>Hello world!</div>;
  }
}
export default mixPanelUtility.withMixpanel(App);
```

`Other`

```js
import mixPanelUtility from 'mixpanel-utility';
let isInit = false;
export default mixPanelHandler = (type, payload) => {
  if (!isInit) {
    mixPanelUtility.actions.init('TOKEN');
    isInit = true;
  }
  if (type === 'NEW_USER') {
    Mixpanel.actions.identify(payload.id);
    Mixpanel.actions.people.set({
      $name: .payload.name,
      $email: payload.email,
      USER_ID: payload.id
    });
  } else if (type === 'END_SESSION') {
    Mixpanel.actions.track('Hello mixpanel!');
    Mixpanel.actions.people.set({
      last_seen: new Date()
    });
  }
};
```
