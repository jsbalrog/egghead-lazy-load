angular.module('store.utils', []).filter('myFilter', function() {
  return function(input) {
    return input.toUpperCase();
  };
});
