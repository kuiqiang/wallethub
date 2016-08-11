define([
    '../../module',
    '../../data-service'
], function (module) {
    module.controller('UIRouterRequirementsPage3Controller', ['$scope', '$state', 'UIRouterDataService',
        function ($scope, $state, UIRouterDataService) {
            $scope.name = 'UIRouterRequirementsPage3Controller';
            $scope.state = $state.current.name;
            $scope.pageId = $state.params.pageId;
            $scope.value = UIRouterDataService.getValue();
        }]);
});