System.register(['angular2/testing', "./user.srv"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, user_srv_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (user_srv_1_1) {
                user_srv_1 = user_srv_1_1;
            }],
        execute: function() {
            testing_1.describe("UserService", function () {
                testing_1.beforeEach(function () { return window["MockFirebase"].override(); });
                testing_1.beforeEachProviders(function () { return [user_srv_1.UserService]; });
                testing_1.it("should login the user", testing_1.inject([user_srv_1.UserService], function (userService) {
                    var firebase = userService["_myFirebaseRef"];
                    var userCredentials = jasmine.objectContaining({ email: "groot@domain.com", password: "123" });
                    var onAuth = jasmine.createSpy("onAuth", function (user) {
                        //ugly hack..  this is because onAuth is triggered twice. 1. time: user = undefined, 2. time: user = User instance
                        if (user) {
                            testing_1.expect(user).toEqual(userCredentials);
                        }
                    });
                    //1. subscribe on getUser() to listen for "onAuth" events
                    userService.getUser().subscribe(onAuth);
                    //2. register the user
                    userService.register("groot@domain.com", "123").subscribe(function (user) { return console.info('register', user); });
                    //3. trigger the auth state... this is necessary because "authWithPassword" doesn't do it by default!
                    //also have a look at the Mockfirebase tests. It's really necessary. https://github.com/katowulf/mockfirebase/blob/master/test/unit/auth.js
                    firebase.changeAuthState({ email: 'groot@domain.com', password: '123' });
                    //4. flush all deferred stuff inside firebase
                    firebase.flush();
                    //because of the ugly hack ^^^ ... check whether the test was executed with the right values
                    testing_1.expect(onAuth).toHaveBeenCalledWith(userCredentials);
                }));
            });
        }
    }
});
//# sourceMappingURL=user.srv.spec.js.map