app.controller('ArtistsCtrl', function ($scope, allArtists) {
	$scope.artists = allArtists;
	$scope.myString = 'helloWorld';
	console.log($scope.myString);
});