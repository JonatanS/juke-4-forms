app.factory('PlaylistFactory', function ($http) {
	var cachedPlaylists = [];
    var PlaylistFactory = {};

    PlaylistFactory.create = function (data) {
    	console.log("playlist factory create: ", data);
        return $http.post('/api/playlists', {name: data})
        .then(function (response) {
            angular.copy(response.data, cachedPlaylists);
            return cachedPlaylists;
        });
    };

    PlaylistFactory.findAll = function () {
    	console.log('fetching');
    	return $http.get('/api/playlists')
    	.then (function (response){
    		var playlist = response.data
            cachedPlaylists.push(playlist);
            return playlist;
    	});
    };

    PlaylistFactory.fetchById = function(id) {
        console.log('fetching: ',id);
        return $http.get('/api/playlists/' + id)
        .then(function (response) {
            return response.data;
        });
    };

    return PlaylistFactory;

});
