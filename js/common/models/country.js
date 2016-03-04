System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Country;
    return {
        setters:[],
        execute: function() {
            Country = (function () {
                function Country(rawData) {
                    this.alpha2Code = rawData["alpha2Code"];
                    this.name = rawData["name"];
                }
                return Country;
            }());
            exports_1("Country", Country);
        }
    }
});
//# sourceMappingURL=country.js.map