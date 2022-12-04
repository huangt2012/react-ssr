"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../pages/index"));
var _list = _interopRequireDefault(require("../pages/list/list"));
var _reactRouter = require("react-router");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var routeList = [{
  path: '/index',
  component: _index.default,
  exact: true //是否精确匹配
}, {
  path: '/list',
  component: _list.default,
  exact: true
}];
var _default = routeList;
exports.default = _default;