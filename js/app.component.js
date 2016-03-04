System.register(['angular2/core', 'angular2/router', './common/footer.component', './common/header.component', './common/welcome.component', './music/albums.component', './music/album.component', './user/login.component', './user/registration.component'], function(exports_1, context_1) {
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
    var core_1, router_1, footer_component_1, header_component_1, welcome_component_1, albums_component_1, album_component_1, login_component_1, registration_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (welcome_component_1_1) {
                welcome_component_1 = welcome_component_1_1;
            },
            function (albums_component_1_1) {
                albums_component_1 = albums_component_1_1;
            },
            function (album_component_1_1) {
                album_component_1 = album_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (registration_component_1_1) {
                registration_component_1 = registration_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <header-component></header-component>\n        <div class=\"container\">\n            <router-outlet></router-outlet>\n        </div>\n        <footer-component></footer-component>\n    ",
                        directives: [footer_component_1.FooterComponent, header_component_1.HeaderComponent, welcome_component_1.WelcomeComponent, albums_component_1.AlbumsComponent, album_component_1.AlbumComponent, login_component_1.LoginComponent, registration_component_1.RegistrationComponent, router_1.RouterOutlet]
                    }),
                    router_1.RouteConfig([
                        { path: "/", name: "Home", component: welcome_component_1.WelcomeComponent, useAsDefault: true },
                        { path: "/login", name: "Login", component: login_component_1.LoginComponent },
                        { path: "/register", name: "Register", component: registration_component_1.RegistrationComponent },
                        { path: "/albums", name: "Albums", component: albums_component_1.AlbumsComponent },
                        { path: "/album/:id", name: "Album", component: album_component_1.AlbumComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map