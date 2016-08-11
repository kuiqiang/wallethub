define(['./module'], function (module) {
    return module.directive('clearZero', function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function ($scope, $element, $attrs, ngModelCtrl) {
                $element.on('focus', function () {
                    if (ngModelCtrl.$modelValue === 0) {
                        $element.val('');
                    }
                });

                $element.on('blur', function () {
                    $element.val(ngModelCtrl.$modelValue);
                });
            }
        };
    });
});