'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var IPFS = require('ipfs-api');
var ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
//run with local daemon
// const ipfsApi = require(‘ipfs-api’);
// const ipfs = new ipfsApi(‘localhost’, ‘5001’, {protocol:‘http’});
exports.default = ipfs;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2lwZnMuanMiXSwibmFtZXMiOlsiSVBGUyIsInJlcXVpcmUiLCJpcGZzIiwiaG9zdCIsInBvcnQiLCJwcm90b2NvbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNLE9BQU8sQUFBUCxBQUFOO0FBQ0EsSUFBTSxPQUFPLElBQUksQUFBSixLQUFTLEVBQUUsTUFBTSxBQUFSLGtCQUEwQixNQUFNLEFBQWhDLE1BQXNDLFVBQVUsQUFBaEQsQUFBVCxBQUFiO0FBQ0E7QUFDQTtBQUNBLEFBQ0E7a0JBQWUsQUFBZiIsImZpbGUiOiJpcGZzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2hyaXNoaWIvRGVza3RvcC9wcm90b3R5cGUifQ==