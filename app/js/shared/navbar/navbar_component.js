module.exports = angular
  .module('app.shared.navbar.component', [])
  .component('appNavbar', {
    templateUrl: '/app/js/shared/navbar/navbar_template.html',
    controller: ['$scope', NavbarController ]
  });

function NavbarController ($scope) {
};
