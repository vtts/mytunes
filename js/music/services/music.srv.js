System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', '../models/album', '../models/song', "rxjs/add/operator/map", '../../common/models/pager'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1, album_1, song_1, pager_1;
    var MusicService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (album_1_1) {
                album_1 = album_1_1;
            },
            function (song_1_1) {
                song_1 = song_1_1;
            },
            function (_1) {},
            function (pager_1_1) {
                pager_1 = pager_1_1;
            }],
        execute: function() {
            MusicService = (function () {
                function MusicService(http) {
                    this.http = http;
                    this.apiId = "34f4b6414a86a36295f43db1600772d0";
                }
                MusicService.prototype.albumsSearch = function (query, page) {
                    var _this = this;
                    if (page === void 0) { page = 0; }
                    return new Observable_1.Observable(function (observable) {
                        var pageParam = page + 1;
                        var url = " http://ws.audioscrobbler.com/2.0/?method=album.search&album=" + query + "&format=json&api_key=" + _this.apiId + "&page=" + pageParam;
                        _this.http.get(url)
                            .map(function (res) {
                            res = res.json();
                            var albums = [];
                            var results = res.results;
                            results.albummatches.album.forEach(function (data) {
                                albums.push(new album_1.Album(data["mbid"], data["name"], data["artist"], data["url"], data["image"]));
                            });
                            var pager = new pager_1.Pager(results["opensearch:itemsPerPage"], results["opensearch:startIndex"], results["opensearch:totalResults"]);
                            return {
                                albums: albums,
                                pager: pager
                            };
                        })
                            .subscribe(function (res) {
                            observable.next(res);
                        });
                    });
                };
                MusicService.prototype.albumInfo = function (id) {
                    var _this = this;
                    return new Observable_1.Observable(function (observable) {
                        var url = "http://ws.audioscrobbler.com/2.0/?method=album.getInfo&mbid=" + id + "&format=json&api_key=" + _this.apiId;
                        _this.http.get(url)
                            .map(function (res) {
                            res = res.json();
                            var data = res.album;
                            var songs = [];
                            data.tracks.track.forEach(function (data) {
                                songs.push(new song_1.Song(data.name));
                            });
                            var album = new album_1.Album(data["mbid"], data["name"], data["artist"], data["url"], data["image"], songs);
                            return album;
                        })
                            .subscribe(function (res) {
                            observable.next(res);
                        });
                    });
                };
                MusicService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], MusicService);
                return MusicService;
            }());
            exports_1("MusicService", MusicService);
        }
    }
});
//# sourceMappingURL=music.srv.js.map