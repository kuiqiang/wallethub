define([
    'angular-mocks',
    'Source/modules/req-sum/ctrl'
], function () {
    describe('SumRequirementController in req-sum', function () {
        var $controller, $scope;

        beforeEach(function () {
            module('app.sumRequirement');
            inject(function (_$controller_) {
                $controller = _$controller_;
                $scope = {};
                $controller('SumRequirementController', {$scope: $scope});
            });
        });

        describe('calculateSumAndWeights', function () {
            it('should calculate the correct sum', function () {
                $scope.n1 = 100;
                $scope.n2 = 100;
                $scope.n3 = 100;

                $scope.calculateSumAndWeights();

                expect($scope.sum).toEqual(300);
            });

            it('should calculate the correct weights', function () {
                $scope.n1 = 200;
                $scope.n2 = 100;
                $scope.n3 = 100;

                $scope.calculateSumAndWeights();

                expect($scope.w1).toEqual(0.5);
                expect($scope.w2).toEqual(0.25);
                expect($scope.w3).toEqual(0.25);
            });
        });

        describe('spreadSum', function () {
            it('should spread the sum correctly', function () {
                $scope.sum = 300;

                $scope.spreadSum();

                expect($scope.n1).toEqual(100);
                expect($scope.n2).toEqual(100);
                expect($scope.n3).toEqual(100);

                $scope.n1 = 200;
                $scope.n2 = 100;
                $scope.n3 = 100;

                $scope.calculateSumAndWeights();

                $scope.sum = 300;

                $scope.spreadSum();

                expect($scope.n1).toEqual(150);
                expect($scope.n2).toEqual(75);
                expect($scope.n3).toEqual(75);
            });

            it('should not spread sum when sum is zero', function () {
                $scope.n1 = 200;
                $scope.n2 = 100;
                $scope.n3 = 100;
                $scope.sum = 0;

                $scope.spreadSum();

                expect($scope.n1).toEqual(200);
                expect($scope.n2).toEqual(100);
                expect($scope.n3).toEqual(100);
            });
        });
    });
});