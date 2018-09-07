import { Injectable } from '@angular/core';
import { HttpService } from '../http-provider/http-provider'
import { Course_Router } from '../api/course';


@Injectable()

export class CourseService {
    constructor(public httpService: HttpService) {}

    getCategoryTree(params?) {
        return this.httpService.get(Course_Router.GetCategoryTree.path, params, {});
    }

    getConfigInfo(params) {
        return this.httpService.get(Course_Router.GetConfigInfo.path, params, {});
    }

    getCouseList(params) {
        return this.httpService.get(Course_Router.GetCouseList.path, params, {});
    }

}
