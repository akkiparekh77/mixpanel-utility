"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mixpanelBrowser = _interopRequireDefault(require("mixpanel-browser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var envCheck = true; // process.env.NODE_ENV === 'production';

var MixPanelActions = {
  init: function init(token) {
    _mixpanelBrowser["default"].init(token, {
      debug: true
    });
  },
  identify: function identify(userId) {
    if (envCheck) {
      _mixpanelBrowser["default"].identify(userId);
    }
  },
  track: function track(event, props) {
    if (envCheck) {
      _mixpanelBrowser["default"].track(event, props);
    }
  },
  people: {
    set: function set(props) {
      if (envCheck) {
        _mixpanelBrowser["default"].people.set(props);
      }
    },
    set_once: function set_once(props) {
      if (envCheck) {
        _mixpanelBrowser["default"].people.set_once(props);
      }
    }
  },
  register: function register(props) {
    if (envCheck) {
      _mixpanelBrowser["default"].register(props);
    }
  }
};
var _default = MixPanelActions;
exports["default"] = _default;