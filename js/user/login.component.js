System.register(['angular2/core', 'angular2/router', './services/user.srv'], function(exports_1, context_1) {
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
    var core_1, router_1, user_srv_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_srv_1_1) {
                user_srv_1 = user_srv_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(userService, router) {
                    this.userService = userService;
                    this.router = router;
                }
                LoginComponent.prototype.login = function (email, password) {
                    var _this = this;
                    this.userService.login(email, password)
                        .subscribe(function (user) {
                        _this.router.navigateByUrl("/");
                    }, function (error) {
                        _this.error = error;
                    });
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login-component',
                        template: "\n        <form #loginForm=\"ngForm\">\n          <div class=\"alert alert-danger\" *ngIf=\"error\">{{ error }}</div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\" >Email address</label>\n            <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Email\" #email=\"ngForm\" ngControl=\"email\" required>\n            <div class=\"alert alert-danger\" [hidden]=\"email.valid || email.pristine\">Login Required</div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputPassword1\">Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\" #password=\"ngForm\" ngControl=\"password\" required>\n            <div class=\"alert alert-danger\" [hidden]=\"password.valid || password.pristine\">Password Required</div>\n          </div>\n          <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!loginForm.form.valid\" (click)=\"login(email.value, password.value)\">Submit</button>\n        </form>\n    ",
                        providers: [user_srv_1.UserService]
                    }), 
                    __metadata('design:paramtypes', [user_srv_1.UserService, router_1.Router])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map