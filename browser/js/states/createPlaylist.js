app.config(function ($stateProvider) {
	$stateProvider.state('createPlaylist', {
		url: '/playlists',
		templateUrl: '/templates/createPlaylist.html',
		controller: 'CreatePlaylistCtrl',
		// resolve: {
		// 	confirmAdd: function () {
		// 		console.log("added playlist");
		// 	}
		//}
	});
});