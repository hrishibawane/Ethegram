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
      newComment: "",
      disabled: false,
      loading: false,
      name: "",
      index: 0,
      username: "",
      done: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(index) {
        var accs, str;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(index);
                _context.next = 3;
                return _web2.default.eth.getAccounts();

              case 3:
                accs = _context.sent;
                str = _this.state.username + ": " + _this.state.newComment;

                console.log(str);
                _context.prev = 6;
                _context.next = 9;
                return _social2.default.methods.postComment(index, str).send({ from: accs[0] });

              case 9:
                console.log("Comment Posted by " + accs[0]);
                _this.setState({ caption: "" });
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](6);

                console.log(_context.t0.message);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[6, 13]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.likePost = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(index) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log(index);

                _context2.prev = 1;
                _context2.next = 4;
                return _social2.default.methods.likePost(index).send({
                  from: _this.state.currAccount
                });

              case 4:
                _this.setState({ done: true });
                _context2.next = 9;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](1);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[1, 7]]);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }(), _this.signIn = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _this.setState({ loading: true });
              _context3.next = 3;
              return _social2.default.methods.signIn(_this.state.name).send({
                from: _this.state.currAccount,
                value: _web2.default.utils.toWei("0.02", "ether")
              });

            case 3:
              _this.setState({ loading: false, disabled: true });

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, _this2);
    })), _this.renderPosts = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
      var posts, items;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              posts = _this.state.posts;
              _context5.next = 3;
              return _promise2.default.all(posts.map(function () {
                var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(post, index) {
                  var src, data, bpic;
                  return _regenerator2.default.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          // const name = await social.methods.getUsername(post.owner).call();
                          src = void 0;

                          if (!(post.imgIpfsHash.length > 0)) {
                            _context4.next = 9;
                            break;
                          }

                          _context4.next = 4;
                          return _ipfs2.default.files.get(post.imgIpfsHash);

                        case 4:
                          data = _context4.sent;
                          bpic = _this.uint8ToBase64(data[0].content);

                          src = "data:image/png;base64," + bpic;
                          _context4.next = 10;
                          break;

                        case 9:
                          src = null;

                        case 10:
                          return _context4.abrupt("return", {
                            key: index,
                            header: _react2.default.createElement("div", {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 129
                              }
                            }, _react2.default.createElement("h3", { style: { fontSize: "20px" }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 130
                              }
                            }, post.caption), _react2.default.createElement("h5", {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 131
                              }
                            }, _this.state.username)),
                            description: _react2.default.createElement("div", { style: { border: "2px solid grey" }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 135
                              }
                            }, _react2.default.createElement("p", { style: { margin: "10px", fontSize: "15px" }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 136
                              }
                            }, post.description), _react2.default.createElement(_semanticUiReact.Image, {
                              style: { padding: "20px" },
                              hidden: src == null,
                              src: src,
                              fluid: true,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 139
                              }
                            })),
                            meta: _react2.default.createElement("p", { style: { color: "grey" }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 147
                              }
                            }, post.timestamp),
                            extra: _react2.default.createElement("div", {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 149
                              }
                            }, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: function onSubmit() {
                                return _this.onSubmit(index);
                              }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 150
                              }
                            }, _react2.default.createElement(_semanticUiReact.Form.Field, { inline: true, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 151
                              }
                            }, _react2.default.createElement(_semanticUiReact.Input, {
                              focus: true,
                              placeholder: "Add a comment...",
                              value: _this.state.caption,
                              onChange: function onChange(event) {
                                return _this.setState({ newComment: event.target.value });
                              },
                              style: { width: "70%", height: "40px" },
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 152
                              }
                            }), _react2.default.createElement(_semanticUiReact.Button, { size: "medium", color: "linkedin", style: { height: "40px" }, inverted: true, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 161
                              }
                            }, "Post Comment"))), _react2.default.createElement("br", {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 166
                              }
                            }), _react2.default.createElement(_semanticUiReact.Button, {
                              onClick: function onClick() {
                                return _this.likePost(index);
                              },
                              color: "red",
                              content: "Like",
                              icon: "heart",
                              size: "small",
                              label: { basic: true, color: "red", content: post.likes },
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 167
                              }
                            }), _react2.default.createElement(_semanticUiReact.Modal, {
                              trigger: _react2.default.createElement(_semanticUiReact.Button, { size: "small", primary: true, __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 177
                                }
                              }, "View Comments"),
                              size: "small",
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 175
                              }
                            }, _react2.default.createElement(_semanticUiReact.Header, { content: "Comments", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 183
                              }
                            }), _react2.default.createElement(_semanticUiReact.Modal.Content, {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 184
                              }
                            }, _react2.default.createElement(_semanticUiReact.List, { divided: true, items: post.comments.split("/"), __source: {
                                fileName: _jsxFileName,
                                lineNumber: 185
                              }
                            })), _react2.default.createElement(_semanticUiReact.Modal.Actions, {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 187
                              }
                            }, _react2.default.createElement(_semanticUiReact.Button, { color: "green", inverted: true, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 188
                              }
                            }, "Close")))),
                            fluid: true
                          });

                        case 11:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4, _this2);
                }));

                return function (_x3, _x4) {
                  return _ref6.apply(this, arguments);
                };
              }()));

            case 3:
              items = _context5.sent;

              _this.setState({ items: items });

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(SocialIndex, [{
    key: "componentDidMount",
    value: function () {
      var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
        var accs, isUser, userDetails, username, balance, postCount, posts;
        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _web2.default.eth.getAccounts();

              case 2:
                accs = _context6.sent;
                _context6.next = 5;
                return _social2.default.methods.isUser(accs[0]).call();

              case 5:
                isUser = _context6.sent;
                _context6.next = 8;
                return _social2.default.methods.getUserDetails(accs[0]).call();

              case 8:
                userDetails = _context6.sent;
                username = userDetails[0];
                _context6.next = 12;
                return _social2.default.methods.getContractBalance().call();

              case 12:
                balance = _context6.sent;

                balance = _web2.default.utils.fromWei(balance, "ether");
                console.log(accs[0], username);
                console.log("Balance: " + balance);

                this.setState({
                  disabled: isUser,
                  currAccount: accs[0],
                  username: username
                });

                _context6.next = 19;
                return _social2.default.methods.getPostsCount().call();

              case 19:
                postCount = _context6.sent;
                _context6.next = 22;
                return _promise2.default.all(Array(parseInt(postCount)).fill().map(function (element, index) {
                  return _social2.default.methods.posts(index).call();
                }));

              case 22:
                posts = _context6.sent;

                this.setState({ posts: posts, postCount: postCount });

                this.renderPosts();

              case 25:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function componentDidMount() {
        return _ref7.apply(this, arguments);
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
          lineNumber: 205
        }
      }, _react2.default.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }, "Posts"), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 12, __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Group, { centered: true, items: this.state.items, __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        }
      })), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 4, textAlign: "left", __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        }
      }, _react2.default.createElement(_semanticUiReact.Form, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
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
          lineNumber: 214
        }
      }), _react2.default.createElement(_semanticUiReact.Button, {
        onClick: this.signIn,
        style: { backgroundColor: "#003152", color: "#FFF" },
        disabled: this.state.disabled,
        loading: this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        }
      }, "Sign In")), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        }
      }), _react2.default.createElement(_routes.Link, { route: "/posts/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        size: "medium",
        style: { backgroundColor: "#003152", color: "#FFF" },
        disabled: !this.state.disabled,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        }
      }, "Create New Post"))))));
    }
  }]);

  return SocialIndex;
}(_react.Component);

exports.default = SocialIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkJ1dHRvbiIsIkdyaWQiLCJJbWFnZSIsIkZvcm0iLCJNb2RhbCIsIkhlYWRlciIsIkxpc3QiLCJJbnB1dCIsIkxheW91dCIsInNvY2lhbCIsIndlYjMiLCJMaW5rIiwiUm91dGVyIiwiaXBmcyIsIlNvY2lhbEluZGV4Iiwic3RhdGUiLCJjdXJyQWNjb3VudCIsInBvc3RzIiwicG9zdENvdW50IiwiaXRlbXMiLCJpbWFnZXMiLCJuZXdDb21tZW50IiwiZGlzYWJsZWQiLCJsb2FkaW5nIiwibmFtZSIsImluZGV4IiwidXNlcm5hbWUiLCJkb25lIiwib25TdWJtaXQiLCJjb25zb2xlIiwibG9nIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NzIiwic3RyIiwibWV0aG9kcyIsInBvc3RDb21tZW50Iiwic2VuZCIsImZyb20iLCJzZXRTdGF0ZSIsImNhcHRpb24iLCJtZXNzYWdlIiwibGlrZVBvc3QiLCJzaWduSW4iLCJ2YWx1ZSIsInV0aWxzIiwidG9XZWkiLCJyZW5kZXJQb3N0cyIsImFsbCIsIm1hcCIsInBvc3QiLCJzcmMiLCJpbWdJcGZzSGFzaCIsImxlbmd0aCIsImZpbGVzIiwiZ2V0IiwiZGF0YSIsImJwaWMiLCJ1aW50OFRvQmFzZTY0IiwiY29udGVudCIsImtleSIsImhlYWRlciIsImZvbnRTaXplIiwiZGVzY3JpcHRpb24iLCJib3JkZXIiLCJtYXJnaW4iLCJwYWRkaW5nIiwibWV0YSIsImNvbG9yIiwidGltZXN0YW1wIiwiZXh0cmEiLCJldmVudCIsInRhcmdldCIsIndpZHRoIiwiaGVpZ2h0IiwiYmFzaWMiLCJsaWtlcyIsImNvbW1lbnRzIiwic3BsaXQiLCJmbHVpZCIsImlzVXNlciIsImNhbGwiLCJnZXRVc2VyRGV0YWlscyIsInVzZXJEZXRhaWxzIiwiZ2V0Q29udHJhY3RCYWxhbmNlIiwiYmFsYW5jZSIsImZyb21XZWkiLCJnZXRQb3N0c0NvdW50IiwiQXJyYXkiLCJwYXJzZUludCIsImZpbGwiLCJlbGVtZW50IiwiYnVmZmVyIiwiYmluYXJ5IiwiYnl0ZXMiLCJzbGljZSIsIlVpbnQ4QXJyYXkiLCJmb3JFYWNoIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiYiIsIndpbmRvdyIsImJ0b2EiLCJiYWNrZ3JvdW5kQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQ0UsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBOztBQUVGLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBTSxBQUFjOztBQUM3QixBQUFPLEFBQVU7Ozs7Ozs7OztJLEFBRVg7Ozs7Ozs7Ozs7Ozs7OztzTixBQUNKO21CQUFRLEFBQ08sQUFDYjthQUZNLEFBRUMsQUFDUDtpQkFITSxBQUdLLEFBQ1g7YUFKTSxBQUlDLEFBQ1A7Y0FMTSxBQUtFLEFBQ1I7a0JBTk0sQUFNTSxBQUNaO2dCQVBNLEFBT0ksQUFDVjtlQVJNLEFBUUcsQUFDVDtZQVRNLEFBU0EsQUFDTjthQVZNLEFBVUMsQUFDUDtnQkFYTSxBQVdJLEFBQ1Y7WSxBQVpNLEFBWUE7QUFaQSxBQUNOLGFBY0YsQTsyRkFBVyxpQkFBQSxBQUFNLE9BQU47a0JBQUE7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ1Q7d0JBQUEsQUFBUSxJQURDLEFBQ1QsQUFBWTtnQ0FESDt1QkFFVSxjQUFBLEFBQUssSUFGZixBQUVVLEFBQVM7O21CQUF0QjtBQUZHLGdDQUlMO0FBSkssc0JBSUMsTUFBQSxBQUFLLE1BQUwsQUFBVyxXQUFYLEFBQXNCLE9BQU8sTUFBQSxBQUFLLE1BSm5DLEFBSXlDLEFBQ2xEOzt3QkFBQSxBQUFRLElBTEMsQUFLVCxBQUFZO2dDQUxIO2dDQUFBO3VCQU9ELGlCQUFBLEFBQU8sUUFBUCxBQUFlLFlBQWYsQUFBMkIsT0FBM0Is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QWdCLEFBQW9CO0FBQWxELEFBRUE7O2FBQU8sT0FBQSxBQUFPLEtBQWQsQUFBTyxBQUFZLEFBQ3BCOzs7OzZCQXVHUTttQkFDUDs7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsMEJBQUEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtvQkFBcEI7c0JBQUEsQUFDRTtBQURGO3VDQUNFLEFBQUMsc0JBQUQsQUFBTSxTQUFNLFVBQVosTUFBcUIsT0FBTyxLQUFBLEFBQUssTUFBakMsQUFBdUM7b0JBQXZDO3NCQUZKLEFBQ0UsQUFDRSxBQUdGO0FBSEU7MkJBR0QsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQixHQUFHLFdBQXZCLEFBQWlDO29CQUFqQztzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsdUNBQ0UsQUFBQyxzQkFBRCxBQUFNO2tCQUNNLEtBQUEsQUFBSyxNQURqQixBQUN1QixBQUNyQjtlQUZGLEFBR0U7ZUFIRixBQUdRLEFBQ047ZUFBTyxLQUFBLEFBQUssTUFKZCxBQUlvQixBQUNsQjtrQkFBVSx5QkFBQTtpQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLE1BQU0sTUFBQSxBQUFNLE9BQXJDLEFBQVMsQUFBYyxBQUFxQjtBQUx4RDs7b0JBQUE7c0JBREYsQUFDRSxBQU9BO0FBUEE7QUFDRSwwQkFNRixBQUFDO2lCQUNVLEtBRFgsQUFDZ0IsQUFDZDtlQUFPLEVBQUUsaUJBQUYsQUFBbUIsV0FBVyxPQUZ2QyxBQUVTLEFBQXFDLEFBQzVDO2tCQUFVLEtBQUEsQUFBSyxNQUhqQixBQUd1QixBQUNyQjtpQkFBUyxLQUFBLEFBQUssTUFKaEIsQUFJc0I7O29CQUp0QjtzQkFBQTtBQUFBO0FBQ0UsU0FWTixBQUNFLEFBUUUsQUFVRjs7b0JBQUE7c0JBbkJGLEFBbUJFLEFBQ0E7QUFEQTtBQUFBOztvQkFDQTtzQkFwQkYsQUFvQkUsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQyw4QkFBSyxPQUFOLEFBQVk7b0JBQVo7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7Y0FBRCxBQUNPLEFBQ0w7ZUFBTyxFQUFFLGlCQUFGLEFBQW1CLFdBQVcsT0FGdkMsQUFFUyxBQUFxQyxBQUM1QztrQkFBVSxDQUFDLEtBQUEsQUFBSyxNQUhsQixBQUd3Qjs7b0JBSHhCO3NCQUFBO0FBQUE7QUFDRSxTQWhDZCxBQUNFLEFBRUUsQUFLRSxBQXFCRSxBQUNFLEFBQ0UsQUFhYjs7Ozs7QUFyT3VCLEEsQUF3TzFCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2hyaXNoaWIvRGVza3RvcC9wcm90b3R5cGUifQ==