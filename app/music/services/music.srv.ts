import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {IAlbum} from '../models/ialbum';
import {Album} from '../models/album';
import {ISong} from '../models/isong';
import {Song} from '../models/song';
import "rxjs/add/operator/map";
import {IPager} from '../../common/models/ipager';
import {Pager} from '../../common/models/pager';

@Injectable()
export class MusicService {

    private apiId = "34f4b6414a86a36295f43db1600772d0";

    constructor(private http:Http) {

    }

    albumsSearch(query:string, page:number = 0) {
        return new Observable(observable => {
            let pageParam:string = page + 1;
           let url = " http://ws.audioscrobbler.com/2.0/?method=album.search&album=" + query + "&format=json&api_key=" + this.apiId + "&page=" + pageParam;
            this.http.get(url)
                .map(res => {
                    res = res.json();
                    var albums:Array<IAlbum> = [];
                    let results = res.results;
                    results.albummatches.album.forEach(data => {
                        albums.push(new Album(data["mbid"], data["name"], data["artist"], data["url"], data["image"]));
                    });
                    let pager:IPager = new Pager(<number>results["opensearch:itemsPerPage"], <number>results["opensearch:startIndex"], <number>results["opensearch:totalResults"]);
                    return {
                        albums : albums,
                        pager  : pager
                    }
                })
                .subscribe(res => {
                    observable.next(res);
                });
        });
    }

    albumInfo(id:string) {
        return new Observable(observable => {
            let url = "http://ws.audioscrobbler.com/2.0/?method=album.getInfo&mbid=" + id + "&format=json&api_key=" + this.apiId;
            this.http.get(url)
                .map(res => {
                    res = res.json();
                    let  data = res.album;

                    var songs:Array<ISong> = [];
                    data.tracks.track.forEach(data => {
                        songs.push(new Song(data.name));
                    });

                    let album:IAlbum = new Album(data["mbid"], data["name"], data["artist"], data["url"], data["image"], songs);
                    return album;
                })
                .subscribe(res => {
                    observable.next(res);
                })
        });
    }

}
