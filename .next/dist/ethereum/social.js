'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Social = require('./build/Social.json');

var _Social2 = _interopRequireDefault(_Social);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_Social2.default.interface), '0xB94F1dF25671Ea0Fc1135069286ad3eB53C84a85');
// 0xCaAa55C33Ffe6a7542e8dEc00C142b7Abaa30622
// 0xA98edbEfA290CCFe93Cd593b01c0A48cf0C1215A

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3NvY2lhbC5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwiU29jaWFsIiwiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQW1CLEFBQW5COzs7Ozs7QUFFQSxJQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQ2IsS0FBSyxBQUFMLE1BQVcsaUJBQU8sQUFBbEIsQUFEYSxZQUViLEFBRmEsQUFBakI7QUFJQTtBQUNBLEFBRUE7O2tCQUFlLEFBQWYiLCJmaWxlIjoic29jaWFsLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2hyaXNoaWIvRGVza3RvcC9wcm90b3R5cGUifQ==