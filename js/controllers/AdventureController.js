snappiq.controller('AdventureController', function ($scope, AdventureService) {
	$scope.item = AdventureService.queryItem();
	$scope.ratingPercent = $scope.item.rating / 5 * 100 + '%';
	
	$scope.showRatingTips = function(n){
	    $scope.ratingPercent = n / 10 * 100 + '%';
	};
	
	$scope.resetRating = function(){
	    $scope.ratingPercent = $scope.item.rating / 5 * 100 + '%';
	};
	
	$scope.updateRating = function(n){
	    $scope.ratingPercent = n / 10 * 100 + '%';
		$scope.item.rating = n / 10 * 5;
	};
});