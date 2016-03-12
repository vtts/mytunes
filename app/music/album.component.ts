import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {MusicService} from './services/music.srv';
import {IAlbum, AlbumImageSize} from './models/ialbum';

@Component({
    selector : 'album-component',
    template : `
        <div class="album" *ngIf="album">
            <div class="page-header">
              <h1>{{album.name}} <small>{{ album.artist }}</small></h1>
            </div>
            <div class="media">
              <div class="media-left">
                <a href="#">
                  <img class="media-object" [src]="album.getImage(albumImageSize)">
                </a>
              </div>
              <div class="media-body">
                   <ul *ngFor="#song of album.songs">
                        <li>{{ song.name}}</li>
                   </ul>
              </div>
            </div>
        </div>
    `
})
export class AlbumComponent  {

    public album:IAlbum;
    public albumImageSize:AlbumImageSize = AlbumImageSize.LARGE;

    constructor(private musicService:MusicService, private routeParams:RouteParams) {
        this.getAlbumInfo(this.routeParams.get("id"));
    }

    getAlbumInfo(id:string) {
        this.musicService.albumInfo(id)
            .subscribe(album => {
                this.album = album;
            })
    }
}
