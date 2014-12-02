angular.module('demo', ['oc.lazyLoad']).controller('AppCtrl', function($injector, $ocLazyLoad) {
  var app = this;
  app.click = function() {
    console.log('clicked!');
    $ocLazyLoad.load({
      name: 'store',
      files: [
        'store.js'
      ]
    }).then(function() {
      $injector.get('cart').buy();
    });
  };
});
