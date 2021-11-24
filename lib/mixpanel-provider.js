"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withMixpanel = withMixpanel;
exports["default"] = exports.MixPanelContext = exports.useMixPanel = void 0;

var _react = require("react");

var _mixpanelBrowser = _interopRequireDefault(require("mixpanel-browser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var MixPanelContext = /*#__PURE__*/(0, _react.createContext)({});
exports.MixPanelContext = MixPanelContext;

var useMixPanel = function useMixPanel() {
  return (0, _react.useContext)(MixPanelContext);
};

exports.useMixPanel = useMixPanel;

function withMixpanel(Component) {
  return function (props) {
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      mixpanel: _mixpanelBrowser["default"]
    }));
  };
}

var MixPanelProvider = function MixPanelProvider(_ref) {
  var children = _ref.children,
      _ref$token = _ref.token,
      token = _ref$token === void 0 ? '' : _ref$token;

  if (!!token) {
    _mixpanelBrowser["default"].init(token);
  }

  return /*#__PURE__*/React.createElement(MixPanelContext.Provider, {
    value: {
      mixpanel: _mixpanelBrowser["default"]
    }
  }, children);
};

var _default = MixPanelProvider;
exports["default"] = _default;