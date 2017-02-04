var connection = require('./connection.js');
var consumer = require('./consumer.js');

module.exports = angular.module('app.action-cable', [consumer.name, connection.name])
