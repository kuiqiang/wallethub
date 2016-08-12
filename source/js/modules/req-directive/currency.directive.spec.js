define([
    'angular-mocks',
    'Source/modules/req-directive/currency.directive'
], function () {
    var $compile, scope, inputElem, $timeout;

    describe('currency directive in app.directiveRequirements', function () {
        beforeEach(function () {
            module('app.directiveRequirements');
            inject(function (_$compile_, $rootScope, _$timeout_) {
                $compile = _$compile_;
                $timeout = _$timeout_;
                scope = $rootScope.$new();
                scope.amount = '';
            });

            inputElem = getCompiledElement();
        });

        it('should format value correctly', function () {
            setValue('1234');
            expect(inputElem.val()).toEqual('$1,234');

            setValue('12345');
            expect(inputElem.val()).toEqual('$12,345');
        });

        it('should allow numbers keys and backspace', function () {
            var e = $.Event("keydown", {keyCode: 49});

            spyOn(e, 'preventDefault');

            inputElem.trigger(e);
            scope.$digest();

            $timeout.flush();
            $timeout.verifyNoPendingTasks();

            expect(e.preventDefault).not.toHaveBeenCalled();
        });

        it('should disallow keys other than numbers keys and backspace', function () {
            var e = $.Event("keydown", {keyCode: 10});

            spyOn(e, 'preventDefault');

            inputElem.trigger(e);
            scope.$digest();

            $timeout.flush();
            $timeout.verifyNoPendingTasks();

            expect(e.preventDefault).toHaveBeenCalled();
        });
    });

    function setValue(value) {
        var e = $.Event("keydown", {keyCode: 48});

        inputElem.val(value);
        inputElem.trigger(e);
        scope.$digest();

        $timeout.flush();
        $timeout.verifyNoPendingTasks();
    }

    function getCompiledElement() {
        var element = angular.element('<input ng-model="amount" currency>');
        var compiledElement = $compile(element)(scope);
        scope.$digest();
        return compiledElement;
    }
});