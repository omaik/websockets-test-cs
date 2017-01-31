module.exports = angular
  .module('app.login.component', [])
  .component('appLogin', {
    templateUrl: '/app/js/login/login_template.html',
    controller: ['$scope', 'Auth','$state', LoginController ],
    transclude: true
  });

function LoginController ($scope, Auth, $state) {
  $scope.user = {};

  $scope.singIn = function() {
    var result;
    result = Auth.login($scope.user);
    debugger;
    if(result.success) {
      $state.go('home');
    };
  };
};
