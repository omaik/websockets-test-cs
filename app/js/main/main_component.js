module.exports = angular
  .module('app.main.component', [])
  .component('appMain', {
    templateUrl: '/app/js/main/main_template.html',
    controller: ['$scope', '$http', 'app.config', MainController ],
    transclude: true
  });

function MainController ($scope, $http, config) {
  $http({
    method: 'GET',
    url: config.baseURL
  });
}
