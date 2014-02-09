snappiq.controller('AdventureController', function ($scope, AdventureService) {
	$scope.item = AdventureService.queryItem();
	$scope.ratingPercent = $scope.item.rating / 5 * 100 + '%';
	$scope.isCollapsed = false;
	$scope.isInfoTabHidden = false;
	$scope.imgViewerHeight = 320;
	
	$scope.toggleCollapse = function(){
	    $scope.isCollapsed = !$scope.isCollapsed;
		$scope.imgViewerHeight = $scope.isCollapsed? (document.body.clientHeight - 70): 320;
	};
	
	$scope.toggleTab = function(label){
	    $scope.isInfoTabHidden = label != "info";
	};
	
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