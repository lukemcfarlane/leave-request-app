/**
 * Usage:
 *  <my-directive myVal="Hello world!"></my-directive>
 *
 * @author  AUTHOR
 * @date    DATE
 */
app.directive('myDirective', function() {
	return {
		restrict: 'E',
		scope: {
			myVal: '@'
		},
		controller: function($scope, $element) {},
		template: '<h2>{{ myVal }}</h2>'
	};
});