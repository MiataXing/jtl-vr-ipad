import { MAIN_SITE_URL, SERV_PROTOCOL, CURRENT_LINK_ADD } from '../constants/contants';

const Base_Url = SERV_PROTOCOL.HTTP + MAIN_SITE_URL;

export const Course_Router = {
    GetCategoryTree: {
        path: Base_Url + 'mobile/course_api/cat_tree',
        method: 'get',
        params_nessessary: false
    },
    GetConfigInfo: {
        path: Base_Url + 'mobile/course_api/config',
        method: 'get',
        params_nessessary: true
    },
    GetCouseList: {
        path: Base_Url + 'mobile/course_api/course_list',
        method: 'get',
        params_nessessary: true
    },
}