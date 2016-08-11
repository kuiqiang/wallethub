define([
    'angular',
    'ui.router',
    '../../config'
], function (angular) {
    return angular.module('app.directiveRequirements', [
        'app.constants',
        'ui.router'
    ]).config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('req-directive', {
                url: '/req-directive',
                controller: 'DirectiveRequirementsController',
                templateUrl: 'js/modules/req-directive/index.html'
            });
    }]);

});