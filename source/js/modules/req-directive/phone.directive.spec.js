define([
    'angular-mocks',
    'Source/modules/req-directive/phone.directive'
], function () {
    var $compile, scope, inputElem, $timeout;

    describe('phone directive in app.directiveRequirements', function () {
        beforeEach(function () {
            module('app.directiveRequirements');
            inject(function (_$compile_, $rootScope, _$timeout_) {
                $compile = _$compile_;
                $timeout = _$timeout_;
                scope = $rootScope.$new();
                scope.phone = '';
            });

            inputElem = getCompiledElement();
        });

        it('should format value correctly', function () {
            setValue('123');
            expect(inputElem.val()).toEqual('(123');

            setValue('1234');
            expect(inputElem.val()).toEqual('(123) 4');

            setValue('123456');
            expect(inputElem.val()).toEqual('(123) 456');

            setValue('1234567');
            expect(inputElem.val()).toEqual('(123) 456-7');
        });

        it('should truncate value to ten digits (exclusive of formatting characters)', function () {
            setValue('12345678910');
            expect(inputElem.val()).toEqual('(123) 456-7891');
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
        var element = angular.element('<input ng-model="phone" phone>');
        var compiledElement = $compile(element)(scope);
        scope.$digest();
        return compiledElement;
    }
});