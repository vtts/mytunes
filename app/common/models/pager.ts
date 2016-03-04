import {IPager} from './ipager';

export class Pager implements IPager {

    public pages:number = 0;

    constructor(public itemsPerPage:number, public startIndex:number, public totalResults:number, private maxPages:number = 10) {
        let realMaxPages = Math.ceil(totalResults/itemsPerPage);
        if (realMaxPages <= maxPages) {
            this.pages = realMaxPages;
        } else {
            this.pages = maxPages;
        }
    }
}
