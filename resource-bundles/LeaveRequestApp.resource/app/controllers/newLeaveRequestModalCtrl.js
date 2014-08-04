app.controller('newLeaveRequestModalCtrl', function($scope, $modalInstance) {
    $scope.isSaving = false;

    $scope.saveAndClose = function() {

        $scope.isSaving = true;
    };

    $scope.cancel = function() {
        $modalInstance.dismiss();
    };
});