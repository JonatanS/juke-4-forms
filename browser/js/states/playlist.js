app.config(function ($stateProvider) {
	$stateProvider.state('playlist', {
		url: '/playlists/:playlistId',
		templateUrl: '/templates/playlist.html',
		controller: 'PlaylistCtrl',
		resolve: {
			//console.log('in state for PL:', $stateParams);
			thePlaylist: function (PlaylistFactory, $stateParams) {
				return PlaylistFactory.fetchById($stateParams.playlistId);
			}
			
		}
	});
});