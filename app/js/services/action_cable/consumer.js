module.exports = angular
  .module('app.action-cable.consumer', [])
  .factory('AppConsumer', AppConsumer);

AppConsumer.$inject = ['AppCable'];
function AppConsumer(AppCable) {
  return {
    consumer: AppCable.createConsumer()
  }
}
