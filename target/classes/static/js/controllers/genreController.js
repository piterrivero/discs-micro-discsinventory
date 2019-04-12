var genreModule = angular.module('genreModule');

genreModule.controller('GenreController', ['$scope','GenreService', 
  function ($scope,GenreService) {
     
		$scope.getAllGenres = function () {
			GenreService.getAllGenres()
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
	
		$scope.getGenre = function () {
	          var id = $scope.genre.id;
	          GenreService.getGenre($scope.genre.id)
	            .then(function success(response) {
	                $scope.genre = response.data;
	                $scope.genre.id = id;
	                $scope.message='';
	                $scope.errorMessage = '';
	            },
	            function error (response) {
	                $scope.message = '';
	                if (response.status === 404){
	                    $scope.errorMessage = 'Genre not found!';
	                }
	                else {
	                    $scope.errorMessage = "Error getting genre!";
	                }
	            });
		};
		
		$scope.addGenre = function () {
			    if ($scope.genre != null && $scope.genre.name) {
			    	GenreService.addGenre($scope.genre.name)
			          .then (function success(response){
			              $scope.message = 'Genre added!';
			              $scope.errorMessage = '';
			          },
			          function error(response){
			              $scope.errorMessage = 'Error adding genre!';
			              $scope.message = '';
			        });
			    }
			    else {
			        $scope.errorMessage = 'Please enter a name!';
			        $scope.message = '';
			    }
		}
		
		$scope.updateGenre = function () {
				GenreService.editGenre($scope.genre.id, 
			      $scope.genre.name)
			      .then(function success(response) {
			          $scope.message = 'Genre data edited!';
			          $scope.errorMessage = '';
			      },
			      function error(response) {
			          $scope.errorMessage = 'Error editing genre!';
			          $scope.message = '';
			      });
		}
		 
		$scope.deleteGenre = function () {
				GenreService.deleteGenre($scope.genre.id)
			      .then (function success(response) {
			          $scope.message = 'Genre deleted!';
			          $scope.genre = null;
			          $scope.errorMessage='';
			      },
			      function error(response) {
			          $scope.errorMessage = 'Error deleting genre!';
			          $scope.message='';
			      });
		}

}]);