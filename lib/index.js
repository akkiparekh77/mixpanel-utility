"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mixpanelAdapter = _interopRequireDefault(require("./mixpanel-adapter"));

var _mixpanelProvider = _interopRequireDefault(require("./mixpanel-provider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  MixPanelActions: _mixpanelAdapter["default"],
  MixPanelProvider: _mixpanelProvider["default"]
};
exports["default"] = _default;