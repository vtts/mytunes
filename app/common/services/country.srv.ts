import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import "rxjs/add/operator/map";
import {Http} from 'angular2/http';

import {ICountry} from '../models/icountry';
import {Country} from '../models/country';

@Injectable()
export class CountryService {

    constructor(private http:Http) {

    }

    getCountries() {
        return new Observable(observable => {
            this.http.get("https://restcountries.eu/rest/v1/all")
                .map(res => {
                    res = res.json();
                    var countries:Array<ICountry> = [];
                    res.forEach(data => {
                        countries.push(new Country(data));
                    });
                    return countries;
                })
                .subscribe(countries => {
                    observable.next(countries);
                })
        });
    }
}
