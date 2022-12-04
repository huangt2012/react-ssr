"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _reactRouterDom = require("react-router-dom");
var _index = _interopRequireDefault(require("../router/index"));
var _config = _interopRequireDefault(require("../router/config"));
var _matchRoute = _interopRequireDefault(require("../../share/match-route"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//client/app/index.js
//浏览器端页面结构渲染入口

function clientRender() {
  var initialData = JSON.parse(document.getElementById('ssrTextInitData').value);

  //查找路由
  var matchResult = (0, _matchRoute.default)(document.location.pathname, _config.default);
  var targetRoute = matchResult.targetRoute;
  if (targetRoute) {
    //设置组件初始化数据
    targetRoute.initialData = initialData;
  }

  //渲染index
  _reactDom.default.hydrate( /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_index.default, {
    routeList: _config.default
  })), document.getElementById('root'));
}
clientRender();