System.register(['angular2/testing'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            }],
        execute: function() {
            testing_1.describe("dummy", function () {
                testing_1.it('true is true', function () { return testing_1.expect(true).toEqual(true); });
                testing_1.it('null is not undefined', function () { return testing_1.expect(null).not.toBeUndefined(); });
            });
        }
    }
});
//# sourceMappingURL=dummy.spec.js.map