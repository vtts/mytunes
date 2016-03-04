import {ICountry} from './icountry';

export class Country implements ICountry {

    alpha2Code:string;
    name:string;

    constructor(rawData:any) {
        this.alpha2Code = rawData["alpha2Code"];
        this.name = rawData["name"];
    }
}
