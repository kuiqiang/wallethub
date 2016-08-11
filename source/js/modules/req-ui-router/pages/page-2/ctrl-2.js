define([
    '../../module',
    '../../data-service'
], function (module) {
    module.controller('UIRouterRequirementsPage2Controller', ['$scope', '$state', 'UIRouterDataService',
        function ($scope, $state, UIRouterDataService) {
            $scope.name = 'UIRouterRequirementsPage2Controller';
            $scope.state = $state.current.name;
            $scope.pageId = $state.params.pageId;
            $scope.value = UIRouterDataService.getValue();

            $scope.updateValue = function () {
                UIRouterDataService.setValue($scope.value);
            };
        }]);
});