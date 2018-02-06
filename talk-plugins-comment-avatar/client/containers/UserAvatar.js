'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    fragment UserAvatar_comment on Comment {\n      user {\n        avatar\n      }\n    }'], ['\n    fragment UserAvatar_comment on Comment {\n      user {\n        avatar\n      }\n    }']);

var _reactApollo = require('react-apollo');

var _hocs = require('plugin-api/beta/client/hocs');

var _UserAvatar = require('../components/UserAvatar');

var _UserAvatar2 = _interopRequireDefault(_UserAvatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = (0, _hocs.withFragments)({
  comment: (0, _reactApollo.gql)(_templateObject)
})(_UserAvatar2.default);