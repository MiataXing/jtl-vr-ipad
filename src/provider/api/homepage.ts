import { MAIN_SITE_URL, SERV_PROTOCOL } from '../constants/contants';

const Base_Url = SERV_PROTOCOL.HTTP + MAIN_SITE_URL;

export const Homepage_Router = {
    GetHomepageData: {
        path: Base_Url + 'mobile/course_api/home',
        method: 'get',
        params_nessessary: false
    }
}