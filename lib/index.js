"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "actions", {
  enumerable: true,
  get: function get() {
    return _mixpanelAdapter["default"];
  }
});
Object.defineProperty(exports, "MixPanelContext", {
  enumerable: true,
  get: function get() {
    return _mixpanelProvider.MixPanelContext;
  }
});
Object.defineProperty(exports, "useMixPanel", {
  enumerable: true,
  get: function get() {
    return _mixpanelProvider.useMixPanel;
  }
});
Object.defineProperty(exports, "withMixpanel", {
  enumerable: true,
  get: function get() {
    return _mixpanelProvider.withMixpanel;
  }
});
Object.defineProperty(exports, "MixPanelProvider", {
  enumerable: true,
  get: function get() {
    return _mixpanelProvider.MixPanelProvider;
  }
});
Object.defineProperty(exports, "MixPanelClickTracker", {
  enumerable: true,
  get: function get() {
    return _mixpanelAutoTrack.MixPanelClickTracker;
  }
});

var _mixpanelAdapter = _interopRequireDefault(require("./mixpanel-adapter"));

var _mixpanelProvider = require("./mixpanel-provider");

var _mixpanelAutoTrack = require("./mixpanel-auto-track");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }