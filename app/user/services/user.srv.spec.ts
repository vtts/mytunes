/* stuff needed for testing, e.g. angular's wrapper functions for jasmine */
import {
    beforeEach,
    beforeEachProviders,
    describe,
    expect,
    it,
    inject
} from 'angular2/testing';

import {UserService} from "./user.srv";


describe("UserService", () => {

    beforeEach(() => window["MockFirebase"].override());

    beforeEachProviders(() => [UserService]);

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

});