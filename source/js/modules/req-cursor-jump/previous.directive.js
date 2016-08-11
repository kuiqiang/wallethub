define(['./module', 'jquery'], function (module, $) {
    return module.directive('previous', ['$timeout', function ($timeout) {
        return {
            restrict: 'A',
            link: function ($scope, $element, $attrs) {
                $element.on('change keydown', function (e) {
                    $timeout(function () {
                        if (e.keyCode === 8 && $element.val().length === 0) {
                            $($attrs.previous).focus();
                        }
                    });
                });
            }
        };
    }]);
});