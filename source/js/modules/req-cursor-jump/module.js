define([
    'angular',
    'ui.router',
    '../../config'
], function (angular) {
    return angular.module('app.cursorJumpRequirement', [
        'app.constants',
        'ui.router'
    ]).config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('req-cursor-jump', {
                url: '/req-cursor-jump',
                templateUrl: 'js/modules/req-cursor-jump/index.html'
            });
    }]);

});