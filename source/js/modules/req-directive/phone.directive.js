define(['./module'], function (module) {
    return module.directive('phone', ['$timeout', function ($timeout) {
        return {
            restrict: 'A',
            require: 'ngModel',
            scope: true,
            transclude: true,
            link: function ($scope, $element) {
                var maxLength = 13;
                var format = function (tel) {
                    if (!tel)
                        return '';

                    var value = tel.toString().trim();
                    var city, number;

                    switch (value.length) {
                        case 1:
                        case 2:
                        case 3:
                            city = value;
                            break;

                        default:
                            city = value.slice(0, 3);
                            number = value.slice(3);
                    }

                    if (number) {
                        if (number.length > 3) {
                            number = number.slice(0, 3) + '-' + number.slice(3, 7);
                        }

                        return ('(' + city + ') ' + number).trim();
                    }
                    else {
                        return '(' + city;
                    }
                };

                $element.on('change keydown', function (e) {
                    if (
                        (((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) && // numbers
                        $element.val().length <= maxLength) ||
                        e.keyCode === 8 // backspace
                    ) {
                        $timeout(function () {
                            // Strip previous formatting
                            var value = $element.val().replace(/[^0-9]/g, '');
                            // Format value
                            $element.val(format(value));
                        });
                    }
                    else {
                        e.preventDefault();
                    }
                });
            }
        };
    }]);
});