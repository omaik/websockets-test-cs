module.exports = angular
  .module('app.action-cable.connection', [])
  .factory('AppCable', AppCable);

AppCable.$inject = ['$window', 'app.config'];
function AppCable($window, config) {
  return {
    createConsumer: function() {
      debugger;
      var url = config.getCableURL($window);
      if(url) {
        return ActionCable.createConsumer(url);
      } else {
        return false;
      }
    }
  }
}
