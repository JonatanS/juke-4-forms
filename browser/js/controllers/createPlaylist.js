app.controller('CreatePlaylistCtrl', function ($scope, PlaylistFactory){
	$scope.createPlaylist = function () {
		PlaylistFactory.create($scope.newPlaylist.name)
		$scope.newPlaylist.name = "";
		$scope.createPlaylistForm.$setPristine();
	};



});