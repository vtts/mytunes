System.register(['angular2/core', 'angular2/router', './directives/forRange.dir'], function(exports_1, context_1) {
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
    var core_1, router_1, forRange_dir_1;
    var PaginationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (forRange_dir_1_1) {
                forRange_dir_1 = forRange_dir_1_1;
            }],
        execute: function() {
            PaginationComponent = (function () {
                function PaginationComponent(router, routeParams) {
                    this.router = router;
                    this.routeParams = routeParams;
                    this.query = this.routeParams.get("query");
                }
                PaginationComponent.prototype.goToPage = function (page) {
                    var params = {};
                    if (this.query) {
                        params["query"] = this.query;
                    }
                    params["page"] = page;
                    this.router.navigate([this.pathName, params]);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PaginationComponent.prototype, "pager", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], PaginationComponent.prototype, "pathName", void 0);
                PaginationComponent = __decorate([
                    core_1.Component({
                        selector: 'pagination-component',
                        template: "\n        <nav *ngIf=\"pager\">\n          <ul class=\"pagination\">\n            <li *forRange=\"pager.pages; #i = index\" (click)=\"goToPage(i)\"><a>{{ i }}</a></li>\n          </ul>\n        </nav>\n    ",
                        directives: [forRange_dir_1.ForRangeDirective]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams])
                ], PaginationComponent);
                return PaginationComponent;
            }());
            exports_1("PaginationComponent", PaginationComponent);
        }
    }
});
//# sourceMappingURL=pagination.component.js.map