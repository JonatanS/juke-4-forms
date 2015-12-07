app.factory('PlaylistFactory', function ($http) {
	console.log("hi");
    var PlaylistFactory = {};

    PlaylistFactory.create = function (data) {
    	console.log("playlist factory create: ", data);
        return $http.post('/api/playlists', {name: data})
        .then(function (response) {
            return response.data;
        });
    };

    return PlaylistFactory;

});
