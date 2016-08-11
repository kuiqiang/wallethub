define([
    'angular',
    'ui.router',
    '../../config'
], function (angular) {

    return angular.module('app.uiRouterRequirements', [
        'app.constants',
        'ui.router'
    ]).config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('req-ui-router', {
                url: '/req-ui-router/{pageId}',
                controllerProvider: function ($stateParams) {
                    return 'UIRouterRequirementsPage' + $stateParams.pageId + 'Controller';
                },
                templateUrl: function ($stateParams) {
                    return 'js/modules/req-ui-router/pages/page-' + $stateParams.pageId + '/p' + $stateParams.pageId + '.html';
                }
            })
            .state('req-ui-router.p1-nested-view', {
                url: '/{view}',
                templateUrl: function ($stateParams) {
                    return 'js/modules/req-ui-router/pages/page-1/nv-' + $stateParams.view + '.html';
                }
            });
    }]);

});