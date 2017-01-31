module.exports = angular
  .module('app.home.component', [])
  .component('appHome', {
    templateUrl: '/app/js/home/home_template.html',
    controller: ['$scope','$http','app.config', HomeController ],
    transclude: true
  });

function HomeController ($scope, $http, config) {
  // $http.get({
  //   url: config.baseURL + '/api/chats'
  // });
};
