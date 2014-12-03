angular.module('demo', ['ui.router', 'store'])
.config(function($stateProvider) {
  $stateProvider.state('store', {
    templateUrl: 'store/store.html',
    controller: 'StoreCtrl as store'
  });
})
.controller('AppCtrl', function($state) {
  var app = this;
  app.click = function() {
    $state.go('store');
  };
});
