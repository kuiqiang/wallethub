define(['./module'], function (module) {
    module.controller('SumRequirementController', ['$scope', function ($scope) {
        $scope.n1 = 0;
        $scope.n2 = 0;
        $scope.n3 = 0;
        $scope.sum = 0;

        var w1 = 1;
        var w2 = 1;
        var w3 = 1;

        $scope.calculateSum = function () {
            $scope.sum = $scope.n1 + $scope.n2 + $scope.n3;
            w1 = $scope.n1 / $scope.sum;
            w2 = $scope.n2 / $scope.sum;
            w3 = $scope.n3 / $scope.sum;
        };

        $scope.spreadSum = function () {
            if ($scope.sum) {
                $scope.n1 = Math.floor($scope.sum * w1);
                $scope.n2 = Math.floor($scope.sum * w2);
                $scope.n3 = Math.floor($scope.sum * w3);
            }
        };
    }]);
});