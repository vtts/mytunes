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
    setBaseTestProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {AlbumComponent} from './album.component'
import {MusicService} from "./services/music.srv";
import {Observable} from 'rxjs/Observable';
import {Album} from "./models/album";
import {
    TEST_BROWSER_PLATFORM_PROVIDERS,
    TEST_BROWSER_APPLICATION_PROVIDERS
} from 'angular2/platform/testing/browser';

import { RootRouter } from 'angular2/src/router/router';
import { Location, RouteParams, Router, RouteRegistry, ROUTER_PRIMARY_COMPONENT } from 'angular2/router';
import { SpyLocation } from 'angular2/src/mock/location_mock';
import { AppComponent } from '../app.component';
import {ConnectionBackend,Http,RequestOptions} from 'angular2/http';

class MockMusicService {
    albumInfo(id: string) {
        return new Observable(observable => {
            observable.next(new Album(parseInt(id), "Meteora", "Linkin Park", null,
                [{"#text":"cover.png","size":"large"}], []));
        });
    }
}

describe("AlbumComponent", () => {
    beforeAll(() => {
        setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS);
    });

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
            fixture.detectChanges();
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

    it("should show the large cover", injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.createAsync(AlbumComponent).then((fixture:ComponentFixture) => {
            fixture.detectChanges();
            let el = fixture.nativeElement;
            expect(el.querySelector('img').src).toMatch(/cover\.png$/);
        });
    }));
});