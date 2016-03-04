/**
 * Created by rangi36 on 29/02/16.
 */
import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';


import {FooterComponent} from './common/footer.component';
import {HeaderComponent} from './common/header.component';
import {WelcomeComponent} from './common/welcome.component';
import {AlbumsComponent} from './music/albums.component';
import {AlbumComponent} from './music/album.component';
import {LoginComponent} from './user/login.component';
import {RegistrationComponent} from './user/registration.component';

@Component({
    selector : 'my-app',
    template : `
        <header-component></header-component>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
        <footer-component></footer-component>
    `,
    directives : [FooterComponent, HeaderComponent, WelcomeComponent, AlbumsComponent, AlbumComponent, LoginComponent, RegistrationComponent, RouterOutlet]
})
@RouteConfig([
    { path : "/", name : "Home", component : WelcomeComponent, useAsDefault : true },
    { path : "/login", name : "Login", component : LoginComponent },
    { path : "/register", name : "Register", component : RegistrationComponent },
    { path : "/albums", name : "Albums", component : AlbumsComponent },
    { path : "/album/:id", name : "Album", component : AlbumComponent }

])
export class AppComponent {

}
