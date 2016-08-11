define(['./module', 'jquery'], function (module, $) {
    return module.directive('next', function () {
        return {
            restrict: 'A',
            link: function ($scope, $element, $attrs) {
                $element.on('change keydown', function (e) {
                    if (e.keyCode !== 8 && $element.val().length === $element[0].maxLength) {
                        $($attrs.next).focus();
                    }
                });
            }
        };
    });
});