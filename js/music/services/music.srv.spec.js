System.register(['angular2/testing', 'angular2/core', 'angular2/http', 'angular2/http/testing', "./music.srv"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, core_1, http_1, testing_2, music_srv_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (testing_2_1) {
                testing_2 = testing_2_1;
            },
            function (music_srv_1_1) {
                music_srv_1 = music_srv_1_1;
            }],
        execute: function() {
            testing_1.describe("MusicService", function () {
                testing_1.beforeEachProviders(function () { return [
                    music_srv_1.MusicService,
                    http_1.BaseRequestOptions,
                    testing_2.MockBackend,
                    core_1.provide(http_1.Http, {
                        useFactory: function (backend, defaultOptions) {
                            return new http_1.Http(backend, defaultOptions);
                        },
                        deps: [testing_2.MockBackend, http_1.BaseRequestOptions]
                    })
                ]; });
                testing_1.beforeEach(testing_1.inject([testing_2.MockBackend], function (backend) {
                    var response = {
                        results: {
                            albummatches: {
                                album: [
                                    {
                                        name: "Meteora",
                                        artist: "Linkin Park"
                                    }
                                ]
                            }
                        }
                    };
                    var baseResponse = new http_1.Response(new http_1.ResponseOptions({ body: JSON.stringify(response) }));
                    backend.connections.subscribe(function (c) { return c.mockRespond(baseResponse); });
                }));
                testing_1.it("should grab Album according to the id passed in the route", testing_1.inject([music_srv_1.MusicService], function (musicService) {
                    musicService.albumsSearch("Meteo").subscribe(function (response) {
                        var albums = response["albums"];
                        testing_1.expect(albums.length).toBe(1);
                        testing_1.expect(albums[0].name).toEqual("Meteora");
                        testing_1.expect(albums[0].artist).toEqual("Linkin Park");
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=music.srv.spec.js.map