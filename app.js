var app = angular.module('myApp', ['ngRoute','ngStorage']);
  var api_url = 'http://111.118.252.147/training_session/index.php/';
  app.config(function($routeProvider) {
    $routeProvider
    .when("/home", {
      title: 'Home',
      templateUrl : "modules/home/view/home.html"
    })
    .when("/about", {
      title: 'About',
      templateUrl : "modules/about/view/about.html"
    })
    .when("/contact", {
      title: 'Contact',
      templateUrl : "modules/contact/view/contact.html",
      controller: 'ContactController'
    })
    .when("/login", {
      title: 'login',
      templateUrl : "modules/common/login.html",
      controller: 'LoginController'
    })
    .when("/signup", {
      title: 'Sign up',
      templateUrl : "modules/common/signup.html",
      controller: 'SignupController'
    })
    .when("/users", {
      title: 'Users',
      templateUrl : "modules/users/view/users.html",
      controller: 'UsersController'
     })
    .otherwise({
      title: 'Home',
      templateUrl : "modules/home/view/home.html"
    });
  });