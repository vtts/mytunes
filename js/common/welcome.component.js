System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var WelcomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            WelcomeComponent = (function () {
                function WelcomeComponent() {
                    this.showMore = false;
                }
                WelcomeComponent.prototype.onShowMore = function () {
                    this.showMore = true;
                };
                WelcomeComponent = __decorate([
                    core_1.Component({
                        selector: 'welcome-component',
                        template: "\n       <div class=\"jumbotron\">\n          <h1>Welcome to MyTunes</h1>\n          <p><a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\" *ngIf=\"!showMore\" (click)=\"onShowMore()\">Learn more</a></p>\n          <ul *ngIf=\"showMore\">\n            <li>Components</li>\n            <li>Directives</li>\n            <li>Routing</li>\n            <li>Services</li>\n            <li>TypeScript</li>\n            <li>Styles</li>\n            <li>Forms</li>\n            <li>Http</li>\n            <li>Data binding</li>\n          </ul>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], WelcomeComponent);
                return WelcomeComponent;
            }());
            exports_1("WelcomeComponent", WelcomeComponent);
        }
    }
});
//# sourceMappingURL=welcome.component.js.map