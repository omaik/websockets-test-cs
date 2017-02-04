module.exports = angular
  .module('app.auth.interceptor', [])
  .factory('AuthInterceptor', AuthInterceptor);

AuthInterceptor.$inject = ['$q', '$window', '$location'];
function AuthInterceptor($q, $window, $location) {
  return {
    request: function(config) {
      var token = $window.sessionStorage.getItem('auth_token');
        if (token) {
          config.headers.Authorization = token;
        }
        return config;
    },
    responseError: function(response) {
      if (response.status === 401) {
        $window.sessionStorage.removeItem('auth_token');
        $location.path('/login');
      }
      return $q.reject(response);
    }
  }
}
