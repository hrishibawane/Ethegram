webpackHotUpdate(5,{

/***/ 1105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(68);

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = __webpack_require__(84);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(85);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(601);

var _Layout = __webpack_require__(1393);

var _Layout2 = _interopRequireDefault(_Layout);

var _social = __webpack_require__(1408);

var _social2 = _interopRequireDefault(_social);

var _web = __webpack_require__(887);

var _web2 = _interopRequireDefault(_web);

var _routes = __webpack_require__(881);

var _ipfs = __webpack_require__(1586);

var _ipfs2 = _interopRequireDefault(_ipfs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/hrishib/Desktop/prototype/pages/index.js?entry";

var NewsAPI = __webpack_require__(1973);
var newsapi = new NewsAPI("9596f3ac23f5400a981fa2a3e2f8411b");

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
      username: "unknown",
      done: false,
      modal: false,
      articles: [],
      news: []
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
    })), _this.renderArticles = function () {
      var articles = _this.state.articles;

      var news = articles.map(function (article, index) {
        return {
          key: index,
          header: _react2.default.createElement("h4", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 132
            }
          }, article.title),
          description: _react2.default.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 133
            }
          }, article.description),
          extra: _react2.default.createElement("a", { href: article.url, target: "_blank", __source: {
              fileName: _jsxFileName,
              lineNumber: 134
            }
          }, article.url),
          fluid: true
        };
      });

      _this.setState({ news: news });
    }, _this.renderPosts = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
      var posts, items;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              posts = _this.state.posts;
              _context5.next = 3;
              return _promise2.default.all(posts.map(function () {
                var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(post, index) {
                  var name, src, data, bpic;
                  return _regenerator2.default.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return _social2.default.methods.getUserDetails(post.owner).call();

                        case 2:
                          name = _context4.sent;
                          src = void 0;

                          if (!(post.imgIpfsHash.length > 0)) {
                            _context4.next = 12;
                            break;
                          }

                          _context4.next = 7;
                          return _ipfs2.default.files.get(post.imgIpfsHash);

                        case 7:
                          data = _context4.sent;
                          bpic = _this.uint8ToBase64(data[0].content);

                          src = "data:image/png;base64," + bpic;
                          _context4.next = 13;
                          break;

                        case 12:
                          src = null;

                        case 13:
                          return _context4.abrupt("return", {
                            key: index,
                            header: _react2.default.createElement("div", {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 160
                              }
                            }, _react2.default.createElement("h4", { style: { marginBottom: "0px" }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 161
                              }
                            }, name[0]), _react2.default.createElement("p", { style: { color: "grey", marginTop: "0px" }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 162
                              }
                            }, post.timestamp), _react2.default.createElement("h3", {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 165
                              }
                            }, post.caption)),
                            description: _react2.default.createElement("div", { style: { border: "2px solid grey" }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 169
                              }
                            }, _react2.default.createElement("p", { style: { margin: "10px", fontSize: "15px" }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 170
                              }
                            }, post.description), _react2.default.createElement(_semanticUiReact.Image, {
                              style: { padding: "20px" },
                              hidden: src == null,
                              src: src,
                              fluid: true,
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 173
                              }
                            })),
                            extra: _react2.default.createElement("div", {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 182
                              }
                            }, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: function onSubmit() {
                                return _this.onSubmit(index);
                              }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 183
                              }
                            }, _react2.default.createElement(_semanticUiReact.Form.Field, { inline: true, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 184
                              }
                            }, _react2.default.createElement(_semanticUiReact.Input, {
                              focus: true,
                              placeholder: "Add a comment...",
                              value: _this.state.caption,
                              onChange: function onChange(event) {
                                return _this.setState({ newComment: event.target.value });
                              },
                              style: { width: "70%", height: "40px", marginRight: "0px" },
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 185
                              }
                            }), _react2.default.createElement(_semanticUiReact.Button, {
                              size: "small",
                              color: "linkedin",
                              content: "Post Comment",
                              icon: "edit",
                              style: { height: "40px" },
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 194
                              }
                            }))), _react2.default.createElement("br", {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 203
                              }
                            }), _react2.default.createElement(_semanticUiReact.Button, {
                              onClick: function onClick() {
                                return _this.likePost(index);
                              },
                              color: "red",
                              content: "Like",
                              icon: "heart",
                              size: "medium",
                              label: { basic: true, color: "red", content: post.likes },
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 204
                              }
                            }), _react2.default.createElement(_semanticUiReact.Modal, {
                              trigger: _react2.default.createElement(_semanticUiReact.Button, {
                                size: "medium",
                                color: "facebook",
                                content: "View Comments",
                                icon: "comments",
                                onClick: function onClick() {
                                  return _this.setState({ modal: true });
                                },
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 214
                                }
                              }),
                              size: "small",
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 212
                              }
                            }, _react2.default.createElement(_semanticUiReact.Header, { content: "Comments", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 224
                              }
                            }), _react2.default.createElement(_semanticUiReact.Modal.Content, {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 225
                              }
                            }, _react2.default.createElement(_semanticUiReact.List, { divided: true, items: post.comments.split("/"), __source: {
                                fileName: _jsxFileName,
                                lineNumber: 226
                              }
                            })), _react2.default.createElement(_semanticUiReact.Modal.Actions, {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 228
                              }
                            }, _react2.default.createElement(_semanticUiReact.Button, {
                              color: "red",
                              content: "Close",
                              icon: "close",
                              inverted: true,
                              onClick: function onClick() {
                                return _this.setState({ modal: false });
                              },
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 229
                              }
                            })))),
                            fluid: true
                          });

                        case 14:
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
        var _this3 = this;

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

                newsapi.v2.topHeadlines({
                  language: "en",
                  country: "in"
                }).then(function (response) {
                  console.log(response.articles);
                  _this3.setState({ articles: response.articles });
                  _this3.renderArticles();
                });

              case 26:
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
      var _this4 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        }
      }, _react2.default.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        }
      }, "Posts"), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 11, style: { marginRight: "10px", paddingRight: "20px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Group, { centered: true, items: this.state.items, __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        }
      })), _react2.default.createElement(_semanticUiReact.Grid.Column, {
        width: 4,
        textAlign: "left",
        style: {
          marginLeft: "40px",
          marginTop: "15px",
          border: "1px solid #A9A9A9",
          borderRadius: "5px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        }
      }, _react2.default.createElement(_semanticUiReact.Form, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Input, {
        disabled: this.state.disabled,
        fluid: true,
        label: "Name",
        value: this.state.name,
        onChange: function onChange(event) {
          return _this4.setState({ name: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        }
      }), _react2.default.createElement(_semanticUiReact.Button, {
        size: "medium",
        content: "Sign In",
        onClick: this.signIn,
        style: {
          backgroundColor: "#003152",
          color: "#FFF",
          width: "100%"
        },
        disabled: this.state.disabled,
        loading: this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        }
      })), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        }
      }), _react2.default.createElement(_routes.Link, { route: "/profile", __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        }
      }, _react2.default.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        }
      }, "Signed in as ", this.state.username))), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        }
      }), _react2.default.createElement(_routes.Link, { route: "/posts/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        content: "Create New Post",
        size: "medium",
        style: {
          backgroundColor: "#003152",
          color: "#FFF",
          width: "100%"
        },
        disabled: !this.state.disabled,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        }
      }))), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        }
      }), _react2.default.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        }
      }), _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        }
      }, "News Updates"), _react2.default.createElement("p", { style: { color: "grey", marginTop: "0px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        }
      }, "Powered by newsapi.org..."), _react2.default.createElement(_semanticUiReact.Card.Group, { items: this.state.news, __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        }
      }))));
    }
  }]);

  return SocialIndex;
}(_react.Component);

exports.default = SocialIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkJ1dHRvbiIsIkdyaWQiLCJJbWFnZSIsIkZvcm0iLCJNb2RhbCIsIkhlYWRlciIsIkxpc3QiLCJJbnB1dCIsIkxheW91dCIsInNvY2lhbCIsIndlYjMiLCJMaW5rIiwiUm91dGVyIiwiaXBmcyIsIk5ld3NBUEkiLCJyZXF1aXJlIiwibmV3c2FwaSIsIlNvY2lhbEluZGV4Iiwic3RhdGUiLCJjdXJyQWNjb3VudCIsInBvc3RzIiwicG9zdENvdW50IiwiaXRlbXMiLCJpbWFnZXMiLCJuZXdDb21tZW50IiwiZGlzYWJsZWQiLCJsb2FkaW5nIiwibmFtZSIsImluZGV4IiwidXNlcm5hbWUiLCJkb25lIiwibW9kYWwiLCJhcnRpY2xlcyIsIm5ld3MiLCJvblN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY3MiLCJzdHIiLCJtZXRob2RzIiwicG9zdENvbW1lbnQiLCJzZW5kIiwiZnJvbSIsInNldFN0YXRlIiwiY2FwdGlvbiIsIm1lc3NhZ2UiLCJsaWtlUG9zdCIsInNpZ25JbiIsInZhbHVlIiwidXRpbHMiLCJ0b1dlaSIsInJlbmRlckFydGljbGVzIiwibWFwIiwiYXJ0aWNsZSIsImtleSIsImhlYWRlciIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJleHRyYSIsInVybCIsImZsdWlkIiwicmVuZGVyUG9zdHMiLCJhbGwiLCJwb3N0IiwiZ2V0VXNlckRldGFpbHMiLCJvd25lciIsImNhbGwiLCJzcmMiLCJpbWdJcGZzSGFzaCIsImxlbmd0aCIsImZpbGVzIiwiZ2V0IiwiZGF0YSIsImJwaWMiLCJ1aW50OFRvQmFzZTY0IiwiY29udGVudCIsIm1hcmdpbkJvdHRvbSIsImNvbG9yIiwibWFyZ2luVG9wIiwidGltZXN0YW1wIiwiYm9yZGVyIiwibWFyZ2luIiwiZm9udFNpemUiLCJwYWRkaW5nIiwiZXZlbnQiLCJ0YXJnZXQiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpblJpZ2h0IiwiYmFzaWMiLCJsaWtlcyIsImNvbW1lbnRzIiwic3BsaXQiLCJpc1VzZXIiLCJ1c2VyRGV0YWlscyIsImdldENvbnRyYWN0QmFsYW5jZSIsImJhbGFuY2UiLCJmcm9tV2VpIiwiZ2V0UG9zdHNDb3VudCIsIkFycmF5IiwicGFyc2VJbnQiLCJmaWxsIiwiZWxlbWVudCIsInYyIiwidG9wSGVhZGxpbmVzIiwibGFuZ3VhZ2UiLCJjb3VudHJ5IiwidGhlbiIsInJlc3BvbnNlIiwiYnVmZmVyIiwiYmluYXJ5IiwiYnl0ZXMiLCJzbGljZSIsIlVpbnQ4QXJyYXkiLCJmb3JFYWNoIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiYiIsIndpbmRvdyIsImJ0b2EiLCJwYWRkaW5nUmlnaHQiLCJtYXJnaW5MZWZ0IiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUNFLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQTs7QUFFRixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQU0sQUFBYzs7QUFDN0IsQUFBTyxBQUFVOzs7Ozs7OztBQUNqQixJQUFNLFVBQU4sQUFBTSxBQUFVO0FBQ2hCLElBQU0sVUFBVSxJQUFBLEFBQUksUUFBcEIsQUFBZ0IsQUFBWTs7SSxBQUV0Qjs7Ozs7Ozs7Ozs7Ozs7O3NOLEFBQ0o7bUJBQVEsQUFDTyxBQUNiO2FBRk0sQUFFQyxBQUNQO2lCQUhNLEFBR0ssQUFDWDthQUpNLEFBSUMsQUFDUDtjQUxNLEFBS0UsQUFDUjtrQkFOTSxBQU1NLEFBQ1o7Z0JBUE0sQUFPSSxBQUNWO2VBUk0sQUFRRyxBQUNUO1lBVE0sQUFTQSxBQUNOO2FBVk0sQUFVQyxBQUNQO2dCQVhNLEFBV0ksQUFDVjtZQVpNLEFBWUEsQUFDTjthQWJNLEFBYUMsQUFDUDtnQkFkTSxBQWNJLEFBQ1Y7WUFmTSxBQWVBLEE7QUFmQSxBQUNOLGEsQUFpQkY7MkZBQVcsaUJBQUEsQUFBTSxPQUFOO2tCQUFBO3NFQUFBO29CQUFBOzZDQUFBO21CQUNUO3dCQUFBLEFBQVEsSUFEQyxBQUNULEFBQVk7Z0NBREg7dUJBRVUsY0FBQSxBQUFLLElBRmYsQUFFVSxBQUFTOzttQkFBdEI7QUFGRyxnQ0FJTDtBQUpLLHNCQUlDLE1BQUEsQUFBSyxNQUFMLEFBQVcsV0FBWCxBQUFzQixPQUFPLE1BQUEsQUFBSyxNQUpuQyxBQUl5QyxBQUNsRDs7d0JBQUEsQUFBUSxJQUxDLEFBS1QsQUFBWTtnQ0FMSDtnQ0FBQTt1QkFPRCxpQkFBQSxBQUFPLFFBQVAsQUFBZSxZQUFmLEFBQTJCLE9BQTNCLEFBQWtDLEtBQWxDLEFBQXVDLEtBQUssRUFBRSxNQUFNLEtBUG5ELEFBT0QsQUFBNEMsQUFBUSxBQUFLOzttQkFDL0Q7d0JBQUEsQUFBUSxJQUFJLHVCQUF1QixLQUFuQyxBQUFtQyxBQUFLLEFBQ3hDO3NCQUFBLEFBQUssU0FBUyxFQUFFLFNBVFQsQUFTUCxBQUFjLEFBQVc7Z0NBVGxCO0FBQUE7O21CQUFBO2dDQUFBO2dEQVdQOzt3QkFBQSxBQUFRLElBQUksWUFYTCxBQVdQLEFBQWdCOzttQkFYVDttQkFBQTtnQ0FBQTs7QUFBQTtpQ0FBQTtBOzs7OztlQXlEWCxBOzJGQUFXLGtCQUFBLEFBQU0sT0FBTjt3RUFBQTtvQkFBQTsrQ0FBQTttQkFDVDt3QkFBQSxBQUFRLElBREMsQUFDVCxBQUFZOztpQ0FESDtpQ0FBQTt3Q0FJRCxBQUFPLFFBQVAsQUFBZSxTQUFmLEFBQXdCLE9BQXhCLEFBQStCO3dCQUM3QixNQUFBLEFBQUssTUFMTixBQUlELEFBQW9DLEFBQ3ZCO0FBRHVCLEFBQ3hDLGlCQURJOzttQkFHTjtzQkFBQSxBQUFLLFNBQVMsRUFBRSxNQVBULEFBT1AsQUFBYyxBQUFRO2lDQVBmO0FBQUE7O21CQUFBO2lDQUFBO2tEQUFBOzttQkFBQTttQkFBQTtpQ0FBQTs7QUFBQTtrQ0FBQTtBOzs7OztlQW9CWCxBLGtGQUFTLG9CQUFBO3NFQUFBO2tCQUFBOzZDQUFBO2lCQUNQO29CQUFBLEFBQUssU0FBUyxFQUFFLFNBRFQsQUFDUCxBQUFjLEFBQVc7K0JBRGxCO3NDQUVELEFBQU8sUUFBUCxBQUFlLE9BQU8sTUFBQSxBQUFLLE1BQTNCLEFBQWlDLE1BQWpDLEFBQXVDO3NCQUNyQyxNQUFBLEFBQUssTUFEcUMsQUFDL0IsQUFDakI7dUJBQU8sY0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLFFBSm5CLEFBRUQsQUFBNEMsQUFFekMsQUFBeUI7QUFGZ0IsQUFDaEQsZUFESTs7aUJBSU47b0JBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLE9BQU8sVUFOekIsQUFNUCxBQUFjLEFBQTRCOztpQkFObkM7aUJBQUE7K0JBQUE7O0FBQUE7bUJBQUE7QSxlQVNULEEsaUJBQWlCLFlBQU0sQUFDckI7VUFBTSxXQUFXLE1BQUEsQUFBSyxNQUF0QixBQUE0QixBQUU1Qjs7VUFBTSxnQkFBTyxBQUFTLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxPQUFVLEFBQzVDOztlQUFPLEFBQ0EsQUFDTDtrQ0FBUSxjQUFBOzt3QkFBQTswQkFBQSxBQUFLO0FBQUw7QUFBQSxXQUFBLFVBRkgsQUFFRyxBQUFhLEFBQ3JCO3VDQUFhLGNBQUE7O3dCQUFBOzBCQUFBLEFBQUk7QUFBSjtBQUFBLFdBQUEsVUFIUixBQUdRLEFBQVksQUFDekI7aUNBQU8sY0FBQSxPQUFHLE1BQU0sUUFBVCxBQUFpQixLQUFLLFFBQXRCLEFBQTZCO3dCQUE3QjswQkFBQSxBQUF1QztBQUF2QztXQUFBLFVBSkYsQUFJRSxBQUErQyxBQUN0RDtpQkFMRixBQUFPLEFBS0UsQUFFVjtBQVBRLEFBQ0w7QUFGSixBQUFhLEFBVWIsT0FWYTs7WUFVYixBQUFLLFNBQVMsRUFBRSxNQUFoQixBQUFjLEFBQVEsQUFDdkI7QSxhLEFBRUQsdUZBQWMsb0JBQUE7aUJBQUE7c0VBQUE7a0JBQUE7NkNBQUE7aUJBQ047QUFETSxzQkFDRSxNQUFBLEFBQUssTUFEUCxBQUNhOytCQURiO3VDQUdRLEFBQVEsVUFDMUIsQUFBTSxnQkFBTjtxR0FBVSxrQkFBQSxBQUFPLE1BQVAsQUFBYSxPQUFiO3VDQUFBO2tGQUFBOzhCQUFBO3lEQUFBOzZCQUFBOzJDQUFBO2lDQUNXLGlCQUFBLEFBQU8sUUFBUCxBQUFlLGVBQWUsS0FBOUIsQUFBbUMsT0FEOUMsQUFDVyxBQUEwQzs7NkJBQXZEO0FBREUsMkNBRUo7QUFGSSxxQ0FBQTs7Z0NBR0osS0FBQSxBQUFLLFlBQUwsQUFBaUIsU0FIYixBQUdzQixJQUh0Qjs2Q0FBQTtBQUFBO0FBQUE7OzJDQUFBO2lDQUlhLGVBQUEsQUFBSyxNQUFMLEFBQVcsSUFBSSxLQUo1QixBQUlhLEFBQW9COzs2QkFBakM7QUFKQSwyQ0FLQTtBQUxBLGlDQUtPLE1BQUEsQUFBSyxjQUFjLEtBQUEsQUFBSyxHQUwvQixBQUtPLEFBQTJCLEFBQ3hDOztnQ0FBTSwyQkFOQSxBQU1OLEFBQWlDOzJDQU4zQjtBQUFBOzs2QkFRTjtnQ0FSTSxBQVFOLEFBQU07OzZCQVJBOztpQ0FXRCxBQUNBLEFBQ0w7b0RBQ0UsY0FBQTs7MENBQUE7NENBQUEsQUFDRTtBQURGO0FBQUEsNkJBQUEsa0JBQ0UsY0FBQSxRQUFJLE9BQU8sRUFBRSxjQUFiLEFBQVcsQUFBZ0I7MENBQTNCOzRDQUFBLEFBQXFDO0FBQXJDO29DQURGLEFBQ0UsQUFBcUMsQUFBSyxBQUMxQyxxQkFBQSxjQUFBLE9BQUcsT0FBTyxFQUFFLE9BQUYsQUFBUyxRQUFRLFdBQTNCLEFBQVUsQUFBNEI7MENBQXRDOzRDQUFBLEFBQ0c7QUFESDtvQ0FGRixBQUVFLEFBQ1EsQUFFUiw0QkFBQSxjQUFBOzswQ0FBQTs0Q0FBQSxBQUFLO0FBQUw7QUFBQSxvQ0FSQyxBQUdILEFBS0UsQUFBVSxBQUdkO3lEQUNFLGNBQUEsU0FBSyxPQUFPLEVBQUUsUUFBZCxBQUFZLEFBQVU7MENBQXRCOzRDQUFBLEFBQ0U7QUFERjs2QkFBQSxrQkFDRSxjQUFBLE9BQUcsT0FBTyxFQUFFLFFBQUYsQUFBVSxRQUFRLFVBQTVCLEFBQVUsQUFBNEI7MENBQXRDOzRDQUFBLEFBQ0c7QUFESDtvQ0FERixBQUNFLEFBQ1EsQUFFUiw4QkFBQSxBQUFDO3FDQUNRLEVBQUUsU0FEWCxBQUNTLEFBQVcsQUFDbEI7c0NBQVEsT0FGVixBQUVpQixBQUNmO21DQUhGLEFBR08sQUFDTDtxQ0FKRjs7MENBQUE7NENBaEJDLEFBWUgsQUFJRSxBQVFKO0FBUkk7QUFDRTttREFRSixjQUFBOzswQ0FBQTs0Q0FBQSxBQUNFO0FBREY7QUFBQSw2QkFBQSxrQkFDRSxBQUFDLHVDQUFLLFVBQVUsb0JBQUE7dUNBQU0sTUFBQSxBQUFLLFNBQVgsQUFBTSxBQUFjO0FBQXBDOzBDQUFBOzRDQUFBLEFBQ0U7QUFERjsrQ0FDRyxjQUFELHNCQUFBLEFBQU0sU0FBTSxRQUFaOzBDQUFBOzRDQUFBLEFBQ0U7QUFERjsrQ0FDRSxBQUFDO3FDQUFELEFBRUU7MkNBRkYsQUFFYyxBQUNaO3FDQUFPLE1BQUEsQUFBSyxNQUhkLEFBR29CLEFBQ2xCO3dDQUFVLHlCQUFBO3VDQUNSLE1BQUEsQUFBSyxTQUFTLEVBQUUsWUFBWSxNQUFBLEFBQU0sT0FEMUIsQUFDUixBQUFjLEFBQTJCO0FBTDdDLEFBT0U7cUNBQU8sRUFBRSxPQUFGLEFBQVMsT0FBTyxRQUFoQixBQUF3QixRQUFRLGFBUHpDLEFBT1MsQUFBNkM7OzBDQVB0RDs0Q0FERixBQUNFLEFBU0E7QUFUQTtBQUNFLGdEQVFGLEFBQUM7b0NBQUQsQUFDTyxBQUNMO3FDQUZGLEFBRVEsQUFDTjt1Q0FIRixBQUdVLEFBQ1I7b0NBSkYsQUFJTyxBQUNMO3FDQUFPLEVBQUUsUUFMWCxBQUtTLEFBQVU7OzBDQUxuQjs0Q0FaTixBQUNFLEFBQ0UsQUFVRSxBQVNKO0FBVEk7QUFDRTs7MENBUU47NENBckJGLEFBcUJFLEFBQ0E7QUFEQTtBQUFBLGdEQUNBLEFBQUM7dUNBQ1UsbUJBQUE7dUNBQU0sTUFBQSxBQUFLLFNBQVgsQUFBTSxBQUFjO0FBRC9CLEFBRUU7cUNBRkYsQUFFUSxBQUNOO3VDQUhGLEFBR1UsQUFDUjtvQ0FKRixBQUlPLEFBQ0w7b0NBTEYsQUFLTyxBQUNMO3FDQUFPLEVBQUUsT0FBRixBQUFTLE1BQU0sT0FBZixBQUFzQixPQUFPLFNBQVMsS0FOL0MsQUFNUyxBQUEyQzs7MENBTnBEOzRDQXRCRixBQXNCRSxBQVFBO0FBUkE7QUFDRSxnREFPRixBQUFDO3VEQUVHLEFBQUM7c0NBQUQsQUFDTyxBQUNMO3VDQUZGLEFBRVEsQUFDTjt5Q0FIRixBQUdVLEFBQ1I7c0NBSkYsQUFJTyxBQUNMO3lDQUFTLG1CQUFBO3lDQUFNLE1BQUEsQUFBSyxTQUFTLEVBQUUsT0FBdEIsQUFBTSxBQUFjLEFBQVM7QUFMeEM7OzRDQUFBOzhDQUZKLEFBRUksQUFRRjtBQVJFO0FBQ0UsK0JBREY7b0NBRkosQUFVTzs7MENBVlA7NENBQUEsQUFZRTtBQVpGO0FBQ0UsK0NBV0EsQUFBQyx5Q0FBTyxTQUFSLEFBQWdCOzBDQUFoQjs0Q0FaRixBQVlFLEFBQ0E7QUFEQTtnREFDQyxjQUFELHVCQUFBLEFBQU87OzBDQUFQOzRDQUFBLEFBQ0U7QUFERjtBQUFBLCtDQUNFLEFBQUMsdUNBQUssU0FBTixNQUFjLE9BQU8sS0FBQSxBQUFLLFNBQUwsQUFBYyxNQUFuQyxBQUFxQixBQUFvQjswQ0FBekM7NENBZEosQUFhRSxBQUNFLEFBRUY7QUFGRTtpREFFRCxjQUFELHVCQUFBLEFBQU87OzBDQUFQOzRDQUFBLEFBQ0U7QUFERjtBQUFBLCtDQUNFLEFBQUM7cUNBQUQsQUFDUSxBQUNOO3VDQUZGLEFBRVUsQUFDUjtvQ0FIRixBQUdPLEFBQ0w7d0NBSkYsQUFLRTt1Q0FBUyxtQkFBQTt1Q0FBTSxNQUFBLEFBQUssU0FBUyxFQUFFLE9BQXRCLEFBQU0sQUFBYyxBQUFTO0FBTHhDOzswQ0FBQTs0Q0F4RUgsQUF5QkgsQUE4QkUsQUFnQkUsQUFDRSxBQVdSO0FBWFE7QUFDRTttQ0FwRkosQUFXRCxBQW1GRTtBQW5GRixBQUNMOzs2QkFaTTs2QkFBQTsyQ0FBQTs7QUFBQTsrQkFBQTtBQUFWOzsyQ0FBQTsyQ0FBQTtBQUFBO0FBSlUsQUFHUSxpQkFDbEIsQ0FEa0I7O2lCQUFkO0FBSE0sZ0NBdUdaOztvQkFBQSxBQUFLLFNBQVMsRUFBRSxPQXZHSixBQXVHWixBQUFjLEFBQVM7O2lCQXZHWDtpQkFBQTsrQkFBQTs7QUFBQTttQkFBQTtBOzs7Ozs7Ozs7Ozs7Ozs7dUJBdEZPLGNBQUEsQUFBSyxJQUFMLEFBQVMsQTs7bUJBQXRCO0E7O3VCQUNlLGlCQUFBLEFBQU8sUUFBUCxBQUFlLE9BQU8sS0FBdEIsQUFBc0IsQUFBSyxJQUEzQixBQUErQixBOzttQkFBOUM7QTs7dUJBQ29CLGlCQUFBLEFBQU8sUUFBUCxBQUFlLGVBQWUsS0FBOUIsQUFBOEIsQUFBSyxJQUFuQyxBQUF1QyxBOzttQkFBM0Q7QSx3Q0FDQTtBLDJCQUFXLFlBQUEsQUFBWSxBOzt1QkFFVCxpQkFBQSxBQUFPLFFBQVAsQUFBZSxxQkFBZixBQUFvQyxBOzttQkFBcEQ7QSxvQ0FDSjs7MEJBQVUsY0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLFNBQTdCLEFBQVUsQUFBNEIsQUFDdEM7d0JBQUEsQUFBUSxJQUFJLEtBQVosQUFBWSxBQUFLLElBQWpCLEFBQXFCLEFBQ3JCO3dCQUFBLEFBQVEsSUFBSSxjQUFaLEFBQTBCLEFBRTFCOztxQkFBQSxBQUFLOzRCQUFTLEFBQ0YsQUFDVjsrQkFBYSxLQUZELEFBRUMsQUFBSyxBQUNsQjs0QkFIRixBQUFjLEFBR0Y7QUFIRSxBQUNaOzs7dUJBS3NCLGlCQUFBLEFBQU8sUUFBUCxBQUFlLGdCQUFmLEEsQUFBK0I7O21CQUFqRDtBOzt5Q0FDYyxBQUFRLFVBQ3BCLFNBQU4sQUFBTSxBQUFTLFlBQWYsQUFDRyxPQURILEFBRUcsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDdkI7eUJBQU8saUJBQUEsQUFBTyxRQUFQLEFBQWUsTUFBZixBQUFxQixPQUE1QixBQUFPLEFBQTRCLEFBQ3BDO0FBTGUsQUFDbEIsQSxpQkFBQSxDQURrQjs7bUJBQWQ7QSxrQ0FRTjs7cUJBQUEsQUFBSyxTQUFTLEVBQUUsT0FBRixBQUFTLE9BQU8sV0FBOUIsQUFBYyxBQUEyQixBQUV6Qzs7cUJBQUEsQUFBSyxBQUVMOzt3QkFBQSxBQUFRLEdBQVIsQUFDRzs0QkFBYSxBQUNGLEFBQ1Y7MkJBSEosQUFDZ0IsQUFFSDtBQUZHLEFBQ1osbUJBRkosQUFLRyxLQUFLLG9CQUFZLEFBQ2hCOzBCQUFBLEFBQVEsSUFBSSxTQUFaLEFBQXFCLEFBQ3JCO3lCQUFBLEFBQUssU0FBUyxFQUFFLFVBQVUsU0FBMUIsQUFBYyxBQUFxQixBQUNuQzt5QkFBQSxBQUFLLEFBQ047QUFUSDs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQXVCWSxBLFFBQVEsQUFDcEI7VUFBSSxTQUFKLEFBQWEsQUFDYjtVQUFJLFFBQVEsR0FBQSxBQUFHLE1BQUgsQUFBUyxLQUFLLElBQUEsQUFBSSxXQUE5QixBQUFZLEFBQWMsQUFBZSxBQUV6Qzs7WUFBQSxBQUFNLFFBQVEsYUFBQTtlQUFNLFVBQVUsT0FBQSxBQUFPLGFBQXZCLEFBQWdCLEFBQW9CO0FBQWxELEFBRUE7O2FBQU8sT0FBQSxBQUFPLEtBQWQsQUFBTyxBQUFZLEFBQ3BCOzs7OzZCQXFJUTttQkFDUDs7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsMEJBQUEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQixJQUFJLE9BQU8sRUFBRSxhQUFGLEFBQWMsUUFBUSxjQUFyRCxBQUErQixBQUFvQztvQkFBbkU7c0JBQUEsQUFDRTtBQURGO3VDQUNFLEFBQUMsc0JBQUQsQUFBTSxTQUFNLFVBQVosTUFBcUIsT0FBTyxLQUFBLEFBQUssTUFBakMsQUFBdUM7b0JBQXZDO3NCQUZKLEFBQ0UsQUFDRSxBQUdGO0FBSEU7MkJBR0QsY0FBRCxzQkFBQSxBQUFNO2VBQU4sQUFDUyxBQUNQO21CQUZGLEFBRVksQUFDVjs7c0JBQU8sQUFDTyxBQUNaO3FCQUZLLEFBRU0sQUFDWDtrQkFISyxBQUdHLEFBQ1I7d0JBUEosQUFHUyxBQUlTO0FBSlQsQUFDTDs7b0JBSko7c0JBQUEsQUFVRTtBQVZGO0FBQ0UseUJBU0EsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsdUNBQ0UsQUFBQyxzQkFBRCxBQUFNO2tCQUNNLEtBQUEsQUFBSyxNQURqQixBQUN1QixBQUNyQjtlQUZGLEFBR0U7ZUFIRixBQUdRLEFBQ047ZUFBTyxLQUFBLEFBQUssTUFKZCxBQUlvQixBQUNsQjtrQkFBVSx5QkFBQTtpQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLE1BQU0sTUFBQSxBQUFNLE9BQXJDLEFBQVMsQUFBYyxBQUFxQjtBQUx4RDs7b0JBQUE7c0JBREYsQUFDRSxBQU9BO0FBUEE7QUFDRSwwQkFNRixBQUFDO2NBQUQsQUFDTyxBQUNMO2lCQUZGLEFBRVUsQUFDUjtpQkFBUyxLQUhYLEFBR2dCLEFBQ2Q7OzJCQUFPLEFBQ1ksQUFDakI7aUJBRkssQUFFRSxBQUNQO2lCQVBKLEFBSVMsQUFHRSxBQUVUO0FBTE8sQUFDTDtrQkFJUSxLQUFBLEFBQUssTUFUakIsQUFTdUIsQUFDckI7aUJBQVMsS0FBQSxBQUFLLE1BVmhCLEFBVXNCOztvQkFWdEI7c0JBbEJKLEFBVUUsQUFRRSxBQWNGO0FBZEU7QUFDRTs7b0JBYUo7c0JBaENGLEFBZ0NFLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLEFBQUMsOEJBQUssT0FBTixBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUFHO0FBQUg7QUFBQSx5QkFBRyxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBa0Isc0JBQUEsQUFBSyxNQWxDOUIsQUFpQ0UsQUFDRSxBQUFHLEFBQTZCLEFBRWxDOztvQkFBQTtzQkFwQ0YsQUFvQ0UsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQyw4QkFBSyxPQUFOLEFBQVk7b0JBQVo7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7aUJBQUQsQUFDVSxBQUNSO2NBRkYsQUFFTyxBQUNMOzsyQkFBTyxBQUNZLEFBQ2pCO2lCQUZLLEFBRUUsQUFDUDtpQkFOSixBQUdTLEFBR0UsQUFFVDtBQUxPLEFBQ0w7a0JBSVEsQ0FBQyxLQUFBLEFBQUssTUFSbEIsQUFRd0I7O29CQVJ4QjtzQkF2Q04sQUFxQ0UsQUFDRSxBQUNFLEFBWUo7QUFaSTtBQUNFOztvQkFXTjtzQkFuREYsQUFtREUsQUFDQTtBQURBO0FBQUE7O29CQUNBO3NCQXBERixBQW9ERSxBQUNBO0FBREE7QUFBQTs7b0JBQ0E7c0JBckRGLEFBcURFLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQXRERixBQXNERSxBQUNBLGlDQUFBLGNBQUEsT0FBRyxPQUFPLEVBQUUsT0FBRixBQUFTLFFBQVEsV0FBM0IsQUFBVSxBQUE0QjtvQkFBdEM7c0JBQUE7QUFBQTtTQXZERixBQXVERSxBQUdBLDREQUFBLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQU8sS0FBQSxBQUFLLE1BQXhCLEFBQThCO29CQUE5QjtzQkFsRVIsQUFDRSxBQUVFLEFBS0UsQUEwREUsQUFLVDtBQUxTOzs7Ozs7QUF0U2MsQSxBQThTMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvaHJpc2hpYi9EZXNrdG9wL3Byb3RvdHlwZSJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/hrishib/Desktop/prototype/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/hrishib/Desktop/prototype/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(82)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4wNzQ1NDYyNTc1NTRlYWVjYTE1YS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/MmJlMDI1YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBDYXJkLFxuICBCdXR0b24sXG4gIEdyaWQsXG4gIEltYWdlLFxuICBGb3JtLFxuICBNb2RhbCxcbiAgSGVhZGVyLFxuICBMaXN0LFxuICBJbnB1dFxufSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgc29jaWFsIGZyb20gXCIuLi9ldGhlcmV1bS9zb2NpYWxcIjtcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi9ldGhlcmV1bS93ZWIzXCI7XG5pbXBvcnQgeyBMaW5rLCBSb3V0ZXIgfSBmcm9tIFwiLi4vcm91dGVzXCI7XG5pbXBvcnQgaXBmcyBmcm9tIFwiLi4vZXRoZXJldW0vaXBmc1wiO1xuY29uc3QgTmV3c0FQSSA9IHJlcXVpcmUoXCJuZXdzYXBpXCIpO1xuY29uc3QgbmV3c2FwaSA9IG5ldyBOZXdzQVBJKFwiOTU5NmYzYWMyM2Y1NDAwYTk4MWZhMmEzZTJmODQxMWJcIik7XG5cbmNsYXNzIFNvY2lhbEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgY3VyckFjY291bnQ6IFwiXCIsXG4gICAgcG9zdHM6IFtdLFxuICAgIHBvc3RDb3VudDogMCxcbiAgICBpdGVtczogW10sXG4gICAgaW1hZ2VzOiBbXSxcbiAgICBuZXdDb21tZW50OiBcIlwiLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBuYW1lOiBcIlwiLFxuICAgIGluZGV4OiAwLFxuICAgIHVzZXJuYW1lOiBcInVua25vd25cIixcbiAgICBkb25lOiBmYWxzZSxcbiAgICBtb2RhbDogZmFsc2UsXG4gICAgYXJ0aWNsZXM6IFtdLFxuICAgIG5ld3M6IFtdXG4gIH07XG5cbiAgb25TdWJtaXQgPSBhc3luYyBpbmRleCA9PiB7XG4gICAgY29uc29sZS5sb2coaW5kZXgpO1xuICAgIGNvbnN0IGFjY3MgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuXG4gICAgdmFyIHN0ciA9IHRoaXMuc3RhdGUudXNlcm5hbWUgKyBcIjogXCIgKyB0aGlzLnN0YXRlLm5ld0NvbW1lbnQ7XG4gICAgY29uc29sZS5sb2coc3RyKTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgc29jaWFsLm1ldGhvZHMucG9zdENvbW1lbnQoaW5kZXgsIHN0cikuc2VuZCh7IGZyb206IGFjY3NbMF0gfSk7XG4gICAgICBjb25zb2xlLmxvZyhcIkNvbW1lbnQgUG9zdGVkIGJ5IFwiICsgYWNjc1swXSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2FwdGlvbjogXCJcIiB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcbiAgICB9XG4gIH07XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgYWNjcyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgY29uc3QgaXNVc2VyID0gYXdhaXQgc29jaWFsLm1ldGhvZHMuaXNVc2VyKGFjY3NbMF0pLmNhbGwoKTtcbiAgICBjb25zdCB1c2VyRGV0YWlscyA9IGF3YWl0IHNvY2lhbC5tZXRob2RzLmdldFVzZXJEZXRhaWxzKGFjY3NbMF0pLmNhbGwoKTtcbiAgICBjb25zdCB1c2VybmFtZSA9IHVzZXJEZXRhaWxzWzBdO1xuXG4gICAgbGV0IGJhbGFuY2UgPSBhd2FpdCBzb2NpYWwubWV0aG9kcy5nZXRDb250cmFjdEJhbGFuY2UoKS5jYWxsKCk7XG4gICAgYmFsYW5jZSA9IHdlYjMudXRpbHMuZnJvbVdlaShiYWxhbmNlLCBcImV0aGVyXCIpO1xuICAgIGNvbnNvbGUubG9nKGFjY3NbMF0sIHVzZXJuYW1lKTtcbiAgICBjb25zb2xlLmxvZyhcIkJhbGFuY2U6IFwiICsgYmFsYW5jZSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRpc2FibGVkOiBpc1VzZXIsXG4gICAgICBjdXJyQWNjb3VudDogYWNjc1swXSxcbiAgICAgIHVzZXJuYW1lOiB1c2VybmFtZVxuICAgIH0pO1xuXG4gICAgY29uc3QgcG9zdENvdW50ID0gYXdhaXQgc29jaWFsLm1ldGhvZHMuZ2V0UG9zdHNDb3VudCgpLmNhbGwoKTtcbiAgICBjb25zdCBwb3N0cyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgQXJyYXkocGFyc2VJbnQocG9zdENvdW50KSlcbiAgICAgICAgLmZpbGwoKVxuICAgICAgICAubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiBzb2NpYWwubWV0aG9kcy5wb3N0cyhpbmRleCkuY2FsbCgpO1xuICAgICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgcG9zdHM6IHBvc3RzLCBwb3N0Q291bnQ6IHBvc3RDb3VudCB9KTtcblxuICAgIHRoaXMucmVuZGVyUG9zdHMoKTtcblxuICAgIG5ld3NhcGkudjJcbiAgICAgIC50b3BIZWFkbGluZXMoe1xuICAgICAgICBsYW5ndWFnZTogXCJlblwiLFxuICAgICAgICBjb3VudHJ5OiBcImluXCJcbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmFydGljbGVzKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFydGljbGVzOiByZXNwb25zZS5hcnRpY2xlcyB9KTtcbiAgICAgICAgdGhpcy5yZW5kZXJBcnRpY2xlcygpO1xuICAgICAgfSk7XG4gIH1cblxuICBsaWtlUG9zdCA9IGFzeW5jIGluZGV4ID0+IHtcbiAgICBjb25zb2xlLmxvZyhpbmRleCk7XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgc29jaWFsLm1ldGhvZHMubGlrZVBvc3QoaW5kZXgpLnNlbmQoe1xuICAgICAgICBmcm9tOiB0aGlzLnN0YXRlLmN1cnJBY2NvdW50XG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBkb25lOiB0cnVlIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge31cbiAgfTtcblxuICB1aW50OFRvQmFzZTY0KGJ1ZmZlcikge1xuICAgIHZhciBiaW5hcnkgPSBcIlwiO1xuICAgIHZhciBieXRlcyA9IFtdLnNsaWNlLmNhbGwobmV3IFVpbnQ4QXJyYXkoYnVmZmVyKSk7XG5cbiAgICBieXRlcy5mb3JFYWNoKGIgPT4gKGJpbmFyeSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGIpKSk7XG5cbiAgICByZXR1cm4gd2luZG93LmJ0b2EoYmluYXJ5KTtcbiAgfVxuXG4gIHNpZ25JbiA9IGFzeW5jICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KTtcbiAgICBhd2FpdCBzb2NpYWwubWV0aG9kcy5zaWduSW4odGhpcy5zdGF0ZS5uYW1lKS5zZW5kKHtcbiAgICAgIGZyb206IHRoaXMuc3RhdGUuY3VyckFjY291bnQsXG4gICAgICB2YWx1ZTogd2ViMy51dGlscy50b1dlaShcIjAuMDJcIiwgXCJldGhlclwiKVxuICAgIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSwgZGlzYWJsZWQ6IHRydWUgfSk7XG4gIH07XG5cbiAgcmVuZGVyQXJ0aWNsZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgYXJ0aWNsZXMgPSB0aGlzLnN0YXRlLmFydGljbGVzO1xuXG4gICAgY29uc3QgbmV3cyA9IGFydGljbGVzLm1hcCgoYXJ0aWNsZSwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgIGhlYWRlcjogPGg0PnthcnRpY2xlLnRpdGxlfTwvaDQ+LFxuICAgICAgICBkZXNjcmlwdGlvbjogPHA+e2FydGljbGUuZGVzY3JpcHRpb259PC9wPixcbiAgICAgICAgZXh0cmE6IDxhIGhyZWY9e2FydGljbGUudXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj57YXJ0aWNsZS51cmx9PC9hPixcbiAgICAgICAgZmx1aWQ6IHRydWVcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgbmV3czogbmV3cyB9KTtcbiAgfTtcblxuICByZW5kZXJQb3N0cyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwb3N0cyA9IHRoaXMuc3RhdGUucG9zdHM7XG5cbiAgICBjb25zdCBpdGVtcyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgcG9zdHMubWFwKGFzeW5jIChwb3N0LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBuYW1lID0gYXdhaXQgc29jaWFsLm1ldGhvZHMuZ2V0VXNlckRldGFpbHMocG9zdC5vd25lcikuY2FsbCgpO1xuICAgICAgICBsZXQgc3JjO1xuICAgICAgICBpZiAocG9zdC5pbWdJcGZzSGFzaC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGlwZnMuZmlsZXMuZ2V0KHBvc3QuaW1nSXBmc0hhc2gpO1xuICAgICAgICAgIGNvbnN0IGJwaWMgPSB0aGlzLnVpbnQ4VG9CYXNlNjQoZGF0YVswXS5jb250ZW50KTtcbiAgICAgICAgICBzcmMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxcIiArIGJwaWM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3JjID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICBoZWFkZXI6IChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMHB4XCIgfX0+e25hbWVbMF19PC9oND5cbiAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwiZ3JleVwiLCBtYXJnaW5Ub3A6IFwiMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAge3Bvc3QudGltZXN0YW1wfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxoMz57cG9zdC5jYXB0aW9ufTwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlcjogXCIycHggc29saWQgZ3JleVwiIH19PlxuICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW46IFwiMTBweFwiLCBmb250U2l6ZTogXCIxNXB4XCIgfX0+XG4gICAgICAgICAgICAgICAge3Bvc3QuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogXCIyMHB4XCIgfX1cbiAgICAgICAgICAgICAgICBoaWRkZW49e3NyYyA9PSBudWxsfVxuICAgICAgICAgICAgICAgIHNyYz17c3JjfVxuICAgICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApLFxuICAgICAgICAgIGV4dHJhOiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17KCkgPT4gdGhpcy5vblN1Ym1pdChpbmRleCl9PlxuICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkIGlubGluZT5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICBmb2N1c1xuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIGNvbW1lbnQuLi5cIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jYXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT5cbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbmV3Q29tbWVudDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNzAlXCIsIGhlaWdodDogXCI0MHB4XCIsIG1hcmdpblJpZ2h0OiBcIjBweFwiIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImxpbmtlZGluXCJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIlBvc3QgQ29tbWVudFwiXG4gICAgICAgICAgICAgICAgICAgIGljb249XCJlZGl0XCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjQwcHhcIiB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmxpa2VQb3N0KGluZGV4KX1cbiAgICAgICAgICAgICAgICBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgICAgICAgY29udGVudD1cIkxpa2VcIlxuICAgICAgICAgICAgICAgIGljb249XCJoZWFydFwiXG4gICAgICAgICAgICAgICAgc2l6ZT1cIm1lZGl1bVwiXG4gICAgICAgICAgICAgICAgbGFiZWw9e3sgYmFzaWM6IHRydWUsIGNvbG9yOiBcInJlZFwiLCBjb250ZW50OiBwb3N0Lmxpa2VzIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICAgIHRyaWdnZXI9e1xuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibWVkaXVtXCJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJmYWNlYm9va1wiXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJWaWV3IENvbW1lbnRzXCJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cImNvbW1lbnRzXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG1vZGFsOiB0cnVlIH0pfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxIZWFkZXIgY29udGVudD1cIkNvbW1lbnRzXCIgLz5cbiAgICAgICAgICAgICAgICA8TW9kYWwuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgIDxMaXN0IGRpdmlkZWQgaXRlbXM9e3Bvc3QuY29tbWVudHMuc3BsaXQoXCIvXCIpfT48L0xpc3Q+XG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5Db250ZW50PlxuICAgICAgICAgICAgICAgIDxNb2RhbC5BY3Rpb25zPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJDbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgIGljb249XCJjbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgIGludmVydGVkXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBtb2RhbDogZmFsc2UgfSl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvTW9kYWwuQWN0aW9ucz5cbiAgICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICksXG4gICAgICAgICAgZmx1aWQ6IHRydWVcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBpdGVtczogaXRlbXMgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8aDI+UG9zdHM8L2gyPlxuICAgICAgICA8R3JpZD5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezExfSBzdHlsZT17eyBtYXJnaW5SaWdodDpcIjEwcHhcIiwgcGFkZGluZ1JpZ2h0OiBcIjIwcHhcIiB9fT5cbiAgICAgICAgICAgIDxDYXJkLkdyb3VwIGNlbnRlcmVkIGl0ZW1zPXt0aGlzLnN0YXRlLml0ZW1zfSAvPlxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG5cbiAgICAgICAgICA8R3JpZC5Db2x1bW5cbiAgICAgICAgICAgIHdpZHRoPXs0fVxuICAgICAgICAgICAgdGV4dEFsaWduPVwibGVmdFwiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjQwcHhcIixcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjQTlBOUE5XCIsXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIlxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgICAgPEZvcm0uSW5wdXRcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5kaXNhYmxlZH1cbiAgICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTmFtZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHNpemU9XCJtZWRpdW1cIlxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJTaWduIEluXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNpZ25Jbn1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMDMxNTJcIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNGRkZcIixcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIlxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuZGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Gb3JtPlxuXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxMaW5rIHJvdXRlPVwiL3Byb2ZpbGVcIj5cbiAgICAgICAgICAgICAgPGE+PGg0PlNpZ25lZCBpbiBhcyB7dGhpcy5zdGF0ZS51c2VybmFtZX08L2g0PjwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPExpbmsgcm91dGU9XCIvcG9zdHMvbmV3XCI+XG4gICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJDcmVhdGUgTmV3IFBvc3RcIlxuICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1lZGl1bVwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwMzE1MlwiLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjRkZGXCIsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5kaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8aDM+TmV3cyBVcGRhdGVzPC9oMz5cbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcImdyZXlcIiwgbWFyZ2luVG9wOiBcIjBweFwiIH19PlxuICAgICAgICAgICAgICBQb3dlcmVkIGJ5IG5ld3NhcGkub3JnLi4uXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8Q2FyZC5Hcm91cCBpdGVtcz17dGhpcy5zdGF0ZS5uZXdzfSAvPlxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU29jaWFsSW5kZXg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFTQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFkQTtBQWlCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBRUE7QUFDQTtBQURBO0FBRkE7QUFBQTtBQUNBO0FBSUE7QUFMQTtBQUFBO0FBT0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVRBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFXQTtBQUNBO0FBREE7QUFDQTtBQVpBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7O0FBeURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFBQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQVBBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7OztBQW9CQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFQQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQVNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQU5BO0FBUUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUhBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFKQTtBQUFBO0FBQ0E7QUFLQTtBQU5BO0FBQUE7QUFDQTtBQU9BO0FBQUE7QUFDQTtBQVRBOztBQWFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBSkE7O0FBQUE7QUFRQTtBQVJBO0FBQ0E7QUFRQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7O0FBUEE7QUFTQTtBQVRBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUxBO0FBU0E7QUFUQTtBQUNBOztBQVFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFOQTtBQVFBO0FBUkE7QUFDQTtBQVNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7O0FBQUE7QUFRQTtBQVJBO0FBQ0E7QUFPQTs7QUFWQTtBQVlBO0FBWkE7QUFDQTtBQVdBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUZBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFMQTs7QUFBQTtBQVdBO0FBWEE7QUFDQTtBQVVBO0FBbEZBO0FBQ0E7QUFiQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFEQTtBQUNBO0FBREE7QUFIQTtBQUNBO0FBc0dBO0FBQ0E7QUF4R0E7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUF0RkE7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFGQTtBQUNBOztBQUlBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFJQTtBQUhBO0FBQ0E7QUFGQTtBQVFBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFBQTtBQURBO0FBSUE7QUFDQTtBQUVBO0FBVEE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQURBOzs7O0FBc0lBO0FBQ0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUdBO0FBSEE7QUFHQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFIQTs7QUFKQTtBQVVBO0FBVkE7QUFDQTs7QUFTQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUxBOztBQUFBO0FBT0E7QUFQQTtBQUNBO0FBUUE7QUFDQTtBQUFBOztBQUdBO0FBQ0E7QUFFQTtBQUpBO0FBSUE7QUFDQTs7QUFWQTtBQWNBO0FBZEE7QUFDQTs7QUFhQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUpBO0FBSUE7O0FBUkE7QUFZQTtBQVpBO0FBQ0E7O0FBV0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBS0E7QUFMQTs7Ozs7Ozs7QUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9