module.exports = angular
  .module('app.login.route', [])
  .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider.state({
        name: 'login',
        url: '/login',
        template: '<app-login></app-login>'
      });
  });
