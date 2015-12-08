app.controller('PlaylistSidebarCtrl', function ($scope, PlaylistFactory) {
	console.log('before');
		// $scope.allPlaylists = function () {
		// $scope.playlists = PlaylistFactory.findAll();
		PlaylistFactory.findAll()
		.then(function (response) {
			$scope.playlists = response;
		console.log('inside:', $scope.playlists);
		});

	});