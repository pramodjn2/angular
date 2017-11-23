app.controller('UsersController', function($scope, $window,$http) {
    $http.get(api_url+'user/getUsers')
    .then(function (response) {$scope.users = response.data.data;});

    $scope.checkSession = function(){
    	$scope.sessionValue = localStorage.getItem('session');
    	// if(value){
    	// 	//$window.location.href = '#!/users'
    	// }else{
    	// 	//$window.location.href = '#!/home'
    	// }
    }

    $scope.logout = function(){
    	localStorage.removeItem('session');
    	$window.location.href = '#!/home'
    }
  });

  app.controller('ContactController', function ($scope, $http) {
    $(".page-loading").addClass("hidden");
    $scope.successMessage;
    $scope.errorMessage;
    $scope.success = false;
    $scope.error = true;

    /* sign in function */
    $scope.contact = function(){

      $scope.successMessage;
      $scope.errorMessage;
      $scope.success = false;
      $scope.error = true;

      var encodedString = 'name='+encodeURIComponent($scope.name)+'&email='+encodeURIComponent($scope.email)+'&mobile='+encodeURIComponent($scope.mobile)+'&subject='+encodeURIComponent($scope.subject)+'&message='+encodeURIComponent($scope.message);
      $http({
        method:'POST',
        url: 'api/contact.php',
        data: encodedString,
        headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
      })
      .then(function successCallback(response){
        if(response.data.status == 1){
          $scope.success = response.data.status;
          $scope.successMessage = response.data.message;
        }else if(response.data.status == 0){
          $scope.error = response.data.status;
          $scope.errorMessage = response.data.message;
        } 
      });
    }
    /* sign fn end */
  });
  
  app.controller('SignupController', function ($window,$scope, $http,myService) {
    $(".page-loading").addClass("hidden");
    $scope.successMessage;
    $scope.errorMessage;
    $scope.success = false;
    $scope.error = true;

    /* sign in function */
    $scope.signup = function(){

      $scope.successMessage;
      $scope.errorMessage;
      $scope.success = false;
      $scope.error = true;

      var encodedString = {
        fname:$scope.fname,
        lname:$scope.lname,
        email:$scope.email,
        password:$scope.password,
        mobile:$scope.mobile
      }
      $scope.data = myService.postmethod('user/register',encodedString);
      $scope.data.then(function (response){
	      	if(response.status){
	      		$scope.success = response.status;
           		$scope.successMessage = response.message;
           		//window.location('users')
           		localStorage.setItem('session',response)
           		$window.location.href = '#!/users';
	      	}else{
	      		$scope.error = response.status;
      		    $scope.errorMessage = response.message;
	      	}
        });
      //console.log($scope.data);
      // $http({
      //   method:'POST',
      //   url: api_url+'user/register',
      //   data: encodedString,
      //   headers: {'Content-Type': 'application/json'}
      // })
      // .then(function successCallback(response){
      //   if(response.data.status == 1){
      //     $scope.success = response.data.status;
      //     $scope.successMessage = response.data.message;
      //   }else if(response.data.status == 0){
      //     $scope.error = response.data.status;
      //     $scope.errorMessage = response.data.message;
      //   } 
      // });
    }
    /* sign fn end */
  });
  
  app.controller('LoginController', function ($scope, $http) {
    check_session();
   $(".page-loading").addClass("hidden");
   $scope.successMessage;
   $scope.errorMessage;
   $scope.success = false;
   $scope.error = true;
  $scope.sign_in = function(){
    $scope.successMessage;
    $scope.errorMessage;
    $scope.success = false;
    $scope.error = true;
    $scope.user_id = false;

    var encodedString = {
        email:$scope.email,
        password:$scope.password
      }
    $http({
      method:'POST',
      url: api_url+'user/login',
      data: encodedString,
      headers: {'Content-Type': 'application/json'}
    })
    .then(function successCallback(response){
      if(response.data.status == 1){
        $scope.success = response.data.status;
        $scope.successMessage = response.data.message;
        var user_id = response.data.data;
        localStorage.setItem('user_id', user_id.user_id);
      }else if(response.data.status == 0){
        $scope.error = response.data.status;
        $scope.errorMessage = response.data.message;
      } 
    });
  }
  });
  
  function check_session(){
    var user_id = localStorage.getItem('user_id');
    if(user_id){
   //   $scope.session_in = true;
    }
  } 