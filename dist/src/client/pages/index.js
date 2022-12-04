"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactHelmet = require("react-helmet");
require("./index.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Index = function Index() {
  var handleClick = function handleClick() {
    console.log('click index component ');
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    onClick: handleClick,
    className: "page-index-box"
  }, /*#__PURE__*/_react.default.createElement(_reactHelmet.Helmet, null, /*#__PURE__*/_react.default.createElement("title", null, "\u6211\u662F\u9996\u9875"), /*#__PURE__*/_react.default.createElement("meta", {
    name: "description",
    content: "\u6211\u662F\u9996\u9875\u5173\u952E\u8BCD"
  }), /*#__PURE__*/_react.default.createElement("meta", {
    name: "keywords",
    content: "\u6211\u662F\u641C\u4E5F\u5173\u952E\u8BCD"
  })), "index");
};
var _default = Index;
exports.default = _default;