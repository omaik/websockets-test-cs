module.exports = angular
  .module('app.auth.service', [])
  .factory('Auth', Auth );

Auth.$inject = ['$http', '$window','$state', 'app.config'];

function Auth($http, $window, $state, config) {
  var service = {
    login: login,
    authorize: authorize,
    authenticated: authenticated
  };
  return service;

  function authorize(token, rememberMe){
    $window.sessionStorage.setItem('auth_token', token);
  };

  function authenticated() {
    return $http.get(config.baseURL + '/api/authenticated')
  }

  function login(user) {
    var parameters = JSON.stringify(user);

    return $http.post(config.baseURL + '/api/authenticate', parameters)
      .then(handleSuccess, handleError);

    function handleSuccess(res) {
      authorize(res.data.auth_token);
      debugger;
      $state.go('home');
      return { success: true };
    }
    function handleError(res) {
      return { success: false, errors: res.data.errors };
    }
  }
}
