module.exports = angular.module('app.config', [])
  .value('app.config', {
    baseURL: 'http://localhost:3000',
    getCableURL: getCableURL
  });

function getCableURL($window) {
  var token = $window.sessionStorage.getItem('auth_token');
  if(token) {
    return('ws://localhost:3000/cable' + '/' + token)
  } else {
    return false;
  }
}
