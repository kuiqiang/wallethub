/**
 * loads sub modules and wraps them up into the main module.
 * This should be used for top-level module definitions only.
 */
define([
    'angular',
    'ui.router',
    'ngAnimate',
    './config',
    './modules/req-ui-router/index',
    './modules/req-sort-filter/index',
    './modules/req-directive/index',
    './modules/req-sum/index',
    './modules/req-cursor-jump/index'
], function (angular) {
    return angular.module('app', [
        'ui.router',
        'ngAnimate',
        'app.uiRouterRequirements',
        'app.sortFilterRequirement',
        'app.directiveRequirements',
        'app.sumRequirement',
        'app.cursorJumpRequirement'
    ]).config(['$locationProvider', '$urlRouterProvider', '$stateProvider',
        function ($locationProvider, $urlRouterProvider, $stateProvider) {
            $locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise('/');

            $stateProvider.state('index', {
                url: '/',
                templateUrl: 'partials/home.html'
            });
        }]);
});
