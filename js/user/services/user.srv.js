System.register(['angular2/core', 'rxjs/Observable', '../models/user'], function(exports_1, context_1) {
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
    var core_1, Observable_1, user_1;
    var UserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            UserService = (function () {
                function UserService() {
                    this._myFirebaseRef = new Firebase("mytunes.firebaseIO.com");
                }
                UserService.prototype.getUser = function () {
                    var _this = this;
                    return new Observable_1.Observable(function (observable) {
                        _this._myFirebaseRef.onAuth(function (authData) {
                            var user;
                            if (authData) {
                                user = new user_1.User(authData);
                            }
                            observable.next(user);
                        });
                    });
                };
                UserService.prototype.login = function (email, password) {
                    var _this = this;
                    return new Observable_1.Observable(function (observable) {
                        _this._myFirebaseRef.authWithPassword({
                            email: email,
                            password: password
                        }, function (error, authData) {
                            if (error) {
                                observable.error(error);
                            }
                            else {
                                observable.next(new user_1.User(authData));
                            }
                        });
                    });
                };
                UserService.prototype.register = function (email, password) {
                    var _this = this;
                    return new Observable_1.Observable(function (observable) {
                        _this._myFirebaseRef.createUser({
                            email: email,
                            password: password
                        }, function (error, userData) {
                            if (error) {
                                observable.error(error);
                            }
                            else {
                                _this.login(email, password)
                                    .subscribe(function (user) {
                                    observable.next(user);
                                });
                            }
                        });
                    });
                };
                UserService.prototype.logout = function () {
                    var _this = this;
                    return new Observable_1.Observable(function (observable) {
                        _this._myFirebaseRef.unauth();
                        observable.next();
                    });
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], UserService);
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    }
});
//# sourceMappingURL=user.srv.js.map