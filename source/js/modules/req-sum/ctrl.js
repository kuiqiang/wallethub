define(['./module'], function (module) {
    module.controller('SumRequirementController', ['$scope', function ($scope) {
        $scope.n1 = 0;
        $scope.n2 = 0;
        $scope.n3 = 0;
        $scope.sum = 0;
        $scope.w1 = 1 / 3;
        $scope.w2 = 1 / 3;
        $scope.w3 = 1 / 3;

        $scope.calculateSumAndWeights = function () {
            $scope.sum = $scope.n1 + $scope.n2 + $scope.n3;
            $scope.w1 = $scope.n1 / $scope.sum;
            $scope.w2 = $scope.n2 / $scope.sum;
            $scope.w3 = $scope.n3 / $scope.sum;
        };

        $scope.spreadSum = function () {
            if ($scope.sum) {
                $scope.n1 = Math.floor($scope.sum * $scope.w1);
                $scope.n2 = Math.floor($scope.sum * $scope.w2);
                $scope.n3 = Math.floor($scope.sum * $scope.w3);
            }
        };
    }]);
});