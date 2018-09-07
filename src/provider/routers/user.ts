import { Injectable } from '@angular/core';
import { HttpService } from '../http-provider/http-provider'
import { User_Router } from '../api/user';
import { Userdata } from '../../viewmodels/UserData';

@Injectable()

export class UserService {

    public static currentUser: Userdata;
    public static loggedinStatus: boolean;

    constructor(public httpService: HttpService) {}

    public jumpToLoginPage(params?) {
        window.location.href = User_Router.Login.path;
    }

    public getUserData(params?) {
        return this.httpService.get(User_Router.GetUserInfo.path, params, {});
    }

}