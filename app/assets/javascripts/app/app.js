angular.module('demo',['ui.router'])

.controller('HomeCtrl',function($scope){
	$scope.test = {
		text:'test'
	}
	
	
	$scope.submitButton = function(){
		console.log('hello!');
	}
	
	
})

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/state1");
  $locationProvider.html5Mode(true);
  //
  // Now set up the states
  $stateProvider
    .state('state1', {
      url: "/state1",
      templateUrl: "/template/state1.html"
    })
    .state('state1.list', {
      url: "/list",
      templateUrl: "/template/state1.list.html",
      controller: function($scope) {
        $scope.items = ["A", "List", "Of", "Items"];
      }
    })
    .state('state2', {
      url: "/state2",
      templateUrl: "/template/state2.html"
    })
    .state('state2.list', {
      url: "/list",
      templateUrl: "/template/state2.list.html",
      controller: function($scope) {
        $scope.things = ["A", "Set", "Of", "Things"];
      }
    });
});
