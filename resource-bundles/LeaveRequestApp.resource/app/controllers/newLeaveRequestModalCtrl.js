app.controller('newLeaveRequestModalCtrl', function($scope, $modalInstance, LeaveRequestService) {
    $scope.isSaving = false;
    $scope.newLeaveReq = {};

    $scope.saveAndClose = function() {
        $scope.isSaving = true;

        LeaveRequestService.insertLeaveRequest($scope.newLeaveReq)
            .then(function(result) {
                $scope.isSaving = false;
                $modalInstance.close($scope.newLeaveReq);
            });
    };

    $scope.cancel = function() {
        $modalInstance.dismiss();
    };
});