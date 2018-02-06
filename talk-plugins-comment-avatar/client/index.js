'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n      fragment TalkAvatar_CreateCommentResponse on CreateCommentResponse {\n        comment {\n          user {\n            avatar\n          }\n        }\n      }'], ['\n      fragment TalkAvatar_CreateCommentResponse on CreateCommentResponse {\n        comment {\n          user {\n            avatar\n          }\n        }\n      }']);

var _UserAvatar = require('./containers/UserAvatar');

var _UserAvatar2 = _interopRequireDefault(_UserAvatar);

var _reactApollo = require('react-apollo');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = {
  slots: {
    commentAvatar: [_UserAvatar2.default]
  },
  fragments: {
    CreateCommentResponse: (0, _reactApollo.gql)(_templateObject)
  },
  mutations: {
    PostComment: function PostComment(_ref) {
      var variables = _ref.variables;
      return {
        optimisticResponse: {
          createComment: {
            comment: {
              __typename: 'Comment',
              user: {
                avatar: null
              }
            }
          }
        }
      };
    }
  }
};