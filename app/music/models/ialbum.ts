import {ISong} from './isong';

export interface IAlbum {
    name : string;
    artist : string;
    id : number;
    url : string;
    images?:Array<string>;
    songs?:Array<ISong>;
    getImage(size:AlbumImageSize):string;
}

export enum AlbumImageSize {
    LARGE  = <any>"large",
    MEDIUM = <any>"medium",
    SMALL  = <any>"small"
}
