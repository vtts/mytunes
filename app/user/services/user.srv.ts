import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';

import {User} from '../models/user';


@Injectable()
export class UserService {

    private _myFirebaseRef;

    constructor() {
        this._myFirebaseRef = new Firebase("mytunes.firebaseIO.com");
    }

    getUser():Observable {
        return new Observable(observable => {
            this._myFirebaseRef.onAuth(authData => {
               let user;
                if (authData) {
                    user = new User(authData);
                }
                observable.next(user);
            });
        });
    }

    login(email:string, password:string):Observable {
        return new Observable(observable => {
            this._myFirebaseRef.authWithPassword({
               email : email,
                password : password
            }, (error, authData) => {
                if (error) {
                    observable.error(error);
                } else {
                    observable.next(new User(authData));
                }
            })
        });
    }

    register(email:string, password:string):Observable {
        return new Observable(observable => {
            this._myFirebaseRef.createUser({
                email : email,
                password : password
            }, (error, userData) => {
                if (error) {
                    observable.error(error);
                }  else {
                    this.login(email, password)
                        .subscribe(user => {
                            observable.next(user);
                        });
                }
            });
        });
    }

    logout():Observable {
        return new Observable(observable => {
            this._myFirebaseRef.unauth()
            observable.next();
        });
    }

}
