app.controller('CreatePlaylistCtrl', function ($scope, PlaylistFactory, $state, $stateParams){
	$scope.createPlaylist = function () {
		PlaylistFactory.create($scope.newPlaylist.name)
		.then(function(response){
			$stateParams.playlistId = response._id;
			$state.go('playlist');
		})
		$scope.newPlaylist.name = "";
		$scope.createPlaylistForm.$setPristine();
		
	};



});