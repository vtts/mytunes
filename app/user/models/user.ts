import {IUser} from './iuser';

export class User implements IUser {

    public email:string;
    public password:string;
    public username:string;
    public birthday:Date;
    public country:string;

    constructor(authData:any) {
        this.email = authData.email;
        this.password = authData.password;
    }
}
