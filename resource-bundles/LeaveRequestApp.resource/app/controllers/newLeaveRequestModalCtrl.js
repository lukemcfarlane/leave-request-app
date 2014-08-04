/**
 * This is the controller for NewLeaveRequest_Modal Visualforce page.
 *
 * @author  https://github.com/lukemcfarlane
 * @date    Aug 2014
 */
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