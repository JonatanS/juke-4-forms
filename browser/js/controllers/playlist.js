app.controller('PlaylistCtrl', function ($scope, PlaylistFactory, thePlaylist, SongFactory) {
	$scope.playlist = thePlaylist;
	// $scope.addSong = function(name){
	// 	$scope.newSong.name = 
	// }
	SongFactory.fetchAll()
	.then(function(response){
		console.log('inside the playlist ctrl ')
		$scope.songs = response;
		console.log($scope.songs, 'scope.songs')
	})
	
});