import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';

import {SearchComponent} from './search.component';
import {UserService} from '../user/services/user.srv';
import {IUser} from '../user/models/iuser';

@Component({
    selector : 'header-component',
    template : `
        <nav class="navbar navbar-inverse">
          <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">MyTunes</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <form class="navbar-form navbar-left" role="search">
                <search-component (searchChange)="search($event)"></search-component>
              </form>
              <ul class="nav navbar-nav navbar-right">
                <li><button type="button" class="btn btn-info navbar-btn" *ngIf="!user" [routerLink]="['Login']">Login</button></li>
                <li><button type="button" class="btn btn-success navbar-btn" *ngIf="!user" [routerLink]="['Register']">Register</button></li>
                <li><a href="#" *ngIf="user">{{ user.email }}</a></li>
                <li><a href="#" *ngIf="user" (click)="logout()">Logout</a></li>
              </ul>
            </div><!-- /.navbar-collapse -->
          </div><!-- /.container-fluid -->
        </nav>
    `,
    providers : [UserService],
    directives : [ROUTER_DIRECTIVES, SearchComponent]
})
export class HeaderComponent {

    public user:IUser;

    constructor(private userService:UserService, private router:Router) {
      this.userService.getUser()
        .subscribe(user => {
          this.user = user;
        });
    }

    search($event) {
        this.router.navigate(["Albums", { query : $event}]);
    }

    logout() {
        this.userService.logout()
            .subscribe(() => {
                this.router.navigateByUrl("/");
            });
    }
}
