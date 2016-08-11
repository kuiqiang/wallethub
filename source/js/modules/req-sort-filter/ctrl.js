define(['./module'], function (module) {
    module.controller('SortFilterRequirementController', ['$scope', function ($scope) {
        $scope.items = generateArray(50);
        $scope.orderBy = [];
        $scope.prop1Filter = '';
        $scope.prop2Filter = '';

        $scope.setOrderBy = function (column) {
            var position;

            if (column === 'id') {
                // Reset order by
                $scope.orderBy = [];
                return;
            }

            if ((position = $scope.orderBy.indexOf(column)) === -1 && $scope.orderBy.indexOf('-' + column) === -1) {
                // Sort column (asc)
                $scope.orderBy.push(column);
            } else if (position !== -1) {
                // Sort column (desc)
                $scope.orderBy.splice(position, 1, '-' + column);
            } else if ((position = $scope.orderBy.indexOf('-' + column)) !== -1) {
                // Remove sort
                $scope.orderBy.splice(position, 1);
            }
        };

        $scope.reset = function () {
            $scope.prop1Filter = '';
            $scope.prop2Filter = '';
        };

        // Generate array with objects of three properties
        function generateArray(count) {
            var array = [];
            var min = 1;
            var max = count / 2;

            for (var i = 0; i < count; i++) {
                array.push({
                    id: i + 1,
                    prop1: Math.floor(Math.random() * (max - min + 1)) + min,
                    prop2: Math.floor(Math.random() * (max - min + 1)) + min
                });
            }

            return array;
        }
    }]);
});