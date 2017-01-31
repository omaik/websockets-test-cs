var route = require('./chat_route.js')
var component = require('./chat_component.js')

module.exports = angular.module('app.chat', [route.name, component.name]);
