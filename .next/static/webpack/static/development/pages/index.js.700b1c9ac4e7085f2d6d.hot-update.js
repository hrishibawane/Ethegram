webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _ethereum_social__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ethereum/social */ "./ethereum/social.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _ethereum_ipfs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../ethereum/ipfs */ "./ethereum/ipfs.js");
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../colors */ "./colors.js");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-player */ "./node_modules/react-player/lib/ReactPlayer.js");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_styledComponents__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/styledComponents */ "./components/styledComponents.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;












var NewsAPI = __webpack_require__(/*! newsapi */ "./node_modules/newsapi/dist/index.js");

var newsapi = new NewsAPI("9596f3ac23f5400a981fa2a3e2f8411b");

var SocialIndex = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(SocialIndex, _Component);

  function SocialIndex() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SocialIndex);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(SocialIndex)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
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
      news: [],
      userbalance: 0
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onSubmit", function _callee(index) {
      var accs, str;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(index);
              _context.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_web3__WEBPACK_IMPORTED_MODULE_12__["default"].eth.getAccounts());

            case 3:
              accs = _context.sent;
              str = _this.state.username + ": " + _this.state.newComment;
              console.log(str);
              _context.prev = 6;
              _context.next = 9;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_social__WEBPACK_IMPORTED_MODULE_11__["default"].methods.postComment(index, str).send({
                from: accs[0]
              }));

            case 9:
              console.log("Comment Posted by " + accs[0]);

              _this.setState({
                caption: ""
              });

              _routes__WEBPACK_IMPORTED_MODULE_13__["Router"].pushRoute('/');
              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](6);
              console.log(_context.t0.message);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[6, 14]], Promise);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "likePost", function _callee2(index) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log(index);
              _context2.prev = 1;
              _context2.next = 4;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_social__WEBPACK_IMPORTED_MODULE_11__["default"].methods.likePost(index).send({
                from: _this.state.currAccount
              }));

            case 4:
              _this.setState({
                done: true
              });

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
      }, null, null, [[1, 7]], Promise);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "signIn", function _callee3() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _this.setState({
                loading: true
              });

              _context3.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_social__WEBPACK_IMPORTED_MODULE_11__["default"].methods.signIn(_this.state.name).send({
                from: _this.state.currAccount,
                value: _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__["default"].utils.toWei("0.02", "ether")
              }));

            case 3:
              _this.setState({
                loading: false,
                disabled: true
              });

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, null, Promise);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "renderArticles", function () {
      var articles = _this.state.articles;
      var news = articles.map(function (article, index) {
        return {
          key: index,
          header: __jsx("h4", null, article.title),
          description: __jsx("p", {
            style: {
              fontSize: "15px"
            }
          }, article.description),
          extra: __jsx("a", {
            href: article.url,
            target: "_blank",
            style: {
              color: "blue"
            }
          }, article.url),
          fluid: true,
          style: {
            backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_15__["default"].background
          }
        };
      });

      _this.setState({
        news: news
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "renderPosts", function _callee5() {
      var posts, items;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              posts = _this.state.posts;
              console.log(_this.state.postCount);
              _context5.next = 4;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Promise.all(posts.map(function _callee4(post, index) {
                var name, imgSrc, vidSrc, hash, type;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        if (post.valid) {
                          _context4.next = 2;
                          break;
                        }

                        return _context4.abrupt("return", {
                          key: index
                        });

                      case 2:
                        _context4.next = 4;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_social__WEBPACK_IMPORTED_MODULE_11__["default"].methods.getUserDetails(post.owner).call());

                      case 4:
                        name = _context4.sent;
                        imgSrc = null, vidSrc = null;

                        if (post.imgIpfsHash.length > 0) {
                          hash = post.imgIpfsHash;
                          type = hash[0];
                          hash = hash.slice(1, hash.length);

                          if (type == "0") {
                            imgSrc = "https://ipfs.io/ipfs/" + hash;
                          } else {
                            vidSrc = "https://ipfs.io/ipfs/" + hash;
                          }
                        }

                        console.log(post.imgIpfsHash);
                        return _context4.abrupt("return", {
                          key: index,
                          header: __jsx("div", null, __jsx("h4", {
                            style: {
                              marginBottom: "0px"
                            }
                          }, name[0]), __jsx("p", {
                            style: {
                              color: "grey",
                              marginTop: "0px"
                            }
                          }, post.timestamp), __jsx("h3", null, post.caption)),
                          description: __jsx("div", {
                            style: {
                              border: "2px solid grey"
                            }
                          }, __jsx("p", {
                            style: {
                              margin: "10px",
                              fontSize: "15px"
                            }
                          }, post.description), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Image"], {
                            style: {
                              padding: "20px"
                            },
                            hidden: imgSrc == null,
                            src: imgSrc,
                            fluid: true
                          }), __jsx(react_player__WEBPACK_IMPORTED_MODULE_16___default.a, {
                            style: {
                              padding: "20px",
                              borderTop: "1px solid",
                              borderColor: "grey"
                            },
                            hidden: vidSrc == null,
                            url: vidSrc,
                            controls: true // light="https://www.thejobconnection.org/wp-content/uploads/2019/05/Video-Arrow-overlay.png"
                            ,
                            width: "100%",
                            height: "100%"
                          })),
                          extra: __jsx("div", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"], {
                            onSubmit: function onSubmit() {
                              return _this.onSubmit(index);
                            }
                          }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, {
                            inline: true
                          }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Input"], {
                            required: true,
                            focus: true,
                            placeholder: "Add a comment...",
                            value: _this.state.caption,
                            onChange: function onChange(event) {
                              return _this.setState({
                                newComment: event.target.value
                              });
                            },
                            style: {
                              width: "70%",
                              height: "40px",
                              marginRight: "0px"
                            }
                          }), __jsx(_components_styledComponents__WEBPACK_IMPORTED_MODULE_18__["CustButton"], {
                            size: "small",
                            color: "linkedin",
                            content: "Post Comment",
                            icon: "edit",
                            style: {
                              height: "40px"
                            }
                          }))), __jsx("br", null), __jsx(_components_styledComponents__WEBPACK_IMPORTED_MODULE_18__["CustButton"], {
                            onClick: function onClick() {
                              return _this.likePost(index);
                            },
                            color: "red",
                            content: "Like",
                            icon: "heart",
                            size: "medium",
                            label: {
                              basic: true,
                              color: "red",
                              content: post.likes
                            }
                          }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
                            trigger: __jsx(_components_styledComponents__WEBPACK_IMPORTED_MODULE_18__["CustButton"], {
                              size: "medium",
                              color: "facebook",
                              content: "View Comments",
                              icon: "comments",
                              onClick: function onClick() {
                                return _this.setState({
                                  modal: true
                                });
                              }
                            }),
                            size: "small"
                          }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Header"], {
                            content: "Comments"
                          }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Content, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["List"], {
                            divided: true,
                            items: post.comments.split("/")
                          })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Actions, null, __jsx(_components_styledComponents__WEBPACK_IMPORTED_MODULE_18__["CustButton"], {
                            color: "red",
                            content: "Close",
                            icon: "close",
                            inverted: true,
                            onClick: function onClick() {
                              return _this.setState({
                                modal: false
                              });
                            }
                          })))),
                          fluid: true
                        });

                      case 9:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, null, null, null, Promise);
              })));

            case 4:
              items = _context5.sent;

              _this.setState({
                items: items
              });

            case 6:
            case "end":
              return _context5.stop();
          }
        }
      }, null, null, null, Promise);
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SocialIndex, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var accs, userbalance, isUser, userDetails, username, balance, postCount, posts;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function componentDidMount$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_web3__WEBPACK_IMPORTED_MODULE_12__["default"].eth.getAccounts());

            case 2:
              accs = _context6.sent;
              _context6.next = 5;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_web3__WEBPACK_IMPORTED_MODULE_12__["default"].eth.getBalance(accs[0]));

            case 5:
              userbalance = _context6.sent;
              userbalance = _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__["default"].utils.fromWei(userbalance, "ether");
              userbalance = parseFloat(userbalance).toFixed(4);
              _context6.next = 10;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_social__WEBPACK_IMPORTED_MODULE_11__["default"].methods.isUser(accs[0]).call());

            case 10:
              isUser = _context6.sent;
              _context6.next = 13;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_social__WEBPACK_IMPORTED_MODULE_11__["default"].methods.getUserDetails(accs[0]).call());

            case 13:
              userDetails = _context6.sent;
              username = userDetails[0];
              _context6.next = 17;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_social__WEBPACK_IMPORTED_MODULE_11__["default"].methods.getContractBalance().call());

            case 17:
              balance = _context6.sent;
              balance = _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__["default"].utils.fromWei(balance, "ether");
              console.log(accs[0], username);
              console.log("Balance: " + balance);
              console.log("user bal: " + userbalance);
              this.setState({
                disabled: isUser,
                currAccount: accs[0],
                username: username,
                userbalance: userbalance
              });
              _context6.next = 25;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_social__WEBPACK_IMPORTED_MODULE_11__["default"].methods.getPostsCount().call());

            case 25:
              postCount = _context6.sent;
              _context6.next = 28;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Promise.all(Array(parseInt(postCount)).fill().map(function (element, index) {
                return _ethereum_social__WEBPACK_IMPORTED_MODULE_11__["default"].methods.posts(index).call();
              })));

            case 28:
              posts = _context6.sent;
              this.setState({
                posts: posts,
                postCount: postCount
              });
              this.renderPosts();
              newsapi.v2.topHeadlines({
                language: "en",
                country: "in"
              }).then(function (response) {
                console.log(response.articles);

                _this2.setState({
                  articles: response.articles
                });

                _this2.renderArticles();
              });

            case 32:
            case "end":
              return _context6.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Step"].Group, {
        ordered: true,
        fluid: true
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Step"], {
        completed: this.state.currAccount
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Step"].Content, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Step"].Title, null, "Metamask Login"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Step"].Description, null, "Login to your Metamask Account"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Step"], {
        completed: this.state.userbalance > 2
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Step"].Content, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Step"].Title, null, "Request Ethers"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Step"].Description, null, "Request ether in your account, if required, from ", __jsx("a", {
        href: "https://faucet.rinkeby.io/",
        target: "_blank"
      }, "here")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Step"], {
        completed: this.state.disabled
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Step"].Content, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Step"].Title, null, "Ethegram One-Time Signup"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Step"].Description, null, "Signup to the Ethegram Platform"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Step"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Step"].Content, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Step"].Title, null, "Welcome to Ethegram!!!"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Step"].Description, null, "You are ready to go...")))), __jsx("h2", null, "Posts"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, {
        width: 11
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"].Group, {
        centered: true,
        items: this.state.items
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, {
        width: 5,
        textAlign: "left",
        style: {
          // marginRight: "10px",
          marginTop: "15px",
          border: "1px solid #A9A9A9",
          borderRadius: "5px",
          backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_15__["default"].white
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        style: {
          backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_15__["default"].background,
          padding: "10px",
          border: "1px solid #A9A9A9"
        }
      }, __jsx("label", null, __jsx("h4", {
        style: {
          color: _colors__WEBPACK_IMPORTED_MODULE_15__["default"].menuBackground
        }
      }, "Name:")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Input, {
        required: true,
        style: {
          marginTop: "5px"
        },
        disabled: this.state.disabled,
        fluid: true,
        value: this.state.name,
        onChange: function onChange(event) {
          return _this3.setState({
            name: event.target.value
          });
        }
      }), __jsx(_components_styledComponents__WEBPACK_IMPORTED_MODULE_18__["CustButton"], {
        size: "medium",
        content: "Sign Up",
        onClick: this.signIn,
        style: {
          backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_15__["default"].menuBackground,
          color: _colors__WEBPACK_IMPORTED_MODULE_15__["default"].menuText,
          width: "100%"
        },
        disabled: this.state.disabled,
        loading: this.state.loading
      })), __jsx("br", null), __jsx(_routes__WEBPACK_IMPORTED_MODULE_13__["Link"], {
        route: "/profile"
      }, __jsx("a", {
        style: {
          color: _colors__WEBPACK_IMPORTED_MODULE_15__["default"].menuBackground
        }
      }, __jsx("h4", null, "Signed in as ", this.state.username))), __jsx("br", null), __jsx(_routes__WEBPACK_IMPORTED_MODULE_13__["Link"], {
        route: "/posts/new"
      }, __jsx("a", null, __jsx(_components_styledComponents__WEBPACK_IMPORTED_MODULE_18__["CustButton"], {
        content: "Create New Post",
        size: "medium",
        disabled: !this.state.disabled,
        style: {
          backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_15__["default"].menuBackground,
          color: _colors__WEBPACK_IMPORTED_MODULE_15__["default"].menuText,
          width: "100%"
        }
      }))), __jsx("br", null), __jsx("br", null), __jsx("hr", null), __jsx("h3", {
        style: {
          marginBottom: "0px",
          color: _colors__WEBPACK_IMPORTED_MODULE_15__["default"].menuBackground
        }
      }, "News Updates"), __jsx("p", {
        style: {
          color: "grey",
          marginBottom: "20px"
        }
      }, "Powered by newsapi.org"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"].Group, {
        items: this.state.news
      }))));
    }
  }]);

  return SocialIndex;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SocialIndex);

/***/ })

})
//# sourceMappingURL=index.js.700b1c9ac4e7085f2d6d.hot-update.js.map