angular.module( 'voetr.about', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'about', {
		url: '/about',
		views: {
			"main": {
				controller: 'AboutCtrl',
				templateUrl: 'about/index.tpl.html'
			}
		}
	});
})

.controller( 'AboutCtrl', function AboutController( $scope, titleService ) {
	titleService.setTitle('About - voetr');
});