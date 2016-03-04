import {Component, Input} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

import {ForRangeDirective} from './directives/forRange.dir';
import {IPager} from './models/ipager';

@Component({
    selector : 'pagination-component',
    template : `
        <nav *ngIf="pager">
          <ul class="pagination">
            <li *forRange="pager.pages; #i = index" (click)="goToPage(i)"><a>{{ i }}</a></li>
          </ul>
        </nav>
    `,
    directives : [ForRangeDirective]
})
export class PaginationComponent {

    private query:string;

    @Input() pager:IPager;
    @Input() pathName:string;

    constructor(private router:Router, private routeParams:RouteParams) {
        this.query = this.routeParams.get("query");
    }

    goToPage(page:number) {
        let params = {};

        if (this.query) {
            params["query"] = this.query;
        }
        params["page"] = page;

        this.router.navigate([this.pathName, params]);
    }
}
