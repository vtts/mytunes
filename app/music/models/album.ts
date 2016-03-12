import {IAlbum, AlbumImageSize} from './ialbum';
import {ISong} from './isong';

export class Album implements IAlbum {

    constructor(public id:number, public name:string, public artist:string, public url:string, public images?:Array<any> = [], public songs?:Array<ISong> = []) {

    }

    getImage(size:AlbumImageSize):string {
        let image = this.images.find((image) => {
            if (image["size"] == size) {
                return image;
            }
        });
        return image ? image["#text"] : "";
    }
}
