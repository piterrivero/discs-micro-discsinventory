var groupModule = angular.module('groupModule');

groupModule.controller('GroupController', ['$scope','GroupService', 
  function ($scope,GroupService) {
		$scope.getAllGroups = function () {
			GroupService.getAllGroups()
		      .then(function success(response) {
		    	  console.log(response);
		    	  $scope.groups = response.data.groupList;
		          $scope.message='';
		          $scope.errorMessage = '';
		      },
		      function error (response) {
		          $scope.message='';
		          $scope.errorMessage = 'Error getting groups!';
		      });
		}
		
		$scope.getAllGenres = function () {
			GroupService.getAllGenres()
		      .then(function success(response) {
		    	  console.log(response);
		    	  $scope.genres = response.data.genreList;
		          $scope.message='';
		          $scope.errorMessage = '';
		      },
		      function error (response) {
		          $scope.message='';
		          $scope.errorMessage = 'Error getting genres!';
		      });
		}
	
		$scope.getGroup = function () {
	          var id = $scope.group.id;
	          GroupService.getGroup($scope.group.id)
	            .then(function success(response) {
	                $scope.group = response.data;
	                $scope.group.id = id;
	                $scope.message='';
	                $scope.errorMessage = '';
	            },
	            function error (response) {
	                $scope.message = '';
	                if (response.status === 404){
	                    $scope.errorMessage = 'Group not found!';
	                }
	                else {
	                    $scope.errorMessage = "Error getting group!";
	                }
	            });
		};
		
		$scope.addGroup = function () {
			    if ($scope.group != null && $scope.group.name) {
			    	GroupService.addGroup($scope.group.name, $scope.group.genres)
			          .then (function success(response){
			              $scope.message = 'Group added!';
			              $scope.errorMessage = '';
			          },
			          function error(response){
			              $scope.errorMessage = 'Error adding group!';
			              $scope.message = '';
			        });
			    }
			    else {
			        $scope.errorMessage = 'Please enter a name!';
			        $scope.message = '';
			    }
		}
		
		$scope.updateUser = function () {
				GroupService.editGroup($scope.group.id, 
			      $scope.group.name, $scope.group.genres)
			      .then(function success(response) {
			          $scope.message = 'Group data edited!';
			          $scope.errorMessage = '';
			      },
			      function error(response) {
			          $scope.errorMessage = 'Error editing group!';
			          $scope.message = '';
			      });
		}
		 
		$scope.deleteGroup = function () {
				GroupService.deleteGroup($scope.group.id)
			      .then (function success(response) {
			          $scope.message = 'Group deleted!';
			          $scope.Group = null;
			          $scope.errorMessage='';
			      },
			      function error(response) {
			          $scope.errorMessage = 'Error deleting group!';
			          $scope.message='';
			      });
		}

}]);