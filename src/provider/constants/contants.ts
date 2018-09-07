const SERV_URL = {
    // LOCAL: '127.0.0.1:3010/',
    LOCAL: window.location.href,
    // DEV: '192.168.0.5:80/',
    DEV: '192.168.0.21:80/',
    BASE: 'www.baidu.com/',
    PROD: 'www.baidu.com/'
};

export const SERV_PROTOCOL = {
    HTTP: 'http://',
    HTTPS: 'https://'
}

export const CURRENT_LINK_ADD = SERV_URL.LOCAL;

export const MAIN_SITE_URL = SERV_URL.DEV;