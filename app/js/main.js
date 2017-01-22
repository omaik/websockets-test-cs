var mainModule = require('./main/main_module.js')
var homeModule = require('./home/home_module.js')
var config = require('./config/config_module.js')


module.exports = angular.module(
  'app',
  [
    'ui.router',
    'ngMaterial',
    homeModule.name,
    mainModule.name,
    config.name
  ]
);
