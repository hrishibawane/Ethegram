"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

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

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _social = require("../../ethereum/social");

var _social2 = _interopRequireDefault(_social);

var _web = require("../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _routes = require("../../routes");

var _routes2 = _interopRequireDefault(_routes);

var _semanticUiReact = require("semantic-ui-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/hrishib/Desktop/prototype/pages/users/index.js?entry";


var UserIndex = function (_Component) {
  (0, _inherits3.default)(UserIndex, _Component);

  function UserIndex() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, UserIndex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = UserIndex.__proto__ || (0, _getPrototypeOf2.default)(UserIndex)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      users: []
    }, _this.getUsers = function () {
      return _this.state.users.map(function (user, index) {
        var score = 0;
        if (user.postsCount != 0) {
          score = user.tokens / user.postsCount;
        }
        return _react2.default.createElement(_semanticUiReact.List.Item, {
          key: index,
          style: {
            borderRadius: "10px",
            marginBottom: "10px",
            backgroundColor: "#81D8D0",
            padding: "20px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        }, _react2.default.createElement(_semanticUiReact.List.Icon, { name: "user circle", size: "huge", __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }), _react2.default.createElement(_semanticUiReact.List.Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }, _react2.default.createElement(_semanticUiReact.List.Header, {
          style: {
            fontSize: "22px",
            margin: "5px",
            marginBottom: "10px",
            color: "#003152"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        }, user.name), _react2.default.createElement(_semanticUiReact.List.Description, {
          style: { fontSize: "16px", marginLeft: "5px", color: "#003152" },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        }, _react2.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        }, _react2.default.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }, user.uadd), _react2.default.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }, "Score: ", score)))));
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(UserIndex, [{
    key: "componentDidMount",
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var userCount, users;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _social2.default.methods.userCount().call();

              case 2:
                userCount = _context.sent;
                _context.next = 5;
                return _promise2.default.all(Array(parseInt(userCount)).fill().map(function (element, index) {
                  return _social2.default.methods.peeps(index).call();
                }));

              case 5:
                users = _context.sent;

                console.log(users);
                this.setState({ users: users });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref2.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, "Users"), _react2.default.createElement(_semanticUiReact.List, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, this.getUsers()));
    }
  }]);

  return UserIndex;
}(_react.Component);

exports.default = UserIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3VzZXJzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0Iiwic29jaWFsIiwid2ViMyIsIkxpbmsiLCJMaXN0IiwiSWNvbiIsIlVzZXJJbmRleCIsInN0YXRlIiwidXNlcnMiLCJnZXRVc2VycyIsIm1hcCIsInVzZXIiLCJpbmRleCIsInNjb3JlIiwicG9zdHNDb3VudCIsInRva2VucyIsImJvcmRlclJhZGl1cyIsIm1hcmdpbkJvdHRvbSIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJmb250U2l6ZSIsIm1hcmdpbiIsImNvbG9yIiwibmFtZSIsIm1hcmdpbkxlZnQiLCJ1YWRkIiwibWV0aG9kcyIsInVzZXJDb3VudCIsImNhbGwiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiLCJwZWVwcyIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBTTs7Ozs7OztJQUVULEE7Ozs7Ozs7Ozs7Ozs7O2tOLEFBQ0o7YUFBUSxBQUNDLEE7QUFERCxBQUNOLGFBaUJGLEEsV0FBVyxZQUFNLEFBQ2Y7bUJBQU8sQUFBSyxNQUFMLEFBQVcsTUFBWCxBQUFpQixJQUFJLFVBQUEsQUFBQyxNQUFELEFBQU8sT0FBVSxBQUMzQztZQUFJLFFBQUosQUFBWSxBQUNaO1lBQUksS0FBQSxBQUFLLGNBQVQsQUFBdUIsR0FBRyxBQUN4QjtrQkFBUSxLQUFBLEFBQUssU0FBUyxLQUF0QixBQUEyQixBQUM1QjtBQUNEOytCQUNHLGNBQUQsc0JBQUEsQUFBTTtlQUFOLEFBQ08sQUFDTDs7MEJBQU8sQUFDUyxBQUNkOzBCQUZLLEFBRVMsQUFDZDs2QkFISyxBQUdZLEFBQ2pCO3FCQU5KLEFBRVMsQUFJSTtBQUpKLEFBQ0w7O3NCQUhKO3dCQUFBLEFBU0U7QUFURjtBQUNFLFNBREYsZ0NBU0UsQUFBQyxzQkFBRCxBQUFNLFFBQUssTUFBWCxBQUFnQixlQUFjLE1BQTlCLEFBQW1DO3NCQUFuQzt3QkFURixBQVNFLEFBQ0E7QUFEQTs0QkFDQyxjQUFELHNCQUFBLEFBQU07O3NCQUFOO3dCQUFBLEFBQ0U7QUFERjtBQUFBLDJCQUNHLGNBQUQsc0JBQUEsQUFBTTs7c0JBQ0csQUFDSyxBQUNWO29CQUZLLEFBRUcsQUFDUjswQkFISyxBQUdTLEFBQ2Q7bUJBTEosQUFDUyxBQUlFO0FBSkYsQUFDTDs7c0JBRko7d0JBQUEsQUFRRztBQVJIO0FBQ0UsZ0JBRkosQUFDRSxBQVFRLEFBRVIsdUJBQUMsY0FBRCxzQkFBQSxBQUFNO2lCQUNHLEVBQUUsVUFBRixBQUFZLFFBQVEsWUFBcEIsQUFBZ0MsT0FBTyxPQURoRCxBQUNTLEFBQThDOztzQkFEdkQ7d0JBQUEsQUFHRTtBQUhGO0FBQ0UsMkJBRUEsY0FBQTs7c0JBQUE7d0JBQUEsQUFDRTtBQURGO0FBQUEsMkJBQ0UsY0FBQTs7c0JBQUE7d0JBQUEsQUFBSTtBQUFKO0FBQUEsZ0JBREYsQUFDRSxBQUFTLEFBQ1QsdUJBQUEsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLFdBQVcsV0EzQnJCLEFBQ0UsQUFVRSxBQVdFLEFBR0UsQUFFRSxBQU1YO0FBdENELEFBQU8sQUF1Q1IsT0F2Q1E7QTs7Ozs7Ozs7Ozs7Ozt1QkFkaUIsaUJBQUEsQUFBTyxRQUFQLEFBQWUsWUFBZixBQUEyQixBOzttQkFBN0M7QTs7eUNBRWMsQUFBUSxVQUNwQixTQUFOLEFBQU0sQUFBUyxZQUFmLEFBQ0csT0FESCxBQUVHLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxPQUFVLEFBQ3ZCO3lCQUFPLGlCQUFBLEFBQU8sUUFBUCxBQUFlLE1BQWYsQUFBcUIsT0FBNUIsQUFBTyxBQUE0QixBQUNwQztBQUxlLEEsQUFDbEIsaUJBQUEsQ0FEa0I7O21CQUFkO0EsaUNBT047O3dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7cUJBQUEsQUFBSyxTQUFTLEVBQUUsT0FBaEIsQUFBYyxBQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBNkNoQixBQUNQOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLDBCQUFBLEFBQUM7O29CQUFEO3NCQUFBLEFBQU87QUFBUDtBQUFBLGNBSEosQUFDRSxBQUVFLEFBQU8sQUFBSyxBQUdqQjs7Ozs7QUFwRXFCLEEsQUF1RXhCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2hyaXNoaWIvRGVza3RvcC9wcm90b3R5cGUifQ==