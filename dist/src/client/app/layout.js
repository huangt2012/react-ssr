"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _reactRouter = require("react-router");
require("./layout.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Index = function Index(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "layout-box"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "koa+react+ssr"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/index",
    style: {
      marginLeft: "10px"
    }
  }, "\u9996\u9875"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    style: {
      marginLeft: "10px"
    },
    to: "/list"
  }, "\u5217\u8868\u9875"), children);
};
var _default = (0, _reactRouter.withRouter)(Index);
exports.default = _default;