System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Album;
    return {
        setters:[],
        execute: function() {
            Album = (function () {
                function Album(id, name, artist, url, images, songs) {
                    if (images === void 0) { images = []; }
                    if (songs === void 0) { songs = []; }
                    this.id = id;
                    this.name = name;
                    this.artist = artist;
                    this.url = url;
                    this.images = images;
                    this.songs = songs;
                }
                Album.prototype.getImage = function (size) {
                    var image = this.images.find(function (image) {
                        if (image["size"] == size) {
                            return image;
                        }
                    });
                    return image ? image["#text"] : "";
                };
                return Album;
            }());
            exports_1("Album", Album);
        }
    }
});
//# sourceMappingURL=album.js.map