**Table of Contents**

- [Introduction](#)
- [How to start](#)
- [Directory Structure](#)
- [How to test](#)
	- [Prerequisites](#)
	- [Executing tests](#)
	- [Writing tests](#)
		- [Mocking HTTP backend](#)
			- [injecting dependencies](#)
			- [mocking the http response](#)
			- [writing expectations](#)
		- [Mocking Firebase](#)
			- [mocking Firebase](#)
			- [writing expectations](#)
		- [Testing components](#)
			- [base test providers setup](#)
			- [using injectAsync](#)
			- [injecting dependencies](#)
			- [writing expectations](#)
- [Change Log](#)
- [License](#)

# Introduction

A seed project for Angular 2 apps.

**Note:** Angular 2.0 is not production ready yet! This seed project is perfect for playing around with the latest versions but do not start new projects with it since a lot of new changes are going to be introduced until the framework is officially released.

# How to start

```bash
git clone https://github.com/erodriguezh/mytunes.git
cd mytunes

npm install
# dev
npm start
```

# Directory Structure

```
.
├── app
│   ├── app.component.ts
│   ├── common
│   │   ├── directives
│   │   │   ├── forRange.dir.ts
│   │   │   └── highlight.dir.ts
│   │   ├── footer.component.ts
│   │   ├── header.component.ts
│   │   ├── models
│   │   │   ├── country.ts
│   │   │   ├── icountry.ts
│   │   │   ├── ipager.ts
│   │   │   └── pager.ts
│   │   ├── pagination.component.ts
│   │   ├── search.component.ts
│   │   ├── services
│   │   │   └── country.srv.ts
│   │   └── welcome.component.ts
│   ├── main.ts
│   ├── music
│   │   ├── album.component.ts
│   │   ├── albums.component.ts
│   │   ├── models
│   │   │   ├── album.ts
│   │   │   ├── ialbum.ts
│   │   │   ├── isong.ts
│   │   │   └── song.ts
│   │   └── services
│   │       └── music.srv.ts
│   └── user
│       ├── login.component.ts
│       ├── models
│       │   ├── iuser.ts
│       │   └── user.ts
│       ├── registration.component.ts
│       └── services
│           └── user.srv.ts
├── css
│   └── styles.css
├── index.html
├── js
│   ├── app.component.js
│   ├── app.component.js.map
│   ├── common
│   │   ├── directives
│   │   │   ├── forRange.dir.js
│   │   │   ├── forRange.dir.js.map
│   │   │   ├── highlight.dir.js
│   │   │   └── highlight.dir.js.map
│   │   ├── footer.component.js
│   │   ├── footer.component.js.map
│   │   ├── header.component.js
│   │   ├── header.component.js.map
│   │   ├── models
│   │   │   ├── country.js
│   │   │   ├── country.js.map
│   │   │   ├── icountry.js
│   │   │   ├── icountry.js.map
│   │   │   ├── ipager.js
│   │   │   ├── ipager.js.map
│   │   │   ├── pager.js
│   │   │   └── pager.js.map
│   │   ├── pagination.component.js
│   │   ├── pagination.component.js.map
│   │   ├── search.component.js
│   │   ├── search.component.js.map
│   │   ├── services
│   │   │   ├── country.srv.js
│   │   │   └── country.srv.js.map
│   │   ├── welcome.component.js
│   │   └── welcome.component.js.map
│   ├── main.js
│   ├── main.js.map
│   ├── music
│   │   ├── album.component.js
│   │   ├── album.component.js.map
│   │   ├── albums.component.js
│   │   ├── albums.component.js.map
│   │   ├── models
│   │   │   ├── album.js
│   │   │   ├── album.js.map
│   │   │   ├── ialbum.js
│   │   │   ├── ialbum.js.map
│   │   │   ├── isong.js
│   │   │   ├── isong.js.map
│   │   │   ├── song.js
│   │   │   └── song.js.map
│   │   └── services
│   │       ├── music.srv.js
│   │       └── music.srv.js.map
│   └── user
│       ├── login.component.js
│       ├── login.component.js.map
│       ├── models
│       │   ├── iuser.js
│       │   ├── iuser.js.map
│       │   ├── user.js
│       │   └── user.js.map
│       ├── registration.component.js
│       ├── registration.component.js.map
│       ├── services
│       │   ├── user.srv.js
│       │   └── user.srv.js.map
│       ├── user.component.js
│       └── user.component.js.map
└── typings.json
```

# How to test

## Prerequisites

* install node packages

For a complete list of needed packages have a look at [package.json](package.json).

Installation via CLI:
```
npm install jasmine --save-dev
npm install karma --save-dev
...
```

## Executing tests

```
npm run karma
```

## Writing tests

Have a look at *.spec.ts files. There is also a very good repo (https://github.com/juliemr/ng2-test-seed) showing how to write tests for Angular 2. In contrary to ng2-test-seed this repository has spec files kept parallel to the working code which means that there is
no test directory. It's recommended to watch Julie Ralph video too: https://www.youtube.com/watch?v=C0F2E-PRm44.

### Mocking HTTP backend

First have a look at the tested class [music.srv.ts](app/music/services/music.srv.ts).

In this case we want to mock HTTP backend in order to test the `albumsSearch` method.
 
#### injecting dependencies

We need to provide the tested service and the HTTP stuff as well. `provide(Http, ...)` uses the injected `MockBackend` and `BaseRequestOptions`. 

```javascript
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
```

#### mocking the http response

In `beforeEach` we need to tell `MockBackend` what we want it to return when http request is performed:

```javascript
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
```

#### writing expectations

The expectations operate on the response object returned by the Subscriber mechanism.

```
it("should ...", inject([MusicService], (musicService: MusicService) => {
    musicService.albumsSearch("Meteo").subscribe((response: Response) => {
        //your tests for response go here
    })
}));
```
 
### Mocking Firebase 

First have a look at the tested class [user.srv.ts](app/user/services/user.srv.ts). Since the class is using Firebase writing tests is more tricky. We need to use some kind of mocking here, in this case it is https://github.com/katowulf/mockfirebase.

#### mocking Firebase

```javascript
beforeEach(() => window["MockFirebase"].override());
```

#### writing expectations

The general idea is to register a user which will lead to a login (in the success case). The login would trigger an "auth" event. 
If you look at the implementation of `UserService` there is a method `getUser()` that relies on Firebase' `onAuth` method. In our test we can verify whether `getUser()` gets notified about the successful login-in of the new-registered user.

```
  |---> UserService#getUser() - - - -> onAuth(...)
  |
test
  |
  |---> UserService#register() ---> Firebase#createUser() ---
  |                                                         |
  |                                                         |---> UserService#login() ---> Firebase#authWithPassword()
  |---> Firebase#changeAuthState()                                                            
```

Note: Firebase `changeAuthState()` needs to be called to trigger the login.

```javascript
it("should login the user", inject([UserService], (userService: UserService) => {

    var firebase = userService["_myFirebaseRef"];

    var userCredentials = jasmine.objectContaining({email: "groot@domain.com", password: "123"});

    var onAuth: Function = jasmine.createSpy("onAuth", (user) => {
        //ugly hack..  this is because onAuth is triggered twice. 1. time: user = undefined, 2. time: user = User instance
        if (user) {
            expect(user).toEqual(userCredentials);
        }
    });

    //1. subscribe on getUser() to listen for "onAuth" events
    userService.getUser().subscribe(onAuth);

    //2. register the user
    userService.register("groot@domain.com", "123").subscribe(user => console.info('register', user));

    //3. trigger the auth state... this is necessary because "authWithPassword" doesn't do it by default!
    //also have a look at the Mockfirebase tests. It's really necessary. https://github.com/katowulf/mockfirebase/blob/master/test/unit/auth.js
    firebase.changeAuthState({email: 'groot@domain.com', password: '123'});

    //4. flush all deferred stuff inside firebase
    firebase.flush();

    //because of the ugly hack ^^^ ... check whether the test was executed with the right values
    expect(onAuth).toHaveBeenCalledWith(userCredentials);
}));
```

### Testing components

First have a look at the tested class [album.component.ts](app/music/album.component.ts).

#### base test providers setup

We need to set up base test providers in order to use TestComponentBuilder. Otherwise you might get exception "Failed: No provider for TestComponentBuilder!".

```javascript
    beforeAll(() => {
        setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS);
    });

    afterAll(() => {
        resetBaseTestProviders();
    });
```

#### using injectAsync

For unit-testing the Angular 2 components we always need to use "injectAsync" (see also https://www.youtube.com/watch?v=C0F2E-PRm44, 15:45).
 
The pattern here is:
 
```javascript
 it("should ...", injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
     return tcb.createAsync(YourComponent).then((fixture:ComponentFixture) => {
        //here go your expectations
     });
 }));
```

`injectAsync` executes the passed function which needs to return a promise containing the component fixture. The component fixture is used for accessing the component itself. Here are the attributes useful for writing expectations: 

```debugElement: DebugElement;```

It's a wrapper for componentInstance and nativeElement (see next).

```componentInstance: any;```

It's an instance of the component itself (here: new AlbumComponent(...))

```nativeElement: any;```

It's the DOM element. Here is the HTML template. 

```elementRef: ElementRef;```

It's a wrapper for the nativeElement.

#### injecting dependencies

Since our component needs some stuff in its constructor we need to provide them by using `beforeEachProviders`. The constructor has 2 parameters:
`musicService` and `routeParams`. 

- injecting MusicService

The component itself is rendered from the response of the `MusicService#albumInfo` method. `MusicService#albumInfo` makes an http call. In Angular 1.x you would probably mock `$httpBackend`. In our case we can implement a mock. Note that the mock class itself does not inherit from MusicService because this would require us to inject HTTP stuff (what we want to avoid in this case).

```javascript
class MockMusicService {
    albumInfo(id: string) {
        return new Observable(observable => {
            observable.next(new Album(parseInt(id), "Meteora", "Linkin Park", null,
                [{"#text":"cover.png","size":"large"}], []));
        });
    }
}
```

- injecting RouteParams

If you look at the type description of `RouteParams` you won't see any additional dependencies there. However we need `Router` to inject on our own. Since `Router` itself has further dependencies we need to provide them as well. Some of them needs to provide a mock implementation (e.g. `Location` is injected by using `SpyLocation`). `ROUTER_PRIMARY_COMPONENT` needs to be the main application component (here `AppComponent`). `RouteParams` is injected as instance with id=1. This means that the tested route will be something like "albums/1". Note: if you look at the `MockMusicService` above you will see that `albumInfo(...)` returns the Album with the passed ID (in this case id=1). 

```javascript
beforeEachProviders(() => [
    RouteRegistry,
    provide(Location, {useClass: SpyLocation}),
    provide(ROUTER_PRIMARY_COMPONENT, {useValue: AppComponent}),
    provide(Router, {useClass: RootRouter}),
    provide(RouteParams, {useValue: new RouteParams({id: "1"})})
]);
```

#### writing expectations

If you need to render the component you need to kick off the change detection cycle of Angular 2 by calling `fixture.detectChanges();`. Afterwards, you can write expectation for your HTML, for instance:

```javascript
fixture.detectChanges();
//... some expectations:
expect(fixture.nativeElement.querySelector('h1').textContent).toMatch(/^Meteora/);
```

# Change Log

You can follow the [Angular 2 change log here](https://github.com/angular/angular/blob/master/CHANGELOG.md).

# License

MIT
