var genreModule = angular.module('genreModule', []);

genreModule.service('GenreService', [ '$http', function($http) {
    
	this.getAllGenres = function getAllGenres() {
	    return $http({
	        method : 'GET',
	        url : 'http://localhost:9200/genres/list?order=ASC'
	    });
	}
	
	this.getGenre = function getGenre(genreId) {
        return $http({
            method : 'GET',
            url : 'http://localhost:9200/genres/find?id=' + genreId
        });
    }
    
    this.addGenre = function addGenre(name) {
        return $http({
            method : 'POST',
            url : 'http://localhost:9200/genres/add',
            data : {
                name : name,
            }
        });
    }
    
    this.updateGenre = function editGenre(id, name) {
        return $http({
            method : 'PATCH',
            url : 'http://localhost:9200/genres/edit/' + id,
            data : {
            	name : name,
            }
        });
    }
    
    this.deleteGenre = function deleteGenre(id) {
        return $http({
            method : 'DELETE',
            url : 'http://localhost:9200/genres/delete?id=' + id
        })
    }
} ]);	


