module.exports = angular
  .module('app.chat.component', [])
  .component('appChat', {
    templateUrl: '/app/js/chat/chat_template.html',
    controller: ['$scope', ChatController ],
    transclude: true
  });

function ChatController ($scope) {
};
