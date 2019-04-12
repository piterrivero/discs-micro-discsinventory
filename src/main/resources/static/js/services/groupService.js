var groupModule = angular.module('groupModule', []);

groupModule.service('GroupService', [ '$http', function($http) {
    
	this.getAllGroups = function getAllGroups() {
	    return $http({
	        method : 'GET',
	        url : 'http://localhost:9300/groups/list?order=ASC'
	    });
	}
		
	this.getUser = function getGroup(groupId) {
        return $http({
            method : 'GET',
            url : 'http://localhost:9300/groups/find?id=' + userId
        });
    }
    
    this.addUser = function addUser(name, genres) {
        return $http({
            method : 'POST',
            url : 'http://localhost:9300/groups/add',
            data : {
                name : name,
                genres : genres
            }
        });
    }
    
    this.updateUser = function editUser(id, name, genres) {
        return $http({
            method : 'PATCH',
            url : 'http://localhost:9300/groups/edit/' + id,
            data : {
            	name : name,
                genres : genres
            }
        });
    }
    
    this.deleteUser = function deleteUser(id) {
        return $http({
            method : 'DELETE',
            url : 'http://localhost:9300/groups/delete?id=' + id
        })
    }
	
	this.getAllGenres = function getAllGenres() {
	    return $http({
	        method : 'GET',
	        url : 'http://localhost:9200/genres/list?order=ASC'
	    });
	}
	
} ]);	


