angular.module( 'absolute.news-post', [
])

.config(function config( $stateProvider, $urlRouterProvider ) {
	$stateProvider.state( 'news-post', {
		url: '/news',
		views: {
			"main": {
				controller: 'NewsPostCtrl',
				templateUrl: 'committee/index.tpl.html'
			}
		},
		resolve: {
            bills: function(BillModel) {
                return BillModel.getAll().then(function(models) {
                    return models;
                });
            }
        }
	});
})

.controller( 'NewsPostCtrl', function NewsPostController( $scope, $sailsSocket, lodash, titleService, config, $stateParams, BillModel, bills) {

    $scope.committee = $stateParams.path;
	titleService.setTitle($stateParams.path + ' - voetr');
    $scope.currentUser = config.currentUser;
    $scope.bills = bills;
    $scope.newBill = {};

    $sailsSocket.subscribe('committeebill', function (envelope) {
    	console.log('ok');
	    switch(envelope.verb) {
	        case 'created':
	            $scope.bills.unshift(envelope.data);
	            break;
	        case 'destroyed':
	            lodash.remove($scope.bills, {id: envelope.id});
	            break;
	    }
    });

});









