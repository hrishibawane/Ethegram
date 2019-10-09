"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/hrishib/Desktop/prototype/components/Header.js";

exports.default = function () {
  return _react2.default.createElement(_semanticUiReact.Menu, { borderless: true, style: { backgroundColor: "#003152" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_routes.Link, { route: "/", __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement("a", { className: "item", style: { fontSize: "30px", color: "#fcfff9" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Ethegram")))), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: "right", __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement(_semanticUiReact.Menu.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement(_semanticUiReact.Input, { icon: "search", placeholder: "Search...", __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  })), _react2.default.createElement(_routes.Link, { route: "/users", __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement("a", { className: "item", style: { color: "#fcfff9" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "Users")), _react2.default.createElement(_routes.Link, { route: "/posts/new", __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react2.default.createElement("a", { className: "item", style: { color: "#fcfff9" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "+"))));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTWVudSIsIklucHV0IiwiTGluayIsImJhY2tncm91bmRDb2xvciIsImZvbnRTaXplIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTLEFBQU07O0FBQ2YsQUFBUyxBQUFZLEFBRXJCOzs7Ozs7a0JBQWUsWUFBTSxBQUNuQjt5QkFDRSxBQUFDLHVDQUFLLFlBQU4sTUFBaUIsT0FBTyxFQUFDLGlCQUF6QixBQUF3QixBQUFpQjtnQkFBekM7a0JBQUEsQUFDRTtBQURGO0dBQUEsa0JBQ0UsQUFBQyw4QkFBSyxPQUFOLEFBQVk7Z0JBQVo7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWEsUUFBTyxPQUFPLEVBQUUsVUFBRixBQUFZLFFBQVEsT0FBL0MsQUFBMkIsQUFBMEI7Z0JBQXJEO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUFRO0FBQVI7QUFBQSxxQkFBUSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FIZCxBQUNFLEFBQ0UsQUFDRSxBQUFRLEFBSVosZ0NBQUMsY0FBRCxzQkFBQSxBQUFNLFFBQUssVUFBWCxBQUFvQjtnQkFBcEI7a0JBQUEsQUFDRTtBQURGO3FCQUNHLGNBQUQsc0JBQUEsQUFBTTs7Z0JBQU47a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsQUFBQyx3Q0FBTSxNQUFQLEFBQVksVUFBUyxhQUFyQixBQUFpQztnQkFBakM7a0JBRkosQUFDRSxBQUNFLEFBRUY7QUFGRTt1QkFFRixBQUFDLDhCQUFLLE9BQU4sQUFBWTtnQkFBWjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxPQUFHLFdBQUgsQUFBYSxRQUFPLE9BQU8sRUFBRSxPQUE3QixBQUEyQixBQUFRO2dCQUFuQztrQkFBQTtBQUFBO0tBTEosQUFJRSxBQUNFLEFBRUYsMkJBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7Z0JBQVo7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWEsUUFBTyxPQUFPLEVBQUUsT0FBN0IsQUFBMkIsQUFBUTtnQkFBbkM7a0JBQUE7QUFBQTtLQWhCUixBQUNFLEFBT0UsQUFPRSxBQUNFLEFBS1Q7QUF0QkQiLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2hyaXNoaWIvRGVza3RvcC9wcm90b3R5cGUifQ==