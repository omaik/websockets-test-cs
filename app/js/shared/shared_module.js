var header = require('./header/header_component.js')
var navbar = require('./navbar/navbar_component.js')


module.exports = angular.module('app.shared', [header.name, navbar.name]);
