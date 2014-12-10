angular.module('store', [{ name:'store.utils', files: ['store/utils/my-filter.js'] }])
.controller('StoreCtrl', function() {
  var store = this;
  store.message = "I'm a message from store controller";
});
