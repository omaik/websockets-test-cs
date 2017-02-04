// main func
var mainModule = require('./main/main_module.js');
var homeModule = require('./home/home_module.js');
var chatModule = require('./chat/chat_module.js');
var loginModule = require('./login/login_module.js');
var shared = require('./shared/shared_module.js');

//services
var authService = require('./services/auth/auth_service.js');
var authInterceptor = require('./services/auth/auth_interceptor.js');
var actionCable = require('./services/action_cable/action_cable.js');
//configs
var config = require('./config/config_module.js');


module.exports = angular.module(
  'app',
  [
    'ui.router',
    'ngRoute',
    'mdl',
    'ngMaterial',
    mainModule.name,
    homeModule.name,
    chatModule.name,
    loginModule.name,
    authService.name,
    authInterceptor.name,
    actionCable.name,
    shared.name,
    config.name
  ]
).run(function($rootScope, $state, Auth, AppConsumer) {
  $rootScope.$on('$stateNotFound', function(){
    $state.go('home');
  });

  $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
    if (toState.authenticate) {
      Auth.authenticated().then(function() {}, function() {
        $rootScope.returnToState = toState.name;
        $state.go('login');
      })
    }
  });

  AppConsumer.consumer;

}).config(function(mdlConfigProvider, $httpProvider){
            mdlConfigProvider.floating = false;
            mdlConfigProvider.rippleEffect = false;
            $httpProvider.interceptors.push('AuthInterceptor');
          });
