var route = require('./main_route.js')
var component = require('./main_component.js')

module.exports = angular.module('app.main', [route.name, component.name]);
