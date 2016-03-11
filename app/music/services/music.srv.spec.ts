import {
    beforeEach,
    beforeEachProviders,
    describe,
    expect,
    it,
    inject,
    injectAsync,
    TestComponentBuilder,
    ComponentFixture,
    FunctionWithParamTokens
} from 'angular2/testing';
import {
    TEST_BROWSER_PLATFORM_PROVIDERS,
    TEST_BROWSER_APPLICATION_PROVIDERS
} from 'angular2/platform/testing/browser';
import {provide} from 'angular2/core';

import {BaseRequestOptions, Response, ResponseOptions, Http} from 'angular2/http';
import {MockBackend, MockConnection} from 'angular2/http/testing';
import {MusicService} from "./music.srv";

describe("MusicService", () => {

    beforeEachProviders(() => [
        MusicService,
        BaseRequestOptions,
        MockBackend,
        provide(Http, {
            useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
                return new Http(backend, defaultOptions);
            },
            deps: [MockBackend, BaseRequestOptions]
        })
    ]);

    beforeEach(inject([MockBackend], (backend: MockBackend) => {
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
        }
        const baseResponse = new Response(new ResponseOptions({body: JSON.stringify(response)}));
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(baseResponse));
    }));

    it("should grab Album according to the id passed in the route", inject([MusicService], (musicService: MusicService) => {
        musicService.albumsSearch("Meteo").subscribe((response: Response) => {
            var albums = response["albums"];
            expect(albums.length).toBe(1);
            expect(albums[0].name).toEqual("Meteora");
            expect(albums[0].artist).toEqual("Linkin Park");
        })
    }));

});