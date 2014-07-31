/**
 * This is the main controller for the app used for LeaveRequestsApp
 * Visualforce page.
 *
 * @author  https://github.com/lukemcfarlane
 * @date    July 2014
 */
app.controller('mainCtrl', ['$scope', 'LeaveRequestService',
	function($scope, LeaveRequestService) {
		$scope.isLoading = false;
		$scope.allLeaveRequests = [];

		function init() {
			$scope.isLoading = true;
			LeaveRequestService.getAllLeaveRequests()
				.then(function(results) {
					$scope.isLoading = false;
					$scope.allLeaveRequests = results;
				}, function(err) {});
		}

		init();
	}
]);