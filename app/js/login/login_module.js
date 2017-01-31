var route = require('./login_route.js')
var component = require('./login_component.js')

module.exports = angular.module('app.login', [route.name, component.name]);
