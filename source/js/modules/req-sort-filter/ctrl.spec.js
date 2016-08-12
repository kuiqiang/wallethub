define([
    'angular-mocks',
    'Source/modules/req-sort-filter/ctrl'
], function () {
    describe('SumRequirementController in app.sortFilterRequirement', function () {
        var $controller, $scope;

        beforeEach(function () {
            module('app.sortFilterRequirement');
            inject(function (_$controller_) {
                $controller = _$controller_;
                $scope = {};
                $controller('SortFilterRequirementController', {$scope: $scope});
            });
        });

        describe('setOrderBy', function () {
            it('should clear ordering if column is id', function () {
                $scope.orderBy = ['prop1', 'prop2'];

                $scope.setOrderBy('id');
                expect($scope.orderBy).toEqual([]);
            });

            it('should add column to ordering if not present', function () {
                $scope.orderBy = ['prop1'];

                $scope.setOrderBy('prop2');
                expect($scope.orderBy).toEqual(['prop1', 'prop2']);
            });

            it('should reverse column ordering if already present', function () {
                $scope.orderBy = ['prop1', 'prop2'];

                $scope.setOrderBy('prop1');
                expect($scope.orderBy).toEqual(['-prop1', 'prop2']);
            });

            it('should remove column ordering if already present and in reverse order', function () {
                $scope.orderBy = ['-prop1', 'prop2'];

                $scope.setOrderBy('prop1');
                expect($scope.orderBy).toEqual(['prop2']);
            });
        });

        describe('reset', function () {
            it('should clear property filters', function () {
                $scope.prop1Filter = 'filter';
                $scope.prop2Filter = 'filter';

                $scope.reset();

                expect($scope.prop1Filter).toEqual = '';
                expect($scope.prop2Filter).toEqual = '';
            });
        });
    });
});