System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Pager;
    return {
        setters:[],
        execute: function() {
            Pager = (function () {
                function Pager(itemsPerPage, startIndex, totalResults, maxPages) {
                    if (maxPages === void 0) { maxPages = 10; }
                    this.itemsPerPage = itemsPerPage;
                    this.startIndex = startIndex;
                    this.totalResults = totalResults;
                    this.maxPages = maxPages;
                    this.pages = 0;
                    var realMaxPages = Math.ceil(totalResults / itemsPerPage);
                    if (realMaxPages <= maxPages) {
                        this.pages = realMaxPages;
                    }
                    else {
                        this.pages = maxPages;
                    }
                }
                return Pager;
            }());
            exports_1("Pager", Pager);
        }
    }
});
//# sourceMappingURL=pager.js.map