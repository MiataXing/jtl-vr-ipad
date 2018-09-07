import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Lang } from '../../lang/lang';
// import { HttpClient } from '@angular/common/http';

@Injectable()

export class HttpService {

    constructor(private http: Http) { }

    public get(url: string, params: any, headers: any) {
        if (!params) {
            return this.http.get(url, new RequestOptions({ headers: headers }))
                .toPromise()
                .then(res => this.handleSuccess(res.json()))
                .catch(err => this.handleError(err));
        }
    }

    public post(url: string, params: any, headers: any) {
        return this.http.post(url, params, new RequestOptions({ headers: headers }))
            .toPromise()
            .then(res => this.handleSuccess(res.json()))
            .catch(err => this.handleError(err));
    }

    public postWithQueryStr(url: string, params: any, headers: any) {
        return this.http.post(url + this.toQueryString(params), params, new RequestOptions({ headers: headers }))
            .toPromise()
            .then(res => this.handleSuccess(res.json()))
            .catch(err => this.handleError(err));
    }

    public postWithBodyStr(url: string, params: any, headers: any) {
        return this.http.post(url, this.toBodyString(params), new RequestOptions({ headers: headers }))
            .toPromise()
            .then(res => this.handleSuccess(res.json()))
            .catch(err => this.handleError(err));
    }

    private handleSuccess(res) {
        return res;
    }

    private handleError(err: Response | any) {
        let msg = Lang.zh.service.request_failed;

        switch (err.status) {
            case '0':
                msg = Lang.zh.service.link_address_error;
                break;
            case '400':
                msg = Lang.zh.service.parameters_invalid;
                break;
            case '401':
                msg = Lang.zh.service.not_authorized;
                break;
            case '404':
                msg = Lang.zh.service.object_not_found;
                break;
            case '408':
                msg = Lang.zh.service.request_timeout + '，' + Lang.zh.service.connection_check;
                break;
            case '500':
                msg = Lang.zh.service.unknow_server_error;
                break;
            default:
                break;
        }

        return msg;
    }

    private toQueryString(obj) {
        return '?' + this.paramsToString(obj).join('&');
    }

    private toBodyString(obj) {
        return this.paramsToString(obj).join('&');
    }

    private paramsToString(obj) {
        let ret = [];
        for (let key in obj) {
            key = encodeURIComponent(key);
            let values = obj[key];
            if (values && values.constructor == Array) {//数组
                let queryValues = [];
                for (let i = 0, len = values.length, value; i < len; i++) {
                    value = values[i];
                    queryValues.push(this.toQueryPair(key, value));
                }
                ret = ret.concat(queryValues);
            } else { //字符串
                ret.push(this.toQueryPair(key, values));
            }
        }
        return ret;
    }

    private toQueryPair(key, value) {
        if (typeof value == 'undefined') {
            return key;
        }
        return key + '=' + encodeURIComponent(value === null ? '' : String(value));
    }

}