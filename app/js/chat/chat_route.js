module.exports = angular
  .module('app.chat.route', [])
  .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider.state({
        name: 'chat',
        url: '/chat/{id}',
        template: '<app-chat></app-chat>',
        authenticate: true
      });
  });
