System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Song;
    return {
        setters:[],
        execute: function() {
            Song = (function () {
                function Song(name) {
                    this.name = name;
                }
                return Song;
            }());
            exports_1("Song", Song);
        }
    }
});
//# sourceMappingURL=song.js.map