# mixpanel-utility

This is the mixpanel utility for the apps we designed in Talview

The utility provides simple wrapper over The project provides simple wrapper over mixpanel-browser to ease using Mixpanel in your React app.

# install

```bash
  npm install mixpanel-utility
```
or
```bash
  yarn add mixpanel-utility
```


## Usage

Then use it like you would use [Context API](https://reactjs.org/docs/context.html). In your root `App.js` :

### `MixpanelProvider` Component
Render your app using `MixpanelProvider`

```jsx
import mpu from 'mixpanel-utility';
ReactDOM.render(
  <mpu.MixPanelProvider token="xxxxxxxxxxxxxxxxx">
    <App />
  </mpu.MixPanelProvider>,
  document.getElementById('root')
);
```

### `useMixpanel` Hook
`Don't forget to initialize your Mixpanel instance if you haven't passed the token to the provider`

`Functional component`

```jsx
import React, { useEffect } from 'react';
import mpu from 'mixpanel-utility';
const App = () => {
  const { mixpanel } = mpu.useMixPanel();
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
import mpu from 'mixpanel-utility';
class App extends React.Component {
  componentDidMount() {
    this.props.mixpanel.init('TOKEN');
    this.props.mixpanel.track('logged to site');
  }
  render() {
    return <div>Hello world!</div>;
  }
}
export default mpu.withMixpanel(App);
```

`Other`

```js
import mpu from 'mixpanel-utility';
let isInit = false;
export default mixPanelHandler = (type, payload) => {
  if (!isInit) {
    mpu.actions.init('TOKEN');
    isInit = true;
  }
  if (type === 'NEW_USER') {
    mpu.actions.identify(payload.id);
    mpu.actions.people.set({
      $name: .payload.name,
      $email: payload.email,
      USER_ID: payload.id
    });
  } else if (type === 'END_SESSION') {
    mpu.actions.track('Hello mixpanel!');
    mpu.actions.people.set({
      last_seen: new Date()
    });
  }
};
```


### `withMixpanel` High-Order Component

```jsx
import React, { Component } from 'react';
import mpu from 'mixpanel-utility';

class Dashboard extends Component {
  render() {
    const { mixpanel } = this.props;
    if (mixpanel.config.token) { // Check that a token was provided (useful if you have environments without Mixpanel)
      mixpanel.track('My Event', {
        my_custom_prop: 'foo',
      });
    }
    return (
      <>
        ...
      </>
    );
  }
}
export default mpu.withMixpanel(Dashboard);
```