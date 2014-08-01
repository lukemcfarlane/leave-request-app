/**
 * A simple directive to render a checked/unchecked checkbox icon depending
 * on whether the value attribute is 'true' or 'false'.
 *
 * Usage:
 *  <i output-checkbox value="true"></i>
 *
 * @author  Luke
 * @date    July 2014
 */
app.directive('outputCheckbox', function() {
    return {
        restrict: 'A',
        scope: {
            value: '@'
        },
        controller: function($scope, $element) {
            $element.addClass('glyphicon');
            if ($scope.value === 'true') {
                $element.addClass('glyphicon-check');
            } else {
                $element.addClass('glyphicon-unchecked');
            }
        }
    };
});