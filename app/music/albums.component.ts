import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';

import {Album} from './models/album';
import {IAlbum, AlbumImageSize} from './models/ialbum';
import {MusicService} from './services/music.srv';
import {PaginationComponent} from '../common/pagination.component';
import {HighlightDirective} from '../common/directives/highlight.dir';
import {IPager} from '../common/models/ipager';

@Component({
    selector : 'albums-component',
    template : `
        <ul class="media-list">
              <li class="media" *ngFor="#album of albums" [routerLink]="['Album', { id : album.id }]" highlight [hoverColor]="'blue'" [activeColor]="'red'">
                <div class="media-left">
                  <a href="#">
                    <img class="media-object" [src]="album.getImage(albumImageSize)" >
                  </a>
                </div>
                <div class="media-body">
                  <h4 class="media-heading">{{album.name}}</h4>
                  {{album.artist}}
                </div>
              </li>
        </ul>
        <pagination-component [pager]="pager" [pathName]="'Albums'"></pagination-component>
    `,
    providers  : [MusicService],
    directives : [ROUTER_DIRECTIVES, PaginationComponent, HighlightDirective]
})
export class AlbumsComponent {

    public albumImageSize:AlbumImageSize = AlbumImageSize.MEDIUM;
    public albums:Array<IAlbum> = [];
    public pager:IPager;

    constructor(private musicService:MusicService, private routeParams:RouteParams) {
        this.albumsSearch(this.routeParams.get("query"), this.routeParams.get("page"));
    }

    albumsSearch(query:String, page:any) {
        this.musicService.albumsSearch(query, page)
            .subscribe(results => {
                this.albums = results.albums;
                this.pager = results.pager;
            })
    }
}
