define([
    'angular',
    'ui.router',
    '../../config'
], function (angular) {

    return angular.module('app.sortFilterRequirement', [
        'app.constants',
        'ui.router'
    ]).config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('req-sort-filter', {
                url: '/req-sort-filter',
                controller: 'SortFilterRequirementController',
                templateUrl: 'js/modules/req-sort-filter/index.html'
            });
    }]);

});