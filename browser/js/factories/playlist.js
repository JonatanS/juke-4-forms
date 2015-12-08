app.factory('PlaylistFactory', function ($http) {
	var cachedPlaylists = [];
    var PlaylistFactory = {};

    PlaylistFactory.findAll = function () {
        return $http.get('/api/playlists')
        .then(function (response) {
            angular.copy(response.data, cachedPlaylists);
            return cachedPlaylists;
        });
    };

    PlaylistFactory.create = function (data) {
        return $http.post('/api/playlists', {name: data})
        .then(function (response) {
            return response.data;
        })
        .then(function (playlist) {
            cachedPlaylists.push(playlist);
             return playlist;
        });
    };

    PlaylistFactory.fetchById = function(id) {
        return $http.get('/api/playlists/' + id)
        .then(function (response) {
            return response.data;
        });
    };

    PlaylistFactory.addSong = function(plId, song){
        $http.post('/api/playlists/' + plId + '/songs', {song: song})
        .then (function (response) {
            console.log("added to playlist: " + response.data.name);
        })
    }

    return PlaylistFactory;

});
