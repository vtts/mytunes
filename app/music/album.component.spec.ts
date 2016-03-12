/* stuff needed for testing, e.g. angular's wrapper functions for jasmine */
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
    setBaseTestProviders,
    resetBaseTestProviders,
    FunctionWithParamTokens
} from 'angular2/testing';
import {
    TEST_BROWSER_PLATFORM_PROVIDERS,
    TEST_BROWSER_APPLICATION_PROVIDERS
} from 'angular2/platform/testing/browser';
import {provide} from 'angular2/core';

/**
 * stuff needed to work with router params... (=> means "depends on")
 */
import { RootRouter } from 'angular2/src/router/router';
import { Location, RouteParams, Router, RouteRegistry, ROUTER_PRIMARY_COMPONENT } from 'angular2/router';
import { SpyLocation } from 'angular2/src/mock/location_mock';
import { AppComponent } from '../app.component';

import {AlbumComponent} from './album.component'
import {MusicService} from "./services/music.srv";
import {Observable} from 'rxjs/Observable';
import {Album} from "./models/album";


class MockMusicService {
    albumInfo(id: string) {
        return new Observable(observable => {
            observable.next(new Album(parseInt(id), "Meteora", "Linkin Park", null,
                [{"#text":"cover.png","size":"large"}], []));
        });
    }
}

/**
 * use this in the future to make test cases DRY
 * @param testingFn
 * @returns {FunctionWithParamTokens}
 */
function buildTestingFn(testingFn: Function): FunctionWithParamTokens {
    return injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.createAsync(AlbumComponent).then((fixture:ComponentFixture) => {
            testingFn.apply(this, [fixture]);
        });
    })
}

describe("AlbumComponent", () => {

    /**
     * Fix for exception:
     *
     * Failed: No provider for TestComponentBuilder!
     * Error: DI Exception
     * at NoProviderError.BaseException [as constructor] (/home/katarina/PhpstormProjects/mytunes/node_modules/angular2/bundles/angular2.dev.js:7351:21)
     */
    beforeAll(() => {
        setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS);
    });

    afterAll(() => {
        resetBaseTestProviders();
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
    beforeEachProviders(() => [
        RouteRegistry,
        provide(Location, {useClass: SpyLocation}),
        provide(ROUTER_PRIMARY_COMPONENT, {useValue: AppComponent}),
        provide(Router, {useClass: RootRouter}),
        provide(MusicService, {useClass: MockMusicService}),
        provide(RouteParams, {useValue: new RouteParams({id: "1"})})
    ]);

    it("should grab Album according to the id passed in the route", injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.createAsync(AlbumComponent).then((fixture:ComponentFixture) => {
            let el = fixture.debugElement.componentInstance;
            expect(el.album.id).toBe(1);
        });
    }));

    it("should contain the album name", injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.createAsync(AlbumComponent).then((fixture:ComponentFixture) => {
            fixture.detectChanges();
            let el = fixture.nativeElement;

            expect(el.querySelector('h1').textContent).toMatch(/^Meteora/);
        });
    }));

    it("should contain the artist name", injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.createAsync(AlbumComponent).then((fixture:ComponentFixture) => {
            fixture.detectChanges();
            let el = fixture.nativeElement;

            expect(el.querySelector('h1>small')).toHaveText("Linkin Park");
        });
    }));

    it("should show the large cover", buildTestingFn((fixture: ComponentFixture) => {
        fixture.detectChanges();
        let el = fixture.nativeElement;
        expect(el.querySelector('img').src).toMatch(/cover\.png$/);
    }));
});