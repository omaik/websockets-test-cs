module.exports = angular
  .module('app.shared.header.component', [])
  .component('appHeader', {
    templateUrl: '/app/js/shared/header/header_template.html',
    controller: ['$scope', HeaderController ]
  });

function HeaderController ($scope, $http, config) {
  $scope.lol = function() {

  };
};
