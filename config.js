/**
* Develop By : Pramod Jain
*/
app.run(['$rootScope', '$route', function($rootScope, $route) {
    $rootScope.$on('$routeChangeSuccess', function() {
      document.title = $route.current.title;
    });
  }]);