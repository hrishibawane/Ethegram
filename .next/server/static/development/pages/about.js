module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./colors.js":
/*!*******************!*\
  !*** ./colors.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const COLORS = {
  white: '#fff',
  black: '#000',
  menuBackground: '#1f2833',
  menuText: '#66fcf1',
  divBackground: '#45a29e',
  layoutBackground: '#fff',
  ddbackground: '#394863',
  background: '#f0f0f1'
};
/* harmony default export */ __webpack_exports__["default"] = (COLORS);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../colors */ "./colors.js");
var _jsxFileName = "/home/hrishib/Desktop/prototype/components/Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    borderless: true,
    style: {
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_3__["default"].menuBackground
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("a", {
    className: "item",
    style: {
      fontSize: "30px",
      color: _colors__WEBPACK_IMPORTED_MODULE_3__["default"].menuText
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "Ethegram"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Menu, {
    position: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("a", {
    className: "item",
    style: {
      color: _colors__WEBPACK_IMPORTED_MODULE_3__["default"].menuText,
      fontSize: "20px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "Home")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
    simple: true,
    className: "item",
    text: "Menu",
    openOnFocus: true,
    button: true,
    style: {
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_3__["default"].menuBackground,
      color: _colors__WEBPACK_IMPORTED_MODULE_3__["default"].menuText,
      fontSize: "20px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Menu, {
    style: {
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_3__["default"].menuBackground,
      borderWidth: "2px",
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_3__["default"].ddbackground
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "/profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      fontSize: "18px",
      color: _colors__WEBPACK_IMPORTED_MODULE_3__["default"].menuText
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "Profile"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "/chat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      fontSize: "18px",
      color: _colors__WEBPACK_IMPORTED_MODULE_3__["default"].menuText
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "Chat Room"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "/users",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      fontSize: "18px",
      color: _colors__WEBPACK_IMPORTED_MODULE_3__["default"].menuText
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "Users"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Divider, {
    style: {
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_3__["default"].menuText
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      fontSize: "18px",
      color: _colors__WEBPACK_IMPORTED_MODULE_3__["default"].menuText
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, "About")))))));
});

/***/ }),

/***/ "./pages/about/index.js":
/*!******************************!*\
  !*** ./pages/about/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../colors */ "./colors.js");
var _jsxFileName = "/home/hrishib/Desktop/prototype/pages/about/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







class About extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      style: {
        margin: "0px",
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_5__["default"].menuBackground
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("link", {
      rel: "stylesheet",
      href: "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }), __jsx("link", {
      href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
      rel: "stylesheet",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    })), __jsx("div", {
      style: {
        padding: "30px",
        paddingTop: "35px",
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_5__["default"].menuBackground,
        position: "absolute",
        left: "10px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      route: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("a", {
      className: "item",
      style: {
        color: _colors__WEBPACK_IMPORTED_MODULE_5__["default"].menuText,
        fontSize: "20px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      name: "home",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    })))), __jsx("div", {
      style: {
        padding: "20px",
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_5__["default"].menuBackground,
        position: "absolute",
        right: "10px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
      simple: true,
      className: "icon",
      icon: "align justify",
      openOnFocus: true,
      button: true,
      style: {
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_5__["default"].menuBackground,
        color: _colors__WEBPACK_IMPORTED_MODULE_5__["default"].menuText,
        fontSize: "20px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Menu, {
      style: {
        width: "200px",
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_5__["default"].menuBackground,
        borderWidth: "2px",
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_5__["default"].ddbackground
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
      className: "item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      route: "/profile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, __jsx("a", {
      style: {
        fontSize: "18px",
        color: _colors__WEBPACK_IMPORTED_MODULE_5__["default"].menuText
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, "Profile"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      route: "/chat",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, __jsx("a", {
      style: {
        fontSize: "18px",
        color: _colors__WEBPACK_IMPORTED_MODULE_5__["default"].menuText
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, "Chat Room"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      route: "/users",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, __jsx("a", {
      style: {
        fontSize: "18px",
        color: _colors__WEBPACK_IMPORTED_MODULE_5__["default"].menuText
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, "Users"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Divider, {
      style: {
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_5__["default"].menuText
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      route: "/about",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, __jsx("a", {
      style: {
        fontSize: "18px",
        color: _colors__WEBPACK_IMPORTED_MODULE_5__["default"].menuText
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, "About")))))), __jsx("div", {
      style: {
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_5__["default"].menuBackground,
        width: "100%",
        height: "102vh",
        margin: "0px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, __jsx("center", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, __jsx("div", {
      style: {
        marginTop: "210px",
        top: "0px",
        bottom: "0px",
        left: "0px",
        right: "0px",
        position: "absolute"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, __jsx("h1", {
      style: {
        fontFamily: "Noto Sans",
        fontSize: "100px",
        color: _colors__WEBPACK_IMPORTED_MODULE_5__["default"].menuText
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, "ETHEGRAM"), __jsx("p", {
      style: {
        fontSize: "50px",
        color: _colors__WEBPACK_IMPORTED_MODULE_5__["default"].menuText
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, "The Decentralized Social Network"), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, __jsx("p", {
      style: {
        fontSize: "20px",
        color: _colors__WEBPACK_IMPORTED_MODULE_5__["default"].menuText
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, "Ethegram is a Decentralized Application based Social Network created on Ethereum Blockchain. It uses Inter-Planetary File System (IPFS) for storing large files like images. You can post articles, blogs, images, etc. and you will be rewarded based on the upvotes your posts get. The rewards are in the form of Gram Tokens (GTok). You can redeem these tokens from this platform itself into real Ether."), __jsx("p", {
      style: {
        fontSize: "20px",
        color: _colors__WEBPACK_IMPORTED_MODULE_5__["default"].menuText
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, "Ethegram is a completely safe and secure Decentralized Application. Your entire data is stored on the Blockchain. The transactions are completely secure and surely profitable . . ."))))), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      width: 6,
      style: {
        borderRadius: "20px",
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_5__["default"].divBackground,
        color: _colors__WEBPACK_IMPORTED_MODULE_5__["default"].menuBackground,
        padding: "30px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }, __jsx("p", {
      style: {
        fontSize: "40px",
        float: "right"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }, "Creators"), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
      inverted: true,
      size: "huge",
      relaxed: true,
      floated: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/small/christian.jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Header, {
      style: {
        color: _colors__WEBPACK_IMPORTED_MODULE_5__["default"].menuBackground,
        fontSize: "20px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }, "Hrishikesh Bawane"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Description, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }, __jsx("a", {
      style: {
        color: _colors__WEBPACK_IMPORTED_MODULE_5__["default"].menuBackground,
        fontSize: "15px"
      },
      href: "https://github.com/hrishibawane",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }, "github.com/hrishibawane")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/small/jenny.jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Header, {
      style: {
        color: _colors__WEBPACK_IMPORTED_MODULE_5__["default"].menuBackground,
        fontSize: "20px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218
      },
      __self: this
    }, "Tanuja Shinde"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Description, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223
      },
      __self: this
    }, __jsx("a", {
      style: {
        color: _colors__WEBPACK_IMPORTED_MODULE_5__["default"].menuBackground,
        fontSize: "15px"
      },
      href: "https://github.com/Tanyashinde",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224
      },
      __self: this
    }, "github.com/tanyashinde")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/small/tom.jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Header, {
      style: {
        color: _colors__WEBPACK_IMPORTED_MODULE_5__["default"].menuBackground,
        fontSize: "20px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243
      },
      __self: this
    }, "Yash Budukh"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Description, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248
      },
      __self: this
    }, __jsx("a", {
      style: {
        color: _colors__WEBPACK_IMPORTED_MODULE_5__["default"].menuBackground,
        fontSize: "15px"
      },
      href: "https://github.com/budukhyash",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249
      },
      __self: this
    }, "github.com/budukhyash")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/small/matt.jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Header, {
      style: {
        color: _colors__WEBPACK_IMPORTED_MODULE_5__["default"].menuBackground,
        fontSize: "20px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268
      },
      __self: this
    }, "Abhishek Kadam"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Description, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273
      },
      __self: this
    }, __jsx("a", {
      style: {
        color: _colors__WEBPACK_IMPORTED_MODULE_5__["default"].menuBackground,
        fontSize: "15px"
      },
      href: "https://github.com/akadam",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274
      },
      __self: this
    }, "github.com/akadam")))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      width: 4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      width: 6,
      style: {
        borderRadius: "20px",
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_5__["default"].divBackground,
        color: _colors__WEBPACK_IMPORTED_MODULE_5__["default"].menuBackground,
        padding: "30px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292
      },
      __self: this
    }, __jsx("p", {
      style: {
        fontSize: "40px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301
      },
      __self: this
    }, "Features"), __jsx("ul", {
      style: {
        marginTop: "2px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303
      },
      __self: this
    }, __jsx("li", {
      style: {
        fontSize: "20px",
        margin: "8px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304
      },
      __self: this
    }, "Easy to get started"), __jsx("li", {
      style: {
        fontSize: "20px",
        margin: "8px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307
      },
      __self: this
    }, "Earn rewards for your own content"), __jsx("li", {
      style: {
        fontSize: "20px",
        margin: "8px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310
      },
      __self: this
    }, "Simple yet profitable tokenomics"), __jsx("li", {
      style: {
        fontSize: "20px",
        margin: "8px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313
      },
      __self: this
    }, "Rewards purely based on quality of user-content"))))), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321
      },
      __self: this
    }), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322
      },
      __self: this
    }), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323
      },
      __self: this
    }), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (About); // Rewards for your own content
// Simple Tokenomics
// Ethereum Blockchain based storage
// IPFS for large file storage

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const routes = __webpack_require__(/*! next-routes */ "next-routes")();

module.exports = routes;

/***/ }),

/***/ 7:
/*!************************************!*\
  !*** multi ./pages/about/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/hrishib/Desktop/prototype/pages/about/index.js */"./pages/about/index.js");


/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=about.js.map