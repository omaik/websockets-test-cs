module.exports = angular
  .module('app.action-cable.chat-channel', [])
  .factory('ChatChannel', ChatChannel);

ChatChannel.$inject = ['AppConsumer'];
function ChatChannel(AppConsumer) {
  return {
    createChannel: function(received_callback) {
      AppConsumer.cable.subscriptions.create("ChatChannel", {
        connected: function() {},

        disconnected: function() {},

        received: received_callback
      });
    }
  }
}
