"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _routes = require("../routes");

var _web = require("../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/hrishib/Desktop/prototype/components/Header.js";

exports.default = function () {

  return _react2.default.createElement(_semanticUiReact.Menu, { borderless: true, style: { backgroundColor: "#003152" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_routes.Link, { route: "/", __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement("a", { className: "item", style: { fontSize: "30px", color: "#FFF" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Ethegram"))), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: "right", __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement(_routes.Link, { route: "/users", __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement("a", { className: "item", style: { color: "#fcfff9", fontSize: "20px" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "Users")), _react2.default.createElement(_semanticUiReact.Dropdown, {
    className: "item",
    text: "Menu",
    openOnFocus: true,
    button: true,
    style: { color: "#fcfff9", fontSize: "20px" },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, _react2.default.createElement(_semanticUiReact.Dropdown.Menu, { style: { borderColor: "#003152", borderWidth: "2px" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, _react2.default.createElement(_semanticUiReact.Dropdown.Item, { className: "item", __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, _react2.default.createElement(_routes.Link, { route: "/profile", __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, _react2.default.createElement("a", { style: { fontSize: "18px", color: "#003152" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, "Profile"))), _react2.default.createElement(_semanticUiReact.Dropdown.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, _react2.default.createElement(_routes.Link, { route: "/chat", __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, _react2.default.createElement("a", { style: { fontSize: "18px", color: "#003152" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, "Chat Room"))), _react2.default.createElement(_semanticUiReact.Dropdown.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, _react2.default.createElement(_routes.Link, { route: "/users", __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, _react2.default.createElement("a", { style: { fontSize: "18px", color: "#003152" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, "Users"))), _react2.default.createElement(_semanticUiReact.Dropdown.Divider, { style: { borderColor: "#003152" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }), _react2.default.createElement(_semanticUiReact.Dropdown.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, _react2.default.createElement(_routes.Link, { route: "/about", __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, _react2.default.createElement("a", { style: { fontSize: "18px", color: "#003152" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, "About")))))));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTWVudSIsIklucHV0IiwiRHJvcGRvd24iLCJJbWFnZSIsIkxpbmsiLCJ3ZWIzIiwiYmFja2dyb3VuZENvbG9yIiwiZm9udFNpemUiLCJjb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTLEFBQU0sQUFBTyxBQUFVOztBQUNoQyxBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBVSxBQUVqQjs7Ozs7Ozs7a0JBQWUsWUFBTSxBQUVuQjs7eUJBQ0UsQUFBQyx1Q0FBSyxZQUFOLE1BQWlCLE9BQU8sRUFBRSxpQkFBMUIsQUFBd0IsQUFBbUI7Z0JBQTNDO2tCQUFBLEFBQ0U7QUFERjtHQUFBLGtCQUNFLEFBQUMsOEJBQUssT0FBTixBQUFZO2dCQUFaO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLE9BQUcsV0FBSCxBQUFhLFFBQU8sT0FBTyxFQUFFLFVBQUYsQUFBWSxRQUFRLE9BQS9DLEFBQTJCLEFBQTJCO2dCQUF0RDtrQkFBQSxBQUVFO0FBRkY7cUJBRUUsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBSk4sQUFDRSxBQUNFLEFBRUUsQUFJSiwrQkFBQyxjQUFELHNCQUFBLEFBQU0sUUFBSyxVQUFYLEFBQW9CO2dCQUFwQjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsQUFBQyw4QkFBSyxPQUFOLEFBQVk7Z0JBQVo7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWEsUUFBTyxPQUFPLEVBQUUsT0FBRixBQUFTLFdBQVcsVUFBL0MsQUFBMkIsQUFBOEI7Z0JBQXpEO2tCQUFBO0FBQUE7S0FGSixBQUNFLEFBQ0UsQUFJRiwyQkFBQSxBQUFDO2VBQUQsQUFDWSxBQUNWO1VBRkYsQUFFTyxBQUNMO2lCQUhGLEFBSUU7WUFKRixBQUtFO1dBQU8sRUFBRSxPQUFGLEFBQVMsV0FBVyxVQUw3QixBQUtTLEFBQThCOztnQkFMdkM7a0JBQUEsQUFPRTtBQVBGO0FBQ0UscUJBTUMsY0FBRCwwQkFBQSxBQUFVLFFBQUssT0FBTyxFQUFFLGFBQUYsQUFBZSxXQUFXLGFBQWhELEFBQXNCLEFBQXVDO2dCQUE3RDtrQkFBQSxBQUNFO0FBREY7cUJBQ0csY0FBRCwwQkFBQSxBQUFVLFFBQUssV0FBZixBQUF5QjtnQkFBekI7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUMsOEJBQUssT0FBTixBQUFZO2dCQUFaO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLE9BQUcsT0FBTyxFQUFFLFVBQUYsQUFBWSxRQUFRLE9BQTlCLEFBQVUsQUFBMkI7Z0JBQXJDO2tCQUFBO0FBQUE7S0FITixBQUNFLEFBQ0UsQUFDRSxBQUdKLDhCQUFDLGNBQUQsMEJBQUEsQUFBVTs7Z0JBQVY7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsQUFBQyw4QkFBSyxPQUFOLEFBQVk7Z0JBQVo7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsT0FBRyxPQUFPLEVBQUUsVUFBRixBQUFZLFFBQVEsT0FBOUIsQUFBVSxBQUEyQjtnQkFBckM7a0JBQUE7QUFBQTtLQVJOLEFBTUUsQUFDRSxBQUNFLEFBR0osZ0NBQUMsY0FBRCwwQkFBQSxBQUFVOztnQkFBVjtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtnQkFBWjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxPQUFHLE9BQU8sRUFBRSxVQUFGLEFBQVksUUFBUSxPQUE5QixBQUFVLEFBQTJCO2dCQUFyQztrQkFBQTtBQUFBO0tBYk4sQUFXRSxBQUNFLEFBQ0UsQUFHSiwwQ0FBQSxBQUFDLDBCQUFELEFBQVUsV0FBUSxPQUFPLEVBQUUsYUFBM0IsQUFBeUIsQUFBZTtnQkFBeEM7a0JBaEJGLEFBZ0JFLEFBQ0E7QUFEQTtzQkFDQyxjQUFELDBCQUFBLEFBQVU7O2dCQUFWO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLEFBQUMsOEJBQUssT0FBTixBQUFZO2dCQUFaO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLE9BQUcsT0FBTyxFQUFFLFVBQUYsQUFBWSxRQUFRLE9BQTlCLEFBQVUsQUFBMkI7Z0JBQXJDO2tCQUFBO0FBQUE7S0F6Q2QsQUFDRSxBQVFFLEFBTUUsQUFPRSxBQWlCRSxBQUNFLEFBQ0UsQUFRZjtBQW5ERCIsImZpbGUiOiJIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvaHJpc2hpYi9EZXNrdG9wL3Byb3RvdHlwZSJ9