define(['./module'], function (module) {
    return module.directive('currency', ['$filter', '$timeout', function ($filter, $timeout) {
        return {
            restrict: 'A',
            require: 'ngModel',
            scope: true,
            transclude: true,
            link: function ($scope, $element) {
                var format = function (amount) {
                    var value = amount.toString().trim().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

                    return value ? '$' + value : '';
                };

                $element.on('keydown', function (e) {
                    if (
                        (e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105) || // numbers
                        e.keyCode === 8 // backspace
                    ) {
                        $timeout(function () {
                            // Strip previous formatting
                            var value = $element.val().replace(/[$,.]/g, '');
                            // Format value
                            $element.val(format(value));
                        });
                    } else {
                        e.preventDefault();
                    }
                });
            }
        };
    }]);
});