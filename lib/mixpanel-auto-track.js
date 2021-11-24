"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MixPanelClickTracker = void 0;

var _react = _interopRequireDefault(require("react"));

var _mixpanelProvider = require("./mixpanel-provider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Click Event Tracking Handler
var MixPanelClickTracker = function MixPanelClickTracker(props) {
  var _useMixPanel = (0, _mixpanelProvider.useMixPanel)(),
      mixpanel = _useMixPanel.mixpanel;

  var children = props.children,
      onClick = props.onClick,
      trackingEventName = props.trackingEventName,
      trackingEventData = props.trackingEventData;

  var handleOnClick = function handleOnClick(e) {
    var data = props.data,
        event = props.event,
        onClick = props.onClick;

    if (trackingEventName && trackingEventData) {
      mixpanel.track(trackingEventName, trackingEventData);
    }

    if (onClick && typeof onClick === 'function') {
      onClick(e);
    }
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, _react["default"].Children.map(children, function (child) {
    return /*#__PURE__*/_react["default"].cloneElement(child, _objectSpread({
      onClick: handleOnClick
    }, props));
  }));
}; // Todos
// Mouse Enter Event Tracking Handler
// Page Scroll Event Tracking Handler
// max-scroll-tracker
// impression-tracker
// media-query-tracker
// outbound-form-tracker
// outbound-link-tracker
// page-visibility-tracker
// url-change-tracker


exports.MixPanelClickTracker = MixPanelClickTracker;