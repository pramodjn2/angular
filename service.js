//define a service named myService
app.service('myService', function ($http) {
    this.postmethod = {}
    var baseUrl = 'http://111.118.252.147/training_session/index.php/'
    this.postmethod = function(url,postData){
       return $http({
          method:'POST',
          url: baseUrl+url,
          data: postData,
          headers: {'Content-Type': 'application/json'}
        })
        .then(function (response){
          console.log(response)
          return response.data;
        }, 
        function(errResponse){
            return errResponse;
        });
    }
    //postmethod(url,postData){
      // var baseUrl = 'http://111.118.252.147/training_session/index.php/'
      //   $http({
      //   method:'POST',
      //   url: baseUrl+url,
      //   data: postData,
      //   headers: {'Content-Type': 'application/json'}
      // })
      // .then(function successCallback(response){
      //   return response;
      // });
    //}
});
