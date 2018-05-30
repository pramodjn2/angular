app.controller('ContactController', function ($scope, $http) {
    $(".page-loading").addClass("hidden");
    $scope.successMessage;
    $scope.errorMessage;
    $scope.success = false;
    $scope.error = true;
  $scope.city = 3;
    /* sign in function */
    $scope.dataset = [{name : "",email : ""}];
    $scope.addMore = function(){
      $scope.dataset.push({name : "",email : ""});
    }

    $scope.remove = function(index){
      $scope.dataset.splice(index,1);
    }
    $scope.contact = function(){
      console.log($scope.dataset); return false;
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