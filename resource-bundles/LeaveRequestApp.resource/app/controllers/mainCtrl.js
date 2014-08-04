/**
 * This is the main controller for the app used for LeaveRequestsApp
 * Visualforce page.
 *
 * @author  https://github.com/lukemcfarlane
 * @date    July 2014
 */
app.controller('mainCtrl', ['$scope', '$modal', 'LeaveRequestService', 
	function($scope, $modal, LeaveRequestService) {
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

        $scope.showNewLeaveRequestModal = function() {
            var modalInstance = $modal.open({
                templateUrl: '/apex/NewLeaveRequest_Modal',
                controller: 'newLeaveRequestModalCtrl',
                size: 'lg'
            });

            modalInstance.result.then(function(newRequest) {
                $scope.allLeaveRequests.push(newRequest);
            });
        };
	}
]);