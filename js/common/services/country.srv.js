System.register(['angular2/core', 'rxjs/Observable', "rxjs/add/operator/map", 'angular2/http', '../models/country'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Observable_1, http_1, country_1;
    var CountryService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (country_1_1) {
                country_1 = country_1_1;
            }],
        execute: function() {
            CountryService = (function () {
                function CountryService(http) {
                    this.http = http;
                }
                CountryService.prototype.getCountries = function () {
                    var _this = this;
                    return new Observable_1.Observable(function (observable) {
                        _this.http.get("https://restcountries.eu/rest/v1/all")
                            .map(function (res) {
                            res = res.json();
                            var countries = [];
                            res.forEach(function (data) {
                                countries.push(new country_1.Country(data));
                            });
                            return countries;
                        })
                            .subscribe(function (countries) {
                            observable.next(countries);
                        });
                    });
                };
                CountryService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CountryService);
                return CountryService;
            }());
            exports_1("CountryService", CountryService);
        }
    }
});
//# sourceMappingURL=country.srv.js.map