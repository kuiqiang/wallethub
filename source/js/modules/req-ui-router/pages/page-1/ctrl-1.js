define(['../../module'], function (module) {
    module.controller('UIRouterRequirementsPage1Controller', ['$scope', '$state', function ($scope, $state) {
        $scope.name = 'UIRouterRequirementsPage1Controller';
        $scope.state = $state.current.name;
        $scope.pageId = $state.params.pageId;
        $scope.viewId = $state.params.view;
    }]);
});