"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _head = require("next/dist/lib/head.js");

var _head2 = _interopRequireDefault(_head);

var _Header = require("./Header");

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/hrishib/Desktop/prototype/components/Layout.js";

exports.default = function (props) {
  return _react2.default.createElement("div", { style: { backgroundColor: "#eaf4fc" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement("link", {
    rel: "stylesheet",
    href: "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  })), _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), _react2.default.createElement("div", { style: { margin: "50px", marginTop: "0px", paddingLeft: "30px", paddingRight: "30px" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, props.children, _react2.default.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), _react2.default.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  })), _react2.default.createElement("div", { style: { position: "bottom", color: "#FFF", padding: "10px", backgroundColor: "#003152", height: "200px", width: "100%" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, _react2.default.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "Creators:"), _react2.default.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, _react2.default.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, _react2.default.createElement("a", { style: { color: "#FFF" }, href: "https://github.com/hrishibawane", __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "Hrishikesh Bawane")), _react2.default.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, _react2.default.createElement("a", { style: { color: "#FFF" }, href: "https://github.com/Tanyashinde", __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "Tanuja Shinde")))));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29udGFpbmVyIiwiSW1hZ2UiLCJIZWFkIiwiSGVhZGVyIiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luIiwibWFyZ2luVG9wIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJwcm9wcyIsImNoaWxkcmVuIiwicG9zaXRpb24iLCJjb2xvciIsInBhZGRpbmciLCJoZWlnaHQiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBVzs7QUFDcEIsQUFBTzs7OztBQUNQLEFBQU8sQUFBWSxBQUVuQjs7Ozs7Ozs7a0JBQWUsaUJBQVMsQUFDdEI7eUJBQ0UsY0FBQSxTQUFLLE9BQU8sRUFBQyxpQkFBYixBQUFZLEFBQWlCO2dCQUE3QjtrQkFBQSxBQUNFO0FBREY7R0FBQSxrQkFDRSxBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQTtTQUNFLEFBQ00sQUFDSjtVQUZGLEFBRU87O2dCQUZQO2tCQUZKLEFBQ0UsQUFDRSxBQU1GO0FBTkU7QUFDRSx1QkFLSixBQUFDOztnQkFBRDtrQkFSRixBQVFFLEFBQ0E7QUFEQTtBQUFBLHNCQUNBLGNBQUEsU0FBSyxPQUFPLEVBQUUsUUFBRixBQUFTLFFBQVEsV0FBakIsQUFBMkIsT0FBTyxhQUFsQyxBQUE4QyxRQUFRLGNBQWxFLEFBQVksQUFBbUU7Z0JBQS9FO2tCQUFBLEFBRUc7QUFGSDtXQUFBLEFBRVMsQUFDUDs7Z0JBQUE7a0JBSEYsQUFHRSxBQUFNO0FBQU47QUFBQTs7Z0JBQU07a0JBWlYsQUFTRSxBQUdRLEFBRVI7QUFGUTtBQUFBLHVCQUVSLGNBQUEsU0FBSyxPQUFPLEVBQUUsVUFBRixBQUFXLFVBQVUsT0FBckIsQUFBMkIsUUFBUSxTQUFuQyxBQUEyQyxRQUFRLGlCQUFuRCxBQUFtRSxXQUFXLFFBQTlFLEFBQXFGLFNBQVMsT0FBMUcsQUFBWSxBQUFvRztnQkFBaEg7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURGLEFBQ0UsQUFDQSw4QkFBQSxjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUFJO0FBQUo7QUFBQSxxQkFBSSxjQUFBLE9BQUcsT0FBTyxFQUFDLE9BQVgsQUFBVSxBQUFPLFVBQVMsTUFBMUIsQUFBK0I7Z0JBQS9CO2tCQUFBO0FBQUE7S0FETixBQUNFLEFBQUksQUFDSix1Q0FBQSxjQUFBOztnQkFBQTtrQkFBQSxBQUFJO0FBQUo7QUFBQSxxQkFBSSxjQUFBLE9BQUcsT0FBTyxFQUFDLE9BQVgsQUFBVSxBQUFPLFVBQVMsTUFBMUIsQUFBK0I7Z0JBQS9CO2tCQUFBO0FBQUE7S0FuQlosQUFDRSxBQWNFLEFBRUUsQUFFRSxBQUFJLEFBS2I7QUF6QkQiLCJmaWxlIjoiTGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2hyaXNoaWIvRGVza3RvcC9wcm90b3R5cGUifQ==