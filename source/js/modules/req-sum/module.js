define([
    'angular',
    'ui.router',
    '../../config'
], function (angular) {
    return angular.module('app.sumRequirement', [
        'app.constants',
        'ui.router'
    ]).config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('req-sum', {
                url: '/req-sum',
                controller: 'SumRequirementController',
                templateUrl: 'js/modules/req-sum/index.html'
            });
    }]);

});