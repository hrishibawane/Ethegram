"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _Layout = require("../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _social = require("../ethereum/social");

var _social2 = _interopRequireDefault(_social);

var _web = require("../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _routes = require("../routes");

var _ipfs = require("../ethereum/ipfs");

var _ipfs2 = _interopRequireDefault(_ipfs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/hrishib/Desktop/prototype/pages/index.js?entry";


var SocialIndex = function (_Component) {
  (0, _inherits3.default)(SocialIndex, _Component);

  function SocialIndex() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SocialIndex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SocialIndex.__proto__ || (0, _getPrototypeOf2.default)(SocialIndex)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currAccount: "",
      posts: [],
      postCount: 0,
      items: [],
      images: [],
      comments: [],
      newComment: "",
      disabled: false,
      loading: false,
      name: ''
    }, _this.likePost = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(index) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(index);
                //const accs = await web3.eth.getAccounts();

                _context.prev = 1;
                _context.next = 4;
                return _social2.default.methods.likePost(index).send({
                  from: _this.state.currAccount,
                  value: _web2.default.utils.toWei("0.00001", "ether")
                });

              case 4:
                _context.next = 8;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](1);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[1, 6]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.renderPosts = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      var posts, items;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              posts = _this.state.posts;
              _context3.next = 3;
              return _promise2.default.all(posts.map(function () {
                var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(post, index) {
                  var src, data, bpic;
                  return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          src = void 0;

                          if (!(post.imgIpfsHash.length > 0)) {
                            _context2.next = 9;
                            break;
                          }

                          _context2.next = 4;
                          return _ipfs2.default.files.get(post.imgIpfsHash);

                        case 4:
                          data = _context2.sent;
                          bpic = _this.uint8ToBase64(data[0].content);

                          src = "data:image/png;base64," + bpic;
                          _context2.next = 10;
                          break;

                        case 9:
                          src = null;

                        case 10:
                          return _context2.abrupt("return", {
                            key: index,
                            header: _react2.default.createElement("h3", { style: { fontSize: "20px" }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 82
                              }
                            }, post.caption),
                            description: _react2.default.createElement("div", { style: { border: "2px solid grey" }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 84
                              }
                            }, _react2.default.createElement("p", { style: { margin: "10px", fontSize: "15px" }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 85
                              }
                            }, post.description), _react2.default.createElement(_semanticUiReact.Image, {
                              style: { padding: "20px" },
                              hidden: src == null,
                              src: src,
                              fluid: true,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 88
                              }
                            })),
                            meta: _react2.default.createElement("p", { style: { color: "grey" }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 96
                              }
                            }, post.timestamp),
                            extra: _react2.default.createElement("div", {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 98
                              }
                            }, _react2.default.createElement(_semanticUiReact.Button, {
                              onClick: function onClick() {
                                return _this.likePost(index);
                              },
                              color: "red",
                              content: "Like",
                              icon: "heart",
                              size: "tiny",
                              label: { basic: true, color: "red", content: post.likes },
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 99
                              }
                            }), _react2.default.createElement(_semanticUiReact.Button, { color: "linkedin", content: "Comments", size: "tiny", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 107
                              }
                            })),
                            fluid: true
                          });

                        case 11:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, _this2);
                }));

                return function (_x2, _x3) {
                  return _ref4.apply(this, arguments);
                };
              }()));

            case 3:
              items = _context3.sent;

              _this.setState({ items: items });

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, _this2);
    })), _this.signIn = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _this.setState({ loading: true });
              _context4.next = 3;
              return _social2.default.methods.signIn(_this.state.name).send({
                from: _this.state.currAccount
              });

            case 3:
              _this.setState({ loading: false, disabled: true });

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(SocialIndex, [{
    key: "componentDidMount",
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
        var accs, isUser, postCount, posts;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _web2.default.eth.getAccounts();

              case 2:
                accs = _context5.sent;
                _context5.next = 5;
                return _social2.default.methods.isUser(accs[0]).call();

              case 5:
                isUser = _context5.sent;

                console.log(accs[0], isUser);
                this.setState({ disabled: isUser, currAccount: accs[0] });

                _context5.next = 10;
                return _social2.default.methods.getPostsCount().call();

              case 10:
                postCount = _context5.sent;
                _context5.next = 13;
                return _promise2.default.all(Array(parseInt(postCount)).fill().map(function (element, index) {
                  return _social2.default.methods.posts(index).call();
                }));

              case 13:
                posts = _context5.sent;

                this.setState({ posts: posts, postCount: postCount });

                this.renderPosts();
              // this.getComments();

              case 16:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function componentDidMount() {
        return _ref6.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "uint8ToBase64",
    value: function uint8ToBase64(buffer) {
      var binary = "";
      var bytes = [].slice.call(new Uint8Array(buffer));

      bytes.forEach(function (b) {
        return binary += String.fromCharCode(b);
      });

      return window.btoa(binary);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, _react2.default.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, "Posts"), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 12, __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Group, { centered: true, items: this.state.items, __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      })), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 4, textAlign: "left", __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, _react2.default.createElement(_semanticUiReact.Form, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Input, {
        disabled: this.state.disabled,
        fluid: true,
        label: "Name",
        value: this.state.name,
        onChange: function onChange(event) {
          return _this3.setState({ name: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }), _react2.default.createElement(_semanticUiReact.Button, {
        onClick: this.signIn,
        color: "blue",
        disabled: this.state.disabled,
        loading: this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, "Sign In")), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }), _react2.default.createElement(_routes.Link, { route: "/posts/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { size: "medium", primary: true, disabled: !this.state.disabled, __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, "Create New Post"))))));
    }
  }]);

  return SocialIndex;
}(_react.Component);

exports.default = SocialIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkJ1dHRvbiIsIkdyaWQiLCJJbWFnZSIsIkZvcm0iLCJMYXlvdXQiLCJzb2NpYWwiLCJ3ZWIzIiwiTGluayIsImlwZnMiLCJTb2NpYWxJbmRleCIsInN0YXRlIiwiY3VyckFjY291bnQiLCJwb3N0cyIsInBvc3RDb3VudCIsIml0ZW1zIiwiaW1hZ2VzIiwiY29tbWVudHMiLCJuZXdDb21tZW50IiwiZGlzYWJsZWQiLCJsb2FkaW5nIiwibmFtZSIsImxpa2VQb3N0IiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kcyIsInNlbmQiLCJmcm9tIiwidmFsdWUiLCJ1dGlscyIsInRvV2VpIiwicmVuZGVyUG9zdHMiLCJhbGwiLCJtYXAiLCJwb3N0Iiwic3JjIiwiaW1nSXBmc0hhc2giLCJsZW5ndGgiLCJmaWxlcyIsImdldCIsImRhdGEiLCJicGljIiwidWludDhUb0Jhc2U2NCIsImNvbnRlbnQiLCJrZXkiLCJoZWFkZXIiLCJmb250U2l6ZSIsImNhcHRpb24iLCJkZXNjcmlwdGlvbiIsImJvcmRlciIsIm1hcmdpbiIsInBhZGRpbmciLCJtZXRhIiwiY29sb3IiLCJ0aW1lc3RhbXAiLCJleHRyYSIsImJhc2ljIiwibGlrZXMiLCJmbHVpZCIsInNldFN0YXRlIiwic2lnbkluIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NzIiwiaXNVc2VyIiwiY2FsbCIsImdldFBvc3RzQ291bnQiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiLCJidWZmZXIiLCJiaW5hcnkiLCJieXRlcyIsInNsaWNlIiwiVWludDhBcnJheSIsImZvckVhY2giLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJiIiwid2luZG93IiwiYnRvYSIsImV2ZW50IiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFB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