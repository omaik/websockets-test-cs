var route = require('./home_route.js')
var component = require('./home_component.js')

module.exports = angular.module('app.main', [route.name, component.name]);
