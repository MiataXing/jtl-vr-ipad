import { MAIN_SITE_URL, SERV_PROTOCOL, CURRENT_LINK_ADD } from '../constants/contants';

const Base_Url = SERV_PROTOCOL.HTTP + MAIN_SITE_URL;

export const User_Router = {
    Login: {
        path: Base_Url + 'login?referer=' + CURRENT_LINK_ADD,
        method: 'get',
        params_nessessary: false
    },
    GetUserInfo: {
        path: Base_Url + 'mobile/passport_api/login_user',
        method: 'get',
        params_nessessary: false
    }
}