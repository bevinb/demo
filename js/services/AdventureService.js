snappiq = angular.module('snappiq', []);
snappiq.factory('AdventureService', function () {
	return {
	    queryItem: function(){
		    //just return a mock data
		    return {
			    title: 'Adventure Title',
				description: 'This is a long long long description',
				src: '',
				coins: 200,
				prize: 200,
				validTime: 197,
				snapperAmount:87,
				rating: 2.5,
				rules: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				pics: []
			};
		}
	};
});
