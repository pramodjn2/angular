/**
* Develop By : Pramod Jain
*/

 app.constant('AppConfig', {
      appName: 'My App',
      appVersion: 2.0,
      apiUrl: 'http://www.google.com?api',
      appDevelpBy: 'Pramod Jain',
    });

app.run(function($rootScope, $route,AppConfig) {
    $rootScope.$on('$routeChangeSuccess', function() {
      document.title = $route.current.title;
    });
    
    $rootScope.devlopBy = AppConfig.appDevelpBy;
    
  });