'use strict';

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _buffer = require('buffer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BufferMessage = function BufferMessage() {
    _classCallCheck(this, BufferMessage);
};

BufferMessage.serialize = function (obj) {
    var pairs = _lodash2.default.toPairs(obj);
    var message = pairs.length + '|' + _lodash2.default.zip.apply(_lodash2.default, _toConsumableArray(pairs)).toString();
    return _buffer.Buffer.from(message, 'utf8');
};

BufferMessage.deserialize = function (readData) {
    var buffer = _buffer.Buffer.from(readData, 'hex');
    var packages = buffer.toString('utf-8').split('|');
    var packageSize = _lodash2.default.head(packages);
    var packageBody = _lodash2.default.last(packages).split(',');
    var unzippedResult = _lodash2.default.chunk(packageBody, packageSize);
    return _lodash2.default.zipObject.apply(_lodash2.default, _toConsumableArray(unzippedResult));
};

module.exports = BufferMessage;