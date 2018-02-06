'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles.css');

var _styles2 = _interopRequireDefault(_styles);

var _avatarPlaceholder = require('../assets/avatar-placeholder.png');

var _avatarPlaceholder2 = _interopRequireDefault(_avatarPlaceholder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserAvatar = function UserAvatar(_ref) {
  var user = _ref.comment.user;
  return _react2.default.createElement('img', { src: !user.avatar ? _avatarPlaceholder2.default : user.avatar, className: _styles2.default.avatarPlaceholder });
};

exports.default = UserAvatar;