app.config(function ($stateProvider) {
	$stateProvider.state('playlist', {
		url: '/playlists',
		templateUrl: '/templates/playlist.html',
		controller: 'PlaylistCtrl',
		resolve: {
			confirmAdd: function () {
				console.log("added playlist");
			}
		}
	});
});