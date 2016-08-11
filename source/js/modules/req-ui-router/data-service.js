define(['./module'], function (module) {
    module.service('UIRouterDataService', function () {
        this.value = '';

        this.setValue = function (newValue) {
            this.value = newValue;
        };

        this.getValue = function () {
            return this.value;
        };
    });
});