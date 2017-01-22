module.exports = angular
  .module('app.home.route', [])
  .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider.state({
        name: 'home',
        url: '/home',
        template: '<app-home></app-home>'
      });
  });
