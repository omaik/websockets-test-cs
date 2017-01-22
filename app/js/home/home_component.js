module.exports = angular
  .module('app.home.component', [])
  .component('appHome', {
    templateUrl: '/app/js/home/home_template.html',
    controller: ['$scope', HomeController ],
    transclude: true
  });

function HomeController ($scope, $http, config) {
};
