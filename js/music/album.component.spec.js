System.register(['angular2/testing', 'angular2/platform/testing/browser', 'angular2/core', 'angular2/src/router/router', 'angular2/router', 'angular2/src/mock/location_mock', '../app.component', './album.component', "./services/music.srv", 'rxjs/Observable', "./models/album"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, browser_1, core_1, router_1, router_2, location_mock_1, app_component_1, album_component_1, music_srv_1, Observable_1, album_1;
    var MockMusicService;
    /**
     * use this in the future to make test cases DRY
     * @param testingFn
     * @returns {FunctionWithParamTokens}
     */
    function buildTestingFn(testingFn) {
        var _this = this;
        return testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
            return tcb.createAsync(album_component_1.AlbumComponent).then(function (fixture) {
                testingFn.apply(_this, [fixture]);
            });
        });
    }
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (router_2_1) {
                router_2 = router_2_1;
            },
            function (location_mock_1_1) {
                location_mock_1 = location_mock_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (album_component_1_1) {
                album_component_1 = album_component_1_1;
            },
            function (music_srv_1_1) {
                music_srv_1 = music_srv_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (album_1_1) {
                album_1 = album_1_1;
            }],
        execute: function() {
            MockMusicService = (function () {
                function MockMusicService() {
                }
                MockMusicService.prototype.albumInfo = function (id) {
                    return new Observable_1.Observable(function (observable) {
                        observable.next(new album_1.Album(parseInt(id), "Meteora", "Linkin Park", null, [{ "#text": "cover.png", "size": "large" }], []));
                    });
                };
                return MockMusicService;
            }());
            testing_1.describe("AlbumComponent", function () {
                /**
                 * Fix for exception:
                 *
                 * Failed: No provider for TestComponentBuilder!
                 * Error: DI Exception
                 * at NoProviderError.BaseException [as constructor] (/home/katarina/PhpstormProjects/mytunes/node_modules/angular2/bundles/angular2.dev.js:7351:21)
                 */
                beforeAll(function () {
                    testing_1.setBaseTestProviders(browser_1.TEST_BROWSER_PLATFORM_PROVIDERS, browser_1.TEST_BROWSER_APPLICATION_PROVIDERS);
                });
                afterAll(function () {
                    testing_1.resetBaseTestProviders();
                });
                /**
                 * stuff needed to work with router params and MusicService as well... (=> means "depends on"):
                 *
                 * * RootRouter => registry: RouteRegistry, location: Location, primaryComponent: Type
                 * * Location can be mocked by SpyLocation
                 * * ROUTER_PRIMARY_COMPONENT is AppComponent instance
                 * * RouteParams needs to be "show" route for the album, that means id "1" is defined
                 * * MusicService is mocked by MockUserService
                 */
                testing_1.beforeEachProviders(function () { return [
                    router_2.RouteRegistry,
                    core_1.provide(router_2.Location, { useClass: location_mock_1.SpyLocation }),
                    core_1.provide(router_2.ROUTER_PRIMARY_COMPONENT, { useValue: app_component_1.AppComponent }),
                    core_1.provide(router_2.Router, { useClass: router_1.RootRouter }),
                    core_1.provide(music_srv_1.MusicService, { useClass: MockMusicService }),
                    core_1.provide(router_2.RouteParams, { useValue: new router_2.RouteParams({ id: "1" }) })
                ]; });
                testing_1.it("should grab Album according to the id passed in the route", testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(album_component_1.AlbumComponent).then(function (fixture) {
                        var el = fixture.debugElement.componentInstance;
                        testing_1.expect(el.album.id).toBe(1);
                    });
                }));
                testing_1.it("should contain the album name", testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(album_component_1.AlbumComponent).then(function (fixture) {
                        fixture.detectChanges();
                        var el = fixture.nativeElement;
                        testing_1.expect(el.querySelector('h1').textContent).toMatch(/^Meteora/);
                    });
                }));
                testing_1.it("should contain the artist name", testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(album_component_1.AlbumComponent).then(function (fixture) {
                        fixture.detectChanges();
                        var el = fixture.nativeElement;
                        testing_1.expect(el.querySelector('h1>small')).toHaveText("Linkin Park");
                    });
                }));
                testing_1.it("should show the large cover", buildTestingFn(function (fixture) {
                    fixture.detectChanges();
                    var el = fixture.nativeElement;
                    testing_1.expect(el.querySelector('img').src).toMatch(/cover\.png$/);
                }));
            });
        }
    }
});
//# sourceMappingURL=album.component.spec.js.map