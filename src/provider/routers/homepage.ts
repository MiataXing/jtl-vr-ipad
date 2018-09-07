import { Injectable } from '@angular/core';
import { HttpService } from '../http-provider/http-provider'
import { Homepage_Router } from '../api/homepage';

@Injectable()

export class HomepageService {
    constructor(public httpService: HttpService) {}

    getHomepageData(params?) {
        return this.httpService.get(Homepage_Router.GetHomepageData.path, params, {});
    }
}