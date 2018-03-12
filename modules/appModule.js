var app = angular.module("appModule", ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
    .when("/",{
        templateUrl: "templates/home.html"
    })
    .when("/academic",{
      controller: "academicController",
      templateUrl: "templates/academic.html"
    })
    .when("/proyects/:proyect",{
        controller: "detalleController",
        templateUrl: "templates/detalle.html"
    })
    .otherwise("/");
});

app.controller("academicController", function($location, $scope) {
  $scope.scrollTo = function (hash) {
    $location.hash(hash);
  };
  $scope.isActive = function(route) {
    console.log(route);
    return route === $location.path();
  };
});

app.controller("navbarController", function($location, $scope) {
  $scope.isActive = function(route) {
    return route === $location.path();
  };
});

app.controller("detalleController", function($scope, $http, $routeParams){

    $scope.parametroUrl = $routeParams.nameHola;

});
