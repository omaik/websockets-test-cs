var mainModule = require('./main/main_module.js')
var config = require('./config/config_module.js')


module.exports = angular.module('app', ['ui.router', mainModule.name, config.name]);
