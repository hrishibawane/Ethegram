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
  }, _react2.default.createElement("a", { className: "item", style: { fontSize: "30px", color: "#FFF" }, __source: {
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
      lineNumber: 11
    }
  }, "Ethegram")))), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: "right", __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement(_routes.Link, { route: "/users", __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement("a", { className: "item", style: { color: "#fcfff9", fontSize: "20px" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "Users")), _react2.default.createElement(_semanticUiReact.Dropdown, {
    className: "item",
    text: "Menu",
    openOnFocus: true,
    button: true,
    style: { color: "#fcfff9", fontSize: "20px" },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, _react2.default.createElement(_semanticUiReact.Dropdown.Menu, { style: { borderColor: "#003152", borderWidth: "2px" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, _react2.default.createElement(_semanticUiReact.Dropdown.Item, { className: "item", __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, _react2.default.createElement(_routes.Link, { route: "/profile", __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, _react2.default.createElement("a", { style: { fontSize: "18px", color: "#003152" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, "Profile"))), _react2.default.createElement(_semanticUiReact.Dropdown.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, _react2.default.createElement(_routes.Link, { route: "/chat", __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, _react2.default.createElement("a", { style: { fontSize: "18px", color: "#003152" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, "Chat Room"))), _react2.default.createElement(_semanticUiReact.Dropdown.Divider, { style: { borderColor: "#003152" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }), _react2.default.createElement(_semanticUiReact.Dropdown.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, _react2.default.createElement(_routes.Link, { route: "/about", __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, _react2.default.createElement("a", { style: { fontSize: "18px", color: "#003152" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, "About")))))));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTWVudSIsIklucHV0IiwiRHJvcGRvd24iLCJJY29uIiwiTGluayIsImJhY2tncm91bmRDb2xvciIsImZvbnRTaXplIiwiY29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFNLEFBQU8sQUFBVTs7QUFDaEMsQUFBUyxBQUFZLEFBRXJCOzs7Ozs7a0JBQWUsWUFBTSxBQUNuQjt5QkFDRSxBQUFDLHVDQUFLLFlBQU4sTUFBaUIsT0FBTyxFQUFFLGlCQUExQixBQUF3QixBQUFtQjtnQkFBM0M7a0JBQUEsQUFDRTtBQURGO0dBQUEsa0JBQ0UsQUFBQyw4QkFBSyxPQUFOLEFBQVk7Z0JBQVo7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWEsUUFBTyxPQUFPLEVBQUUsVUFBRixBQUFZLFFBQVEsT0FBL0MsQUFBMkIsQUFBMkI7Z0JBQXREO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FKUixBQUNFLEFBQ0UsQUFDRSxBQUNFLEFBS04sZ0NBQUMsY0FBRCxzQkFBQSxBQUFNLFFBQUssVUFBWCxBQUFvQjtnQkFBcEI7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUMsOEJBQUssT0FBTixBQUFZO2dCQUFaO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLE9BQUcsV0FBSCxBQUFhLFFBQU8sT0FBTyxFQUFFLE9BQUYsQUFBUyxXQUFXLFVBQS9DLEFBQTJCLEFBQThCO2dCQUF6RDtrQkFBQTtBQUFBO0tBRkosQUFDRSxBQUNFLEFBSUYsMkJBQUEsQUFBQztlQUFELEFBQ1ksQUFDVjtVQUZGLEFBRU8sQUFDTDtpQkFIRixBQUlFO1lBSkYsQUFLRTtXQUFPLEVBQUUsT0FBRixBQUFTLFdBQVcsVUFMN0IsQUFLUyxBQUE4Qjs7Z0JBTHZDO2tCQUFBLEFBT0U7QUFQRjtBQUNFLHFCQU1DLGNBQUQsMEJBQUEsQUFBVSxRQUFLLE9BQU8sRUFBRyxhQUFILEFBQWUsV0FBVyxhQUFoRCxBQUFzQixBQUFzQztnQkFBNUQ7a0JBQUEsQUFDRTtBQURGO3FCQUNHLGNBQUQsMEJBQUEsQUFBVSxRQUFLLFdBQWYsQUFBeUI7Z0JBQXpCO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtnQkFBWjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxPQUFHLE9BQU8sRUFBRSxVQUFGLEFBQVksUUFBUSxPQUE5QixBQUFVLEFBQTBCO2dCQUFwQztrQkFBQTtBQUFBO0tBSE4sQUFDRSxBQUNFLEFBQ0UsQUFLSiw4QkFBQyxjQUFELDBCQUFBLEFBQVU7O2dCQUFWO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLEFBQUMsOEJBQUssT0FBTixBQUFZO2dCQUFaO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLE9BQUcsT0FBTyxFQUFFLFVBQUYsQUFBWSxRQUFRLE9BQTlCLEFBQVUsQUFBMEI7Z0JBQXBDO2tCQUFBO0FBQUE7S0FWTixBQVFFLEFBQ0UsQUFDRSxBQVlKLDhDQUFBLEFBQUMsMEJBQUQsQUFBVSxXQUFRLE9BQU8sRUFBRSxhQUEzQixBQUF5QixBQUFjO2dCQUF2QztrQkF0QkYsQUFzQkUsQUFDQTtBQURBO3NCQUNDLGNBQUQsMEJBQUEsQUFBVTs7Z0JBQVY7a0JBQUEsQUFDQTtBQURBO0FBQUEscUJBQ0EsQUFBQyw4QkFBSyxPQUFOLEFBQVk7Z0JBQVo7a0JBQUEsQUFDSTtBQURKO3FCQUNJLGNBQUEsT0FBRyxPQUFPLEVBQUUsVUFBRixBQUFZLFFBQVEsT0FBOUIsQUFBVSxBQUEwQjtnQkFBcEM7a0JBQUE7QUFBQTtLQWhEZCxBQUNFLEFBU0UsQUFNRSxBQU9FLEFBdUJFLEFBQ0EsQUFDSSxBQVVmO0FBM0REIiwiZmlsZSI6IkhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ocmlzaGliL0Rlc2t0b3AvcHJvdG90eXBlIn0=