app.controller('AlbumsCtrl', function ($scope, allAlbums) {
	console.log("HELLO");
	$scope.albums = allAlbums;
});