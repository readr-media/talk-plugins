'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles.css');

var _styles2 = _interopRequireDefault(_styles);

var _avatarReadr = require('../assets/avatar-readr.png');

var _avatarReadr2 = _interopRequireDefault(_avatarReadr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserAvatar = function UserAvatar(_ref) {
  var user = _ref.comment.user;
  return _react2.default.createElement('img', { src: !user.avatar ? _avatarReadr2.default : user.avatar, className: _styles2.default.avatarPlaceholder });
};

exports.default = UserAvatar;