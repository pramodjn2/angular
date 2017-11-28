


  app.controller('SignupController', function ($window,$scope, $http,myService) {
    $(".page-loading").addClass("hidden");
   
    /* sign in function */
    $scope.signup = function(){

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
           		localStorage.setItem('session',response)
           	//	$window.location.href = '#!/users';
	      	}else{
	      		$scope.error = response.status;
      		    $scope.errorMessage = response.message;
	      	}
        });
    }
    /* sign fn end */
  });
  
  app.controller('LoginController', function ($scope, $http,$window,myService) {
    check_session();
   $(".page-loading").addClass("hidden");
   $scope.successMessage;
   $scope.errorMessage;
   $scope.success = false;
   $scope.error = true;
  $scope.sign_in = function(){
    
    var encodedString = {
        email:$scope.email,
        password:$scope.password
      }

      $scope.data = myService.postmethod('user/login',encodedString);
      $scope.data.then(function (response){

          if(response.status){
            var user_id = response.data.user_id;
            $scope.success = response.status;
            $scope.successMessage = response.message;
            localStorage.setItem('session',user_id)
           // $window.location.href = '#!/users';
          }else{
            $scope.error = response.status;
            $scope.errorMessage = response.message;
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