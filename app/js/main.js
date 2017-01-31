var mainModule = require('./main/main_module.js');
var homeModule = require('./home/home_module.js');
var chatModule = require('./chat/chat_module.js');
var loginModule = require('./login/login_module.js');
var authService = require('./services/auth/auth_service.js');
var authInterceptor = require('./services/auth/auth_interceptor.js');
var shared = require('./shared/shared_module.js');
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
    shared.name,
    config.name
  ]
).run(function($rootScope, $state, Auth) {
  $rootScope.$on('$stateNotFound', function(){
    debugger;
    $state.go('home');
  });
  $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
    debugger;
    if (toState.authenticate) {
      Auth.authenticated().then(function() {}, function() {
        $rootScope.returnToState = toState.name;
        $state.go('login');
      })
    }
  });
}).config(function(mdlConfigProvider, $httpProvider){
            mdlConfigProvider.floating = false;
            mdlConfigProvider.rippleEffect = false;
            $httpProvider.interceptors.push('AuthInterceptor');
          });
