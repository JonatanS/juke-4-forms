app.controller('PlaylistCtrl', function ($scope, PlaylistFactory, thePlaylist, SongFactory) {
	$scope.playlist = thePlaylist;
	// $scope.addSong = function(name){
	// 	$scope.newSong.name = 
	// }
	SongFactory.fetchAll()
	.then(function(response){
		$scope.songs = response;
	})

	$scope.addSong = function (song) {
		console.log('adding: '+ song.name);
		PlaylistFactory.addSong($scope.playlist._id, song);
		//then refresh list of songs
	}
	
});