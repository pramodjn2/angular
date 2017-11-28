app.controller('UsersController', function($scope, $window,$http,myService) {
   
      $scope.data = myService.getmethod('user/getUsers'); //user/getUsers
      $scope.data.then(function (response){
        console.log(response);
          if(response.status){
             $scope.users = response.data;
          }else{
            $scope.error = response.status;
            $scope.errorMessage = response.message;
          }
      });

    $scope.checkSession = function(){
      $scope.sessionValue = localStorage.getItem('session');
      // if(value){
      //  //$window.location.href = '#!/users'
      // }else{
      //  //$window.location.href = '#!/home'
      // }
    }

    $scope.logout = function(){
      localStorage.removeItem('session');
      $window.location.href = '#!/home'
    }
  });